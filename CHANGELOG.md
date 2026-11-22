# Changelog

All notable changes to **Antigravity Quota Monitor — Ultimate Cockpit & Dashboard** are documented in this file.

## [2.0.65] - 2026-11-22
- Store pages: new pictures in all seven languages, showing the current version. They no longer show the model Antigravity announced it would remove on 18 November; while Antigravity still reports it, the extension shows it as before. The extension itself is unchanged.

## [2.0.64] - 2026-11-21
- New: below Antigravity's limits, the dashboard, the side panel and the status bar can also show the limits of your own Codex, Claude Code and Grok plans. Each is read from its own program on your computer (Codex, Claude Code, the Grok CLI): no conversation is started, nothing is sent to a model and no password is asked for. A tool that is not on your computer is not shown at all.
- The tools have their own cards in the layout of Antigravity's: a weekly section and a separate 5-hour section. Each card shows the tool and the limit by name ("Codex · Weekly Limit"), your plan, what is left, when it renews, the forecast and a reminder at reset. The percentage is free; the reset time, the forecast and the reminder are Pro, as for Antigravity's limits.
- Claude Code here is your own Anthropic plan. The Claude models in Antigravity use Antigravity's quota and stay in their own cards.
- Grok on the Free plan reports no usage percentage, so its card shows when the period renews and says that no percentage is given, instead of a bar.
- Settings → Codex, Claude Code and Grok: a switch for each tool and how often Claude Code is read. Every new text is in all 37 languages.
- Gemini 4 Neon is shown as one card for all its effort levels, and the Orchestrator counts against the shared Gemini limit.
- Auto-Starter (Pro): a new "Repeat as an interval" checkbox. After the first start at your chosen time, the 5-hour window is started again every 5:01 (5 hours 1 minute, the recommended value) or an interval you type as H:MM between 1:00 and 24:00, until the next start at your chosen time. A start whose window would still be running at that time is skipped. The card says how many starts a day the interval means (5:01: at most 4) and when the next start is planned; the side panel shows it as "(07:00, then every 5:01)". After the computer or the editor was asleep, one missed start is made, never several in a row, and with several windows open only one sends. Off by default: nothing changes until you tick it.
- Auto-Starter (Pro): the models are now chosen one by one (Claude, Gemini; both stay the default), and your own Codex and Claude Code can be added when they are installed on this computer, signed in and their plan has a 5-hour window. Each sends one short request ("OK") from your own account through its own program ("codex exec" read-only in a temporary folder, "claude -p" with its tools switched off), which starts that plan's own 5-hour window and uses a little of its limit. The card says this for each tool you select.
- Auto-Starter (Pro): consent is now asked for each account a request comes from. Codex and Claude Code each ask before their first request, naming the tool, the account and that it uses a little of that plan's limit; a consent given before 2.0.64 covers Claude and Gemini through agy only. Deselecting a tool withdraws its consent, and selecting it again asks again.
- Reminders: the message starts with the day and time, so it stays readable when the notification is folded; weekly reminders name the day.
- Antigravity's status bar reading stays visible next to the Codex, Claude Code and Grok items.
- Long tool card names wrap instead of hiding the model name; the full name is in the tooltip.
- Swahili: AI models are "modeli" everywhere.

## [2.0.63] - 2026-11-17
- Antigravity announced that one of its models would be removed on 18 November 2026, so the store pages, the descriptions and the user guides no longer list it. While Antigravity still reports it, the extension shows it as before.
- When you are not signed in to Antigravity, the extension now says so. Before, it reported an answer it could not read.
- When Antigravity is not running, the dashboard shows the reason after 30 seconds instead of "Checking…" for minutes, and no longer says "Updated" in green.
- When Antigravity closes, the dashboard and the side panel show the error instead of the last numbers as if they were current. The clock shows "—" until real numbers arrive, and the green dot appears only with real numbers.
- A damaged card order setting can no longer leave the side panel stuck on an error.
- Phone alerts: each Save button saves only its own field. Saving a webhook no longer switches ntfy alerts on.
- Windows: Settings → Terminal shows the shells that exist on Windows; the Pro plans window fits and scrolls at 150 % display scaling; on a narrow dashboard the settings section bar scrolls instead of hiding sections.
- Visual Studio Marketplace: the listing is now called "Antigravity Quota Monitor — Dashboard for Visual Studio Code".

## [2.0.62] - 2026-11-15
- Pro Monthly now starts with 7 free days at checkout; billing begins after them. The store page and the extension no longer say that billing starts on the day you buy.
- The Buy buttons inside the extension and the links on the store page and in the guides use their own checkout links, so we can see which one buyers use.

## [2.0.61] - 2026-11-14
- The new models in Antigravity's model picker are counted right: Gemini 4 Hydrogen, Orchestrator (Carbon) and Orchestrator (Argon) show the Gemini 5-hour limit they share, and alert together with the other Gemini models. Before, Orchestrator could show its weekly number among the 5-hour limits and send alerts of its own, and Gemini 4 Hydrogen (XHigh) had a second card.
- Which limit a model shares now comes from Antigravity's own list of the models in each group, so a model Antigravity adds later lands in the right group without an update.
- With two copies of the extension in one editor (for example from Open VSX and from the Visual Studio Marketplace), the second copy now stays idle instead of failing to start and showing a second status bar item.

## [2.0.60] - 2026-11-12
- Gemini 4 Carbon, the new Gemini model, has its own card and row. On Google AI Ultra it shares the Gemini 5-hour and weekly limits, so it moves and alerts together with Gemini 4 Argon and Gemini 3.8 Flash.
- The terminal status line (status.json) takes its Gemini number from the same model as the status bar, and leaves out a model that has only a weekly limit.
- Error reports: when something in the extension fails unexpectedly, it sends an anonymous report. A report holds only the extension's version and edition, your editor's name, version and language, your operating system and processor type, your plan (Free, trial or Pro) and the error message with where in the code it happened. No usage numbers, no files, no account details and no license key. Nothing is sent while your editor's telemetry setting is off. Reports are on by default; to turn them off, switch off Settings → General → “Send error reports” (setting `antigravityQuota.sendErrorReports`).
- The new switch, its setting description and the user guide are written in all 37 languages, and the store page's privacy section in all 7 of its languages. The privacy section now says the extension sends “no usage analytics” and lists exactly what an error report holds.

## [2.0.59] - 2026-11-11
- Clearer Swahili, Hindi and Korean wording in the newest texts.

## [2.0.58] - 2026-11-10
- Auto-Starter: new choice “Only remind me”. At your chosen time you get a notification and start the 5-hour window yourself with any prompt; nothing is run or sent for you. It is the default for new users; “Start it automatically” stays available with your consent.
- Switching between Antigravity accounts no longer mixes their history, so the forecast no longer shows a wrong “Runs out in 6m”.
- The newest texts are now written in all 37 languages, and some Luxembourgish and Swahili wording is corrected.

## [2.0.57] - 2026-11-10
- When a new version is out, a clear "Update to …" button sits next to the PRO badge on every tab, and the editor's notice has an update button. Pressing it installs the update in the editor; before, the notice had no button and simply went away.
- A more compact dashboard: model cards are about a third lower, show two or three side by side on wider panels, and the summary is a row of small tiles. Less scrolling, nothing removed.
- The card colour button is now a colourful ring with the card's current colour in the middle, so it is easy to see what it does.
- Disk space: the card now explains when there is nothing to clean (the largest conversation folders are still in use) and also shows the size of Antigravity's chat history folder, which it only measures and never cleans.

## [2.0.56] - 2026-11-10
- The status bar colour now follows the numbers it shows. A low limit it does not show, such as the weekly Gemini 4 Argon limit, no longer turns the whole item red: that limit has its own weekly item.
- A model that has only a weekly limit (Gemini 4 Argon on the Pro plan) is no longer listed among the 5-hour limits. Its weekly card stays.

## [2.0.55] - 2026-11-07
- The store page keeps every language open, and has links to the user guide near the top.

## [2.0.54] - 2026-11-07
- A new store page: shorter, with current screenshots, in English, Estonian, German, Japanese, Chinese, Korean and Spanish.

## [2.0.53] - 2026-11-06
- The user guide is now available in 37 languages. Pick yours from the list at the top of the guide.
- The eye button tells you what is wrong when Antigravity is not running, instead of doing nothing.
- Auto-Starter: pressing a time button now also updates the time field, and an impossible time such as 25:99 is refused and no longer saved as 07:00.
- Hidden cards: a card that is on the page is no longer also offered as hidden.
- Settings: the section you click in the left list stays marked, also near the end of the page.

## [2.0.52] - 2026-11-06
- Sound alerts now work on Windows as well as macOS, with four new sounds made for this extension.
- One sound per alert: when several models share a limit, the sound no longer plays several times.
- The commands that open the Settings tab and the user guide are now translated into German, Japanese and Chinese.
- The user guide is rewritten with current screenshots. It now says clearly that removing a license key does not cancel a monthly subscription.

## [2.0.51] - 2026-11-05
- The dashboard fits your window: a bigger screen shows more cards in a row, then more columns, and no card stays alone on a row.
- The language list is at the top right on every tab and no longer gets cut off.
- New eye button beside Refresh: tick or untick the cards you want to see, also in the side panel.
- The dashboard shows your version and checks for a newer one, and one click installs the update.

## [2.0.50] - 2026-11-05
- When a weekly limit is used up, the model now shows 0% and the weekly reset instead of an old 5-hour number.
- Free plan: the header shows FREE and a Get Pro button, and the Google plan card says that it is your Google plan.

## [2.0.49] - 2026-11-05
- Drag the cards in the side panel up and down, in the same order as the dashboard. The panel keeps its place when it redraws.
- The User Guide now opens in your language: separate English and Estonian guides.

## [2.0.48] - 2026-11-05
- Close any model or weekly card with the X on the dashboard or in the side panel, and bring it back with the plus. Your choice is saved, and new models appear on their own.
- Windows: the Auto-Starter now finds `agy`. It also picks models by asking `agy`, so a rename at Google does not break it, and it tells you when a scheduled run has started.
- Info windows now stay inside the panel. Terminal lines: tmux shows the whole line, PowerShell is supported, and old numbers show as `AGY: stale`.
- Faster start and clearer language paths: the error stays hidden during the first seconds, and text follows the language you chose.

## [2.0.47] - 2026-11-04
- New dashboard header, Settings page, weekly report and usage history views. German, Chinese, Japanese and Spanish updated. Reliability and security fixes.

## [2.0.15] - 2026-11-03
- Added Activity Bar Sidebar Mission Control panel (`Antigravity Cockpit`), Old Conversation Files Cleaner (`BRAIN` only), smooth video walkthrough, and public documentation repository link.

## [2.0.14] - 2026-11-03
- Updated extension title and store tags (`Antigravity Cockpit Quota Monitor & Dashboard`).

## [2.0.13] - 2026-11-03
- Added 1-click Open in Browser dashboard mode, 14-day free Pro trial support, immediate startup wake catch-up for scheduled 5h session auto-starter, and expanded localized store descriptions.

## [2.0.12] - 2026-11-03
- Scheduled 5-hour session auto-starter controls, status bar tooltip icon improvements, and store tag updates.

## [2.0.8] - 2026-11-03
- Added interactive step-by-step video walkthrough and automatic local key file detection.

## [2.0.7] - 2026-11-03
- Unified top navigation bar, 1-click inline Pro license activation, and Windows/macOS/Linux OS language auto-detection.

## [2.0.6] - 2026-11-02
- Interactive dashboard layout customization, card color themes, and OS language auto-detection improvements.

## [2.0.5] - 2026-11-02
- Direct 1-click dashboard launch and native icon refinements.

## [2.0.4] - 2026-11-02
- Updated subscription plan details and localized documentation.

## [2.0.3] - 2026-11-02
- Added Day & Night dashboard themes and expanded 37-language support.

## [2.0.2] - 2026-11-02
- Updated extension icon and marketplace assets.

## [2.0.1] - 2026-11-02
- Status bar display refinements and stability improvements.

## [2.0.0] - 2026-11-02
- Major v2 release with visual dashboard and Pro analytics.
