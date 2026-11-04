# 📖 Antigravity Quota Monitor — Täielik Visuaalne Kasutusjuhend / Visual User Manual (ET & EN)

*Versioon / Version 2.0.47*

> [!TIP]
> **Ametlik dokumentatsioon:** See juhend sisaldab nummerdatud visuaalseid ekraanipilte (`①`, `②`, `③`, `④`, `⑤`) iga nupu ja funktsiooni täpse asukohaga ning uueneb automaatselt iga uue funktsiooni lisandumisel. Avalik GitHubi versioon: [github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.md](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.md).

---

# 🇪🇪 I OSA: EESTIKEELNE VISUAALNE KASUTUSJUHEND

## 1. Kiirstart — Kust leida Päise Nupud, Külgpaneel (`Activity Bar`), Brauserivaade ja Litsentsivõtme Lahter?

![Päise nupud ja navigeerimine](https://raw.githubusercontent.com/Nordicstocks/antigravity-quota-monitor/fb46f6f/images/guide-1-open-and-header.png)

Pärast laienduse paigaldamist on sul **2 püsivat ja kohe nähtavat kohta**, kust oma AI kvoote ja tööriistu juhtida:
1. **📌 Vasakul suurel külgribal (`Activity Bar`):** Seal, kus asuvad Explorer, Search, Git ja Extensions, on püsiv **Antigravity Cockpit spidomeetri ikoon**. Klikkides sellele avaneb külgpaneel (*Mission Control*), kust näed reaalajas kõiki 5h ja 7 päeva limiite, saad 1 klikiga avada täis-Dashboardi või veebibrauseri vaate, käivitada 5h sessiooni ning puhastada vanad vestlusfailid!
2. **📊 All paremal olekuribal (`Status Bar`):** Reaalajas kvoodimõõdik `📊 G: 87% 🟩🟩🟩🟩⬜ ↻3h 52m (19:52) | C: 97% 🟩🟩🟩🟩🟩`.

### Mis on päises ja Ülevaate ülaosas:
- **Vahekaardid:** **Ülevaade**, **Analüütika** ja **Sätted**. Pealkiri on ainult päises.
- **Uuendamise kell ja `Värskenda`:** näitab viimast värskendust; nupp küsib andmed kohe.
- **Keel:** rippmenüü on päises igal vahekaardil. Esimene valik on **Redaktori keel (automaatne)**, seejärel 37 keelt nende endi nimedega. Valik rakendub kohe ja muudab ainult selle laienduse keelt. Tähe tippimine viib õige keeleni. Sama säte on Sätete osas **Üldine**.
- **`Öö / Päev / Automaatne`:** vahetab tumeda, heleda või redaktoriga sama teema.
- **Ülevaate esimese pealkirja kõrval:** **`Ava brauseris`** avab töölaua sinu tavalises veebibrauseris, näiteks teisel ekraanil (Pro, kuulub ka 7 päeva prooviaega), ja **`Kasutusjuhend`** avab selle juhendi. Tasuta versioonis on seal ka **`Osta Pro`** ja **`Mul on võti`**.
- **Mis on kus:** limiidikaardid on kõige ees (nädal, siis 5 tundi). Pakett, kvoodikrediit, hinnanguline API väärtus ja mudelite arv on nende all.

---

## 2. Alumise Olekuriba Hüpikaken (`Status Bar Hover Tooltip`)

![Parandatud laia vaatega olekuriba hüpikaken](https://raw.githubusercontent.com/Nordicstocks/antigravity-quota-monitor/fb46f6f/images/guide-2-status-hover-popup.png)

Kui liigutad hiire all paremal olekuribal kvoodimõõdiku (`G: 26% | C: 100%`) peale, avaneb **lai ja üherealine kiirülevaate aken**:
- **Nädalalimiidi hoiatus olekuribal:** kui mudelipere nädalalimiit on madal, tuleb peamise näidu kõrvale eraldi näit, näiteks `G 7p 15%`: hoiatusikooniga kuni 30%, oranž kuni 22%, punane kuni 15% (piirid tulevad sätetest). Klikk avab töölaua. Kui limiiti jätkub, seda näitu pole.
- **Litsentsi seis:** linkide järel on makstud võtmega punaselt **PRO on aktiivne**, prooviajal prooviaja märk. Tasuta versioonis pole seal midagi lisaks.
- **Ülemine lingirida:** **Graafiline ülevaade**, **Ava brauseris**, **Sätted** (avab vahekaardi Sätted) ja **Kiirtoimingud** (avab menüü). Tasuta versioonis ka ostulink.
- **Konto ja Kvoodikrediit ühel real:** Näed kohe oma paketti (`Google AI Pro`), e-posti ja järelejäänud kvoodikrediiti (`500 / 50 000`).
- **7-päevased nädalalimiidid ja 5 tunni mudelilimiidid:** Iga mudel (*Claude Opus 5.5*, *Claude Sonnet 5.5*, *GPT-OSS 120B*, *Gemini 3.8 Flash*, *Gemini 4 Argon*) on **ühel selgel horisontaalsel real** koos värvilise edenemisriba, täpse uuenemisaja ja ammendumise prognoosiga!

---

## 3. Mudelikaartide Lohistamine (`⋮⋮`), Taustavärvid (`🎨`) ja 1-Kliki Uuenemise Meeldetuletus (`🔔`)

![Mudelikaartide kohandamine: lohistamine, värvipalett ja meeldetuletus](https://raw.githubusercontent.com/Nordicstocks/antigravity-quota-monitor/fb46f6f/images/guide-3-cards-color-drag.png)

Kõik visuaalse töölaua kaardikohandused on **100% TASUTA** ja salvestuvad automaatselt:
- **`① ⋮⋮ Drag & Drop Card Order` (Kaartide ümbertõstmine):** Haara hiirega mis tahes mudelikaardi vasakust ülanurgast **`⋮⋮`** ikoonist ja **lohista kaart täpselt sinna kohta, kuhu soovid**. Sinu lemmikmudelid püsivad alati esimestena!
- **`② 🎨 Card Color Palette` (Mudelikaardi taustavärvi valimine):** Kliki mudelikaardi päises olevale värvipaleti ikoonile **`🎨`**. Avaneb värvitoonide hüpikmenüü (**Vaikimisi**, **Münt / Mint**, **Taevasinine / Sky**, **Lavendel / Lavender**, **Virsik / Peach**, **Roosa / Rose**, **Mereroheline / Teal**). Päevarežiimis on toonid mahedad pastelsed ja Öörežiimis sügavad tumedad klaasitoonid!
- **`③ 🔔 1-Click Reset Reminder` (`Remind Me at Reset` / `Teavita uuenemisel`):** Kliki kaardi all olevale nupule **`🔔 Remind Me at Reset`** — kui selle mudeli uuenemisaeg kätte jõuab, saad helimärguande, teate redaktoris ja kui oled telefoniteavitused seadistanud, siis ka teate telefoni. Redaktor peab selleks avatud olema.

---

## 4. Sätted — Litsents, Keel, Olekuriba, Hoiatused, Automaatne Käivitus, Telefon, Terminal ja Kettaruum

![Juhtpaneel: Vahemälu puhastaja, 07:00 automaatkäivitaja ja Push-teavitused](https://raw.githubusercontent.com/Nordicstocks/antigravity-quota-monitor/fb46f6f/images/guide-4-control-center.png)

Ava vahekaart **Sätted** (ka olekuriba hüpikust, menüüst või käsuga `Antigravity Quota: Ava sätete vahekaart`). Kõik sätted on ühes tulbas ja kõik osad on avatud. Vasakul on lingid osade juurde, kitsas aknas on need rida üleval. Järjekord on: **Litsents, Üldine, Olekuriba, Hoiatused, Automaatne käivitus, Telefon ja sõnumid, Terminal, Kettaruum**.

### Litsents
- **Aktiivse litsentsiga** on üks rida: seis ja nupud **`Muuda litsentsivõtit`**, **`Kontrolli litsentsi`** ja **`Eemalda võti`**.
- **Tasuta ja prooviajal** on võtme lahter koos nupuga ja ostulink.

### Üldine ja Olekuriba
- **Üldine:** kasutajaliidese keel (sama valik, mis päises), teema ja värskendusintervall.
- **Olekuriba:** näidurežiim (*Gemini ja Claude*, *Kõige vähem kvooti alles*, *Gemini*, *Claude*) ja 8 edenemisriba stiili koos eelvaatega.

### Hoiatused ja Automaatne Käivitus
- **🛡️ Reserve Guard (`10%`, `20%`, `30%`, `40%`):** Hoiatab sind enne, kui kvoot langeb praeguse kasutuskiiruse juures alla sinu valitud varupiiri.
- **Hommikune kokkuvõte, macOS-i helid** (ainult macOS-is), **Mudelivahetuse abi** ja **Kopeeri soovitatud mudeli nimi**: igaühel on oma lüliti.
- **`Kõik sätted redaktoris`:** avab redaktori enda sätted, filtreeritud sellele laiendusele. Seal on ka harvemad sätted, näiteks hoiatuspiirid. Link ise midagi ei muuda.
- **Automaatne käivitus — `Käivita 5 tunni aken automaatselt`:** vaikimisi väljas.
  - Google Antigravity 5 tunni periood algab sinu esimesest sõnumist, mitte kindlal kellaajal. Kui lülitad selle sisse, käivitab laiendus valitud kellaajal käsu `agy` ja saadab sinu enda kontolt valitud mudelitele lühikese päris päringu (`OK`). Kui aken algab kell `07:00`, peaks kvoot järgmisena taastuma umbes kell `12:00`.
  - **Esimesel sisselülitamisel küsib laiendus nõusolekut.** Päring kulutab kvooti. Antigravity tingimuste järgi ei tohi teenust kasutada koos toodetega, mida Google ei paku, ja teenusele kolmanda osapoole tarkvaraga ligipääsemine on lepingu rikkumine, mille eest võidakse konto peatada või sulgeda, nii et otsus on sinu.
  - **Kui arvuti oli kell `07:00` kinni:** päring tehakse redaktori avamisel, kuni 3 tundi hiljem. Hiljem sel päeval enam mitte.
  - **Kui päring ebaõnnestub:** laiendus ütleb selle ja proovib uuesti 30 minuti pärast, kokku kuni 3 katset päevas ja sama 3 tunni jooksul. Uuesti saadetakse ainult mudelitele, kus päring ebaõnnestus.
  - **Tulemus on päris:** kui `agy` puudub või ebaõnnestub, näed veateadet. Telefoniteade „käivitatud“ tuleb ainult pärast õnnestumist. Mitme avatud akna korral saadab päringu ainult üks aken.
- **`Käivita 5 tunni periood kohe`:** saadab sama päringu kohe (samuti pärast nõusolekut).

### Telefon ja Sõnumid (`ntfy.sh`, Telegram, Discord/Slack) ja Terminal

Mudelid, mis jagavad ühte limiiti, annavad ühe teate ja ühe telefoniteate, näiteks **Gemini mudelid (5 tunni limiit)**, mitte iga mudeli kohta eraldi.
- **`④ 📱 Ühenda telefon` (ntfy, kontot pole vaja):**
  1. Paigalda telefoni tasuta äpp **ntfy** (App Store / Google Play).
  2. Vajuta äpis **`+`** ja sisesta töölaual näidatud teema (seal on nupp **Kopeeri**). Teema on juhuslik ja pikk, sest ntfy.sh teemad on avalikud: hoia see enda teada.
  3. Vajuta **`Salvesta ja saada proovisõnum`**. Tulemus ilmub redaktoris.
  - **QR-koodid:** Androidi kood (kui ntfy äpp on olemas) avab äpi ja tellib teema. Teine kood avab teema veebilehe, kus tellimise nuppu ei ole, nii et iPhone'is tee samm 2 käsitsi.
- **💬 Discord / Slack Webhook & Telegram Bot:** Sisesta oma Webhook URL või Telegrami `Chat ID` + kliki **`Set Bot Token`**.
- **`⑤ 🚀 Test Notification`:** Kliki rohelisele nupule **`🚀 Test Notification`**, et saata kohe prooviteavitus oma telefoni (teavitused saabuvad automaatselt sinu valitud keeles!).
- **💻 Terminali olekufail ja koodilõigud:** Kliki **`zsh`**, **`Starship`** või **`tmux`**, et avada koodilõigud; kopeeri oma kesta oma ja kleebi see faili, mille ta nimetab (olekufail: `~/.antigravity-quota/status.json`).

### Kettaruum
- **Kettakasutus ja vanad vestlusfailid:**
  - Näitab, kui palju kettaruumi võtavad Antigravity **vestlused** (kaust `brain`) ja **koodi ajalugu** (kaust `code_tracker`).
  - Nupp **`🧹 Puhasta vanad vestlusfailid (>7p)`** vaatab ainult kausta `~/.gemini/antigravity/brain`. Ta loetleb vestluskaustad, kus pole viimase 7 päeva jooksul ükski fail muutunud, ja näitab enne kinnitust kaustade ja failide arvu ning suurust. Neis võib olla vanade vestluste pilte, plaane ja logisid.
  - Pärast sinu kinnitust liiguvad need **süsteemi prügikasti**, kust saad need tagasi tuua. Kui prügikasti viimine ei õnnestu, jäävad kaustad alles ja laiendus ütleb selle sulle. `code_tracker` kausta ainult mõõdetakse.
  - **`📂 Ava kaust`** avab kausta Finderis/Exploreris.

### Kiirtoimingud (menüü)

Olekuriba hüpiku link **Kiirtoimingud**, külgpaneeli nupp ja käsk `Antigravity Quota: Kiirtoimingud` avavad sama menüü. ülevaade, brauser, värskendamine, meeldetuletus, aruanne, kasutusajalugu (sealt saab salvestada CSV- või JSON-faili), proovisõnum, **Välimus, keel ja olekuriba**, kasutusjuhend ja litsents. Numbrid on olekuribal, selle hüpikus ja ülevaates. **Tagasi** viib ühe taseme võrra üles ja alammenüü viimane rida avab vahekaardi **Sätted**.

---

### Nädalaaruanne ja kasutusajalugu (Pro)

Ava olekuriba menüüst **Nädalaaruanne** või **Kasutusajalugu**, või Analüütika vaate nupust **Nädalaaruanne**. Avaneb leht kahe vahekaardiga:

- **Nädalaaruanne** näitab viimast 7 päeva: mitu korda limiit otsa sai, mis saab järgmisena otsa, kiireim aeg, enim kasutatud mudel ja projekt, praegused limiidid, nädalapäeva ja tunni soojuskaart ning hinnanguline kasutus projektide kaupa.
- **Kasutusajalugu** näitab iga limiidi kohta allesolevat kvooti 7, 30 või 90 päeva jooksul, eraldi 5 tunni limiidi ja nädalalimiidi kohta. Peen püstjoon tähistab uuenemist. 30 ja 90 päeva 5 tunni vaates on iga punkt selle päeva madalaim tase.

Mudelid, millel on üks ühine limiit, on ühes graafikus. Nupud **Salvesta aruanne (HTML)**, **Salvesta aruanne (Markdown)**, **Ekspordi CSV** ja **Ekspordi JSON** küsivad, kuhu fail salvestada, ja pakuvad seejärel selle avamist.

## 5. 🎁 7 Päeva TASUTA Pro Prooviaeg ja Litsentsi Aktiveerimine

Iga uus paigaldus saab **7 päeva kõiki Pro-funktsioone** otse laienduses, ilma kaardi ja registreerimiseta. Pärast seda jäävad tasuta osad alles.

1. **Vali plaan:**
   - **[💎 Eluaegne Pro — 9,99 € ühekordne makse](https://buy.polar.sh/polar_cl_xdY0LqtPIfPHfnG9o8Wo5QIIpJRlvhxQOZ6vL4g5jIB)**
   - **[Pro kuutellimus — 2,99 €/kuu, tühista igal ajal](https://buy.polar.sh/polar_cl_avl0NAvpPN4jQD0vZRRg11yZ92BQ2OHCKw29f4dxlPW)**
2. **Aktiveeri:** Kleebi oma `PRO-XXXX-...` võti Sätete ossa **Litsents** ja kliki **`Sisesta litsentsivõti`**. Võid vajutada ka Ülevaate nuppu **`Mul on võti`**.
3. **Võtme kontroll ja eemaldamine:** Sätted → Litsents → **`Kontrolli litsentsi`** küsib seisu Polarilt kohe. **`Eemalda võti`** (või käsk `Antigravity Quota: Eemalda Pro-litsentsivõti`). Pärast kinnitust kaob võti sellest arvutist, ka failist `~/.antigravity-quota/license.key`, ning võimaluse korral vabaneb selle arvuti aktiveering. Ost jääb kehtima. Kuutellimuse tühistad Polaris.
4. **Kust võti tuleb ja kuhu see läheb:** võtme leiad ostu e-kirjast või Polari kinnituslehelt. Nupp **`Mul on võti`** on prooviaja bänneril, Ülevaates ja külgpaneelil; Sätetes on kohe esimesena võtme lahter koos seisuga (Tasuta / prooviaeg). Pärast aktiveerimist kaob prooviaja bänner kohe ja märgiks saab **PRO**, akent pole vaja uuesti laadida.
5. **Pärast ostu:** kui vajutasid ostunuppu ja tuled 30 minuti jooksul redaktorisse tagasi, vaatab laiendus ühe korra, kas lõikelaual on litsentsivõti, ja küsib, kas see aktiveerida. Muul ajal ta lõikelauda ei loe, ja teksti ei salvestata.

Iga aken ja hüpik suletakse **X**-iga üleval paremas nurgas või klahviga **Esc**.

---
---

# 🇬🇧 PART II: COMPLETE VISUAL USER MANUAL (ENGLISH)

## 1. Quick Start — Top Header Controls, Left Activity Bar (`Antigravity Cockpit`), Browser View & License Input

![Top Header Controls & Navigation](https://raw.githubusercontent.com/Nordicstocks/antigravity-quota-monitor/fb46f6f/images/guide-1-open-and-header.png)

Once installed, you have **2 permanent, always-visible Mission Control entry points**:
1. **📌 Left Activity Bar Icon (`Antigravity Cockpit`):** Click the **Speedometer Gauge Icon** on the far-left sidebar to open the **Antigravity Cockpit Sidebar Panel**!
2. **📊 Bottom-Right Status Bar Meter:** `📊 G: 87% 🟩🟩🟩🟩⬜ ↻3h 52m (19:52) | C: 97% 🟩🟩🟩🟩🟩`.

### What's in the header and at the top of Overview:
- **Tabs:** **Overview**, **Analytics** and **Settings**. The title is in the header only.
- **Updated time and `Refresh`:** shows the last refresh; the button fetches the data now.
- **Language:** the dropdown is in the header on every tab. The first option is **Editor language (automatic)**, then 37 languages in their own names. It applies at once and changes the language of this extension only. Typing a letter jumps to a language. The same setting is in the **General** section of Settings.
- **`Night / Day / Auto`:** switches to the dark, the light or the editor's theme.
- **Beside the first heading on Overview:** **`Open in Browser`** opens the dashboard in your default web browser, for example on a second display (Pro, included in the 7-day trial), and **`User guide`** opens this manual. In Free you also find **`Buy Pro`** and **`I have a key`** there.
- **What comes first:** the limit cards (weekly, then 5-hour). Plan, prompt credits, estimated API value and the model count are below them.
- **Checking or removing a key:** Settings → License → **`Check license`** asks Polar now. **`Remove key`** (or the command `Antigravity Quota: Remove Pro License Key`) removes it. After you confirm, the key leaves this computer, including `~/.antigravity-quota/license.key`, and this computer's activation is released when possible. Your purchase stays valid. A monthly subscription is cancelled at Polar.
- **Where the key comes from and where it goes:** you'll find the key in the purchase email or on Polar's confirmation page. The **`I have a key`** button is on the trial banner, on Overview and in the sidebar; Settings starts with the key field and the status (Free / trial). After activation the trial banner goes at once and the badge says **PRO**, with no window reload.
- **After buying:** if you pressed a buy button and return to the editor within 30 minutes, the extension checks once whether the clipboard holds a license key and asks before activating it. It does not read the clipboard at any other time, and the text is not stored.
- **Closing things:** every window and popup closes with the **X** in its top right corner or with **Esc**.

---

## 2. Wide Single-Line Status Bar Hover Popup

![Wide Status Bar Hover Tooltip](https://raw.githubusercontent.com/Nordicstocks/antigravity-quota-monitor/fb46f6f/images/guide-2-status-hover-popup.png)

Hovering over the bottom-right Status Bar quota meter opens a **wide, single-line Markdown table**:
- **Weekly limit warning on the status bar:** when a family's weekly limit is low, a separate item appears next to the main one, for example `G 7d 15%`: with a warning icon up to 30%, orange up to 22%, red up to 15% (the limits come from the settings). A click opens the dashboard. With enough left, the item is not there.
- **License state:** after the links the popup says **PRO is active** in red when you have a paid key, and the trial wording during the trial. In Free there is nothing extra.
- **Top links:** **Visual Dashboard**, **Open in Browser**, **Settings** (opens the Settings tab) and **Quick Actions** (opens the menu). In Free, also a link to buy.
- **Account & Prompt Credits on One Line:** Displays your tier (`Google AI Pro`), email, and prompt credits (`500 / 50,000`).
- **7-Day Weekly Pools & 5-Hour Model Limits:** Every model row stays on **one crisp horizontal line** with its 5-block visual gauge, reset clock time, and run-out forecast!

---

## 3. Drag-and-Drop Model Cards (`⋮⋮`), Color Palette (`🎨`) & 1-Click Reset Reminder (`🔔`)

![Model Card Customization: Drag Handle, Color Palette, and Reset Reminder](https://raw.githubusercontent.com/Nordicstocks/antigravity-quota-monitor/fb46f6f/images/guide-3-cards-color-drag.png)

All card layout and color customizations are **100% FREE** and persisted automatically:
- **`① ⋮⋮ Drag & Drop Card Order`:** Grab any card by its top-left **`⋮⋮`** handle and drag it into your preferred slot.
- **`② 🎨 Card Color Palette`:** Click the palette button **`🎨`** on any card header to pick a tint (**Default**, **Mint**, **Sky**, **Lavender**, **Peach**, **Rose**, **Teal**).
- **`③ 🔔 1-Click Reset Reminder` (`Remind Me at Reset`):** Click **`🔔 Remind Me at Reset`** at the bottom of any model card to get a sound, an editor notification and, if you set up phone alerts, a phone alert when that model's reset time arrives. The editor must be open.

---

## 4. Settings — License, Language, Status Bar, Alerts, Auto-Starter, Phone, Terminal & Disk Space

![Control Center: Old Conversation Files, 07:00 Auto-Starter, and Phone Push Notifications](https://raw.githubusercontent.com/Nordicstocks/antigravity-quota-monitor/fb46f6f/images/guide-4-control-center.png)

Open the **Settings** tab (also from the status bar popup, the menu or the command `Antigravity Quota: Open Settings Tab`). All settings are in one column and every section is open. Links on the left go to each section; in a narrow window they are a row at the top. The order is **License, General, Status bar, Alerts, Auto-Starter, Phone and messages, Terminal, Disk space**.

- **License:** with an active license, one row with the status and **`Change license key`**, **`Check license`** and **`Remove key`**. In Free and during the trial, the key field with its button, and a link to buy.
- **General:** interface language (the same choice as in the header), theme and refresh interval.
- **Status bar:** display mode (*Gemini and Claude*, *Least quota left*, *Gemini*, *Claude*) and 8 progress bar styles with a preview.
- **Alerts:** Reserve Guard, morning summary, macOS sounds (on macOS only), Model Switch Assist and copying the recommended model name. **`All settings in the editor`** opens the editor's own settings filtered to this extension, where you also find rarer ones such as the warning thresholds. The link itself changes nothing.

Models that share one limit give one notification and one phone alert, for example **Gemini models (5-hour limit)**, not one per model.

- **Auto-Starter — `Start the 5-hour window automatically`:** Off by default. The 5-hour window starts with your first prompt, not at a fixed time. When on, the extension runs `agy` at your chosen time and sends a short real prompt (`OK`) to the selected models from your own account. If the window starts at `07:00`, the next refill should come around `12:00`.
  - **The first time, it asks for your consent.** The prompt uses quota. Antigravity's terms prohibit using the service with products not provided by Google. They say third-party access may be treated as a breach and can lead to account suspension. So the decision is yours.
  - **If your computer was closed at `07:00`:** it runs when you open the editor, up to 3 hours later, and not later that day.
  - **If a run fails:** the extension says so and tries again after 30 minutes, with at most 3 attempts a day and within the same 3 hours. Only the models that failed are asked again.
  - **Results are real:** if `agy` is missing or fails, you see an error. The "started" phone notification comes only after success. With several windows open, only one sends the prompt.
- **`Start 5-Hour Window Now`:** Sends the same prompt now, also after your consent.
- **Phone and messages — `Connect your phone` (ntfy, no account needed):**
  1. Install the free **ntfy** app (App Store / Google Play).
  2. In the app, press **`+`** and enter the topic shown on the dashboard (it has a **Copy** button). The topic is long and random because ntfy.sh topics are public: keep it to yourself.
  3. Press **`Save and send a test notification`**. The result appears in the editor.
  - **QR codes:** the Android code (with the ntfy app installed) opens the app and subscribes to the topic. The other code opens the topic's web page, which has no subscribe button, so on iPhone do step 2 by hand.
- **Discord/Slack Webhook & Telegram:** Enter your Webhook URL or Telegram Chat ID.
- **`Test Notification`:** Click to send a test notification to your phone, in your selected language!
- **Terminal:** the status file and shell snippets for `zsh`, `Starship` and `tmux`.
- **Disk space:** Shows the disk space used by **Conversations** (`~/.gemini/antigravity/brain`) and **Code history** (`code_tracker`). **`🧹 Clean Old Conversation Files (>7d)`** looks only at `brain`: it lists folders where no file changed in the last 7 days and shows the folder count, file count and size before you confirm. They can hold images, plans and logs from old conversations. After you confirm, they move to the **system Trash**, so you can restore them. If that fails, they stay in place and the extension tells you. `code_tracker` is only measured.

### Quick Actions (the menu)

The status bar popup link **Quick Actions**, the sidebar button and the command `Antigravity Quota: Quick Actions` open the same menu. dashboard, browser, refresh, reminder, report, usage history (it can save CSV or JSON), test notification, **Appearance, Language & Status Bar**, user guide and license. The numbers are on the status bar, in its popup and on the dashboard. **Back** goes up one level, and the last row of the submenu opens the **Settings** tab.

### Weekly Report and Usage History (Pro)

Open **Weekly Report** or **Usage History** from the status bar menu, or **Weekly Report** on the Analytics tab. A page opens with two tabs:

- **Weekly Report** shows the last 7 days: how many times a limit ran out, what runs out next, the busiest time, the most used model and project, the limits now, a weekday and hour heatmap, and estimated use per project.
- **Usage History** shows the quota left for each limit over 7, 30 or 90 days, for the 5-hour limit and the weekly limit. A thin vertical line marks a reset. In the 30 and 90 day 5-hour view, each point is the lowest level of that day.

Models that share one limit share one chart. **Save report (HTML)**, **Save report (Markdown)**, **Export CSV** and **Export JSON** ask where to save the file, then offer to open it.
