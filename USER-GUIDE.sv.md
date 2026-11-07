# Antigravity Quota Monitor: Användarguide

*Version 2.0.54*

**Språk:** [🇬🇧 English](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.md) · [🇪🇪 Eesti keel](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.et.md) · [🇩🇪 Deutsch](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.de.md) · [🇫🇮 Suomi](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.fi.md) · [🇪🇸 Español](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.es.md) · [🇫🇷 Français](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.fr.md) · [🇮🇹 Italiano](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.it.md) · [🇵🇱 Polski](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.pl.md) · [🇳🇱 Nederlands](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.nl.md) · 🇸🇪 Svenska · [🇵🇹 Português (Portugal)](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.pt-PT.md) · [🇧🇷 Português (Brasil)](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.pt-BR.md) · [🇧🇬 Български](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.bg.md) · [🇭🇷 Hrvatski](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.hr.md) · [🇨🇿 Čeština](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.cs.md) · [🇩🇰 Dansk](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.da.md) · [🇬🇷 Ελληνικά](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.el.md) · [🇭🇺 Magyar](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.hu.md) · [🇮🇪 Gaeilge](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.ga.md) · [🇱🇻 Latviešu](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.lv.md) · [🇱🇹 Lietuvių](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.lt.md) · [🇱🇺 Lëtzebuergesch](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.lb.md) · [🇲🇹 Malti](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.mt.md) · [🇷🇴 Română](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.ro.md) · [🇸🇰 Slovenčina](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.sk.md) · [🇸🇮 Slovenščina](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.sl.md) · [🇺🇦 Українська](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.uk.md) · [🇿🇦 Afrikaans](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.af.md) · [🇯🇵 日本語](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.ja.md) · [🇨🇳 简体中文](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.zh-CN.md) · [🇹🇼 繁體中文](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.zh-TW.md) · [🇰🇷 한국어](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.ko.md) · [🇻🇳 Tiếng Việt](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.vi.md) · [🇮🇩 Bahasa Indonesia](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.id.md) · [🇮🇳 हिन्दी](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.hi.md) · [🇰🇪 Kiswahili](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.sw.md) · [🇸🇦 العربية](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.ar.md)

---

## 1. Kom igång: var du hittar allt

![Instrumentpanel: fliken Översikt med kontrollerna i sidhuvudet](https://raw.githubusercontent.com/Nordicstocks/antigravity-quota-monitor/main/images/guide-overview.png)

När tillägget är installerat hittar du det på två ställen:
1. **📌 Ikonen i aktivitetsfältet:** Klicka på mätarikonen i aktivitetsfältet för att öppna sidopanelen **Antigravity Cockpit**.
2. **📊 Statusfältsmätaren, nere till höger:** I Free-planen ser den ut så här: `G: 87% 🟩🟩🟩🟩⬜ | C: 97% 🟩🟩🟩🟩🟩`. G står för Gemini-modellerna och C för Claude- och GPT-modellerna. Pro visar dessutom hur lång tid som är kvar till återställningen och vid vilket klockslag den sker, till exempel `↻3h 52m (19:52)`. Håll muspekaren över mätaren för detaljer (se avsnitt 2).

![Sidopanelen Antigravity Cockpit](https://raw.githubusercontent.com/Nordicstocks/antigravity-quota-monitor/main/images/guide-sidebar.png)

### Det här finns i sidhuvudet och överst i Översikt:
- **Flikar:** **Översikt**, **Analys** och **Inställningar**. Flikarna upprepar inte sidans rubrik; den visas bara i sidhuvudet.
- **Tid för senaste uppdatering och `Uppdatera`:** tiden visar när data senast uppdaterades, och knappen hämtar de senaste uppgifterna direkt.
- **Ögonknappen:** listar alla kort, med en bock vid de synliga. Avmarkera ett kort för att dölja det eller markera det för att få tillbaka det, och tryck sedan på **Enter** eller **OK** för att tillämpa. **Esc** stänger listan utan att spara. Siffran på knappen visar hur många kort som är dolda. Sidopanelen har samma knapp bredvid sin uppdateringsknapp.
- **Versionsknappen (`v2.0.54`):** söker efter en nyare version. När det finns en ny version står det **`Uppdatera till …`** på knappen. Klicka på den och ladda sedan om fönstret.
- **Välj språk:** listrutan finns uppe till höger på varje flik. Det första alternativet, **Auto**, visar också vilket språk som används just nu. Det följer redigerarens språk, eller systemspråket om redigeraren är inställd på engelska. Under det finns 37 språk, vart och ett skrivet på sitt eget språk. Ditt val gäller direkt och ändrar bara språket i det här tillägget. Med listan öppen kan du skriva en bokstav för att hoppa till det första språket som börjar på den. Samma inställning finns i avsnittet **Allmänt** under Inställningar.
- **`Natt / Dag / Auto`:** växlar till mörkt tema, ljust tema eller redigerarens tema.
- **Bredvid den första rubriken i Översikt:** **`Öppna i webbläsaren`** (Pro, ingår i 7-dagarsprovperioden) öppnar instrumentpanelen i din standardwebbläsare, till exempel för att visa den på en andra skärm, och **`Användarguide`** öppnar den här guiden. I Free-planen finns även **`Köp Pro`** och **`Jag har en nyckel`** där.
- **Överst ligger:** gränskorten (veckogränsen, sedan 5-timmarsgränsen). Ditt Google-abonnemang, promptkrediter, uppskattat API-värde och antalet modeller finns under dem.
- **Ett större fönster visar mer:** fler kort ryms på en rad. Inställningar får fler kolumner när fönstret är ungefär 1 500 pixlar brett. I Översikt flyttas uppgifterna om Google-abonnemanget till en kolumn till höger vid cirka 1 700 pixlar, och Analys visas bredvid gränserna vid cirka 2 400 pixlar.

---

## 2. Statusfältets popup

När du håller muspekaren över statusfältsmätaren öppnas en popup med de här delarna:
- **Licensstatus:** efter länkarna står det **Pro är aktivt** i rött när du har en betald nyckel, och `PROV · 5 d` (dagarna som återstår) under provperioden. I Free-planen visar popupen ingen licensstatus.
- **Länkar överst:** **Instrumentpanel**, **Öppna i webbläsaren**, **Inställningar** (öppnar fliken Inställningar) och **Snabbåtgärder** (öppnar menyn). I Free-planen finns även en länk för att köpa.
- **Konto och promptkrediter på en rad:** visar ditt Google-abonnemang (`Google AI Pro`), e-postadress och promptkrediter (`500 / 50 000`).
- **Veckogränser och 5-timmarsgränser:** varje modell har en egen rad med en mätare i 4 block, återställningstid och prognos för när kvoten tar slut. Återställningstiden och prognosen är Pro-funktioner; i Free-planen visar de två kolumnerna ett lås.

**Egen varning för veckogränsen i statusfältet:** När det finns lite kvar av veckokvoten för Gemini-modellerna eller för Claude- och GPT-modellerna visas ett separat objekt bredvid statusfältsmätaren, till exempel `G 7d 15%`. Som standard får det en varningsikon när 30 % eller mindre av veckokvoten återstår, orange bakgrund vid 22 % eller mindre och röd bakgrund vid 15 % eller mindre. Du kan ändra tröskelvärdena 30 % och 15 % i redigerarens inställningar (se **Aviseringar** i avsnitt 4); det orange steget ligger mitt emellan. Ett klick öppnar instrumentpanelen. Objektet visas inte så länge det finns tillräckligt mycket kvar av veckokvoten.

---

## 3. Modellkort: dra och släpp (`⋮⋮`), färgpalett (`🎨`), påminnelse vid återställning (`🔔`) och att dölja kort (`✕`)

![Modellkort med draghandtag, färgpalett, påminnelse vid återställning och krysset som döljer kortet](https://raw.githubusercontent.com/Nordicstocks/antigravity-quota-monitor/main/images/guide-card.png)

Att ändra ordning på korten, välja färger och dölja kort ingår i Free-planen, och dina val sparas automatiskt. Knappen **Påminn mig vid återställning** på ett kort är en Pro-funktion: den sätter en påminnelse för modellens återställningstid. Alla planer får den grundläggande aviseringen i redigeraren när kvoten är tillbaka på 100 %.
- **① ⋮⋮ Dra och släpp för att ändra kortens ordning:** Ta tag i handtaget **`⋮⋮`** uppe till vänster på valfritt kort och dra kortet dit du vill ha det.
- **② 🎨 Färgpalett för korten:** Klicka på palettknappen **`🎨`** i sidhuvudet på ett kort för att välja färg (**Default**, **mint**, **himmelsblå**, **lavendel**, **persika**, **ros**, **blågrön**).
- **③ 🔔 Påminnelse vid återställning:** Klicka på **`🔔 Påminn mig vid återställning`** längst ned på ett modellkort. När modellens gräns återställs får du en avisering i redigeraren, en ljudsignal (på Windows och macOS) och, om du har ställt in det, mobilaviseringar. Redigeraren måste vara öppen.
- **④ ✕ Dölj ett kort:** Klicka på krysset i det övre högra hörnet på ett kort för att ta bort det från instrumentpanelen, sidopanelen, statusfältets popup och statusfältet. Ditt val sparas. Hämta tillbaka kortet med ögonknappen bredvid **`Uppdatera`**, med plustecknet på raden **Dolda:** under korten, eller under **Inställningar → Allmänt → Kort på instrumentpanelen**. Att dölja ett kort ändrar inte dina gränser. Nya modeller visas fortfarande automatiskt. Du slutar få aviseringar om en gräns först när alla modeller som delar den är dolda.

---

## 4. Inställningar: Licens, Allmänt, Statusfält, Aviseringar, Auto-Starter, Mobil- och chattaviseringar, Terminal, Diskutrymme

![Fliken Inställningar](https://raw.githubusercontent.com/Nordicstocks/antigravity-quota-monitor/main/images/guide-settings.png)

Öppna fliken **Inställningar** (du når den också från statusfältets popup, från menyn eller med kommandot `Antigravity Quota: Öppna fliken Inställningar`). Alla avsnitt visas på en sida; inget är hopfällt. De ligger i en kolumn, eller i flera när fönstret är brett. Länkarna till vänster leder till respektive avsnitt; i ett smalt fönster ligger de i en rad överst. Ordningen är **Licens, Allmänt, Statusfält, Aviseringar, Auto-Starter, Mobil- och chattaviseringar, Terminal, Diskutrymme**. Avsnitten **Aviseringar**, **Auto-Starter**, **Mobil- och chattaviseringar** och **Terminal** är Pro-funktioner (ingår i provperioden) och har en Pro-etikett. I Free-planen öppnar deras kontroller köpdialogen. I Free-planen fungerar de grundläggande aviseringarna i redigeraren utan de här inställningarna: du får veta när kvoten sjunker till 10 % och 5 % och när den är tillbaka på 100 %.

- **Licens:** Med en aktiv licens visar avsnittet en rad med status samt **`Byt licensnyckel`**, **`Kontrollera licens`** och **`Ta bort nyckeln`**. I Free-planen och under provperioden visar det nyckelfältet med sin knapp och en länk för att köpa.
- **Allmänt:** gränssnittsspråk (samma val som i sidhuvudet), tema, uppdateringsintervall och **Kort på instrumentpanelen**.
- **Statusfält:** visningsläge (*Gemini och Claude*, *Minst kvot kvar*, *Gemini*, *Claude*) och 8 stilar för förloppsindikatorn med förhandsvisning.
- **Aviseringar:** Reserve Guard, morgonsammanfattning, ljud (på Windows och macOS), Modellbyteshjälp och kopiering av det rekommenderade modellnamnet. **`Alla inställningar i redigeraren`** öppnar redigerarens egna inställningar, där bara inställningarna för det här tillägget visas. Där finns alternativ som används mer sällan, till exempel tröskelvärdena för varningar. Själva länken ändrar ingenting.

När flera modeller delar en gräns får du en avisering i redigeraren och en mobilavisering för hela gruppen, inte en för varje modell. Rubriken anger gruppen, till exempel **Gemini-modeller (5-timmarsgräns)**.

- **Auto-Starter — `Starta 5-timmarsfönstret automatiskt`:** Av som standard. 5-timmarsfönstret startar med din första prompt, inte vid en fast tidpunkt. När den här inställningen är på kör tillägget `agy` vid den tid du väljer och skickar en kort prompt (`OK`) från ditt eget konto till de valda modellerna. Det är en riktig förfrågan. Om 5-timmarsfönstret startar `07:00` återställs gränsen vid ungefär `12:00`.
  - **Första gången ber den om ditt samtycke.** Prompten som skickas till modellerna förbrukar din kvot. Avsnitt 6 i [Googles tilläggsvillkor för Antigravity](https://antigravity.google/terms) förbjuder användning av tjänsten i samband med produkter som inte tillhandahålls av Google. Där står att det är ett avtalsbrott att använda programvara från tredje part för att komma åt tjänsten, och att det kan leda till att dina Antigravity- och/eller Gemini CLI-konton stängs av eller avslutas. Beslutet är ditt.
  - **Om redigeraren var stängd klockan `07:00`:** Auto-Starter körs när du öppnar redigeraren, så länge det har gått högst 3 timmar sedan den tid du valde. När de 3 timmarna har gått väntar den till nästa dag.
  - **Om en körning misslyckas:** tillägget visar ett meddelande om det och försöker igen efter 30 minuter, högst 3 gånger per dag och bara inom samma 3 timmar efter den tid du valde. Prompten skickas på nytt bara till de modeller där det misslyckades. Om `agy` inte är installerat försöker tillägget inte igen samma dag.
  - **Du ser alltid det faktiska resultatet:** om `agy` saknas eller körningen misslyckas visas ett fel. Mobilaviseringen om att 5-timmarsfönstret har startat skickas bara efter en lyckad körning. Om flera redigerarfönster är öppna är det bara ett av dem som skickar prompten.
- **`Starta 5-timmarsfönstret nu`:** Skickar samma prompt direkt. Första gången frågar den också efter ditt samtycke.
- **Mobil- och chattaviseringar — `Anslut mobilen` (ntfy, inget konto behövs):**
  1. Installera den kostnadsfria appen **ntfy** (App Store / Google Play).
  2. Tryck på **`+`** i appen och ange ämnet (topic) som visas på instrumentpanelen (det har en knapp **Kopiera**). Ämnen på ntfy.sh är offentliga: alla som känner till namnet kan läsa och skicka meddelanden. Därför är det föreslagna ämnet långt och slumpmässigt. Dela det inte.
  3. Gå tillbaka till tillägget och klicka sedan på **`Spara och skicka en testavisering`**. Resultatet visas i redigeraren.
  - **QR-koder:** QR-koden för Android öppnar ntfy-appen, om den är installerad, och prenumererar på ämnet. Den andra QR-koden öppnar ämnets webbsida, vilket inte får appen att prenumerera, så på iPhone gör du steg 2 för hand.
- **Discord/Slack Webhook & Telegram:** Ange din Webhook URL och klicka på **`Spara`**. För Telegram anger du ditt Chat ID, klickar på **`Spara`**, klickar sedan på **`Ange bot-token`** och klistrar in token i inmatningsrutan överst i fönstret.
- **`Testavisering`:** Klicka för att skicka en testavisering till varje kanal du har ställt in, på det språk du har valt.
- **Terminalens statusfil och kodsnuttar:** Klicka på **`zsh`**, **`Starship`** eller **`tmux`** för att öppna kodsnuttarna, kopiera snutten för det verktyg du använder och klistra in den i den fil som anges i snutten (statusfil: `~/.antigravity-quota/status.json`).
- **Diskutrymme:** Visar diskutrymmet som används av **Konversationer** (mappen `~/.gemini/antigravity/brain`; mappen `conversations` bredvid den rörs inte) och **Code Tracker** (`code_tracker`). **`🧹 Rensa gamla konversationer (>7 d)`** tittar bara på `brain`: den listar mappar där ingen fil har ändrats de senaste 7 dagarna och visar antal mappar, antal filer och storlek innan du bekräftar. Mapparna kan innehålla bilder, planer och loggar från gamla konversationer. När du har bekräftat flyttas de till systemets papperskorg (Papperskorgen i Windows), och du kan återställa dem tills du tömmer den. Om det misslyckas ligger de kvar och tillägget meddelar dig. Tillägget mäter bara `code_tracker`; det rensar den aldrig.

### Snabbåtgärder (menyn)

Länken **Snabbåtgärder** i statusfältets popup, knappen **Snabbåtgärder** i sidopanelen och kommandot `Antigravity Quota: Snabbåtgärder` öppnar alla tre samma meny: instrumentpanel, webbläsare, uppdatering, påminnelse, rapport, testavisering, användningshistorik (den kan spara CSV eller JSON), **Utseende, språk och statusfält**, användarguide och licens. Den här menyn innehåller bara åtgärder. Om du vill se dina kvotsiffror tittar du på statusfältet, dess popup eller instrumentpanelen. **Tillbaka — avbryt valet** går upp en nivå, och den sista raden i undermenyn **Utseende, språk och statusfält** öppnar fliken **Inställningar**.

Om du vill stänga någon av tilläggets listor, dialogrutor eller informationsrutor klickar du på **X** i hörnet eller trycker på **Esc**.

### Veckorapport och användningshistorik (Pro)

Öppna **Veckorapport** eller **Användningshistorik** från **Snabbåtgärder** (se ovan). **Veckorapport** finns också på fliken Analys. Oavsett vilken väg du tar öppnas en sida med två flikar:

- **Veckorapport** visar de senaste 7 dagarna: hur många gånger du nådde en gräns, vad som tar slut härnäst, den tid då du var mest aktiv, vilken modell och vilket projekt som användes mest, det aktuella läget för dina gränser, ett diagram över kvotanvändningen per dag och timme (en värmekarta) och uppskattad användning per projekt.
- **Användningshistorik** visar hur mycket av kvoten som fanns kvar under de senaste 7, 30 eller 90 dagarna, både för 5-timmarsgränsen och för veckogränsen. En tunn lodrät linje markerar varje återställning. Vyerna för 30 och 90 dagar har inga sådana linjer för 5-timmarsgränsen; där visar varje punkt dagens lägsta nivå.

Modeller som delar en gräns delar ett diagram. Knapparna **Spara rapport (HTML)** och **Spara rapport (Markdown)** på fliken Veckorapport samt **Exportera CSV** och **Exportera JSON** på fliken Användningshistorik frågar var filen ska sparas och erbjuder sedan att öppna den.

## 5. 🎁 7-dagars Pro-provperiod och licensaktivering

Första gången du installerar tillägget får du **alla Pro-funktioner i 7 dagar**, utan betalkort och utan registrering. Efter det behåller du Free-funktionerna: statusfältsmätaren, instrumentpanelen och sidopanelen, kortens ordning och färger, 8 stilar för förloppsindikatorn, 37 språk, automatiska aviseringar i redigeraren när kvoten är låg eller tillbaka på 100 %, och 24 timmars historik (den längre användningshistoriken är en Pro-funktion).

1. **Välj en plan:**
   - **[💎 Pro med livstidslicens — 9,99 € engångsbetalning](https://buy.polar.sh/polar_cl_xdY0LqtPIfPHfnG9o8Wo5QIIpJRlvhxQOZ6vL4g5jIB)**
   - **[Pro månadsvis — 2,99 €/månad, avsluta när du vill](https://buy.polar.sh/polar_cl_avl0NAvpPN4jQD0vZRRg11yZ92BQ2OHCKw29f4dxlPW)**
2. **Hitta din nyckel:** Nyckeln finns i köpbekräftelsen som skickas med e-post eller på bekräftelsesidan hos Polar, vår betalningsleverantör.
3. **Aktivera:** Klistra in din nyckel `PRO-XXXX-...` i avsnittet **Licens** under Inställningar och klicka på **`Aktivera`**. Du kan också klicka på **`Jag har en nyckel`**, som finns i provperiodsbannern, i Översikt och i sidopanelen. Efter aktiveringen försvinner provperiodsbannern direkt och märket visar **Pro**. Du behöver inte ladda om fönstret.
4. **Efter köpet:** om du har klickat på en köpknapp och kommer tillbaka till redigeraren inom 30 minuter kontrollerar tillägget urklippet en enda gång för att se om det innehåller en licensnyckel och frågar innan den aktiveras. Tillägget läser inte urklippet vid något annat tillfälle, och urklippstexten sparas inte.
5. **Kontrollera eller ta bort en nyckel:** Inställningar → Licens → **`Kontrollera licens`** kontrollerar din licens hos Polar direkt. **`Ta bort nyckeln`** (eller kommandot `Antigravity Quota: Ta bort Pro-licensnyckel`) tar bort nyckeln. När du har bekräftat raderas nyckeln från den här datorn, inklusive filen `~/.antigravity-quota/license.key`. Om tillägget når Polar avaktiveras nyckeln dessutom på den här datorn, så att den kan användas på en annan dator. Ditt köp förblir giltigt. Att ta bort nyckeln avslutar inte en månadsprenumeration. Prenumerationen fortsätter tills du avslutar den hos Polar.
