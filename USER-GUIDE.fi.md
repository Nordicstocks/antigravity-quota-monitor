# Antigravity Quota Monitor: käyttöopas

*Versio 2.0.53*

**Kieli:** [🇬🇧 English](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.md) · [🇪🇪 Eesti keel](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.et.md) · [🇩🇪 Deutsch](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.de.md) · 🇫🇮 Suomi · [🇪🇸 Español](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.es.md) · [🇫🇷 Français](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.fr.md) · [🇮🇹 Italiano](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.it.md) · [🇵🇱 Polski](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.pl.md) · [🇳🇱 Nederlands](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.nl.md) · [🇸🇪 Svenska](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.sv.md) · [🇵🇹 Português (Portugal)](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.pt-PT.md) · [🇧🇷 Português (Brasil)](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.pt-BR.md) · [🇧🇬 Български](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.bg.md) · [🇭🇷 Hrvatski](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.hr.md) · [🇨🇿 Čeština](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.cs.md) · [🇩🇰 Dansk](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.da.md) · [🇬🇷 Ελληνικά](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.el.md) · [🇭🇺 Magyar](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.hu.md) · [🇮🇪 Gaeilge](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.ga.md) · [🇱🇻 Latviešu](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.lv.md) · [🇱🇹 Lietuvių](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.lt.md) · [🇱🇺 Lëtzebuergesch](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.lb.md) · [🇲🇹 Malti](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.mt.md) · [🇷🇴 Română](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.ro.md) · [🇸🇰 Slovenčina](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.sk.md) · [🇸🇮 Slovenščina](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.sl.md) · [🇺🇦 Українська](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.uk.md) · [🇿🇦 Afrikaans](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.af.md) · [🇯🇵 日本語](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.ja.md) · [🇨🇳 简体中文](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.zh-CN.md) · [🇹🇼 繁體中文](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.zh-TW.md) · [🇰🇷 한국어](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.ko.md) · [🇻🇳 Tiếng Việt](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.vi.md) · [🇮🇩 Bahasa Indonesia](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.id.md) · [🇮🇳 हिन्दी](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.hi.md) · [🇰🇪 Kiswahili](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.sw.md) · [🇸🇦 العربية](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.ar.md)

---

## 1. Aloitus: mistä kaiken löytää

![Koontinäyttö: Yleiskatsaus-välilehti ja yläreunan painikkeet](https://raw.githubusercontent.com/Nordicstocks/antigravity-quota-monitor/main/images/guide-overview.png)

Kun laajennus on asennettu, löydät sen kahdesta paikasta:
1. **📌 Toimintopalkin kuvake:** Avaa **Antigravity Cockpit** -sivupaneeli napsauttamalla toimintopalkin mittarikuvaketta.
2. **📊 Tilarivin mittari oikealla alhaalla:** Free-paketissa se näyttää tältä: `G: 87% 🟩🟩🟩🟩⬜ | C: 97% 🟩🟩🟩🟩🟩`. G tarkoittaa Gemini-malleja ja C Claude- ja GPT-malleja. Pro näyttää lisäksi nollautumiseen jäljellä olevan ajan ja nollautumisen kellonajan, esimerkiksi `↻3h 52m (19:52)`. Saat lisätietoja viemällä osoittimen mittarin päälle (katso luku 2).

![Antigravity Cockpit -sivupaneeli](https://raw.githubusercontent.com/Nordicstocks/antigravity-quota-monitor/main/images/guide-sidebar.png)

### Mitä yläreunassa ja Yleiskatsauksen alussa on:
- **Välilehdet:** **Yleiskatsaus**, **Analytiikka** ja **Asetukset**. Välilehdet eivät toista sivun otsikkoa; otsikko näkyy vain yläreunassa.
- **Viimeisin päivitysaika ja `Päivitä`:** aika kertoo, milloin tiedot on viimeksi päivitetty. Painike hakee uusimmat tiedot heti.
- **Silmäpainike:** luettelee kaikki kortit, ja näkyvät kortit on merkitty valintamerkillä. Poista valinta, jos haluat piilottaa kortin, tai valitse se uudelleen, jos haluat tuoda kortin takaisin. Ota muutos käyttöön painamalla **Enter** tai **OK**. **Esc** sulkee luettelon tallentamatta. Painikkeen luku kertoo, montako korttia on piilotettu. Sivupaneelissa on sama painike päivityspainikkeen vieressä.
- **Versiopainike (`v2.0.53`):** tarkistaa, onko uudempi versio saatavilla. Kun on, painikkeessa lukee **`Päivitä versioon …`**. Napsauta sitä ja lataa sitten ikkuna uudelleen.
- **Kieli:** pudotusvalikko on oikeassa yläkulmassa jokaisella välilehdellä. Ensimmäinen vaihtoehto, **Automaattinen**, näyttää myös käytössä olevan kielen. Se noudattaa editorin kieltä tai järjestelmän kieltä, jos editori on englanniksi. Sen alla on 37 kieltä, kukin omalla kielellään. Valintasi tulee voimaan heti ja vaihtaa vain tämän laajennuksen kielen. Kun luettelo on auki, voit hypätä ensimmäiseen kirjaimella alkavaan kieleen kirjoittamalla kyseisen kirjaimen. Sama asetus löytyy Asetusten kohdasta **Yleiset**.
- **`Yö / Päivä / Automaattinen`:** vaihtaa tumman teeman, vaalean teeman tai editorin teeman.
- **Yleiskatsauksen ensimmäisen otsikon vieressä:** **`Avaa selaimessa`** (Pro, mukana 7 päivän kokeilussa) avaa koontinäytön oletusselaimessa, esimerkiksi toisella näytöllä esitettäväksi, ja **`Käyttöopas`** avaa tämän oppaan. Free-paketissa siellä ovat myös **`Hanki Pro`** ja **`Minulla on avain`**.
- **Ensimmäisenä näkyvät:** rajakortit (ensin viikkoraja, sitten 5 tunnin raja). Niiden alla ovat Google-tilauksesi, prompt-krediitit, arvioitu API-arvo ja mallien määrä.
- **Isompi ikkuna näyttää enemmän:** riville mahtuu enemmän kortteja. Asetuksissa on enemmän sarakkeita, kun ikkuna on noin 1 500 pikselin levyinen. Yleiskatsauksessa Google-tilauksen tiedot siirtyvät oikeanpuoleiseen sarakkeeseen noin 1 700 pikselin kohdalla, ja Analytiikka tulee rajojen viereen noin 2 400 pikselin kohdalla.

---

## 2. Tilarivin ponnahdusikkuna

Kun viet osoittimen tilarivin mittarin päälle, avautuu ponnahdusikkuna, jossa on nämä osat:
- **Lisenssin tila:** linkkien jälkeen ikkunassa lukee punaisella **Pro on käytössä**, jos sinulla on maksettu avain, ja kokeilun aikana `KOKEILU · 5 pv` (jäljellä olevat päivät). Free-paketissa ponnahdusikkuna ei näytä lisenssin tilaa.
- **Yläreunan linkit:** **Koontinäyttö**, **Avaa selaimessa**, **Asetukset** (avaa Asetukset-välilehden) ja **Pikatoiminnot** (avaa valikon). Free-paketissa mukana on myös ostolinkki.
- **Tili ja prompt-krediitit samalla rivillä:** näyttää Google-tilauksesi (`Google AI Pro`), sähköpostiosoitteen ja prompt-krediitit (`500 / 50 000`).
- **Viikkorajat ja 5 tunnin rajat:** jokainen malli on omalla rivillään, ja siinä ovat 4 lohkon mittari, nollautumisaika ja loppumisennuste. Nollautumisaika ja ennuste ovat Pro-ominaisuuksia. Free-paketissa nämä kaksi saraketta näyttävät lukon.

**Erillinen viikkorajan varoitus tilarivillä:** Kun Gemini-mallien tai Claude- ja GPT-mallien viikkokiintiötä on jäljellä vähän, tilarivin mittarin viereen ilmestyy erillinen kohde, esimerkiksi `G 7d 15%`. Oletuksena siinä on varoituskuvake, kun viikkokiintiötä on jäljellä enintään 30 %, oranssi tausta, kun sitä on jäljellä enintään 22 %, ja punainen tausta, kun sitä on jäljellä enintään 15 %. Voit muuttaa 30 %:n ja 15 %:n rajat editorin asetuksista (katso **Hälytykset** luvussa 4). Oranssi taso on näiden puolivälissä. Napsautus avaa koontinäytön. Kohde ei näy, kun viikkokiintiötä on jäljellä riittävästi.

---

## 3. Mallikortit: vetäminen (`⋮⋮`), värivalikoima (`🎨`), nollautumismuistutus (`🔔`) ja piilottaminen (`✕`)

![Mallikortti, jossa on vetokahva, värivalikoima, nollautumismuistutus ja kortin piilottava rasti](https://raw.githubusercontent.com/Nordicstocks/antigravity-quota-monitor/main/images/guide-card.png)

Korttien järjestäminen, värien valinta ja korttien piilottaminen kuuluvat Free-pakettiin, ja valintasi tallentuvat automaattisesti. Kortin **Muistuta, kun kiintiö täydentyy** -painike on Pro-ominaisuus: se asettaa muistutuksen kyseisen mallin nollautumisajalle. Kaikissa paketeissa saat editorissa perushälytyksen, kun kiintiö on taas 100 %.
- **① ⋮⋮ Korttien järjestäminen vetämällä:** Tartu mihin tahansa korttiin sen vasemman yläkulman **`⋮⋮`**-kahvasta ja vedä kortti haluamaasi kohtaan.
- **② 🎨 Kortin värivalikoima:** Valitse väri napsauttamalla palettipainiketta **`🎨`** minkä tahansa kortin yläosassa (**Oletus**, **Minttu**, **Taivas**, **Laventeli**, **Persikka**, **Ruusu**, **Sinivihreä**).
- **③ 🔔 Nollautumismuistutus:** Napsauta **`🔔 Muistuta, kun kiintiö täydentyy`** minkä tahansa mallikortin alareunassa. Kun kyseisen mallin raja nollautuu, saat ilmoituksen editorissa ja äänimerkin (Windowsissa ja macOS:ssä). Jos olet ottanut puhelinilmoitukset käyttöön, ne tulevat myös. Editorin on oltava auki.
- **④ ✕ Kortin piilottaminen:** Napsauta kortin oikean yläkulman rastia, niin kortti poistuu koontinäytöstä, sivupaneelista, tilarivin ponnahdusikkunasta ja tilariviltä. Valintasi tallentuu. Tuo kortti takaisin **`Päivitä`**-painikkeen vieressä olevalla silmäpainikkeella, korttien alla olevan **Piilotetut:**-rivin plusmerkillä tai kohdassa **Asetukset → Yleiset → Koontinäytön kortit**. Kortin piilottaminen ei muuta rajojasi. Uudet mallit tulevat edelleen näkyviin automaattisesti. Hälytykset jostakin rajasta loppuvat vasta, kun kaikki kyseisen rajan jakavat mallit on piilotettu.

---

## 4. Asetukset: Lisenssi, Yleiset, Tilarivi, Hälytykset, Auto-Starter, Puhelin- ja chat-ilmoitukset, Pääte, Levytila

![Asetukset-välilehti](https://raw.githubusercontent.com/Nordicstocks/antigravity-quota-monitor/main/images/guide-settings.png)

Avaa **Asetukset**-välilehti (myös tilarivin ponnahdusikkunasta, valikosta tai komennolla `Antigravity Quota: avaa Asetukset-välilehti`). Kaikki osiot näkyvät samalla sivulla, mikään osio ei ole suljettuna. Ne ovat yhdessä sarakkeessa tai useammassa, kun ikkuna on leveä. Vasemmalla olevat linkit vievät kuhunkin osioon, ja kapeassa ikkunassa ne ovat rivinä ylhäällä. Järjestys on **Lisenssi, Yleiset, Tilarivi, Hälytykset, Auto-Starter, Puhelin- ja chat-ilmoitukset, Pääte, Levytila**. Osiot **Hälytykset**, **Auto-Starter**, **Puhelin- ja chat-ilmoitukset** ja **Pääte** ovat Pro-ominaisuuksia (mukana kokeilussa), ja niissä on Pro-merkki. Free-paketissa niiden säätimet avaavat ostoikkunan. Free-paketissa editorin perushälytykset toimivat ilman näitä asetuksia: saat tiedon, kun kiintiö laskee 10 %:iin ja 5 %:iin ja kun se on taas 100 %.

- **Lisenssi:** Kun lisenssi on aktiivinen, tässä osiossa on yksi rivi, jolla näkyvät tila sekä **`Vaihda lisenssiavain`**, **`Tarkista lisenssi`** ja **`Poista avain`**. Free-paketissa ja kokeilun aikana osiossa on avainkenttä painikkeineen ja ostolinkki.
- **Yleiset:** käyttöliittymän kieli (sama valinta kuin yläreunassa), teema, päivitysväli ja **Koontinäytön kortit**.
- **Tilarivi:** näyttötila (*Gemini ja Claude*, *Vähiten kiintiötä jäljellä*, *Gemini*, *Claude*) ja 8 edistymispalkkityyliä esikatseluineen.
- **Hälytykset:** Reserve Guard, aamuyhteenveto, äänet (Windowsissa ja macOS:ssä), Mallinvaihtoapu ja suositellun mallin nimen kopiointi. **`Kaikki editorin asetukset`** avaa editorin omat asetukset niin, että näkyvissä ovat vain tämän laajennuksen asetukset. Niissä on harvemmin tarvittavia valintoja, kuten varoitusrajat. Itse linkki ei muuta mitään.

Kun useat mallit jakavat saman rajan, saat koko ryhmästä yhden editorin ilmoituksen ja yhden puhelinilmoituksen, et yhtä jokaisesta mallista. Otsikossa on ryhmän nimi, esimerkiksi **Gemini-mallit (5 tunnin raja)**.

- **Auto-Starter — `Käynnistä 5 tunnin jakso automaattisesti`:** Oletuksena pois päältä. 5 tunnin jakso alkaa ensimmäisestä promptistasi, ei kiinteänä kellonaikana. Kun tämä asetus on päällä, laajennus suorittaa komennon `agy` valitsemanasi kellonaikana ja lähettää valituille malleille lyhyen promptin (`OK`) omalta tililtäsi. Se on aito pyyntö. Jos 5 tunnin jakso alkaa kello `07:00`, raja nollautuu noin kello `12:00`.
  - **Ensimmäisellä kerralla laajennus pyytää suostumuksesi.** Malleille lähetettävä viesti kuluttaa kiintiötäsi. [Google Antigravityn lisäpalveluehtojen](https://antigravity.google/terms) kohta 6 kieltää palvelun käyttämisen yhdessä sellaisten tuotteiden kanssa, joita Google ei tarjoa. Siinä todetaan, että kolmannen osapuolen ohjelmiston käyttäminen palveluun pääsemiseen on rikkomus, joka voi johtaa Antigravity- ja/tai Gemini CLI -tiliesi jäädyttämiseen tai sulkemiseen. Päätös on sinun.
  - **Jos editori oli kiinni kello `07:00`:** Auto-Starter suoritetaan, kun avaat editorin, kunhan valitsemastasi ajasta on kulunut enintään 3 tuntia. Kun nuo 3 tuntia ovat kuluneet, se odottaa seuraavaan päivään.
  - **Jos suoritus epäonnistuu:** laajennus ilmoittaa siitä ja yrittää uudelleen 30 minuutin kuluttua, enintään 3 kertaa päivässä ja vain valitsemaasi aikaa seuraavien 3 tunnin aikana. Prompti lähetetään uudelleen vain niille malleille, joiden kohdalla lähettäminen epäonnistui. Jos `agy` ei ole asennettu, laajennus ei yritä uudelleen sinä päivänä.
  - **Näet aina todellisen tuloksen:** jos `agy` puuttuu tai epäonnistuu, näet virheen. Puhelinilmoitus siitä, että 5 tunnin jakso on alkanut, lähetetään vasta onnistuneen suorituksen jälkeen. Jos useita editorin ikkunoita on auki, vain yksi niistä lähettää promptin.
- **`Käynnistä 5 tunnin jakso nyt`:** lähettää saman promptin heti. Ensimmäisellä kerralla tämäkin pyytää suostumuksesi.
- **Puhelin- ja chat-ilmoitukset — `Yhdistä puhelimesi` (ntfy, tiliä ei tarvita):**
  1. Asenna maksuton **ntfy**-sovellus (App Store / Google Play).
  2. Napauta sovelluksessa **`+`** ja syötä koontinäytössä näkyvä aihe (siinä on **Kopioi**-painike). ntfy.sh-aiheet ovat julkisia: kuka tahansa, joka tietää nimen, voi lukea ja lähettää viestejä. Siksi ehdotettu aihe on pitkä ja satunnainen. Älä jaa sitä.
  3. Palaa laajennukseen ja napsauta **`Tallenna ja lähetä testi-ilmoitus`**. Tulos näkyy editorissa.
  - **QR-koodit:** Androidin QR-koodi avaa ntfy-sovelluksen, jos se on asennettu, ja tilaa aiheen. Toinen QR-koodi avaa aiheen verkkosivun, joka ei tilaa aihetta sovellukseen, joten iPhonessa tee vaihe 2 käsin.
- **Discord/Slack Webhook & Telegram:** Syötä webhook-osoitteesi ja napsauta **`Tallenna`**. Telegramia varten syötä Chat ID, napsauta **`Tallenna`**, napsauta sitten **`Aseta botin token`** ja liitä token ikkunan yläreunan syöttökenttään.
- **`Testi-ilmoitus`:** lähettää testi-ilmoituksen kaikille määrittämillesi kanaville valitsemallasi kielellä.
- **Päätteen tilatiedosto ja koodinpätkät:** Napsauta **`zsh`**, **`Starship`** tai **`tmux`**, jolloin koodinpätkät avautuvat. Kopioi käyttämäsi työkalun pätkä ja liitä se siihen tiedostoon, joka mainitaan pätkässä (tilatiedosto: `~/.antigravity-quota/status.json`).
- **Levytila:** näyttää, paljonko levytilaa **Keskustelut** (kansio `~/.gemini/antigravity/brain`; sen vieressä oleva `conversations`-kansio jää koskematta) ja **Koodiseuranta** (`code_tracker`) käyttävät. **`🧹 Siivoa vanhat keskustelutiedostot (>7 pv)`** tarkastelee vain kansiota `brain`: se luettelee kansiot, joissa mikään tiedosto ei ole muuttunut viimeisen 7 päivän aikana, ja näyttää kansioiden määrän, tiedostojen määrän ja koon ennen kuin vahvistat. Näissä kansioissa voi olla kuvia, suunnitelmia ja lokeja vanhoista keskusteluista. Vahvistuksen jälkeen ne siirtyvät järjestelmän roskakoriin (Windowsissa Roskakori), ja voit palauttaa ne, kunnes tyhjennät roskakorin. Jos siirto epäonnistuu, ne jäävät paikoilleen ja laajennus kertoo siitä. Laajennus vain mittaa kansion `code_tracker`; se ei koskaan siivoa sitä.

### Pikatoiminnot (valikko)

Tilarivin ponnahdusikkunan **Pikatoiminnot**-linkki, sivupaneelin **Pikatoiminnot**-painike ja komento `Antigravity Quota: pikatoiminnot` avaavat kaikki saman valikon: koontinäyttö, selain, päivitys, muistutus, raportti, testi-ilmoitus, käyttöhistoria (voi tallentaa CSV- tai JSON-tiedostona), **Ulkoasu, kieli ja tilarivi**, käyttöopas ja lisenssi. Tässä valikossa on vain toimintoja. Kiintiölukemat näet tilarivistä, sen ponnahdusikkunasta tai koontinäytöstä. **Takaisin — peruuta valinta** vie yhden tason ylöspäin, ja **Ulkoasu, kieli ja tilarivi** -alivalikon viimeinen rivi avaa **Asetukset**-välilehden.

Voit sulkea minkä tahansa laajennuksen luettelon, valintaikkunan tai tietoikkunan napsauttamalla kulmassa olevaa **X**-merkkiä tai painamalla **Esc**.

### Viikkoraportti ja käyttöhistoria (Pro)

Avaa **Viikkoraportti** tai **Käyttöhistoria** valikosta **Pikatoiminnot** (katso yllä). **Viikkoraportti** on myös Analytiikka-välilehdellä. Kummallakin tavalla avautuu sivu, jossa on kaksi välilehteä:

- **Viikkoraportti** näyttää viimeiset 7 päivää: kuinka monta kertaa saavutit rajan, mikä loppuu seuraavaksi, vilkkain ajankohta, eniten käytetty malli ja projekti, rajojesi nykytila, kaavio kiintiön käytöstä päivittäin ja tunneittain (lämpökartta) sekä arvioitu käyttö projekteittain.
- **Käyttöhistoria** näyttää 7, 30 tai 90 päivän ajalta, kuinka paljon kiintiötä oli jäljellä sekä 5 tunnin rajassa että viikkorajassa. Ohut pystyviiva merkitsee jokaisen nollautumisen. 5 tunnin rajan 30 ja 90 päivän näkymissä tällaisia viivoja ei ole; niissä jokainen piste näyttää kyseisen päivän alimman tason.

Samaa rajaa käyttävät mallit näkyvät samassa kaaviossa. Viikkoraportti-välilehden painikkeet **Tallenna raportti (HTML)** ja **Tallenna raportti (Markdown)** sekä Käyttöhistoria-välilehden painikkeet **Vie CSV** ja **Vie JSON** kysyvät, minne tiedosto tallennetaan, ja tarjoavat sitten sen avaamista.

## 5. 🎁 7 päivän Pro-kokeilu ja lisenssin aktivointi

Kun asennat laajennuksen ensimmäisen kerran, saat **kaikki Pro-ominaisuudet 7 päiväksi**, ilman maksukorttia ja rekisteröitymistä. Sen jälkeen Free-ominaisuudet säilyvät: tilarivin mittari, koontinäyttö ja sivupaneeli, korttien järjestys ja värit, 8 edistymispalkkityyliä, 37 kieltä, automaattiset hälytykset editorissa, kun kiintiö on vähissä tai taas 100 %, sekä 24 tunnin historia (pidempi käyttöhistoria on Pro-ominaisuus).

1. **Valitse paketti:**
   - **[💎 Elinikäinen Pro — kertamaksu 9,99 €](https://buy.polar.sh/polar_cl_xdY0LqtPIfPHfnG9o8Wo5QIIpJRlvhxQOZ6vL4g5jIB)**
   - **[Pro-kuukausitilaus — 2,99 €/kk, voit perua milloin tahansa](https://buy.polar.sh/polar_cl_avl0NAvpPN4jQD0vZRRg11yZ92BQ2OHCKw29f4dxlPW)**
2. **Etsi avaimesi:** Avaimesi on ostosähköpostissa tai maksupalveluntarjoajamme Polarin vahvistussivulla.
3. **Aktivoi:** Liitä `PRO-XXXX-...`-avaimesi Asetusten **Lisenssi**-osioon ja napsauta **`Aktivoi`**. Voit myös napsauttaa **`Minulla on avain`** -painiketta, joka on kokeilubannerissa, Yleiskatsauksessa ja sivupaneelissa. Aktivoinnin jälkeen kokeilubanneri katoaa heti ja merkissä lukee **Pro**. Ikkunaa ei tarvitse ladata uudelleen.
4. **Oston jälkeen:** jos napsautit ostopainiketta ja palaat editoriin 30 minuutin kuluessa, laajennus tarkistaa kerran, onko leikepöydällä lisenssiavain, ja kysyy ennen aktivointia. Se ei lue leikepöytää muulloin, eikä leikepöydän tekstiä tallenneta.
5. **Avaimen tarkistaminen tai poistaminen:** Asetukset → Lisenssi → **`Tarkista lisenssi`** tarkistaa lisenssisi Polarilta heti. **`Poista avain`** (tai komento `Antigravity Quota: poista Pro-lisenssiavain`) poistaa avaimen. Kun vahvistat, avain poistetaan tältä tietokoneelta, tiedosto `~/.antigravity-quota/license.key` mukaan lukien. Jos laajennus tavoittaa Polarin, myös tämän tietokoneen aktivointi poistetaan, joten avainta voi käyttää toisella tietokoneella. Ostoksesi pysyy voimassa. **Avaimen poistaminen EI peruuta kuukausitilausta.** Tilaus jatkuu, kunnes peruutat sen Polarissa.
