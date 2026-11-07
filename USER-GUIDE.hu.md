# Antigravity Quota Monitor: Felhasználói útmutató

*Verzió: 2.0.55*

**Nyelv:** [🇬🇧 English](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.md) · [🇪🇪 Eesti keel](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.et.md) · [🇩🇪 Deutsch](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.de.md) · [🇫🇮 Suomi](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.fi.md) · [🇪🇸 Español](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.es.md) · [🇫🇷 Français](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.fr.md) · [🇮🇹 Italiano](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.it.md) · [🇵🇱 Polski](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.pl.md) · [🇳🇱 Nederlands](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.nl.md) · [🇸🇪 Svenska](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.sv.md) · [🇵🇹 Português (Portugal)](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.pt-PT.md) · [🇧🇷 Português (Brasil)](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.pt-BR.md) · [🇧🇬 Български](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.bg.md) · [🇭🇷 Hrvatski](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.hr.md) · [🇨🇿 Čeština](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.cs.md) · [🇩🇰 Dansk](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.da.md) · [🇬🇷 Ελληνικά](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.el.md) · 🇭🇺 Magyar · [🇮🇪 Gaeilge](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.ga.md) · [🇱🇻 Latviešu](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.lv.md) · [🇱🇹 Lietuvių](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.lt.md) · [🇱🇺 Lëtzebuergesch](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.lb.md) · [🇲🇹 Malti](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.mt.md) · [🇷🇴 Română](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.ro.md) · [🇸🇰 Slovenčina](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.sk.md) · [🇸🇮 Slovenščina](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.sl.md) · [🇺🇦 Українська](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.uk.md) · [🇿🇦 Afrikaans](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.af.md) · [🇯🇵 日本語](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.ja.md) · [🇨🇳 简体中文](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.zh-CN.md) · [🇹🇼 繁體中文](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.zh-TW.md) · [🇰🇷 한국어](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.ko.md) · [🇻🇳 Tiếng Việt](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.vi.md) · [🇮🇩 Bahasa Indonesia](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.id.md) · [🇮🇳 हिन्दी](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.hi.md) · [🇰🇪 Kiswahili](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.sw.md) · [🇸🇦 العربية](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.ar.md)

---

## 1. Első lépések: hol találsz mindent

![Irányítópult: az Áttekintés lap a fejléc vezérlőivel](https://raw.githubusercontent.com/Nordicstocks/antigravity-quota-monitor/main/images/guide-overview.png)

A bővítmény telepítése után két helyen éred el:
1. **📌 Tevékenységsáv-ikon:** Kattints a mérőműszer ikonra a Tevékenységsávon, és megnyílik az **Antigravity Cockpit** oldalpanel.
2. **📊 Állapotsori mérő, jobb alul:** A Free csomagban így néz ki: `G: 87% 🟩🟩🟩🟩⬜ | C: 97% 🟩🟩🟩🟩🟩`. A G a Gemini modelleket, a C a Claude és GPT modelleket jelöli. A Pro a visszaállításig hátralévő időt és a visszaállítás időpontját is mutatja, például `↻3h 52m (19:52)`. Ha fölé viszed az egeret, részleteket látsz (lásd a 2. szakaszt).

![Antigravity Cockpit oldalpanel](https://raw.githubusercontent.com/Nordicstocks/antigravity-quota-monitor/main/images/guide-sidebar.png)

### Mi van a fejlécben és az Áttekintés tetején:
- **Lapok:** **Áttekintés**, **Elemzések** és **Beállítások**. A lapok nem ismétlik az oldal címét; az csak a fejlécben jelenik meg.
- **Utolsó frissítés ideje és `Frissítés`:** az idő azt mutatja, mikor frissültek utoljára az adatok; a gomb most kéri le a legfrissebb adatokat.
- **Szem gomb:** felsorolja az összes kártyát, a látható kártyák mellett pipával. Vedd ki a pipát egy kártyánál az elrejtéséhez, vagy tedd vissza a megjelenítéséhez, majd a módosítások alkalmazásához nyomd meg az **Enter** billentyűt vagy az **OK** gombot. Az **Esc** mentés nélkül bezárja a listát. A gombon lévő szám azt mutatja, hány kártya van elrejtve. Az oldalpanelen ugyanez a gomb a frissítés gomb mellett található.
- **Verziógomb (`v2.0.55`):** újabb verziót keres. Ha van, a gombon ez áll: **`Frissítés a … verzióra`**. Kattints rá, majd töltsd újra az ablakot.
- **Nyelv:** a legördülő lista minden lapon jobb felül található. Az első elem, az **Automatikus**, a most használt nyelvet is megmutatja. A szerkesztő nyelvét követi, vagy a rendszer nyelvét, ha a szerkesztő angolra van állítva. Alatta 37 nyelv áll, mindegyik a saját nyelvén írva. A választásod azonnal érvénybe lép, és csak ennek a bővítménynek a nyelvét változtatja meg. Nyitott listánál egy betű beírásával az első olyan nyelvre ugorhatsz, amely azzal a betűvel kezdődik. Ugyanez a beállítás a Beállítások **Általános** szakaszában is megtalálható.
- **`Éjszakai / Nappali / Automatikus`:** átvált a sötét, a világos vagy a szerkesztő témájára.
- **Az Áttekintés első címe mellett:** a **`Megnyitás böngészőben`** (Pro, a 7 napos próbaidőszakban is elérhető) az irányítópultot az alapértelmezett böngésződben nyitja meg, például azért, hogy egy második kijelzőn jelenítsd meg, a **`Felhasználói útmutató`** pedig ezt az útmutatót nyitja meg. A Free csomagban ott találod a **`Pro vásárlása`** és a **`Van kulcsom`** gombot is.
- **Mi áll legelöl:** a limitkártyák (előbb a heti, utána az 5 órás). Alattuk a Google-csomagod, a prompt-kreditek, a becsült API-érték és a modellek száma következik.
- **A nagyobb ablak többet mutat:** több kártya fér egy sorba. A Beállításokban több oszlop jelenik meg, ha az ablak nagyjából 1 500 pixel széles. Az Áttekintés lapon a Google-csomag részletei nagyjából 1 700 pixeles szélességnél külön oszlopba kerülnek, az Elemzések pedig nagyjából 2 400 pixelnél a limitek mellett jelenik meg.

---

## 2. Állapotsori buborék

Ha az egeret az állapotsori mérő fölé viszed, egy buborék nyílik meg ezekkel a részekkel:
- **Licencállapot:** a hivatkozások után a buborékban piros szöveggel az áll, hogy **A Pro aktív**, ha fizetős kulcsod van, a próbaidőszak alatt pedig `PRÓBA · 5 nap` jelenik meg (a hátralévő napokkal). A Free csomagban a buborék nem mutat licencállapotot.
- **Felső hivatkozások:** **Irányítópult**, **Megnyitás böngészőben**, **Beállítások** (megnyitja a Beállítások lapot) és **Gyorsműveletek** (megnyitja a menüt). A Free csomagban egy vásárlási hivatkozás is van.
- **Fiók és prompt-kreditek egy sorban:** megmutatja a Google-csomagodat (`Google AI Pro`), az e-mail-címedet és a prompt-kreditet (`500 / 50 000`).
- **Heti limitek és 5 órás limitek:** minden modell egy sorban jelenik meg a saját, 4 blokkos mérőjével, a visszaállítás idejével és az elfogyási előrejelzéssel. A visszaállítás ideje és az előrejelzés Pro funkció; a Free csomagban ez a két oszlop lakatot mutat.

**Külön figyelmeztetés a heti limitről az állapotsoron:** Ha a Gemini modellek vagy a Claude és GPT modellek heti kvótájából már kevés maradt, az állapotsori mérő mellett külön elem jelenik meg, például `G 7d 15%`. Alapértelmezés szerint figyelmeztető ikon van rajta, ha a heti kvóta 30% vagy annál kevesebb, narancssárga háttér jelenik meg 22% vagy az alatt, piros pedig 15% vagy az alatt. A 30%-os és a 15%-os küszöböt a szerkesztő beállításaiban módosíthatod (lásd a 4. szakasz **Riasztások** pontját); a narancssárga szint a kettő közt félúton van. Egy kattintás megnyitja az irányítópultot. Amíg elég marad a heti kvótából, az elem nem látszik.

---

## 3. Modellkártyák: húzás (`⋮⋮`), színpaletta (`🎨`), visszaállítási emlékeztető (`🔔`) és elrejtés (`✕`)

![Modellkártya a húzófogantyúval, a színpalettával, a visszaállítási emlékeztetővel és a kártyát elrejtő kereszttel](https://raw.githubusercontent.com/Nordicstocks/antigravity-quota-monitor/main/images/guide-card.png)

A kártyák átrendezése, a színük kiválasztása és az elrejtésük mind a Free csomag része, a választásaid pedig automatikusan mentődnek. A kártyán lévő **Emlékeztető visszaálláskor** gomb Pro funkció: emlékeztetőt állít be az adott modell visszaállításának idejére. Az alapriasztás minden csomagban elérhető: a szerkesztő értesít, amikor a kvóta újra 100%-on van.
- **① ⋮⋮ Kártyák sorrendje húzással:** Fogd meg bármelyik kártyát a bal felső **`⋮⋮`** fogantyúnál, és húzd oda, ahová szeretnéd.
- **② 🎨 Kártya színpalettája:** Kattints a **`🎨`** palettagombra bármelyik kártya fejlécében, és válassz színt (**Default**, **Menta**, **Égkék**, **Levendula**, **Barack**, **Rózsa**, **Pávakék**).
- **③ 🔔 Visszaállítási emlékeztető:** Kattints a **`🔔 Emlékeztető visszaálláskor`** gombra bármelyik modellkártya alján. Amikor az adott modell limitje visszaáll, értesítést kapsz a szerkesztőben, Windowson és macOS-en hangjelzést is hallasz, és ha beállítottad, telefonos értesítéseket is kapsz. A szerkesztőnek nyitva kell lennie.
- **④ ✕ Kártya elrejtése:** Kattints a kártya jobb felső sarkában lévő keresztre, hogy eltávolítsd az irányítópultról, az oldalpanelről, az állapotsori buborékból és az állapotsorból. A rendszer elmenti a választásodat. Visszahozhatod a **`Frissítés`** melletti szem gombbal, a kártyák alatti **Elrejtve:** sorban lévő pluszjellel, vagy a **Beállítások → Általános → Kártyák az irányítópulton** alatt. A kártya elrejtése nem változtat a limitjeiden. Az új modellek továbbra is automatikusan megjelennek. Egy limitről csak akkor nem kapsz több riasztást, ha a limitet megosztó összes modell el van rejtve.

---

## 4. Beállítások: Licenc, Általános, Állapotsor, Riasztások, Auto-Starter, Telefonos és chatértesítések, Terminál, Tárhely

![Beállítások lap](https://raw.githubusercontent.com/Nordicstocks/antigravity-quota-monitor/main/images/guide-settings.png)

Nyisd meg a **Beállítások** lapot (az állapotsori buborékból, a menüből vagy az `Antigravity Quota: Beállítások lap megnyitása` paranccsal is). Minden szakasz egy oldalon látható, egyik sincs összecsukva. Egy oszlopban követik egymást, széles ablakban pedig több oszlopban. A bal oldali hivatkozások az egyes szakaszokhoz visznek; keskeny ablakban ezek egy sorban állnak felül. A sorrend: **Licenc, Általános, Állapotsor, Riasztások, Auto-Starter, Telefonos és chatértesítések, Terminál, Tárhely**. A **Riasztások**, az **Auto-Starter**, a **Telefonos és chatértesítések** és a **Terminál** szakasz Pro funkció (a próbaidőszakban elérhető), és Pro címkével vannak jelölve. A Free csomagban a vezérlőik a vásárlási párbeszédablakot nyitják meg. Ugyanakkor a szerkesztőbeli alap riasztások ezen beállítások nélkül is működnek: értesítést kapsz, amikor a kvóta 10%-ra és 5%-ra csökken, és amikor újra 100%-on van.

- **Licenc:** Aktív licenc esetén ez a szakasz egy sort mutat az állapottal és a **`Licenckulcs cseréje`**, **`Licenc ellenőrzése`** és **`Kulcs törlése`** gombbal. A Free csomagban és a próbaidőszak alatt a kulcsmezőt mutatja a gombjával, valamint egy vásárlási hivatkozást.
- **Általános:** a felület nyelve (ugyanaz a választás, mint a fejlécben), a téma, a frissítési időköz és a **Kártyák az irányítópulton**.
- **Állapotsor:** megjelenítési mód (*Gemini és Claude*, *Legkevesebb maradék kvóta*, *Gemini*, *Claude*) és 8 folyamatjelző-stílus előnézettel.
- **Riasztások:** Reserve Guard, reggeli összefoglaló, hangok (Windowson és macOS-en), Modellváltási segéd és az ajánlott modellnév másolása. Az **`A szerkesztő összes beállítása`** a szerkesztő saját beállításait nyitja meg, erre a bővítményre szűrve. A szerkesztő beállításai ritkábban használt lehetőségeket is tartalmaznak, például a figyelmeztetési küszöböket. Maga a hivatkozás nem változtat semmit.

Ha több modell oszt meg egy limitet, a teljes csoportról egy szerkesztőbeli értesítést és egy telefonos értesítést kapsz, nem modellenként egyet. A cím a csoportot nevezi meg, például **Gemini-modellek (5 órás keret)**.

- **Auto-Starter — `Az 5 órás időablak automatikus indítása`:** Alapértelmezés szerint ki van kapcsolva. Az 5 órás időablak az első promptoddal indul, nem rögzített időpontban. Ha ez a beállítás be van kapcsolva, a bővítmény a kiválasztott időpontban lefuttatja az `agy` parancsot, és a saját fiókodból egy rövid promptot (`OK`) küld a kiválasztott modelleknek. Ez valódi kérés. Ha az 5 órás időablak `07:00`-kor indul, a limit nagyjából `12:00`-kor áll vissza.
  - **Első alkalommal a bővítmény a hozzájárulásodat kéri.** A modelleknek küldött üzenet a kvótádat használja. A [Google Antigravity kiegészítő szolgáltatási feltételeinek](https://antigravity.google/terms) 6. szakasza tiltja a szolgáltatás használatát olyan termékekkel összefüggésben, amelyeket nem a Google nyújt. Kimondja, hogy harmadik féltől származó szoftver használata a szolgáltatás eléréséhez szerződésszegés, amely az Antigravity és/vagy a Gemini CLI fiókjaid felfüggesztéséhez vagy megszüntetéséhez vezethet. A döntés a tiéd.
  - **Ha a szerkesztő `07:00`-kor zárva volt:** az Auto-Starter akkor fut le, amikor megnyitod a szerkesztőt, feltéve, hogy a választott időponthoz képest legfeljebb 3 óra telt el. Ha a 3 óra letelt, a következő napig vár.
  - **Ha egy futás sikertelen:** a bővítmény jelzi ezt, és 30 perc múlva újrapróbálja, naponta legfeljebb 3 alkalommal, és csak a választott időpontot követő 3 órán belül. A promptot csak azoknak a modelleknek küldi el újra, amelyeknél sikertelen volt. Ha az `agy` nincs telepítve, a bővítmény aznap nem próbálkozik újra.
  - **Mindig a valódi eredményt látod:** ha az `agy` hiányzik vagy hibázik, hibát látsz. A telefonos értesítés arról, hogy az 5 órás időablak elindult, csak sikeres futás után megy ki. Ha több szerkesztőablak van nyitva, csak az egyik küldi el a promptot.
- **`Az 5 órás időablak indítása most`:** Azonnal elküldi ugyanazt a promptot. Az első alkalommal ez is a hozzájárulásodat kéri.
- **Telefonos és chatértesítések — `Telefon csatlakoztatása` (ntfy, fiók nélkül):**
  1. Telepítsd az ingyenes **ntfy** alkalmazást (App Store / Google Play).
  2. Az alkalmazásban koppints a **`+`** jelre, és add meg az irányítópulton látható témát (van mellette **Másolás** gomb). Az ntfy.sh témák nyilvánosak: bárki, aki ismeri a nevet, olvashat és küldhet üzeneteket. Ezért hosszú és véletlenszerű a javasolt téma. Ne oszd meg.
  3. Térj vissza a bővítményhez, majd kattints a **`Mentés és tesztértesítés küldése`** gombra. Az eredmény a szerkesztőben jelenik meg.
  - **QR-kódok:** az Androidhoz tartozó QR-kód megnyitja az ntfy alkalmazást, ha telepítve van, és az alkalmazás feliratkozik a témára. A másik QR-kód a téma weboldalát nyitja meg, de ettől az alkalmazás nem iratkozik fel, ezért iPhone-on a 2. lépést kézzel végezd el.
- **Discord/Slack Webhook & Telegram:** Add meg a Webhook URL-t, és kattints a **`Mentés`** gombra. Telegramnál add meg a Chat ID-t, kattints a **`Mentés`** gombra, majd a **`Bottoken beállítása`** gombra, és illeszd be a tokent az ablak tetején megjelenő beviteli mezőbe.
- **`Tesztértesítés`:** Kattints rá, és tesztértesítést küld minden beállított csatornára, a kiválasztott nyelveden.
- **Terminálállapot-fájl és kódrészletek:** Kattints a **`zsh`**, **`Starship`** vagy **`tmux`** gombra a kódrészletek megnyitásához, másold ki a használt eszközhöz tartozó részletet, és illeszd be abba a fájlba, amelyet a részlet megnevez (állapotfájl: `~/.antigravity-quota/status.json`).
- **Tárhely:** Megmutatja a **Beszélgetések** (a `~/.gemini/antigravity/brain` mappa; a mellette lévő `conversations` mappához nem nyúl) és a **Kódkövető** (`code_tracker`) által használt tárhelyet. A **`🧹 Régi beszélgetések Kukába helyezése (>7 nap)`** csak a `brain` mappát vizsgálja: felsorolja azokat a mappákat, amelyekben az elmúlt 7 napban egyetlen fájl sem változott, és a megerősítés előtt megmutatja a mappák számát, a fájlok számát és a méretet. Ezek a mappák régi beszélgetések képeit, terveit és naplóit tartalmazhatják. A megerősítés után a rendszer Kukájába kerülnek (Windowson a Lomtárba), és visszaállíthatod őket, amíg ki nem üríted. Ha ez nem sikerül, a helyükön maradnak, és a bővítmény szól. A bővítmény a `code_tracker` mappát csak méri, soha nem tisztítja.

### Gyorsműveletek (a menü)

Az állapotsori buborék **Gyorsműveletek** hivatkozása, az oldalpanel **Gyorsműveletek** gombja és az `Antigravity Quota: Gyorsműveletek` parancs mind ugyanazt a menüt nyitja meg: irányítópult, böngésző, frissítés, emlékeztető, jelentés, tesztértesítés, használati előzmények (menthető CSV-ként vagy JSON-ként), **Megjelenés, nyelv és állapotsor**, felhasználói útmutató és licenc. Ez a menü csak műveleteket tartalmaz. A kvótaértékeket az állapotsorban, annak buborékában vagy az irányítópulton találod. A **Vissza — Kiválasztás megszakítása** egy szintet lép vissza, a **Megjelenés, nyelv és állapotsor** almenü utolsó sora pedig a **Beállítások** lapot nyitja meg.

A bővítmény bármely listájának, párbeszédablakának vagy tájékoztató felugró üzenetének bezárásához kattints a sarokban lévő **X**-re, vagy nyomd meg az **Esc** billentyűt.

### Heti jelentés és Használati előzmények (Pro)

Nyisd meg a **Heti jelentés** vagy a **Használati előzmények** oldalt a **Gyorsműveletek** menüből (lásd fent). A **Heti jelentés** az Elemzések lapon is megtalálható. Mindkét esetben egy oldal nyílik meg két lappal:

- A **Heti jelentés** az elmúlt 7 napot mutatja: hányszor értél el egy limitet, mi fogy el legközelebb, a legaktívabb időszakot, a legtöbbet használt modellt és projektet, a limitjeid jelenlegi állapotát, a kvótahasználat napok és órák szerinti diagramját (hőtérkép) és a projektenkénti becsült használatot.
- A **Használati előzmények** azt mutatja, mennyi kvóta maradt az elmúlt 7, 30 vagy 90 napban, az 5 órás és a heti limitnél egyaránt. Egy vékony függőleges vonal jelöli az egyes visszaállításokat. Az 5 órás limit 30 napos és 90 napos nézetében nincsenek ilyen vonalak; ott minden pont az adott nap legalacsonyabb szintjét mutatja.

Az egy limitet megosztó modellek közös diagramon jelennek meg. A Heti jelentés lapon a **Jelentés mentése (HTML)** és a **Jelentés mentése (Markdown)** gomb, a Használati előzmények lapon pedig az **Exportálás CSV-fájlba** és az **Exportálás JSON-fájlba** gomb is a mentés helyét kérdezi meg, majd felajánlja a fájl megnyitását.

## 5. 🎁 7 napos Pro próbaidőszak és licenc aktiválása

A bővítmény első telepítésekor **7 napig minden Pro funkciót** megkapsz, bankkártya és regisztráció nélkül. Ezután megmaradnak a Free funkciók: az állapotsori mérő, az irányítópult és az oldalpanel, a kártyák sorrendje és színei, 8 folyamatjelző-stílus, 37 nyelv, a szerkesztőbeli automatikus riasztások, ha fogy a kvóta vagy újra 100%-on van, és 24 óra előzmény (a hosszabb Használati előzmények Pro funkció).

1. **Válassz csomagot:**
   - **[💎 Örökös Pro-licenc — egyszeri 9,99 € díj](https://buy.polar.sh/polar_cl_xdY0LqtPIfPHfnG9o8Wo5QIIpJRlvhxQOZ6vL4g5jIB)**
   - **[Havi Pro — 2,99 €/hó, bármikor lemondható](https://buy.polar.sh/polar_cl_avl0NAvpPN4jQD0vZRRg11yZ92BQ2OHCKw29f4dxlPW)**
2. **Keresd meg a kulcsodat:** A kulcsod a vásárlásról kapott e-mailben vagy a Polar, a fizetési szolgáltatónk visszaigazoló oldalán található.
3. **Aktiválás:** Illeszd be a `PRO-XXXX-...` kulcsodat a Beállítások **Licenc** szakaszába, és kattints az **`Aktiválás`** gombra. Rákattinthatsz a **`Van kulcsom`** gombra is, amely a próbaidőszak sávján, az Áttekintésen és az oldalpanelen található. Az aktiválás után a próbaidőszak sávja azonnal eltűnik, és a jelvényen **Pro** áll. Az ablakot nem kell újratöltened.
4. **Vásárlás után:** ha rákattintottál egy vásárlási gombra, és 30 percen belül visszatérsz a szerkesztőbe, a bővítmény egyszer ellenőrzi, hogy a vágólapon licenckulcs van-e, és az aktiválás előtt rákérdez. Máskor nem olvassa a vágólapot, és a vágólap szövegét nem tárolja.
5. **Kulcs ellenőrzése vagy eltávolítása:** Beállítások → Licenc → a **`Licenc ellenőrzése`** azonnal ellenőrzi a licencedet a Polarnál. A **`Kulcs törlése`** (vagy az `Antigravity Quota: Pro licenckulcs eltávolítása` parancs) eltávolítja a kulcsot. A megerősítés után a kulcs törlődik erről a számítógépről, a `~/.antigravity-quota/license.key` fájlt is beleértve. Ha a bővítmény eléri a Polart, ennek a számítógépnek az aktiválási helye is felszabadul, így a kulcs használható egy másik számítógépen. A vásárlásod érvényes marad. A kulcs törlése NEM mondja le a havi előfizetést. Az előfizetés addig folytatódik, amíg te le nem mondod a Polarnál.
