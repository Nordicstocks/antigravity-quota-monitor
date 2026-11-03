# 📖 Antigravity Ultimate Cockpit Quota Monitor & Dashboard — Täielik Visuaalne Kasutusjuhend / Visual User Manual (ET & EN)

> [!TIP]
> **Ametlik dokumentatsioon (v2.0.24 — Uus ÖÖ / PÄEV Disainisüsteem):** See juhend sisaldab uue kolme vaatega (**`Ülevaade` · `Analüütika` · `Seaded`**) ja vasaku külgriba (**`Antigravity Cockpit`**) visuaalseid ekraanipilte ning kõigi teenuste täpset kirjeldust. Avalik GitHubi versioon: [github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.md](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.md).

---

# 🇪🇪 I OSA: EESTIKEELNE VISUAALNE KASUTUSJUHEND

## 1. Ülevaade (`Ülevaade` / Overview) — Päise Vahelehed, Öö/Päev Lüliti, 4 KPI Plokki, 7-Päeva Nädalalimiidid ja 5-Tunni Mudelikaardid

````carousel
![ÖÖ-režiim: Ülevaade (Overview Night)](images/new-ui-01-overview-night.png)
<!-- slide -->
![PÄEV-režiim: Ülevaade (Overview Day)](images/new-ui-02-overview-day.png)
````

### Päise (`AppHeader`) ja Ülevaate (`Ülevaade`) ehitus:
1. **Ühtne kleepuv ülemine päiseriba (`AppHeader`):**
   - **Vasakul:** Brändi ikoon + pealkiri **`Antigravity Quota ülevaade`** + **`PRO`** märgis.
   - **Keskel (3 põhivaadet):** **`Ülevaade`** (vaikimisi avatud), **`Analüütika`** ja **`Seaded`**.
   - **Paremal:** Andmete värskuse indikaator (`● Uuendatud 19:09`), esmane tegevusnupp **`Värskenda`** ja ühtne horisontaalne teemalüliti **`Öö · Päev · Automaatne`**.
2. **4 KPI Plokki (`MetricTile`):**
   - **Konto pakett:** Sinu aktiivne tellimus (nt `Google AI Pro`).
   - **Kvoodikrediit:** Allesolev vs igakuine krediit (`48 950 / 50 000`).
   - **Hinnanguline väärtus API-hindade järgi:** Aus API-ekvivalendi hinnang tegelikult kasutatud kvoodi põhjal (kuvatakse roheliselt, kui kasutus > 0%).
   - **Jälgitavad mudelid:** Aktiivsete mudelite arv (`5`).
3. **Nädalalimiidid (7-päevane periood — `WeeklyQuotaCard`):**
   - 2 kõrvuti kaarti (**`Gemini Models`** ja **`Claude & GPT`**) 8px edenemisriba, täpse uuenemisaja ja ammendumise prognoosiga.
4. **5 tunni limiidid (`ModelQuotaCard` — 5 kaarti ühel real laias vaates):**
   - **Mudelikaartide lohistamine (`⋮⋮`):** Haara kaardi vasakust ülanurgast **`⋮⋮`** ikoonist ja tõsta mudelid endale sobivasse järjekorda.
   - **7 taustatooni valija (`🎨`):** Kliki kaardi päises paleti ikoonile, et valida kaardile personaalne toon (*Mint*, *Sky*, *Lavender*, *Peach*, *Rose*, *Teal*).
   - **10-osaline LED-skaala + Sparkline-trendijoon + Kvoodivaru hoiatus + 1-kliki meeldetuletus (`Teavita, kui kvoot uueneb`)**.
5. **Alumine olekuriba (`OverviewFooter`):** Näitab kokkuvõtlikult aktiivset kvoodivaru (`Kvoodivaru 20%`), teavituste olekut ja otselinki **`Halda seadeid →`**.

---

## 2. Seaded ja Pro-Juhtimiskeskus (`Seaded` / Settings) — 37 Keelt, 8 Ribastiili, Kvoodivaru, `07:00` Auto-Warmup, Push-Teavitused ja Vahemälu Puhastaja

````carousel
![ÖÖ-režiim: Seaded ja Pro-juhtimiskeskus (Settings Night)](images/new-ui-03-settings-night.png)
<!-- slide -->
![PÄEV-režiim: Seaded ja Pro-juhtimiskeskus (Settings Day)](images/new-ui-04-settings-day.png)
````

Kliki ülemisel päiseribal vahelehele **`Seaded`**:
1. **Vasak tulp (`Välimus, keel ja olekuriba`):**
   - **Kasutajaliidese keel:** 37 keelt (automaatse OS-i keele tuvastusega).
   - **Värskendusintervall:** Segmenditud valik `30 s`, `60 s`, `120 s`, `300 s`.
   - **Olekuriba kuvamisrežiim:** *Kompaktne (G | C)*, *Madalaim kvoot*, *Gemini*, *Claude*.
   - **Edenemisriba stiil (2×4 ruudustik) + reaalajas `Eelvaade`:** Näed kohe valitud stiili eelvaadet nii Gemini kui Claude jaoks.
2. **Keskmine tulp (`Pro-hoiatused ja kvoodivaru`):**
   - **Kvoodivaru (`Reserve Guard`):** Vali `10%`, `20%`, `30%` või `40%` — hoiatab, kui praeguse tempoga langeks kvoot alla varupiiri.
   - **Lülitid:** *Hommikune kvoodikokkuvõte*, *macOS-i helid*, *Mudelivahetuse abi (≤ 5%)* ja *Kopeeri soovitatud mudeli nimi*.
   - **5h sessiooni automaatne käivitaja (`Auto-Warmup + Wake Catch-up`):** Seadista kellaaeg (nt `07:00` kiirvalikutega `06:00`, `07:00`, `08:00`), vali sihtmärk (`Claude + Gemini`, `Claude`, `Gemini`) või kliki **`▷ Käivita 5h sessioon kohe`**.
3. **Parempoolne tulp (`Teavitused ja agy CLI`):**
   - **ntfy.sh-teema** (0 kontot vaja), **Discordi / Slacki webhooki URL** ja **Telegrami teavitused** (`Määra boti token` + `Saada testteavitus`).
4. **Alumised 2 tööriistakaarti (`Vahemälu ja litsents` + `terminali ja agy CLI olekurida`):**
   - **Vahemälu puhastaja:** Näitab `BRAIN` ja `CODE TRACKER` mahtu ning lubab 1 klikiga kustutada üle 7 päeva vanuse vahemälu (`Puhasta vana vahemälu (>7p)`) või avada kausta Finderis (`Ava kaust`).
   - **Pro-litsentsi aktiveerimine:** Sisesta `Polar.sh` litsentsivõti otse lahtrisse ja kliki **`Sisesta litsentsivõti`**.
   - **Terminali ja `agy` CLI olekurida:** Vali `zsh`, `Starship` või `tmux` ja kopeeri valmis koodilõik.

---

## 3. Analüütika (`Analüütika` / Analytics) — `7×24` Kasutusmuster, Projektide Jaotus ja Otsinguga Kvoodiajalugu

````carousel
![ÖÖ-režiim: Analüütika (Analytics Night)](images/new-ui-05-analytics-night.png)
<!-- slide -->
![PÄEV-režiim: Analüütika (Analytics Day)](images/new-ui-06-analytics-day.png)
````

Kliki ülemisel päiseribal vahelehele **`Analüütika`**:
- **Vasakul (`Kvoodikasutus nädalapäeva ja tunni järgi`):** `7×24` heatmap-maatriks kohaliku aja järgi koos intensiivsuse legendiga (`Vähem → Rohkem`).
- **Paremal (`Hinnanguline kvoodikasutus projektide kaupa`):** Näitab täpselt, millised tööruumid/projektid on viimase 7 päeva jooksul kõige rohkem kvooti tarbinud.
- **All (`Kvoodiajalugu ja statistika`):** Otsingukastiga (`Mudel või grupp...`) ja mudelifiltriga (`Kõik mudelid`) tabel + **`Ekspordi CSV`**, **`Ekspordi JSON`** ja **`Nädalaaruanne`**.

---

## 4. Vasak Külgpaneel (`Antigravity Cockpit` Activity Bar Sidebar) ja Alumine Olekuriba

![Vasak külgpaneel: Antigravity Cockpit Sidebar](images/new-ui-07-sidebar-night.png)

Vasakul suurel külgribal (`Activity Bar`) asub püsiv **Antigravity Cockpit** ikoon, mis avab uue tumeda grafiit- või heleda päevadisainiga kiirpaneeli:
- **Kiirnupud üleval:** `Ava graafiline ülevaade`, `Ava brauseris`, `Toimingud`.
- **5 tunni limiidid ja 7-päevased nädalalimiidid** koos pakkuja märgistega (`G`, `A\`, `O`).
- **Vahemälu & Kettaruum (`BRAIN` ja `CODE TRACKER`)** + 1-kliki puhastusnupp.
- **5h Auto-Warmup (`07:00`)** mudelivalija ja kiirkäivitusnupp.

---

# 🇬🇧 PART II: COMPLETE VISUAL USER MANUAL (ENGLISH)

## 1. Overview (`Ülevaade`) — Sticky AppHeader, 3 View Tabs, Night/Day/Auto Switch, 4 KPI Tiles, 7-Day Weekly Pools & 5-Hour Model Cards
- **Unified Top Header (`AppHeader`):** Navigate cleanly between **Overview**, **Analytics**, and **Settings**, check data freshness, trigger **Refresh**, or toggle **Night / Day / Auto** mode in 1 click.
- **4 Metric Tiles:** Account Plan, Prompt Credits (`48,950 / 50,000`), Honest Estimated API Value, and Tracked Models (`5`).
- **2 Weekly Pool Cards & 5 Model Cards:** Drag-and-drop card ordering (`⋮⋮`), 7 custom color tints (`🎨`), 10-cell LED bars, sparklines, Reserve Guard warnings, and 1-click Reset Reminders (`🔔`).

## 2. Settings (`Seaded`) — 3-Column Control Center + 2 Utility Cards
- **Column 1 (Appearance, Language & Status Bar):** 37 languages, polling interval (`30s / 60s / 120s / 300s`), status bar display modes, and 8 progress bar styles with live preview.
- **Column 2 (Pro Alerts & Reserve Guard):** Reserve Guard (`10% / 20% / 30% / 40%`), Morning Summary, macOS Audio, Auto-Fallback Assist, and the **`07:00` 5h Session Auto-Starter + Automatic Wake Catch-Up**.
- **Column 3 (Push Notifications):** `ntfy.sh` topic, Discord/Slack Webhook URL, and Telegram Bot (`Set Bot Token` + `Send Test Notification`).
- **Bottom Utility Cards:** **1-Click Cache Cleaner (`>7d`)**, **Polar.sh Pro License Activation**, and **Terminal & `agy` CLI Status Line (`zsh`, `Starship`, `tmux`)**.

## 3. Analytics (`Analüütika`) — `7×24` Usage Heatmap, Per-Project Attribution & Searchable Quota History
- **7×24 Usage Heatmap** (local 24h view with 4-step intensity legend).
- **Per-Project Quota Attribution** across workspaces over the last 7 days.
- **Searchable & Filterable Quota History Table** with **CSV / JSON Export** and **Weekly Markdown Report**.
