/**
 * Antigravity Quota Monitor - Visual Webview Dashboard
 * Fully responsive, compact zero-scroll layout with multi-language support.
 */

const { getI18n } = require('./i18n');

function generateDashboardHtml(data, langCode = 'auto') {
  const t = getI18n(langCode);
  const userStatus = data?.userStatus || {};
  const userTier = userStatus?.userTier || {};
  const planInfo = userStatus?.planStatus?.planInfo || {};
  const availableCredits = userStatus?.planStatus?.availablePromptCredits ?? 0;
  const monthlyCredits = planInfo?.monthlyPromptCredits ?? 50000;

  const rawModels = userStatus?.cascadeModelConfigData?.clientModelConfigs || [];

  // Group unique models
  const modelMap = new Map();
  for (const m of rawModels) {
    if (!m.quotaInfo) continue;
    let name = m.label;
    if (m.label.includes('Gemini 3.8 Flash')) name = 'Gemini 3.8 Flash';
    else if (m.label.includes('Gemini 4 Argon')) name = 'Gemini 4 Argon';
    else if (m.label.includes('Claude Opus')) name = 'Claude Opus 5.5';
    else if (m.label.includes('Claude Sonnet')) name = 'Claude Sonnet 5.5';
    else if (m.label.includes('GPT-OSS')) name = 'GPT-OSS 120B';

    const pct = m.quotaInfo.remainingFraction !== undefined
      ? Math.round(m.quotaInfo.remainingFraction * 100)
      : null;

    if (!modelMap.has(name) || (modelMap.get(name).percentage === null && pct !== null)) {
      modelMap.set(name, {
        name,
        label: m.label,
        percentage: pct,
        resetTime: m.quotaInfo.resetTime,
        modelId: m.modelId,
        tier: m.allowedTiers ? m.allowedTiers[0] : 'PRO'
      });
    }
  }

  const models = Array.from(modelMap.values());

  // Helper for countdown
  function getResetCountdown(isoDateStr) {
    if (!isoDateStr) return t.unlimited;
    const diff = new Date(isoDateStr).getTime() - Date.now();
    if (diff <= 0) return t.ready;
    const mins = Math.floor(diff / 60000);
    const hours = Math.floor(mins / 60);
    const remMins = mins % 60;
    if (hours > 24) {
      const days = Math.floor(hours / 24);
      return `${days}${t.days} ${hours % 24}${t.hours}`;
    }
    if (hours > 0) return `${hours}${t.hours} ${remMins}${t.mins}`;
    return `${mins} ${t.mins}`;
  }

  // Model cards HTML
  const modelCardsHtml = models.map(m => {
    const pct = m.percentage !== null ? m.percentage : 100;
    const isUnlimited = m.percentage === null;
    
    let colorClass = 'bar-green';
    let statusBadge = `<span class="badge badge-green">${t.badgeHigh}</span>`;
    if (!isUnlimited) {
      if (pct <= 15) {
        colorClass = 'bar-red';
        statusBadge = `<span class="badge badge-red">${t.badgeCritical}</span>`;
      } else if (pct <= 35) {
        colorClass = 'bar-yellow';
        statusBadge = `<span class="badge badge-yellow">${t.badgeMedium}</span>`;
      }
    } else {
      statusBadge = `<span class="badge badge-blue">${t.badgeUnlimited}</span>`;
    }

    const resetStr = getResetCountdown(m.resetTime);

    return `
      <div class="card model-card">
        <div class="card-header">
          <div class="model-title">
            <h3>${m.name}</h3>
            <span class="model-sub">${m.label}</span>
          </div>
          ${statusBadge}
        </div>

        <div class="quota-progress-container">
          <div class="progress-labels">
            <span class="progress-title">${t.quotaCapacity}</span>
            <span class="progress-val ${colorClass}-text">${isUnlimited ? '∞' : pct + '%'}</span>
          </div>
          <div class="progress-track">
            <div class="progress-fill ${colorClass}" style="width: ${pct}%;"></div>
          </div>
        </div>

        <div class="card-footer">
          <div class="footer-item">
            <span class="footer-label">${t.resetTime}</span>
            <span class="footer-val">⏱️ ${resetStr}</span>
          </div>
          <div class="footer-item">
            <span class="footer-label">${t.maxContext}</span>
            <span class="footer-val">1M+ tokens</span>
          </div>
        </div>
      </div>
    `;
  }).join('');

  return `<!DOCTYPE html>
<html lang="${langCode}">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${t.dashboardTitle}</title>
  <style>
    :root {
      --bg: #0b0f17;
      --card-bg: rgba(22, 30, 44, 0.75);
      --card-border: rgba(255, 255, 255, 0.08);
      --text: #f0f6fc;
      --text-muted: #8b949e;
      --green: #2ea043;
      --green-glow: rgba(46, 160, 67, 0.35);
      --yellow: #d29922;
      --yellow-glow: rgba(210, 153, 34, 0.35);
      --red: #f85149;
      --red-glow: rgba(248, 81, 73, 0.35);
      --blue: #58a6ff;
    }

    * { box-sizing: border-box; margin: 0; padding: 0; }

    body {
      background-color: var(--bg);
      color: var(--text);
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
      padding: 16px 20px;
      line-height: 1.4;
      overflow-x: hidden;
    }

    .container {
      max-width: 1100px;
      margin: 0 auto;
    }

    header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 14px;
      padding-bottom: 12px;
      border-bottom: 1px solid var(--card-border);
    }

    .header-left {
      display: flex;
      align-items: center;
      gap: 12px;
    }

    .logo-icon {
      font-size: 26px;
      background: linear-gradient(135deg, #4285f4, #34a853);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    h1 {
      font-size: 20px;
      font-weight: 700;
      letter-spacing: -0.3px;
    }

    .subtitle {
      font-size: 12px;
      color: var(--text-muted);
    }

    .refresh-btn {
      background: #238636;
      color: #fff;
      border: 1px solid rgba(240, 246, 252, 0.1);
      padding: 6px 14px;
      border-radius: 6px;
      font-size: 12px;
      font-weight: 600;
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      gap: 6px;
      transition: all 0.2s;
    }

    .refresh-btn:hover {
      background: #2ea043;
      transform: translateY(-1px);
    }

    /* Summary bar - compact single row */
    .summary-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 12px;
      margin-bottom: 16px;
    }

    .summary-card {
      background: var(--card-bg);
      border: 1px solid var(--card-border);
      backdrop-filter: blur(12px);
      border-radius: 10px;
      padding: 12px 16px;
    }

    .summary-title {
      font-size: 11px;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      color: var(--text-muted);
      margin-bottom: 4px;
    }

    .summary-value {
      font-size: 17px;
      font-weight: 600;
      color: var(--text);
    }

    /* Model Cards Grid - compact heights */
    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
      gap: 12px;
    }

    .card {
      background: var(--card-bg);
      border: 1px solid var(--card-border);
      backdrop-filter: blur(12px);
      border-radius: 10px;
      padding: 14px 16px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      transition: transform 0.15s, border-color 0.15s;
    }

    .card:hover {
      border-color: rgba(255, 255, 255, 0.18);
      transform: translateY(-1px);
    }

    .card-header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      margin-bottom: 12px;
    }

    .model-title h3 {
      font-size: 15px;
      font-weight: 600;
    }

    .model-sub {
      font-size: 11px;
      color: var(--text-muted);
    }

    /* Badges */
    .badge {
      font-size: 10px;
      font-weight: 600;
      padding: 2px 7px;
      border-radius: 20px;
      text-transform: uppercase;
    }
    .badge-green { background: rgba(46, 160, 67, 0.2); color: #3fb950; border: 1px solid rgba(46, 160, 67, 0.3); }
    .badge-yellow { background: rgba(210, 153, 34, 0.2); color: #e3b341; border: 1px solid rgba(210, 153, 34, 0.3); }
    .badge-red { background: rgba(248, 81, 73, 0.2); color: #f85149; border: 1px solid rgba(248, 81, 73, 0.3); }
    .badge-blue { background: rgba(88, 166, 255, 0.2); color: #79c0ff; border: 1px solid rgba(88, 166, 255, 0.3); }

    /* Progress bar */
    .quota-progress-container {
      margin-bottom: 12px;
    }

    .progress-labels {
      display: flex;
      justify-content: space-between;
      align-items: baseline;
      margin-bottom: 6px;
    }

    .progress-title {
      font-size: 12px;
      color: var(--text-muted);
    }

    .progress-val {
      font-size: 18px;
      font-weight: 700;
      font-variant-numeric: tabular-nums;
    }

    .progress-track {
      background: rgba(255, 255, 255, 0.08);
      border-radius: 6px;
      height: 9px;
      overflow: hidden;
      position: relative;
    }

    .progress-fill {
      height: 100%;
      border-radius: 6px;
      transition: width 0.5s ease-out;
    }

    .bar-green {
      background: linear-gradient(90deg, #238636, #3fb950);
      box-shadow: 0 0 10px var(--green-glow);
    }
    .bar-green-text { color: #3fb950; }

    .bar-yellow {
      background: linear-gradient(90deg, #9e6a03, #d29922);
      box-shadow: 0 0 10px var(--yellow-glow);
    }
    .bar-yellow-text { color: #d29922; }

    .bar-red {
      background: linear-gradient(90deg, #da3633, #f85149);
      box-shadow: 0 0 10px var(--red-glow);
    }
    .bar-red-text { color: #f85149; }

    .card-footer {
      border-top: 1px solid rgba(255, 255, 255, 0.06);
      padding-top: 10px;
      display: flex;
      justify-content: space-between;
      font-size: 11px;
    }

    .footer-item {
      display: flex;
      flex-direction: column;
      gap: 1px;
    }

    .footer-label {
      color: var(--text-muted);
      font-size: 10px;
    }

    .footer-val {
      font-weight: 500;
      color: var(--text);
    }
  </style>
</head>
<body>
  <div class="container">
    <header>
      <div class="header-left">
        <div class="logo-icon">⚡</div>
        <div>
          <h1>${t.dashboardTitle}</h1>
          <div class="subtitle">${t.dashboardSubtitle}</div>
        </div>
      </div>
      <button class="refresh-btn" onclick="vscode.postMessage({ command: 'refresh' })">
        ${t.dashboardRefresh}
      </button>
    </header>

    <div class="summary-grid">
      <div class="summary-card">
        <div class="summary-title">${t.accountSubscription}</div>
        <div class="summary-value">${userTier?.name || 'Google AI Pro'}</div>
      </div>
      <div class="summary-card">
        <div class="summary-title">${t.promptCredits}</div>
        <div class="summary-value">${availableCredits.toLocaleString()} <span style="font-size:12px; color:var(--text-muted);">/ ${monthlyCredits.toLocaleString()}</span></div>
      </div>
      <div class="summary-card">
        <div class="summary-title">${t.trackedModels}</div>
        <div class="summary-value">${models.length} ${t.modelsCount}</div>
      </div>
    </div>

    <div class="grid">
      ${modelCardsHtml}
    </div>
  </div>

  <script>
    const vscode = acquireVsCodeApi();
  </script>
</body>
</html>`;
}

module.exports = {
  generateDashboardHtml
};
