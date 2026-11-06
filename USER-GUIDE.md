# Antigravity Quota Monitor: User Guide

*Version 2.0.53*

**Language:** 🇬🇧 English · [🇪🇪 Eesti keel](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.et.md) · [🇩🇪 Deutsch](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.de.md) · [🇫🇮 Suomi](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.fi.md) · [🇪🇸 Español](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.es.md) · [🇫🇷 Français](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.fr.md) · [🇮🇹 Italiano](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.it.md) · [🇵🇱 Polski](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.pl.md) · [🇳🇱 Nederlands](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.nl.md) · [🇸🇪 Svenska](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.sv.md) · [🇵🇹 Português (Portugal)](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.pt-PT.md) · [🇧🇷 Português (Brasil)](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.pt-BR.md) · [🇧🇬 Български](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.bg.md) · [🇭🇷 Hrvatski](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.hr.md) · [🇨🇿 Čeština](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.cs.md) · [🇩🇰 Dansk](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.da.md) · [🇬🇷 Ελληνικά](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.el.md) · [🇭🇺 Magyar](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.hu.md) · [🇮🇪 Gaeilge](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.ga.md) · [🇱🇻 Latviešu](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.lv.md) · [🇱🇹 Lietuvių](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.lt.md) · [🇱🇺 Lëtzebuergesch](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.lb.md) · [🇲🇹 Malti](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.mt.md) · [🇷🇴 Română](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.ro.md) · [🇸🇰 Slovenčina](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.sk.md) · [🇸🇮 Slovenščina](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.sl.md) · [🇺🇦 Українська](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.uk.md) · [🇿🇦 Afrikaans](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.af.md) · [🇯🇵 日本語](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.ja.md) · [🇨🇳 简体中文](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.zh-CN.md) · [🇹🇼 繁體中文](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.zh-TW.md) · [🇰🇷 한국어](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.ko.md) · [🇻🇳 Tiếng Việt](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.vi.md) · [🇮🇩 Bahasa Indonesia](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.id.md) · [🇮🇳 हिन्दी](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.hi.md) · [🇰🇪 Kiswahili](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.sw.md) · [🇸🇦 العربية](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.ar.md)

---

## 1. Getting started: where to find everything

![Dashboard: Overview tab with the header controls](https://raw.githubusercontent.com/Nordicstocks/antigravity-quota-monitor/main/images/guide-overview.png)

Once the extension is installed, you will find it in two places:
1. **📌 Activity Bar icon:** Click the gauge icon in the Activity Bar to open the **Antigravity Cockpit** side panel.
2. **📊 Status bar meter, bottom right:** In the Free plan, it looks like this: `G: 87% 🟩🟩🟩🟩⬜ | C: 97% 🟩🟩🟩🟩🟩`. G stands for the Gemini models and C for the Claude and GPT models. Pro also shows the time left until the reset and the clock time of the reset, for example `↻3h 52m (19:52)`. Hover over the meter for details (see section 2).

![Antigravity Cockpit side panel](https://raw.githubusercontent.com/Nordicstocks/antigravity-quota-monitor/main/images/guide-sidebar.png)

### What's in the header and at the top of Overview:
- **Tabs:** **Overview**, **Analytics** and **Settings**. The tabs do not repeat the page title; it appears only in the header.
- **Last-updated time and `Refresh`:** the time shows when the data was last refreshed; the button fetches the latest data now.
- **Eye button:** lists every card, with a tick on the visible ones. Untick a card to hide it or tick it to bring it back, then press **Enter** or **OK** to apply. **Esc** closes the list without saving. The number on the button shows how many cards are hidden. The side panel has the same button beside its refresh button.
- **Version button (`v2.0.53`):** checks for a newer version. When there is one, the button says **`Update to …`**. Click it, then reload the window.
- **Language:** the dropdown is at the top right on every tab. The first option, **Auto**, also shows the language currently in use. It follows the editor's language, or the system language if the editor is set to English. Below it are 37 languages, each written in its own language. Your choice applies immediately and changes the language of this extension only. With the list open, type a letter to jump to the first language that starts with it. The same setting is in the **General** section of Settings.
- **`Night / Day / Auto`:** switches to the dark, the light or the editor's theme.
- **Beside the first heading on Overview:** **`Open in Browser`** (Pro, included in the 7-day trial) opens the dashboard in your default web browser, for example to show it on a second display, and **`User guide`** opens this guide. In the Free plan you also find **`Buy Pro`** and **`I have a key`** there.
- **What comes first:** the limit cards (weekly, then 5-hour). Your Google plan, prompt credits, estimated API value and the model count are below them.
- **A bigger window shows more:** more cards fit in a row. Settings has more columns once the window is about 1,500 pixels wide. On Overview, the Google plan details move to a column on the right at about 1,700 pixels, and Analytics appears beside the limits at about 2,400 pixels.

---

## 2. Status bar popup

Hovering over the status bar meter opens a popup with these parts:
- **License state:** after the links the popup says **PRO is active** in red when you have a paid key, and `TRIAL · 5d` (the days left) during the trial. In the Free plan, the popup shows no license state.
- **Top links:** **Dashboard**, **Open in Browser**, **Settings** (opens the Settings tab) and **Quick Actions** (opens the menu). In the Free plan, also a link to buy.
- **Account and prompt credits on one line:** shows your Google plan (`Google AI Pro`), email and prompt credits (`500 / 50,000`).
- **Weekly Limits and 5-Hour Limits:** Every model row stays on one line with its 4-block gauge, reset time and run-out forecast. The reset time and the forecast are Pro features; in the Free plan those two columns show a lock.

**Separate weekly limit warning on the status bar:** When little of the weekly quota remains for the Gemini models or for the Claude and GPT models, a separate item appears next to the status bar meter, for example `G 7d 15%`. By default it has a warning icon when 30% or less of the weekly quota remains, an orange background at 22% or less and a red background at 15% or less. You can change the 30% and 15% thresholds in the editor's settings (see **Alerts** in section 4); the orange step is halfway between them. A click opens the dashboard. The item is not shown while enough of the weekly quota remains.

---

## 3. Model cards: drag and drop (`⋮⋮`), color palette (`🎨`), reset reminder (`🔔`) and hiding (`✕`)

![Model card with the drag handle, color palette, reset reminder and the cross that hides the card](https://raw.githubusercontent.com/Nordicstocks/antigravity-quota-monitor/main/images/guide-card.png)

Reordering cards, choosing their colors and hiding them are all part of the Free plan, and your choices are saved automatically. The **Remind Me at Reset** button on a card is a Pro feature: it sets a reminder for that model's reset time. Every plan gets the basic alert in the editor when the quota is back at 100%.
- **① ⋮⋮ Drag and drop card order:** Grab any card by its top-left **`⋮⋮`** handle and drag it to where you want it.
- **② 🎨 Card color palette:** Click the palette button **`🎨`** in the header of any card to pick a color (**Default**, **Mint**, **Sky**, **Lavender**, **Peach**, **Rose**, **Teal**).
- **③ 🔔 Reset reminder:** Click **`🔔 Remind Me at Reset`** at the bottom of any model card. When that model's limit resets, you get a notification in the editor, a sound (on Windows and macOS) and, if you have set them up, phone notifications. The editor must be open.
- **④ ✕ Hide a card:** Click the cross in the top-right corner of a card to remove it from the dashboard, side panel, status bar popup and status bar. Your choice is saved. Bring it back with the eye button beside **`Refresh`**, with the plus in the **Hidden:** row below the cards, or under **Settings → General → Cards on the dashboard**. Hiding a card does not change your limits. New models still appear automatically. You stop getting alerts for a limit only when every model that shares it is hidden.

---

## 4. Settings: License, General, Status bar, Alerts, Auto-Starter, Phone and chat notifications, Terminal, Disk space

![Settings tab](https://raw.githubusercontent.com/Nordicstocks/antigravity-quota-monitor/main/images/guide-settings.png)

Open the **Settings** tab (also from the status bar popup, the menu or the command `Antigravity Quota: Open Settings Tab`). All sections are shown on one page; none is collapsed. They are in one column, or in more when the window is wide. Links on the left go to each section; in a narrow window they are a row at the top. The order is **License, General, Status bar, Alerts, Auto-Starter, Phone and chat notifications, Terminal, Disk space**. The sections **Alerts**, **Auto-Starter**, **Phone and chat notifications** and **Terminal** are Pro features (included in the trial) and carry a PRO tag. In the Free plan, their controls open the purchase dialog. In the Free plan, the basic alerts in the editor work without these settings: you are told when the quota falls to 10% and 5% and when it is back at 100%.

- **License:** With an active license, this section shows one row with the status and **`Change license key`**, **`Check license`** and **`Remove key`**. In the Free plan and during the trial, it shows the key field with its button, and a link to buy.
- **General:** interface language (the same choice as in the header), theme, refresh interval and **Cards on the dashboard**.
- **Status bar:** display mode (*Gemini and Claude*, *Least quota left*, *Gemini*, *Claude*) and 8 progress bar styles with a preview.
- **Alerts:** Reserve Guard, morning summary, sounds (on Windows and macOS), Model Switch Assist and copying the recommended model name. **`All settings in the editor`** opens the editor's own settings, filtered to this extension. They include less frequently used options, such as the warning thresholds. The link itself changes nothing.

When several models share one limit, you get one editor notification and one phone notification for the whole group, not one for each model. The title names the group, for example **Gemini models (5-hour limit)**.

- **Auto-Starter — `Start the 5-hour window automatically`:** Off by default. The 5-hour window starts with your first prompt, not at a fixed time. When this setting is on, the extension runs `agy` at your chosen time and sends a short prompt (`OK`) from your own account to the selected models. It is a real request. If the 5-hour window starts at `07:00`, the limit will reset at about `12:00`.
  - **The first time, it asks for your consent.** The message it sends to the models uses your quota. Section 6 of the [Google Antigravity Additional Terms of Service](https://antigravity.google/terms) prohibits using the service in connection with products not provided by Google. It says that using third-party software to access the service is a breach that may lead to suspension or termination of your Antigravity and/or Gemini CLI accounts. The decision is yours.
  - **If the editor was closed at `07:00`:** the Auto-Starter runs when you open the editor, as long as no more than 3 hours have passed since your chosen time. Once those 3 hours have passed, it waits until the next day.
  - **If a run fails:** the extension says so and tries again after 30 minutes, up to 3 times a day, and only during the same 3 hours after your chosen time. The prompt is sent again only to the models that failed. If `agy` is not installed, the extension does not try again that day.
  - **You always see the real result:** if `agy` is missing or fails, you see an error. The phone notification saying that the 5-hour window has started is sent only after a successful run. If several editor windows are open, only one of them sends the prompt.
- **`Start 5-Hour Window Now`:** Sends the same prompt immediately. The first time, this also asks for your consent.
- **Phone and chat notifications — `Connect your phone` (ntfy, no account needed):**
  1. Install the free **ntfy** app (App Store / Google Play).
  2. In the app, tap **`+`** and enter the topic shown on the dashboard (it has a **Copy** button). ntfy.sh topics are public: anyone who knows the name can read and send messages. That is why the suggested topic is long and random. Do not share it.
  3. Return to the extension, then click **`Save and send a test notification`**. The result appears in the editor.
  - **QR codes:** the QR code for Android opens the ntfy app, if it is installed, and subscribes to the topic. The other QR code opens the topic's web page, which does not subscribe the app, so on iPhone do step 2 by hand.
- **Discord/Slack Webhook & Telegram:** Enter your Webhook URL and click **`Save`**. For Telegram, enter your Chat ID, click **`Save`**, then click **`Set Bot Token`** and paste the token into the input box at the top of the window.
- **`Test Notification`:** Click to send a test notification to every channel you set up, in your selected language.
- **Terminal status file and snippets:** Click **`zsh`**, **`Starship`** or **`tmux`** to open the snippets, copy the snippet for the tool you use and paste it into the file named in that snippet (status file: `~/.antigravity-quota/status.json`).
- **Disk space:** Shows the disk space used by **Conversations** (the folder `~/.gemini/antigravity/brain`; the `conversations` folder next to it is not touched) and **Code tracker** (`code_tracker`). **`🧹 Clean Old Conversation Files (>7d)`** looks only at `brain`: it lists folders where no file changed in the last 7 days and shows the folder count, file count and size before you confirm. These folders can contain images, plans and logs from old conversations. After you confirm, they move to the system Trash (Recycle Bin on Windows), and you can restore them until you empty it. If that fails, they stay in place and the extension tells you. The extension only measures `code_tracker`; it never cleans it.

### Quick Actions (the menu)

The **Quick Actions** link in the status bar popup, the **Quick Actions** button in the side panel and the command `Antigravity Quota: Quick Actions` all open the same menu: dashboard, browser, refresh, reminder, report, test notification, usage history (it can save CSV or JSON), **Appearance, Language & Status Bar**, user guide and license. This menu has actions only. To see your quota numbers, look at the status bar, its popup or the dashboard. **Back — Cancel selection** goes up one level, and the last row of the **Appearance, Language & Status Bar** submenu opens the **Settings** tab.

To close any of the extension's lists, dialogs or info popups, click the **X** in the corner or press **Esc**.

### Weekly Report and Usage History (Pro)

Open **Weekly Report** or **Usage History** from **Quick Actions** (see above). **Weekly Report** is also on the Analytics tab. Either way, a page opens with two tabs:

- **Weekly Report** shows the last 7 days: how many times you reached a limit, what runs out next, the busiest time, the most used model and project, the current state of your limits, a chart of quota use by day and hour (a heatmap), and estimated use per project.
- **Usage History** shows how much quota was left over 7, 30 or 90 days, for both the 5-hour limit and the weekly limit. A thin vertical line marks each reset. The 30-day and 90-day views of the 5-hour limit have no such lines; there, each point shows the lowest level of that day.

Models that share one limit share one chart. The **Save report (HTML)** and **Save report (Markdown)** buttons on the Weekly Report tab and the **Export CSV** and **Export JSON** buttons on the Usage History tab ask where to save the file, then offer to open it.

## 5. 🎁 7-day Pro trial and license activation

The first time you install the extension, you get **all Pro features for 7 days**, with no payment card and no registration. After that, you keep the Free features: the status bar meter, the dashboard and side panel, card order and colors, 8 progress bar styles, 37 languages, automatic alerts in the editor when the quota is low or back at 100%, and 24 hours of history (the longer Usage History is a Pro feature).

1. **Choose a plan:**
   - **[💎 Lifetime Pro — €9.99 one-time payment](https://buy.polar.sh/polar_cl_xdY0LqtPIfPHfnG9o8Wo5QIIpJRlvhxQOZ6vL4g5jIB)**
   - **[Pro Monthly — €2.99/month, cancel anytime](https://buy.polar.sh/polar_cl_avl0NAvpPN4jQD0vZRRg11yZ92BQ2OHCKw29f4dxlPW)**
2. **Find your key:** Your key is in the purchase email or on the confirmation page of Polar, our payment provider.
3. **Activate:** Paste your `PRO-XXXX-...` key into the **License** section of Settings and click **`Activate`**. You can also click **`I have a key`**, which is on the trial banner, on Overview and in the side panel. After activation the trial banner disappears immediately and the badge says **PRO**. You do not need to reload the window.
4. **After buying:** if you clicked a buy button and return to the editor within 30 minutes, the extension checks once whether the clipboard holds a license key and asks before activating it. It does not read the clipboard at any other time, and the clipboard text is not stored.
5. **Checking or removing a key:** Settings → License → **`Check license`** checks your license with Polar immediately. **`Remove key`** (or the command `Antigravity Quota: Remove Pro License Key`) removes the key. After you confirm, the key is deleted from this computer, including the file `~/.antigravity-quota/license.key`. If the extension can reach Polar, this computer's activation is also released, so the key can be used on another computer. Your purchase stays valid. Removing the key does not cancel a monthly subscription. The subscription continues until you cancel it at Polar.
