# 📖 Antigravity Quota Monitor: Visual User Manual

*Version 2.0.51*

**Language:** English · [Eesti](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.et.md) · [Deutsch](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.de.md) · [简体中文](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.zh-CN.md) · [日本語](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.ja.md) · [Español](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.es.md)

---

## 1. Quick Start — Top Header Controls, Left Activity Bar (`Antigravity Cockpit`), Browser View & License Input

![Top Header Controls & Navigation](https://raw.githubusercontent.com/Nordicstocks/antigravity-quota-monitor/fb46f6f/images/guide-1-open-and-header.png)

Once installed, you have **2 permanent, always-visible Mission Control entry points**:
1. **📌 Left Activity Bar Icon (`Antigravity Cockpit`):** Click the **Speedometer Gauge Icon** on the far-left sidebar to open the **Antigravity Cockpit Sidebar Panel**!
2. **📊 Bottom-Right Status Bar Meter:** `📊 G: 87% 🟩🟩🟩🟩⬜ ↻3h 52m (19:52) | C: 97% 🟩🟩🟩🟩🟩`.

### What's in the header and at the top of Overview:
- **Tabs:** **Overview**, **Analytics** and **Settings**. The title is in the header only.
- **Updated time and `Refresh`:** shows the last refresh; the button fetches the data now.
- **Eye button:** lists every card, with a tick on the visible ones. Untick a card to hide it and tick it to bring it back. The number is how many are hidden. The side panel has the same button beside its refresh button.
- **Version button (`v2.0.51`):** checks for a newer version. When there is one, the button says **`Update to …`**. Click it, then reload the window.
- **Language:** the dropdown is at the top right on every tab. The first option, **Auto** with the language in use, follows the editor's language, or the system language if the editor is English. Then come 37 languages in their own names. It applies at once and changes the language of this extension only. Typing a letter jumps to a language. The same setting is in the **General** section of Settings.
- **`Night / Day / Auto`:** switches to the dark, the light or the editor's theme.
- **Beside the first heading on Overview:** **`Open in Browser`** opens the dashboard in your default web browser, for example on a second display (Pro, included in the 7-day trial), and **`User guide`** opens this manual. In Free you also find **`Buy Pro`** and **`I have a key`** there.
- **What comes first:** the limit cards (weekly, then 5-hour). Plan, prompt credits, estimated API value and the model count are below them.
- **A bigger window shows more:** more cards fit in a row. From about 1700 pixels wide, the plan details move to a column on the right. From about 2400 pixels, Analytics opens beside the limits, and Settings has more columns from about 1500 pixels.

---

## 2. Wide Status Bar Hover Popup

![Wide Status Bar Hover Tooltip](https://raw.githubusercontent.com/Nordicstocks/antigravity-quota-monitor/fb46f6f/images/guide-2-status-hover-popup.png)

Hovering over the bottom-right Status Bar quota meter opens a **wide, compact table with one line per item**:
- **Weekly limit warning on the status bar:** when a family's weekly limit is low, a separate item appears next to the main one, for example `G 7d 15%`: with a warning icon up to 30%, orange up to 22%, red up to 15% (the limits come from the settings). A click opens the dashboard. With enough left, the item is not there.
- **License state:** after the links the popup says **PRO is active** in red when you have a paid key, and the trial wording during the trial. In Free there is nothing extra.
- **Top links:** **Visual Dashboard**, **Open in Browser**, **Settings** (opens the Settings tab) and **Quick Actions** (opens the menu). In Free, also a link to buy.
- **Account & Prompt Credits on One Line:** Displays your tier (`Google AI Pro`), email, and prompt credits (`500 / 50,000`).
- **7-Day Weekly Pools & 5-Hour Model Limits:** Every model row stays on **one crisp horizontal line** with its 5-block visual gauge, reset clock time, and run-out forecast!

---

## 3. Drag-and-Drop Model Cards (`⋮⋮`), Color Palette (`🎨`) & 1-Click Reset Reminder (`🔔`)

![Model Card Customization: Drag Handle, Color Palette, and Reset Reminder](https://raw.githubusercontent.com/Nordicstocks/antigravity-quota-monitor/fb46f6f/images/guide-3-cards-color-drag.png)

Card order, colors and hidden cards are free and saved automatically. The reminder is a Pro feature.
- **`① ⋮⋮ Drag & Drop Card Order`:** Grab any card by its top-left **`⋮⋮`** handle and drag it into your preferred slot.
- **`② 🎨 Card Color Palette`:** Click the palette button **`🎨`** on any card header to pick a tint (**Default**, **Mint**, **Sky**, **Lavender**, **Peach**, **Rose**, **Teal**).
- **`③ 🔔 1-Click Reset Reminder` (`Remind Me at Reset`):** Click **`🔔 Remind Me at Reset`** at the bottom of any model card to get a sound, an editor notification and, if you set up phone alerts, a phone alert when that model's reset time arrives. The editor must be open.
- **`④ ✕ Hide a card`:** Click the cross in the top-right corner of a card to remove it from the dashboard, side panel, tooltip and status bar. Your choice is saved. Bring it back with the eye button beside **`Refresh`**, with the plus in the **Hidden:** row below the cards, or under **Settings → General → Cards on the dashboard**. Your limits stay the same, and new models appear on their own. Alerts stop only when every model on that limit is hidden.

---

## 4. Settings — License, Language, Status Bar, Alerts, Auto-Starter, Phone, Terminal & Disk Space

![Control Center: Old Conversation Files, 07:00 Auto-Starter, and Phone Push Notifications](https://raw.githubusercontent.com/Nordicstocks/antigravity-quota-monitor/fb46f6f/images/guide-4-control-center.png)

Open the **Settings** tab (also from the status bar popup, the menu or the command `Antigravity Quota: Open Settings Tab`). Every section is open. They are in one column, or in more when the window is wide. Links on the left go to each section; in a narrow window they are a row at the top. The order is **License, General, Status bar, Alerts, Auto-Starter, Phone and chat notifications, Terminal, Disk space**.

- **License:** with an active license, one row with the status and **`Change license key`**, **`Check license`** and **`Remove key`**. In Free and during the trial, the key field with its button, and a link to buy.
- **General:** interface language (the same choice as in the header), theme and refresh interval.
- **Status bar:** display mode (*Gemini and Claude*, *Least quota left*, *Gemini*, *Claude*) and 8 progress bar styles with a preview.
- **Alerts:** Reserve Guard, morning summary, macOS sounds (on macOS only), Model Switch Assist and copying the recommended model name. **`All settings in the editor`** opens the editor's own settings filtered to this extension, where you also find rarer ones such as the warning thresholds. The link itself changes nothing.

Models that share one limit give one notification and one phone alert, for example **Gemini models (5-hour limit)**, not one per model.

- **Auto-Starter — `Start the 5-hour window automatically`:** Off by default. The 5-hour window starts with your first prompt, not at a fixed time. When on, the extension runs `agy` at your chosen time and sends a short real prompt (`OK`) to the selected models from your own account. If the window starts at `07:00`, the next refill should come around `12:00`.
  - **The first time, it asks for your consent.** The prompt uses quota. Antigravity's terms prohibit using the service in connection with products not provided by Google. They say that using third-party software to access it is a breach that may lead to suspension or termination of your account. The decision is yours.
  - **If the editor was closed at `07:00`:** it runs when you open the editor, up to 3 hours later, and not later that day.
  - **If a run fails:** the extension says so and tries again after 30 minutes, with at most 3 attempts a day and within the same 3 hours. Only the models that failed are asked again.
  - **Results are real:** if `agy` is missing or fails, you see an error. The "started" phone notification comes only after success. With several windows open, only one sends the prompt.
- **`Start 5-Hour Window Now`:** Sends the same prompt now, also after your consent.
- **Phone and chat notifications — `Connect your phone` (ntfy, no account needed):**
  1. Install the free **ntfy** app (App Store / Google Play).
  2. In the app, tap **`+`** and enter the topic shown on the dashboard (it has a **Copy** button). The topic is long and random because ntfy.sh topics are public: keep it to yourself.
  3. Return to the extension, then click **`Save and send a test notification`**. The result appears in the editor.
  - **QR codes:** the Android code (with the ntfy app installed) opens the app and subscribes to the topic. The other code opens the topic's web page, which has no subscribe button, so on iPhone do step 2 by hand.
- **Discord/Slack Webhook & Telegram:** Enter your Webhook URL and click **`Save`**. For Telegram, enter your Chat ID, click **`Save`**, then click **`Set Bot Token`** and paste the token into the input box at the top of the window.
- **`Test Notification`:** Click to send a test notification to every channel you set up, in your selected language.
- **Terminal status file and snippets:** Click **`zsh`**, **`Starship`** or **`tmux`** to open the snippets, copy the one you use and paste it into the file it names (status file: `~/.antigravity-quota/status.json`).
- **Disk space:** Shows the disk space used by **Conversations** (`~/.gemini/antigravity/brain`) and **Code tracker** (`code_tracker`). **`🧹 Clean Old Conversation Files (>7d)`** looks only at `brain`: it lists folders where no file changed in the last 7 days and shows the folder count, file count and size before you confirm. They can hold images, plans and logs from old conversations. After you confirm, they move to the **system Trash**, so you can restore them. If that fails, they stay in place and the extension tells you. `code_tracker` is only measured.

### Quick Actions (the menu)

The status bar popup link **Quick Actions**, the sidebar button and the command `Antigravity Quota: Quick Actions` open the same menu: dashboard, browser, refresh, reminder, report, usage history (it can save CSV or JSON), test notification, **Appearance, Language & Status Bar**, user guide and license. The numbers are on the status bar, in its popup and on the dashboard. **Back** goes up one level, and the last row of the submenu opens the **Settings** tab.

### Weekly Report and Usage History (Pro)

Open **Weekly Report** or **Usage History** from the status bar menu, or **Weekly Report** on the Analytics tab. A page opens with two tabs:

- **Weekly Report** shows the last 7 days: how many times a limit ran out, what runs out next, the busiest time, the most used model and project, the limits now, a weekday and hour heatmap, and estimated use per project.
- **Usage History** shows the quota left for each limit over 7, 30 or 90 days, for the 5-hour limit and the weekly limit. A thin vertical line marks a reset. In the 30 and 90 day 5-hour view, each point is the lowest level of that day.

Models that share one limit share one chart. **Save report (HTML)**, **Save report (Markdown)**, **Export CSV** and **Export JSON** ask where to save the file, then offer to open it.

## 5. 🎁 7-Day Free Pro Trial & License Activation

Every new install gets **all Pro features for 7 days** right in the extension, with no card and no registration. After that, the free features stay.

1. **Choose a plan:**
   - **[💎 Lifetime Pro — €9.99 one-time payment](https://buy.polar.sh/polar_cl_xdY0LqtPIfPHfnG9o8Wo5QIIpJRlvhxQOZ6vL4g5jIB)**
   - **[Pro Monthly — €2.99/month, cancel anytime](https://buy.polar.sh/polar_cl_avl0NAvpPN4jQD0vZRRg11yZ92BQ2OHCKw29f4dxlPW)**
2. **Activate:** Paste your `PRO-XXXX-...` key into the **License** section of Settings and click **`Activate`**. You can also click **`I have a key`** on Overview.
3. **Checking or removing a key:** Settings → License → **`Check license`** asks Polar now. **`Remove key`** (or the command `Antigravity Quota: Remove Pro License Key`) removes it. After you confirm, the key leaves this computer, including `~/.antigravity-quota/license.key`, and this computer's activation is released when possible. Your purchase stays valid. A monthly subscription is cancelled at Polar.
4. **Where the key comes from and where it goes:** you'll find the key in the purchase email or on Polar's confirmation page. The **`I have a key`** button is on the trial banner, on Overview and in the sidebar; Settings starts with the key field and the status (Free / trial). After activation the trial banner goes at once and the badge says **PRO**, with no window reload.
5. **After buying:** if you clicked a buy button and return to the editor within 30 minutes, the extension checks once whether the clipboard holds a license key and asks before activating it. It does not read the clipboard at any other time, and the text is not stored.

The extension's windows and info popups close with the **X** in their top right corner or with **Esc**.
