# Antigravity Quota Monitor：使用指南

*版本 2.0.53*

**語言：** [🇬🇧 English](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.md) · [🇪🇪 Eesti keel](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.et.md) · [🇩🇪 Deutsch](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.de.md) · [🇫🇮 Suomi](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.fi.md) · [🇪🇸 Español](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.es.md) · [🇫🇷 Français](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.fr.md) · [🇮🇹 Italiano](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.it.md) · [🇵🇱 Polski](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.pl.md) · [🇳🇱 Nederlands](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.nl.md) · [🇸🇪 Svenska](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.sv.md) · [🇵🇹 Português (Portugal)](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.pt-PT.md) · [🇧🇷 Português (Brasil)](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.pt-BR.md) · [🇧🇬 Български](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.bg.md) · [🇭🇷 Hrvatski](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.hr.md) · [🇨🇿 Čeština](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.cs.md) · [🇩🇰 Dansk](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.da.md) · [🇬🇷 Ελληνικά](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.el.md) · [🇭🇺 Magyar](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.hu.md) · [🇮🇪 Gaeilge](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.ga.md) · [🇱🇻 Latviešu](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.lv.md) · [🇱🇹 Lietuvių](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.lt.md) · [🇱🇺 Lëtzebuergesch](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.lb.md) · [🇲🇹 Malti](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.mt.md) · [🇷🇴 Română](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.ro.md) · [🇸🇰 Slovenčina](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.sk.md) · [🇸🇮 Slovenščina](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.sl.md) · [🇺🇦 Українська](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.uk.md) · [🇿🇦 Afrikaans](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.af.md) · [🇯🇵 日本語](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.ja.md) · [🇨🇳 简体中文](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.zh-CN.md) · 🇹🇼 繁體中文 · [🇰🇷 한국어](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.ko.md) · [🇻🇳 Tiếng Việt](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.vi.md) · [🇮🇩 Bahasa Indonesia](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.id.md) · [🇮🇳 हिन्दी](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.hi.md) · [🇰🇪 Kiswahili](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.sw.md) · [🇸🇦 العربية](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.ar.md)

---

## 1. 快速上手：各項功能在哪裡

![儀表板：總覽索引標籤與標頭控制項](https://raw.githubusercontent.com/Nordicstocks/antigravity-quota-monitor/main/images/guide-overview.png)

安裝擴充功能後，你可以在兩個地方找到它：
1. **📌 活動列圖示**：點選活動列中的儀表圖示，開啟 **Antigravity Cockpit** 側邊欄。
2. **📊 右下角的狀態列計量表**：免費方案的顯示範例如下：`G: 87% 🟩🟩🟩🟩⬜ | C: 97% 🟩🟩🟩🟩🟩`。G 代表 Gemini 模型，C 代表 Claude 與 GPT 模型。Pro 還會顯示距離重設還有多久，以及重設的時刻，例如 `↻3h 52m (19:52)`。將滑鼠游標停在計量表上，即可查看詳細資訊（見第 2 節）。

![Antigravity Cockpit 側邊欄](https://raw.githubusercontent.com/Nordicstocks/antigravity-quota-monitor/main/images/guide-sidebar.png)

### 標頭與總覽頂端的內容：
- **索引標籤**：**總覽**、**分析**與**設定**。索引標籤不會重複頁面標題，標題只出現在標頭。
- **最後更新時間與 `重新整理`**：時間顯示資料上次更新的時刻；按鈕則會立刻擷取最新資料。
- **眼睛按鈕**：列出所有卡片，已顯示的卡片會打勾。取消勾選即可隱藏卡片，勾選則讓它重新顯示，然後按 **Enter** 或 **OK** 套用。按 **Esc** 會關閉清單且不儲存。按鈕上的數字表示有幾張卡片被隱藏。側邊欄的重新整理按鈕旁也有同樣的按鈕。
- **版本按鈕（`v2.0.53`）**：檢查是否有較新的版本。有新版本時，按鈕會顯示 **`更新至 …`**。點選它，然後重新載入視窗。
- **語言**：每個索引標籤的右上角都有下拉選單。第一個選項是**自動**，同時也會顯示目前使用的語言。它會依編輯器的語言決定；若編輯器設為英文，則依系統語言。下方列出 37 種語言，每種語言都以它自己的名稱顯示。你的選擇會立即生效，而且只會變更這個擴充功能的語言。清單展開時，輸入一個字母，就會跳到第一個以該字母開頭的語言。同樣的設定也在**設定**的**一般**區段中。
- **`夜間 / 日間 / 自動`**：切換為深色、淺色，或沿用編輯器的佈景主題。
- **總覽第一個標題旁**：**`在瀏覽器中開啟`**（Pro 功能，7 天試用期間也能使用）會用預設的網頁瀏覽器開啟儀表板，例如要顯示在第二台螢幕上時；**`使用指南`** 則會開啟本指南。在免費方案中，這裡還有 **`購買 Pro`** 與 **`我有金鑰`**。
- **最先出現的內容**：限額卡片（先是每週，再是 5 小時）。你的 Google 方案、提示詞點數、預估 API 價值與模型數量，則在它們下方。
- **視窗越大，顯示的內容越多**：一列能放下更多張卡片。視窗寬度約達 1,500 像素時，**設定**會分成更多欄。在**總覽**上，寬度約達 1,700 像素時，Google 方案的詳細資料會移到右側的一欄；約達 2,400 像素時，**分析**會出現在限額卡片旁邊。

---

## 2. 狀態列彈出式視窗

將滑鼠游標停在狀態列計量表上，會彈出一個視窗，內容包含以下幾個部分：
- **授權狀態**：如果你有付費金鑰，彈出式視窗會在連結下方以紅色顯示 **Pro 已啟用**；試用期間則顯示 `試用 · 5 天`（剩餘天數）。在免費方案中，彈出式視窗不會顯示授權狀態。
- **頂端連結**：**儀表板**、**在瀏覽器中開啟**、**設定**（開啟**設定**索引標籤）與**快速動作**（開啟選單）。在免費方案中，還有一個購買連結。
- **帳號與提示詞點數在同一行**：顯示你的 Google 方案（`Google AI Pro`）、電子郵件與提示詞點數（`500 / 50,000`）。
- **每週限額 與 5 小時限額**：每個模型各占一行，附有 4 格的進度條、重設時間與耗盡預測。重設時間與耗盡預測是 Pro 功能；在免費方案中，這兩欄會顯示鎖頭。

**狀態列上獨立的每週限額警示**：當 Gemini 模型或 Claude 與 GPT 模型的每週配額所剩不多時，狀態列計量表旁會多出一個獨立的項目，例如 `G 7d 15%`。預設情況下，每週配額剩下 30% 或更少時會出現警示圖示，剩下 22% 或更少時背景為橘色，剩下 15% 或更少時背景為紅色。30% 與 15% 這兩個臨界值可以在編輯器的設定中變更（見第 4 節的**警示**）；橘色這一級正好在兩者的中間。點一下會開啟儀表板。每週配額還很充足時，不會顯示這個項目。

---

## 3. 模型卡片：拖放（`⋮⋮`）、調色盤（`🎨`）、重設提醒（`🔔`）與隱藏（`✕`）

![附有拖曳握把、調色盤、重設提醒，以及可隱藏卡片之叉號的模型卡片](https://raw.githubusercontent.com/Nordicstocks/antigravity-quota-monitor/main/images/guide-card.png)

調整卡片順序、選擇卡片顏色與隱藏卡片，都屬於免費方案，你的選擇會自動儲存。卡片上的**重設時提醒我**按鈕是 Pro 功能：它會在該模型的限額重設時提醒你。無論哪種方案，配額回到 100% 時，編輯器中都會有基本提醒。
- **① ⋮⋮ 拖放調整卡片順序**：抓住任一張卡片左上角的 **`⋮⋮`** 握把，把卡片拖到你想放的位置。
- **② 🎨 卡片調色盤**：點選任一張卡片標頭中的調色盤按鈕 **`🎨`**，挑選一種顏色（預設、薄荷綠、天藍色、薰衣草紫、蜜桃色、玫瑰色、藍綠色）。
- **③ 🔔 重設提醒**：點選任一張模型卡片底部的 **`🔔 重設時提醒我`**。該模型的限額重設時，你會收到編輯器通知、音效（在 Windows 與 macOS 上），若你已設定手機通知，也會收到手機通知。編輯器必須保持開啟。
- **④ ✕ 隱藏卡片**：點選卡片右上角的叉號，這張卡片就會從儀表板、側邊欄、狀態列彈出式視窗與狀態列中移除。你的選擇會自動儲存。要讓它重新顯示，可以點選 **`重新整理`** 旁的眼睛按鈕、點選卡片下方 **已隱藏：** 那一列中的加號，或前往**設定 → 一般 → 儀表板卡片**。隱藏卡片不會改變你的限額。新增的模型仍會自動出現。只有當共用同一個限額的所有模型都被隱藏時，你才會停止收到該限額的警示。

---

## 4. 設定：授權、一般、狀態列、警示、Auto-Starter、手機與聊天通知、終端機、磁碟空間

![設定索引標籤](https://raw.githubusercontent.com/Nordicstocks/antigravity-quota-monitor/main/images/guide-settings.png)

開啟**設定**索引標籤（也可以從狀態列彈出式視窗、選單，或命令 `Antigravity Quota：開啟設定索引標籤` 開啟）。所有區段都顯示在同一頁，且全部展開。它們排成一欄，視窗寬時則排成多欄。左側的連結可跳到各個區段；視窗較窄時，這些連結會排成一列，顯示在頂端。順序為**授權、一般、狀態列、警示、Auto-Starter、手機與聊天通知、終端機、磁碟空間**。**警示**、**Auto-Starter**、**手機與聊天通知**與**終端機**這幾個區段是 Pro 功能（試用期間包含在內），並帶有 Pro 標籤。在免費方案中，點選這些區段裡的控制項會開啟購買對話方塊。編輯器內的基本警示在免費方案中不需要這些設定也能運作：配額降到 10% 與 5% 時，以及回到 100% 時，你都會收到通知。

- **授權**：授權有效時，這個區段只有一列，顯示狀態，以及 **`更換授權金鑰`**、**`檢查授權`** 與 **`移除金鑰`**。在免費方案與試用期間，這裡會顯示金鑰欄位與它的按鈕，以及一個購買連結。
- **一般**：介面語言（與標頭中的選項相同）、佈景主題、重新整理間隔，以及**儀表板卡片**。
- **狀態列**：顯示模式（*Gemini 與 Claude*、*剩餘配額最少*、*Gemini*、*Claude*）與 8 種附預覽的進度條樣式。
- **警示**：Reserve Guard、晨間摘要、音效（在 Windows 與 macOS 上）、模型切換助理，以及複製建議的模型名稱。**`編輯器中的所有設定`** 會開啟編輯器本身的設定，並篩選為只顯示這個擴充功能的項目，其中包括較少用到的選項，例如警示臨界值。這個連結本身不會變更任何設定。

當多個模型共用同一個限額時，整個群組只會收到一則編輯器通知與一則手機通知，而不是每個模型各一則。標題會寫出群組名稱，例如 **Gemini 模型 (5 小時限額)**。

- **Auto-Starter — `自動啟動 5 小時時段`**：預設為關閉。5 小時時段是從你的第一個提示詞開始計算，而不是從固定時間開始。開啟此設定後，擴充功能會在你選定的時間執行 `agy`，並以你自己的帳號向所選模型傳送一則簡短的提示詞（`OK`）。這是一次真實的請求。如果 5 小時時段從 `07:00` 開始，限額大約會在 `12:00` 重設。
  - **第一次使用時，它會徵求你的同意**。它傳給模型的訊息會用掉你的配額。[Google Antigravity 附加服務條款](https://antigravity.google/terms)第 6 條禁止將該服務與非 Google 提供的產品搭配使用。其中指出，使用第三方軟體存取該服務屬於違約，可能導致你的 Antigravity 和/或 Gemini CLI 帳號遭到停權或終止。決定權在你。
  - **如果 `07:00` 時編輯器是關閉的**：只要距離你選定的時間不超過 3 小時，你開啟編輯器時，Auto-Starter 就會執行。超過這 3 小時後，它會等到隔天。
  - **如果某次執行失敗**：擴充功能會告知你，並在 30 分鐘後重試，每天最多 3 次，而且只在你選定時間之後的那 3 小時內重試。提示詞只會再傳給失敗的模型。如果沒有安裝 `agy`，擴充功能當天就不會再重試。
  - **你看到的一定是真實的結果**：如果找不到 `agy` 或執行失敗，你會看到錯誤訊息。只有在執行成功之後，才會傳送 5 小時時段已開始的手機通知。若開啟了多個編輯器視窗，只有其中一個會傳送提示詞。
- **`立即啟動 5 小時時段`**：立刻傳送同一則提示詞。第一次使用時，這裡同樣會徵求你的同意。
- **手機與聊天通知 — `連接手機`（ntfy，不需要帳號）：**
  1. 安裝免費的 **ntfy** App（App Store / Google Play）。
  2. 在 App 中點選 **`+`**，輸入儀表板上顯示的主題（旁邊有 **複製** 按鈕）。ntfy.sh 的主題是公開的：知道名稱的人都能讀取並傳送訊息。因此建議使用又長又隨機的主題名稱。請不要分享它。
  3. 回到擴充功能，然後點選 **`儲存並傳送測試通知`**。結果會顯示在編輯器中。
  - **QR 碼**：Android 用的 QR 碼會開啟 ntfy App（若已安裝），並訂閱該主題。另一個 QR 碼只會開啟該主題的網頁，不會在 App 中訂閱該主題，所以在 iPhone 上請手動完成第 2 步。
- **Discord/Slack Webhook 與 Telegram**：輸入你的 Webhook URL，然後點選 **`儲存`**。使用 Telegram 時，請輸入你的聊天 ID，點選 **`儲存`**，再點選 **`設定機器人權杖`**，並把權杖貼到視窗頂端的輸入框中。
- **`傳送測試通知`**：點選後，會以你所選的語言，向你已設定的每個管道傳送一則測試通知。
- **終端機狀態檔案與程式碼片段**：點選 **`zsh`**、**`Starship`** 或 **`tmux`** 開啟程式碼片段，複製你所用工具對應的那一段，再貼到該片段中指明的檔案裡（狀態檔案：`~/.antigravity-quota/status.json`）。
- **磁碟空間**：顯示**對話**（資料夾 `~/.gemini/antigravity/brain`；旁邊的 `conversations` 資料夾不會被動到）與**程式碼追蹤器**（`code_tracker`）所占用的磁碟空間。**`🧹 清理舊對話資料夾（超過 7 天未變更）`** 只檢查 `brain`：它會列出最近 7 天內沒有任何檔案變動的資料夾，並在你確認之前顯示資料夾數、檔案數與大小。這些資料夾中可能有舊對話留下的圖片、計畫與記錄檔。你確認之後，它們會移到系統的垃圾桶（Windows 上是資源回收筒），在清空之前都可以還原。如果移動失敗，它們會留在原處，擴充功能會告訴你。擴充功能只會量測 `code_tracker`，絕不會清理它。

### 快速動作（選單）

從狀態列彈出式視窗的**快速動作**連結、側邊欄的**快速動作**按鈕，或命令 `Antigravity Quota：快速動作`，開啟的都是同一個選單：儀表板、瀏覽器、重新整理、提醒、報告、測試通知、用量歷程記錄（可儲存為 CSV 或 JSON）、**外觀、語言與狀態列**、使用指南與授權。這個選單只供你執行各項動作。要查看配額數字，請看狀態列、它的彈出式視窗或儀表板。**返回 — 取消選擇**會回到上一層，而**外觀、語言與狀態列**子選單的最後一列會開啟**設定**索引標籤。

要關閉擴充功能的任何清單、對話方塊或資訊彈出式視窗，請點選角落的 **X**，或按 **Esc**。

### 每週報告與用量歷程記錄（Pro）

從**快速動作**（見上文）開啟**每週報告**或**用量歷程記錄**。**每週報告**在**分析**索引標籤上也有。不論從哪裡開啟，都會出現一個有兩個索引標籤的頁面：

- **每週報告**顯示最近 7 天的情況：你達到限額的次數、接下來哪一項會最先耗盡、最繁忙的時段、使用最多的模型與專案、各項限額的目前狀態、依日期與小時統計的配額使用圖表（熱度圖），以及各專案的預估用量。
- **用量歷程記錄**顯示 7、30 或 90 天內，5 小時限額與每週限額的剩餘配額變化。每次重設都會以一條細垂直線標示。5 小時限額的 30 天與 90 天檢視沒有這樣的線；在這兩種檢視中，每個點代表當天的最低剩餘量。

共用同一個限額的模型共用一張圖表。**每週報告**索引標籤上的 **儲存報告（HTML）** 與 **儲存報告（Markdown）** 按鈕，以及**用量歷程記錄**索引標籤上的 **匯出 CSV** 與 **匯出 JSON** 按鈕，都會先詢問儲存位置，然後讓你選擇是否開啟該檔案。

## 5. 🎁 7 天 Pro 試用與授權啟用

第一次安裝擴充功能時，你可以在 7 天內使用**所有 Pro 功能**，不需要提供付款資料，也不需要註冊。之後你仍可使用免費功能：狀態列計量表、儀表板與側邊欄、卡片順序與顏色、8 種進度條樣式、37 種語言、配額偏低或回升至 100% 時，編輯器內顯示的自動警示，以及 24 小時的歷程記錄（更長的用量歷程記錄是 Pro 功能）。

1. **選擇方案：**
   - **[💎 Pro 終身版 — €9.99 一次付清](https://buy.polar.sh/polar_cl_xdY0LqtPIfPHfnG9o8Wo5QIIpJRlvhxQOZ6vL4g5jIB)**
   - **[Pro 月繳方案 — €2.99/月，隨時可取消](https://buy.polar.sh/polar_cl_avl0NAvpPN4jQD0vZRRg11yZ92BQ2OHCKw29f4dxlPW)**
2. **找到你的金鑰**：金鑰在購買通知信中，或在我們的付款服務供應商 Polar 的確認頁面上。
3. **啟用**：把你的 `PRO-XXXX-...` 金鑰貼到**設定**的**授權**區段，然後點選 **`啟用`**。你也可以點選 **`我有金鑰`**，它在試用橫幅上、**總覽**上，以及側邊欄中。啟用後，試用橫幅會立刻消失，徽章會顯示 **Pro**。你不需要重新載入視窗。
4. **購買之後**：如果你點選了購買按鈕，並在 30 分鐘內回到編輯器，擴充功能會檢查一次剪貼簿裡是否有授權金鑰，並在啟用前先徵求你的同意。除此之外，它不會讀取剪貼簿，剪貼簿中的文字也不會被儲存。
5. **檢查或移除金鑰**：設定 → 授權 → **`檢查授權`** 會立刻向 Polar 確認你的授權。**`移除金鑰`**（或命令 `Antigravity Quota：移除 Pro 授權金鑰`）會移除金鑰。你確認之後，金鑰會從這台電腦上刪除，包括檔案 `~/.antigravity-quota/license.key`。如果擴充功能能連上 Polar，這台電腦的啟用也會一併解除，這樣金鑰就能用在另一台電腦上。你的購買仍然有效。移除金鑰並不會取消月付訂閱。訂閱會繼續，直到你自行前往 Polar 取消為止。
