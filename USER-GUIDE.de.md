# 📖 Antigravity Quota Monitor: Bebildertes Benutzerhandbuch

*Version 2.0.51*

**Sprache:** [English](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.md) · [Eesti](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.et.md) · [Deutsch](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.de.md) · [简体中文](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.zh-CN.md) · [日本語](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.ja.md) · [Español](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.es.md)

---

## 1. Schnellstart – Kopfzeile, linke Aktivitätsleiste (`Antigravity Cockpit`), Browseransicht und Lizenzschlüssel

![Kopfzeile und Navigation](https://raw.githubusercontent.com/Nordicstocks/antigravity-quota-monitor/fb46f6f/images/guide-1-open-and-header.png)

Nach der Installation findest du die Erweiterung an **zwei festen Stellen, die immer sichtbar sind**:
1. **📌 Symbol in der linken Aktivitätsleiste (`Antigravity Cockpit`):** Klicke ganz links auf das **Tachometer-Symbol**. Damit öffnest du die **Seitenleiste von Antigravity Cockpit**.
2. **📊 Anzeige unten rechts in der Statusleiste:** `📊 G: 87% 🟩🟩🟩🟩⬜ ↻3h 52min (19:52) | C: 97% 🟩🟩🟩🟩🟩`.

### In der Kopfzeile und oben in der Übersicht findest du:
- **Registerkarten:** **Übersicht**, **Analytik** und **Einstellungen**. Der Titel steht nur in der Kopfzeile.
- **Aktualisierungszeit und `Aktualisieren`:** Die Uhrzeit zeigt die letzte Aktualisierung, die Schaltfläche ruft die Daten sofort ab.
- **Augensymbol:** Listet alle Karten auf; die sichtbaren tragen ein Häkchen. Entferne bei einer Karte das Häkchen, um sie auszublenden; setzt du es wieder, erscheint sie erneut. Die Zahl zeigt, wie viele Karten ausgeblendet sind. In der Seitenleiste findest du dasselbe Symbol neben der Schaltfläche zum Aktualisieren.
- **Versionsnummer (`v2.0.51`):** Ein Klick prüft, ob es eine neuere Version gibt. Ist eine verfügbar, steht dort die Schaltfläche **`Auf Version … aktualisieren`**. Klicke darauf und lade danach das Fenster neu.
- **Sprache:** Das Auswahlmenü steht auf jeder Registerkarte oben rechts. An erster Stelle steht **Automatisch**, dahinter die gerade verwendete Sprache: Diese Option folgt der Anzeigesprache des Editors oder, wenn diese Englisch ist, der Systemsprache. Danach folgen 37 Sprachen, jede mit ihrem Namen in der jeweiligen Sprache (zum Beispiel Français oder 日本語). Deine Auswahl gilt sofort und ändert nur die Sprache dieser Erweiterung. Tippst du einen Buchstaben, springt die Liste zu einer passenden Sprache. Dieselbe Auswahl gibt es in den Einstellungen im Abschnitt **Allgemein**.
- **`Nacht / Tag / Automatisch`:** schaltet auf das dunkle Farbdesign, das helle oder das des Editors um.
- **Neben der ersten Überschrift auf der Registerkarte Übersicht:** **`Im Browser öffnen`** zeigt das Dashboard in deinem Standardbrowser, zum Beispiel auf einem zweiten Monitor (Pro, auch in der 7-tägigen Testphase enthalten), und **`Benutzerhandbuch`** öffnet dieses Handbuch. In der kostenlosen Version stehen dort außerdem **`Pro kaufen`** und **`Schlüssel eingeben`**.
- **Als Erstes in der Übersicht:** die Limitkarten (erst das Wochenlimit, dann das 5-Stunden-Limit). Tarif, Prompt-Guthaben, geschätzter API-Gegenwert und die Anzahl der Modelle stehen darunter.
- **Ein größeres Fenster zeigt mehr:** Mehr Karten passen in eine Reihe. Ab etwa 1700 Pixeln Breite rücken die Tarifangaben in eine Spalte rechts. Ab etwa 2400 Pixeln wird die Registerkarte Analytik neben den Limits angezeigt. Die Einstellungen werden ab etwa 1500 Pixeln mehrspaltig angezeigt.

---

## 2. Pop-up der Statusleiste

![Pop-up der Statusleiste](https://raw.githubusercontent.com/Nordicstocks/antigravity-quota-monitor/fb46f6f/images/guide-2-status-hover-popup.png)

Bewegst du den Mauszeiger auf die Kontingentanzeige unten rechts in der Statusleiste, öffnet sich eine **breite, kompakte Tabelle mit einer Zeile pro Eintrag**:
- **Linkzeile ganz oben:** **Dashboard**, **Im Browser öffnen**, **Einstellungen** (öffnet die Registerkarte Einstellungen) und **Schnellaktionen** (öffnet das Menü). In der kostenlosen Version kommt ein Kauflink dazu.
- **Lizenzstatus:** Nach den Links steht in Rot **PRO ist aktiv**, wenn du einen gekauften Lizenzschlüssel verwendest; während der Testphase erscheint dort stattdessen **TEST** mit den verbleibenden Tagen. In der kostenlosen Version steht dort nichts weiter.
- **Konto und Prompt-Guthaben in einer Zeile:** Hier stehen dein Tarif (`Google AI Pro`), deine E-Mail-Adresse und dein Prompt-Guthaben (`500 / 50.000`).
- **Wochen- und 5-Stunden-Limits der Modelle:** Jedes Modell steht **in einer einzigen Zeile**, mit einer Anzeige aus fünf Blöcken, der Reset-Uhrzeit und der Verbrauchsprognose.

**Warnung zum Wochenlimit in der Statusleiste:** Wird es beim Wochenlimit einer Modellfamilie knapp, erscheint neben der Hauptanzeige ein eigener Eintrag, zum Beispiel `G 7d 15 %`: bis 30 % mit Warnsymbol, bis 22 % orange, bis 15 % rot (die Warnschwellen legst du in den Einstellungen fest). Ein Klick öffnet das Dashboard. Ist noch genug übrig, erscheint dieser Eintrag nicht.

---

## 3. Modellkarten verschieben (`⋮⋮`), Kartenfarben (`🎨`) und Reset-Erinnerung mit 1 Klick (`🔔`)

![Modellkarten anpassen: Griff zum Verschieben, Farbpalette und Reset-Erinnerung](https://raw.githubusercontent.com/Nordicstocks/antigravity-quota-monitor/fb46f6f/images/guide-3-cards-color-drag.png)

Anordnung, Farben und ausgeblendete Karten sind **kostenlos** und werden automatisch gespeichert. Die Reset-Erinnerung ist eine Pro-Funktion.
- **`① ⋮⋮ Karten per Drag-and-drop anordnen`:** Ziehe eine Karte oben links am Griff **`⋮⋮`** an die gewünschte Stelle.
- **`② 🎨 Kartenfarbe`:** Klicke oben auf einer Karte auf das Palettensymbol **`🎨`** und wähle einen Farbton (**Standard**, **Mint**, **Himmelblau**, **Lavendel**, **Pfirsich**, **Rosé**, **Petrol**).
- **`③ 🔔 Reset-Erinnerung mit 1 Klick` (`Reset-Erinnerung einrichten`):** Klicke unten auf einer Modellkarte auf **`🔔 Reset-Erinnerung einrichten`**. Ist der Reset-Zeitpunkt dieses Modells erreicht, ertönt ein Signalton, und du bekommst eine Benachrichtigung im Editor und, falls du Handy-Benachrichtigungen eingerichtet hast, auch auf dem Handy. Der Editor muss dafür geöffnet sein.
- **`④ ✕ Karte ausblenden`:** Klicke oben rechts auf einer Karte auf das Kreuz. Die Karte verschwindet dann aus Dashboard, Seitenleiste, Pop-up und Statusleiste, und deine Auswahl bleibt gespeichert. Wieder einblenden kannst du sie mit dem Augensymbol neben **`Aktualisieren`**, mit dem Pluszeichen in der Zeile **Ausgeblendet:** unter den Karten oder unter **Einstellungen → Allgemein → Karten im Dashboard**. Deine Limits ändern sich dadurch nicht, und neue Modelle erscheinen von selbst. Zu einem Limit bekommst du erst dann keine Warnungen mehr, wenn alle zugehörigen Modelle ausgeblendet sind.

---

## 4. Einstellungen – Lizenz, Sprache, Statusleiste, Warnungen, Auto-Starter, Handy, Terminal und Speicherplatz

![Einstellungen: alte Chat-Dateien, Auto-Starter um 07:00 Uhr und Benachrichtigungen aufs Handy](https://raw.githubusercontent.com/Nordicstocks/antigravity-quota-monitor/fb46f6f/images/guide-4-control-center.png)

Öffne die Registerkarte **Einstellungen** (auch über das Pop-up der Statusleiste, das Menü oder den Befehl `Antigravity Quota: Open Settings Tab`). Jeder Abschnitt ist aufgeklappt. Die Abschnitte stehen in einer Spalte, in einem breiten Fenster in mehreren. Über die Navigation am linken Rand springst du zu den Abschnitten; in einem schmalen Fenster erscheint sie stattdessen als Leiste am oberen Rand. Die Reihenfolge ist **Lizenz, Allgemein, Statusleiste, Warnungen, Auto-Starter, Handy- und Chat-Benachrichtigungen, Terminal, Speicherplatz**.

- **Lizenz:** Mit aktiver Lizenz siehst du eine Zeile mit dem Status und **`Lizenzschlüssel ändern`**, **`Lizenz prüfen`** und **`Entfernen`**. In der kostenlosen Version und während der Testphase siehst du das Schlüsselfeld mit der zugehörigen Schaltfläche und einen Kauflink.
- **Allgemein:** Anzeigesprache (dieselbe Auswahl wie in der Kopfzeile), Farbdesign und Aktualisierungsintervall.
- **Statusleiste:** Anzeigemodus (*Kompakt (G | C)*, *Niedrigstes Restkontingent*, *Gemini*, *Claude*) und acht Stile für die Fortschrittsbalken, mit Vorschau.
- **Warnungen:** Reserveschutz, morgendliche Kontingentübersicht, macOS-Systemtöne, Modellwechsel-Assistent und das Kopieren des empfohlenen Modellnamens. **`Alle Einstellungen im Editor`** öffnet die Einstellungen des Editors, gefiltert auf diese Erweiterung. Dort findest du auch seltener gebrauchte Einstellungen wie die Warnschwellen. Der Link selbst ändert nichts.

Modelle mit gemeinsamem Limit lösen zusammen nur eine Benachrichtigung im Editor und eine auf dem Handy aus, nicht eine pro Modell. In der Benachrichtigung steht dann zum Beispiel **Gemini-Modelle (5-Stunden-Limit)**.

- **Auto-Starter – `5-Stunden-Fenster automatisch starten`:** Standardmäßig aus. Das 5-Stunden-Fenster beginnt mit deinem ersten Prompt, nicht zu einer festen Uhrzeit. Ist der Auto-Starter eingeschaltet, führt die Erweiterung zur gewählten Uhrzeit `agy` aus und sendet von deinem eigenen Konto einen kurzen, aber echten Prompt (`OK`) an die gewählten Modelle. Beginnt das 5-Stunden-Fenster um `07:00` Uhr, sollte das Kontingent gegen `12:00` Uhr wieder voll sein.
  - **Beim ersten Mal fragt die Erweiterung nach deiner Zustimmung.** Der Prompt wird auf dein Kontingent angerechnet. Die Nutzungsbedingungen von Antigravity verbieten es, den Dienst mit Produkten zu nutzen, die nicht von Google bereitgestellt werden. Laut den Bedingungen stellt der Zugriff über Software von Drittanbietern einen Verstoß dar, der zur Sperrung oder Schließung deines Kontos führen kann. Die Entscheidung liegt bei dir.
  - **Wenn der Editor um `07:00` Uhr geschlossen war:** Der Auto-Starter wird ausgeführt, sobald du den Editor öffnest, sofern das innerhalb von 3 Stunden nach der gewählten Uhrzeit geschieht. Später an diesem Tag wird der Auto-Starter nicht mehr ausgeführt.
  - **Wenn ein Lauf fehlschlägt:** Die Erweiterung meldet das und versucht es nach 30 Minuten erneut (höchstens drei Versuche pro Tag, nur innerhalb der 3 Stunden nach der gewählten Uhrzeit). Der Prompt geht dann nur an die Modelle, bei denen der Versuch fehlgeschlagen ist.
  - **Verlässliche Rückmeldung:** Ist `agy` nicht vorhanden oder scheitert der Befehl, erscheint eine Fehlermeldung. Die Handy-Benachrichtigung „gestartet“ wird nur gesendet, wenn der Start erfolgreich war. Sind mehrere Editorfenster geöffnet, sendet nur eines den Prompt.
- **`5-Stunden-Fenster jetzt starten`:** Sendet denselben Prompt sofort, ebenfalls erst nach deiner Zustimmung.
- **Handy- und Chat-Benachrichtigungen – `Handy verbinden` (ntfy, kein Konto nötig):**
  1. Installiere die kostenlose **ntfy**-App (App Store / Google Play).
  2. Tippe in der App auf **`+`** und gib das Topic ein, das im Dashboard steht (dort gibt es die Schaltfläche **Kopieren**). Das Topic ist lang und zufällig erzeugt, weil ntfy.sh-Topics öffentlich sind: Behalte es für dich.
  3. Wechsle zurück zur Erweiterung und klicke auf **`Speichern und Testbenachrichtigung senden`**. Das Ergebnis erscheint im Editor.
  - **QR-Codes:** Der QR-Code für Android öffnet die ntfy-App, sofern sie installiert ist, und fügt das Topic hinzu. Der zweite QR-Code öffnet die Webseite des Topics. Dort gibt es keine Schaltfläche zum Hinzufügen. Auf dem iPhone führst du Schritt 2 daher von Hand aus.
- **Discord-/Slack-Webhook und Telegram:** Gib deine Webhook-URL ein und klicke auf **`Speichern`**. Für Telegram gibst du deine Chat-ID ein, klickst auf **`Speichern`**, dann auf **`Bot-Token festlegen`** und fügst das Token in das Eingabefeld oben im Fenster ein.
- **`Testbenachrichtigung`:** Ein Klick sendet eine Testbenachrichtigung in der von dir gewählten Sprache über alle eingerichteten Kanäle.
- **Terminal-Statusdatei und Codeausschnitte:** Klicke auf **`zsh`**, **`Starship`** oder **`tmux`**, um die Codeausschnitte zu öffnen. Kopiere den Ausschnitt, den du verwendest, und füge ihn in die dort genannte Datei ein (Statusdatei: `~/.antigravity-quota/status.json`).
- **Speicherplatz:** Zeigt, wie viel Speicherplatz **Chats** (`~/.gemini/antigravity/brain`) und **Code-Tracker** (`code_tracker`) belegen. **`🧹 Alte Chat-Dateien bereinigen (>7 Tage)`** berücksichtigt nur `brain`: Die Bereinigung listet die Ordner auf, in denen sich in den letzten 7 Tagen keine Datei geändert hat, und zeigt vor deiner Bestätigung die Anzahl der Ordner und Dateien sowie die Größe. Diese Ordner können Bilder, Pläne und Logs aus alten Chats enthalten. Nach deiner Bestätigung werden sie in den **Papierkorb des Systems** verschoben, aus dem du sie wiederherstellen kannst. Klappt das nicht, bleiben sie an ihrem Platz, und die Erweiterung sagt dir Bescheid. Bei `code_tracker` wird nur die Größe angezeigt; gelöscht wird dort nichts.

### Schnellaktionen (das Menü)

Der Link **Schnellaktionen** im Pop-up der Statusleiste, die Schaltfläche in der Seitenleiste und der Befehl `Antigravity Quota: Menü öffnen` führen zum selben Menü: Dashboard, Browser, Aktualisieren, Erinnerung, Bericht, Nutzungsverlauf (lässt sich als CSV oder JSON speichern), Testbenachrichtigung, **Darstellung, Sprache und Statusleiste**, Benutzerhandbuch und Lizenz. Das Menü selbst zeigt keine Kontingentwerte; sie stehen in der Statusleiste, in ihrem Pop-up und im Dashboard. **Zurück** führt eine Ebene nach oben, und die letzte Zeile des Untermenüs öffnet die Registerkarte **Einstellungen**.

### Wochenbericht und Nutzungsverlauf (Pro)

Du öffnest **Wochenbericht** oder **Nutzungsverlauf** über das Menü **Schnellaktionen**, den **Wochenbericht** auch auf der Registerkarte Analytik. Es öffnet sich eine Seite mit zwei Registerkarten:

- **Wochenbericht** zeigt die letzten 7 Tage: wie oft ein Limit ausgeschöpft war, was als Nächstes aufgebraucht sein dürfte, die verbrauchsstärkste Zeit, das meistgenutzte Modell und Projekt, die aktuellen Limits, eine Heatmap nach Wochentag und Uhrzeit sowie die geschätzte Nutzung pro Projekt.
- **Nutzungsverlauf** zeigt für jedes Limit das Restkontingent über 7, 30 oder 90 Tage, getrennt für das 5-Stunden-Limit und das Wochenlimit. Eine dünne senkrechte Linie markiert einen Reset. In der 30- und der 90-Tage-Ansicht des 5-Stunden-Limits steht jeder Punkt für den niedrigsten Stand des Tages.

Modelle mit gemeinsamem Limit teilen sich ein Diagramm. **Bericht speichern (HTML)**, **Bericht speichern (Markdown)**, **CSV exportieren** und **JSON exportieren** fragen, wo die Datei gespeichert werden soll, und bieten danach an, sie zu öffnen.

## 5. 🎁 7 Tage Pro kostenlos testen und Lizenz aktivieren

Nach der Installation hast du **7 Tage lang alle Pro-Funktionen** direkt in der Erweiterung, ohne Kreditkarte und ohne Registrierung. Danach bleiben die kostenlosen Funktionen erhalten.

1. **Tarif wählen:**
   - **[💎 Lifetime Pro – einmalig 9,99 €](https://buy.polar.sh/polar_cl_xdY0LqtPIfPHfnG9o8Wo5QIIpJRlvhxQOZ6vL4g5jIB)**
   - **[Pro-Monatsabo – 2,99 €/Monat, jederzeit kündbar](https://buy.polar.sh/polar_cl_avl0NAvpPN4jQD0vZRRg11yZ92BQ2OHCKw29f4dxlPW)**
2. **Aktivieren:** Füge deinen Schlüssel `PRO-XXXX-...` in den Einstellungen im Abschnitt **Lizenz** ein und klicke auf **`Lizenzschlüssel eingeben`**. Du kannst auch in der Übersicht auf **`Schlüssel eingeben`** klicken.
3. **Schlüssel prüfen oder entfernen:** Einstellungen → Lizenz → **`Lizenz prüfen`** fragt den Lizenzstatus sofort bei Polar ab. **`Entfernen`** (oder der Befehl `Antigravity Quota: Pro-Lizenzschlüssel entfernen`) löscht den Schlüssel: Nach deiner Bestätigung wird er von diesem Computer entfernt, auch aus `~/.antigravity-quota/license.key`, und die Aktivierung dieses Computers wird nach Möglichkeit aufgehoben. Dein Kauf bleibt gültig. Ein Monatsabo kündigst du bei Polar.
4. **Wo du den Schlüssel findest und wo du ihn eingibst:** Du findest ihn in der Bestätigungs-E-Mail oder auf der Bestätigungsseite von Polar. Die Schaltfläche **`Schlüssel eingeben`** steht auf dem Banner der Testphase, in der Übersicht und in der Seitenleiste; die Einstellungen beginnen mit dem Schlüsselfeld und dem Status (Kostenlos / Testphase). Nach der Aktivierung verschwindet das Banner sofort und das Badge zeigt **PRO**, ohne dass du das Fenster neu laden musst.
5. **Nach dem Kauf:** Hast du auf eine Kaufschaltfläche geklickt und kommst innerhalb von 30 Minuten in den Editor zurück, prüft die Erweiterung einmal, ob in der Zwischenablage ein Lizenzschlüssel liegt, und fragt, bevor sie ihn aktiviert. Zu keinem anderen Zeitpunkt liest sie die Zwischenablage, und der Text wird nicht gespeichert.

Die Fenster und Info-Pop-ups der Erweiterung schließt du mit dem **X** oben rechts oder mit **Esc**.
