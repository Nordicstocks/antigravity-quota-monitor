const vscode = require('vscode');
const { execSync } = require('child_process');
const https = require('https');
const { generateDashboardHtml } = require('./dashboard');
const { getI18n, translations } = require('./i18n');

let statusBarItem;
let pollTimer = null;
let cachedPort = null;
let cachedCsrfToken = null;
let cachedPid = null;
let lastData = null;
let currentPanel = null;

/**
 * Formats time remaining until reset into a localized compact string.
 */
function formatTimeRemaining(isoDateStr, t) {
  if (!isoDateStr) return t.unlimited;
  const target = new Date(isoDateStr).getTime();
  const diff = target - Date.now();
  if (diff <= 0) return t.ready;

  const mins = Math.floor(diff / 60000);
  const hours = Math.floor(mins / 60);
  const remMins = mins % 60;
  const days = Math.floor(hours / 24);
  const remHours = hours % 24;

  if (days > 0) return `${days}${t.days} ${remHours}${t.hours}`;
  if (hours > 0) return `${hours}${t.hours} ${remMins}${t.mins}`;
  return `${mins}${t.mins}`;
}

/**
 * Generates a visual progress bar with colored emojis or block styles.
 */
function makeProgressBar(pct, width = 5, style = 'colored', warnThreshold = 30, critThreshold = 15) {
  if (pct === null || pct === undefined || isNaN(pct)) return '⬜'.repeat(width);
  const filled = Math.min(width, Math.max(0, Math.round((pct / 100) * width)));
  const empty = width - filled;

  if (style === 'colored') {
    let fillChar = '🟩';
    if (pct <= critThreshold) fillChar = '🟥';
    else if (pct <= warnThreshold) fillChar = '🟨';
    return fillChar.repeat(filled) + '⬜'.repeat(empty);
  }

  if (style === 'parallelograms') {
    return '▰'.repeat(filled) + '▱'.repeat(empty);
  }
  if (style === 'squares') {
    return '[' + '■'.repeat(filled) + '□'.repeat(empty) + ']';
  }
  if (style === 'shades') {
    return '[' + '▓'.repeat(filled) + '░'.repeat(empty) + ']';
  }
  return '[' + '█'.repeat(filled) + '░'.repeat(empty) + ']';
}

/**
 * Returns a traffic-light indicator based on percentage.
 */
function getStatusDot(pct, warnThreshold = 30, critThreshold = 15) {
  if (pct === null || pct === undefined || isNaN(pct)) return '⚪';
  if (pct <= critThreshold) return '🔴';
  if (pct <= warnThreshold) return '🟡';
  return '🟢';
}

/**
 * Discovers the running Antigravity process and its CSRF token.
 * Supports both modern 'agy' and legacy 'language_server'.
 */
function findAntigravityProcess() {
  const isWindows = process.platform === 'win32';

  if (isWindows) {
    try {
      const ps = execSync(
        'powershell -NoProfile -Command "Get-CimInstance Win32_Process | Where-Object { ($_.CommandLine -like \'*agy*\' -or $_.CommandLine -like \'*language_server*\') -and $_.CommandLine -like \'*csrf_token*\' } | Select-Object ProcessId, CommandLine | ConvertTo-Json -Compress"',
        { encoding: 'utf-8', timeout: 5000 }
      );
      if (!ps || !ps.trim() || ps.trim() === 'null') return null;
      const parsed = JSON.parse(ps.trim());
      const entries = Array.isArray(parsed) ? parsed : [parsed];
      for (const entry of entries) {
        const cmd = entry.CommandLine || '';
        const match = cmd.match(/--csrf_token[=\s]+([a-f0-9-]+)/i);
        if (match) {
          return { pid: String(entry.ProcessId), csrfToken: match[1] };
        }
      }
    } catch (err) {
      console.warn('[Antigravity Quota] Windows process search failed:', err.message);
    }
    return null;
  }

  // macOS / Linux
  try {
    const ps = execSync('ps aux', { encoding: 'utf-8', timeout: 4000 });
    const lines = ps.split('\n');
    for (const line of lines) {
      if ((line.includes('agy') || line.includes('language_server')) && line.includes('--csrf_token')) {
        const pidMatch = line.trim().match(/^\S+\s+(\d+)/);
        const csrfMatch = line.match(/--csrf_token[=\s]+([a-f0-9-]+)/i);
        if (pidMatch && csrfMatch) {
          return { pid: pidMatch[1], csrfToken: csrfMatch[1] };
        }
      }
    }
  } catch (err) {
    console.warn('[Antigravity Quota] Unix process search failed:', err.message);
  }
  return null;
}

/**
 * Gets listening ports for a specific PID.
 */
function getListeningPorts(pid) {
  const isWindows = process.platform === 'win32';
  const ports = [];

  try {
    if (isWindows) {
      const netstat = execSync(`netstat -ano | findstr "${pid}" | findstr "LISTENING"`, { encoding: 'utf-8', timeout: 4000 });
      const regex = /(?:127\.0\.0\.1|0\.0\.0\.0|\[::1?\]):(\d+)\s+\S+\s+LISTENING/gi;
      let m;
      while ((m = regex.exec(netstat)) !== null) {
        const p = parseInt(m[1], 10);
        if (!ports.includes(p)) ports.push(p);
      }
    } else if (process.platform === 'darwin') {
      const lsof = execSync(`lsof -iTCP -sTCP:LISTEN -n -P -p ${pid}`, { encoding: 'utf-8', timeout: 4000 });
      const regex = /:(\d+)\s+\(LISTEN\)/g;
      let m;
      while ((m = regex.exec(lsof)) !== null) {
        const p = parseInt(m[1], 10);
        if (!ports.includes(p)) ports.push(p);
      }
    } else {
      // Linux
      const ss = execSync(`ss -tlnp 2>/dev/null | grep "pid=${pid}" || lsof -iTCP -sTCP:LISTEN -n -P -p ${pid} 2>/dev/null`, { encoding: 'utf-8', timeout: 4000 });
      const regex = /:(\d+)\s+/g;
      let m;
      while ((m = regex.exec(ss)) !== null) {
        const p = parseInt(m[1], 10);
        if (!ports.includes(p)) ports.push(p);
      }
    }
  } catch (err) {
    // transient
  }

  return ports;
}

/**
 * Queries the LanguageServerService GetUserStatus endpoint on a given port.
 */
function queryUserStatus(port, csrfToken) {
  return new Promise((resolve, reject) => {
    const postData = JSON.stringify({});
    const options = {
      hostname: '127.0.0.1',
      port: port,
      path: '/exa.language_server_pb.LanguageServerService/GetUserStatus',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(postData),
        'X-Codeium-Csrf-Token': csrfToken,
        'Connect-Protocol-Version': '1'
      },
      rejectUnauthorized: false,
      timeout: 2500
    };

    const req = https.request(options, (res) => {
      let body = '';
      res.setEncoding('utf-8');
      res.on('data', (chunk) => { body += chunk; });
      res.on('end', () => {
        if (res.statusCode === 200) {
          try {
            const data = JSON.parse(body);
            resolve(data);
          } catch (e) {
            reject(new Error('Invalid JSON from Antigravity server'));
          }
        } else {
          reject(new Error(`Server returned HTTP ${res.statusCode}`));
        }
      });
    });

    req.on('timeout', () => {
      req.destroy();
      reject(new Error('Connection timed out'));
    });

    req.on('error', (err) => {
      reject(err);
    });

    req.write(postData);
    req.end();
  });
}

/**
 * Main quota fetching routine with fast caching & fallback discovery.
 */
async function fetchQuotaData() {
  if (cachedPort && cachedCsrfToken) {
    try {
      const data = await queryUserStatus(cachedPort, cachedCsrfToken);
      return data;
    } catch (err) {
      cachedPort = null;
      cachedCsrfToken = null;
    }
  }

  const proc = findAntigravityProcess();
  if (!proc) {
    throw new Error('Antigravity process not found. Is Antigravity running?');
  }

  cachedPid = proc.pid;
  cachedCsrfToken = proc.csrfToken;

  const ports = getListeningPorts(proc.pid);
  if (ports.length === 0) {
    throw new Error(`Antigravity process (PID ${proc.pid}) has no listening ports.`);
  }

  for (const port of ports) {
    try {
      const data = await queryUserStatus(port, cachedCsrfToken);
      cachedPort = port;
      return data;
    } catch (err) {
      // probe next
    }
  }

  throw new Error(`Could not connect to any port [${ports.join(', ')}].`);
}

/**
 * Normalizes model configs into distinct families.
 */
function processModelConfigs(clientConfigs = []) {
  const families = new Map();

  for (const m of clientConfigs) {
    if (!m.quotaInfo) continue;

    let familyKey = m.label;
    if (m.label.includes('Gemini 3.8 Flash')) familyKey = 'Gemini 3.8 Flash';
    else if (m.label.includes('Gemini 4 Argon')) familyKey = 'Gemini 4 Argon';
    else if (m.label.includes('Claude Opus')) familyKey = 'Claude Opus 5.5';
    else if (m.label.includes('Claude Sonnet')) familyKey = 'Claude Sonnet 5.5';
    else if (m.label.includes('GPT-OSS')) familyKey = 'GPT-OSS 120B';

    const pct = m.quotaInfo.remainingFraction !== undefined
      ? Math.round(m.quotaInfo.remainingFraction * 100)
      : null;

    if (!families.has(familyKey)) {
      families.set(familyKey, {
        name: familyKey,
        label: m.label,
        percentage: pct,
        resetTime: m.quotaInfo.resetTime,
        modelId: m.modelId,
        supportsImages: m.supportsImages
      });
    } else {
      const existing = families.get(familyKey);
      if (existing.percentage === null && pct !== null) {
        existing.percentage = pct;
        existing.resetTime = m.quotaInfo.resetTime;
      }
    }
  }

  return Array.from(families.values());
}

/**
 * Updates status bar widget UI with white text and colored progress bars.
 */
function updateStatusBar(data) {
  const config = vscode.workspace.getConfiguration('antigravityQuota');
  const displayMode = config.get('displayMode', 'compact');
  const warnThreshold = config.get('warnThreshold', 30);
  const critThreshold = config.get('criticalThreshold', 15);
  const barStyle = config.get('barStyle', 'colored');
  const langCode = config.get('language', 'auto');
  const t = getI18n(langCode);

  const rawModels = data?.userStatus?.cascadeModelConfigData?.clientModelConfigs || [];
  const models = processModelConfigs(rawModels);
  const planInfo = data?.userStatus?.planStatus?.planInfo;
  const userTier = data?.userStatus?.userTier;
  const availableCredits = data?.userStatus?.planStatus?.availablePromptCredits;
  const monthlyCredits = planInfo?.monthlyPromptCredits;
  const userEmail = data?.userStatus?.email || '';

  // Determine lowest percentage
  let lowestPct = 100;
  for (const m of models) {
    if (m.percentage !== null && m.percentage < lowestPct) {
      lowestPct = m.percentage;
    }
  }

  const flash = models.find(m => m.name.includes('Flash'));
  const claude = models.find(m => m.name.includes('Claude') || m.name.includes('Opus'));

  // Build progress bars
  const gBar = flash && flash.percentage !== null ? makeProgressBar(flash.percentage, 5, barStyle, warnThreshold, critThreshold) : '';
  const cBar = claude && claude.percentage !== null ? makeProgressBar(claude.percentage, 5, barStyle, warnThreshold, critThreshold) : '';
  const lowestBar = makeProgressBar(lowestPct, 6, barStyle, warnThreshold, critThreshold);

  // Status text
  let statusText = '';
  if (displayMode === 'compact') {
    const gText = flash && flash.percentage !== null ? `G: ${flash.percentage}% ${gBar}` : '';
    const cText = claude && claude.percentage !== null ? `C: ${claude.percentage}% ${cBar}` : '';
    const parts = [gText, cText].filter(Boolean);
    statusText = parts.length > 0 ? parts.join(' | ') : `${t.statusQuota}: ${lowestPct}% ${lowestBar}`;
  } else if (displayMode === 'gemini') {
    statusText = flash && flash.percentage !== null ? `Gemini: ${flash.percentage}% ${makeProgressBar(flash.percentage, 8, barStyle, warnThreshold, critThreshold)}` : `${t.statusQuota}: ${lowestPct}% ${lowestBar}`;
  } else if (displayMode === 'claude') {
    statusText = claude && claude.percentage !== null ? `Claude: ${claude.percentage}% ${makeProgressBar(claude.percentage, 8, barStyle, warnThreshold, critThreshold)}` : `${t.statusQuota}: ${lowestPct}% ${lowestBar}`;
  } else {
    statusText = `${t.statusQuota}: ${lowestPct}% ${lowestBar}`;
  }

  statusBarItem.text = `$(dashboard) ${statusText}`;

  // TEXT IS ALWAYS PURE HIGH-CONTRAST WHITE on Antigravity blue status bar!
  statusBarItem.color = '#ffffff';

  // Apply warning/error background if low
  if (lowestPct <= critThreshold) {
    statusBarItem.backgroundColor = new vscode.ThemeColor('statusBarItem.errorBackground');
  } else if (lowestPct <= warnThreshold) {
    statusBarItem.backgroundColor = new vscode.ThemeColor('statusBarItem.warningBackground');
  } else {
    statusBarItem.backgroundColor = undefined;
  }

  // Compose Rich Markdown Tooltip
  const md = new vscode.MarkdownString();
  md.isTrusted = true;
  md.supportHtml = true;

  md.appendMarkdown(`### ⚡ Antigravity AI Quota Monitor\n\n`);
  if (userTier?.name || userEmail) {
    md.appendMarkdown(`👤 **${t.account}:** ${userTier?.name || 'Pro'} *(${userEmail})*\n\n`);
  }
  if (availableCredits !== undefined && monthlyCredits !== undefined) {
    md.appendMarkdown(`💳 **${t.promptCredits}:** ${availableCredits.toLocaleString()} / ${monthlyCredits.toLocaleString()}\n\n`);
  }

  md.appendMarkdown(`---\n\n`);
  md.appendMarkdown(`| ${t.modelsTitle} | ${t.quotaCapacity} | ${t.resetTime} |\n`);
  md.appendMarkdown(`| :--- | :--- | :--- |\n`);

  for (const m of models) {
    const dot = getStatusDot(m.percentage, warnThreshold, critThreshold);
    const bar = makeProgressBar(m.percentage, 7, barStyle, warnThreshold, critThreshold);
    const pctStr = m.percentage !== null ? `**${m.percentage}%** \`${bar}\`` : `*${t.unlimited}*`;
    const resetStr = formatTimeRemaining(m.resetTime, t);
    md.appendMarkdown(`| ${dot} ${m.name} | ${pctStr} | ${resetStr} |\n`);
  }

  md.appendMarkdown(`\n---\n`);
  md.appendMarkdown(`*${t.clickForMenu}*`);

  statusBarItem.tooltip = md;
  statusBarItem.show();

  if (currentPanel) {
    currentPanel.webview.html = generateDashboardHtml(data, langCode);
  }
}

/**
 * Handles error state in status bar.
 */
function showErrorState(err) {
  const config = vscode.workspace.getConfiguration('antigravityQuota');
  const t = getI18n(config.get('language', 'auto'));

  statusBarItem.text = `$(warning) ${t.statusQuota}: ${t.statusError}`;
  statusBarItem.backgroundColor = new vscode.ThemeColor('statusBarItem.warningBackground');
  statusBarItem.color = '#ffffff';
  statusBarItem.tooltip = `Antigravity Quota Monitor:\n${err.message}\n\n${t.clickForMenu}`;
  statusBarItem.show();
}

/**
 * Refresh routine.
 */
async function refreshQuota(silent = true) {
  const config = vscode.workspace.getConfiguration('antigravityQuota');
  const t = getI18n(config.get('language', 'auto'));

  try {
    const data = await fetchQuotaData();
    lastData = data;
    updateStatusBar(data);
    if (!silent) {
      vscode.window.showInformationMessage(t.refreshSuccess);
    }
  } catch (err) {
    showErrorState(err);
    if (!silent) {
      vscode.window.showErrorMessage(`${t.refreshError} ${err.message}`);
    }
  }
}

/**
 * Opens or focuses the visual Webview dashboard.
 */
function openDashboard() {
  const config = vscode.workspace.getConfiguration('antigravityQuota');
  const langCode = config.get('language', 'auto');
  const t = getI18n(langCode);

  if (currentPanel) {
    currentPanel.reveal(vscode.ViewColumn.One);
    if (lastData) currentPanel.webview.html = generateDashboardHtml(lastData, langCode);
    return;
  }

  currentPanel = vscode.window.createWebviewPanel(
    'antigravityQuotaDashboard',
    `📊 ${t.dashboardTitle}`,
    vscode.ViewColumn.One,
    {
      enableScripts: true,
      retainContextWhenHidden: true
    }
  );

  if (lastData) {
    currentPanel.webview.html = generateDashboardHtml(lastData, langCode);
  } else {
    refreshQuota(true).then(() => {
      if (lastData && currentPanel) {
        currentPanel.webview.html = generateDashboardHtml(lastData, langCode);
      }
    });
  }

  currentPanel.webview.onDidReceiveMessage(message => {
    if (message.command === 'refresh') {
      refreshQuota(false);
    }
  });

  currentPanel.onDidDispose(() => {
    currentPanel = null;
  });
}

/**
 * Compact QuickPick menu without vertical scrolling.
 */
async function showQuickMenu() {
  if (!lastData) {
    await refreshQuota(false);
    if (!lastData) return;
  }

  const config = vscode.workspace.getConfiguration('antigravityQuota');
  const langCode = config.get('language', 'auto');
  const barStyle = config.get('barStyle', 'colored');
  const t = getI18n(langCode);

  const rawModels = lastData?.userStatus?.cascadeModelConfigData?.clientModelConfigs || [];
  const models = processModelConfigs(rawModels);
  const userTier = lastData?.userStatus?.userTier;
  const userEmail = lastData?.userStatus?.email || '';

  const items = [];

  // 1. Top action: open visual dashboard
  items.push({
    label: `${t.openDashboard}`,
    description: t.openDashboardDesc,
    action: 'dashboard'
  });

  // 2. Compact Model List (NO multi-line details to avoid vertical scrollbar!)
  items.push({ kind: vscode.QuickPickItemKind.Separator, label: `${userTier?.name || 'Pro'} (${userEmail})` });

  for (const m of models) {
    const dot = getStatusDot(m.percentage);
    const bar = makeProgressBar(m.percentage, 5, barStyle);
    const pctStr = m.percentage !== null ? `${m.percentage}%` : 'N/A';
    const resetStr = formatTimeRemaining(m.resetTime, t);

    items.push({
      label: `${dot} ${m.name}: ${pctStr}  ${bar}`,
      description: `⏱️ ${t.resetsIn}: ${resetStr}`
    });
  }

  // 3. Compact Actions
  items.push({ kind: vscode.QuickPickItemKind.Separator, label: t.actionsHeader });

  items.push({
    label: `${t.refreshNow}`,
    description: t.refreshNowDesc,
    action: 'refresh'
  });

  items.push({
    label: `${t.selectStyle}`,
    description: t.selectStyleDesc,
    action: 'barStyle'
  });

  items.push({
    label: `${t.selectMode}`,
    description: t.selectModeDesc,
    action: 'displayMode'
  });

  items.push({
    label: `${t.selectLang}`,
    description: t.selectLangDesc,
    action: 'language'
  });

  const selected = await vscode.window.showQuickPick(items, {
    placeHolder: t.menuPlaceholder,
    title: t.menuTitle
  });

  if (!selected) return;

  if (selected.action === 'dashboard') {
    openDashboard();
  } else if (selected.action === 'refresh') {
    await refreshQuota(false);
  } else if (selected.action === 'displayMode') {
    await selectDisplayMode();
  } else if (selected.action === 'barStyle') {
    await selectBarStyle();
  } else if (selected.action === 'language') {
    await selectLanguage();
  }
}

/**
 * Language selection dialog.
 */
async function selectLanguage() {
  const currentConfig = vscode.workspace.getConfiguration('antigravityQuota');
  const t = getI18n(currentConfig.get('language', 'auto'));

  const langOptions = [
    { label: '🌐 Automaatne / System Default', value: 'auto' },
    { label: '🇬🇧 English', value: 'en' },
    { label: '🇪🇪 Eesti keel', value: 'et' },
    { label: '🇩🇪 Deutsch', value: 'de' },
    { label: '🇫🇮 Suomi', value: 'fi' },
    { label: '🇪🇸 Español', value: 'es' },
    { label: '🇫🇷 Français', value: 'fr' }
  ];

  const chosen = await vscode.window.showQuickPick(langOptions, {
    placeHolder: 'Vali keel / Select Language / Sprache wählen / Valitse kieli'
  });

  if (chosen) {
    await currentConfig.update('language', chosen.value, vscode.ConfigurationTarget.Global);
    const newT = getI18n(chosen.value);
    if (lastData) updateStatusBar(lastData);
    vscode.window.showInformationMessage(`${newT.langUpdated}`);
  }
}

/**
 * Bar style selector.
 */
async function selectBarStyle() {
  const config = vscode.workspace.getConfiguration('antigravityQuota');
  const t = getI18n(config.get('language', 'auto'));

  const styles = [
    { label: '🟩 Värvilised klotsid (🟩🟩🟩🟩⬜ / 🟨 / 🟥)', value: 'colored', description: 'Roheline/Kollane/Punane automaatne värv' },
    { label: '█ Klassikalised plokid ([████░])', value: 'blocks', description: 'Kompaktne monospace plokk' },
    { label: '▰ Rööpkülikud (▰▰▰▰▱)', value: 'parallelograms', description: 'Stiilsed kaldkriipsud' },
    { label: '■ Ruudud ([■■■■□])', value: 'squares', description: 'Monokroomsed ruudud' },
    { label: '▓ Varjundid ([▓▓▓▓░])', value: 'shades', description: 'Varjutatud ruudustik' }
  ];

  const chosen = await vscode.window.showQuickPick(styles, {
    placeHolder: t.selectStyle
  });

  if (chosen) {
    await config.update('barStyle', chosen.value, vscode.ConfigurationTarget.Global);
    if (lastData) updateStatusBar(lastData);
    vscode.window.showInformationMessage(`${t.styleUpdated} ${chosen.label}`);
  }
}

/**
 * Display mode selector.
 */
async function selectDisplayMode() {
  const config = vscode.workspace.getConfiguration('antigravityQuota');
  const t = getI18n(config.get('language', 'auto'));

  const modes = [
    { label: 'Kompaktne (G: 64% 🟩🟩🟩⬜⬜ | C: 84% 🟩🟩🟩🟩⬜)', value: 'compact', description: 'Kuvab peamised mudelid koos värviliste ribadega' },
    { label: 'Madalaim kvoot (Quota: 64% 🟩🟩🟩⬜⬜)', value: 'lowest', description: 'Kuvab mudelit, millel on kõige vähem ressurssi järel' },
    { label: 'Ainult Gemini (Gemini: 64% 🟩🟩🟩⬜⬜)', value: 'gemini', description: 'Kuvab Gemini mudelipere kvooti ja riba' },
    { label: 'Ainult Claude (Claude: 84% 🟩🟩🟩🟩⬜)', value: 'claude', description: 'Kuvab Claude mudelipere kvooti ja riba' }
  ];

  const chosen = await vscode.window.showQuickPick(modes, {
    placeHolder: t.selectMode
  });

  if (chosen) {
    await config.update('displayMode', chosen.value, vscode.ConfigurationTarget.Global);
    if (lastData) updateStatusBar(lastData);
    vscode.window.showInformationMessage(`${t.modeUpdated} ${chosen.label}`);
  }
}

/**
 * Extension activation.
 */
function activate(context) {
  console.log('[Antigravity Quota Monitor] Activating...');

  statusBarItem = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Right, 100);
  statusBarItem.command = 'antigravityQuota.showMenu';
  statusBarItem.text = '$(sync~spin) Quota...';
  statusBarItem.color = '#ffffff';
  statusBarItem.show();
  context.subscriptions.push(statusBarItem);

  context.subscriptions.push(
    vscode.commands.registerCommand('antigravityQuota.showMenu', showQuickMenu),
    vscode.commands.registerCommand('antigravityQuota.showDashboard', openDashboard),
    vscode.commands.registerCommand('antigravityQuota.refresh', () => refreshQuota(false)),
    vscode.commands.registerCommand('antigravityQuota.selectDisplayMode', selectDisplayMode),
    vscode.commands.registerCommand('antigravityQuota.selectBarStyle', selectBarStyle),
    vscode.commands.registerCommand('antigravityQuota.selectLanguage', selectLanguage)
  );

  const config = vscode.workspace.getConfiguration('antigravityQuota');
  let intervalSec = config.get('pollingInterval', 60);
  if (intervalSec < 15) intervalSec = 15;

  refreshQuota(true);

  pollTimer = setInterval(() => {
    refreshQuota(true);
  }, intervalSec * 1000);

  context.subscriptions.push(
    vscode.workspace.onDidChangeConfiguration(e => {
      if (e.affectsConfiguration('antigravityQuota')) {
        if (lastData) updateStatusBar(lastData);
      }
    })
  );
}

/**
 * Extension deactivation.
 */
function deactivate() {
  if (pollTimer) {
    clearInterval(pollTimer);
    pollTimer = null;
  }
  if (currentPanel) {
    currentPanel.dispose();
  }
}

module.exports = {
  activate,
  deactivate
};
