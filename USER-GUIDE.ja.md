# Antigravity Quota Monitor：ユーザーガイド

*バージョン 2.0.54*

**言語：** [🇬🇧 English](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.md) · [🇪🇪 Eesti keel](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.et.md) · [🇩🇪 Deutsch](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.de.md) · [🇫🇮 Suomi](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.fi.md) · [🇪🇸 Español](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.es.md) · [🇫🇷 Français](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.fr.md) · [🇮🇹 Italiano](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.it.md) · [🇵🇱 Polski](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.pl.md) · [🇳🇱 Nederlands](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.nl.md) · [🇸🇪 Svenska](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.sv.md) · [🇵🇹 Português (Portugal)](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.pt-PT.md) · [🇧🇷 Português (Brasil)](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.pt-BR.md) · [🇧🇬 Български](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.bg.md) · [🇭🇷 Hrvatski](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.hr.md) · [🇨🇿 Čeština](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.cs.md) · [🇩🇰 Dansk](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.da.md) · [🇬🇷 Ελληνικά](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.el.md) · [🇭🇺 Magyar](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.hu.md) · [🇮🇪 Gaeilge](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.ga.md) · [🇱🇻 Latviešu](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.lv.md) · [🇱🇹 Lietuvių](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.lt.md) · [🇱🇺 Lëtzebuergesch](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.lb.md) · [🇲🇹 Malti](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.mt.md) · [🇷🇴 Română](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.ro.md) · [🇸🇰 Slovenčina](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.sk.md) · [🇸🇮 Slovenščina](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.sl.md) · [🇺🇦 Українська](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.uk.md) · [🇿🇦 Afrikaans](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.af.md) · 🇯🇵 日本語 · [🇨🇳 简体中文](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.zh-CN.md) · [🇹🇼 繁體中文](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.zh-TW.md) · [🇰🇷 한국어](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.ko.md) · [🇻🇳 Tiếng Việt](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.vi.md) · [🇮🇩 Bahasa Indonesia](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.id.md) · [🇮🇳 हिन्दी](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.hi.md) · [🇰🇪 Kiswahili](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.sw.md) · [🇸🇦 العربية](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.ar.md)

---

## 1. はじめに：各機能の場所

![ダッシュボード：ヘッダーに操作ボタンがある概要タブ](https://raw.githubusercontent.com/Nordicstocks/antigravity-quota-monitor/main/images/guide-overview.png)

インストールすると、この拡張機能は次の2か所にあります。
1. **📌 アクティビティバーのアイコン**：ゲージのアイコンをクリックすると、サイドパネル**Antigravity Cockpit**が開きます。
2. **📊 右下のステータスバーの残量表示**：無料版では、`G: 87% 🟩🟩🟩🟩⬜ | C: 97% 🟩🟩🟩🟩🟩` のように表示されます。GはGeminiのモデル、CはClaudeとGPTのモデルです。Proでは、リセットまでの残り時間とリセットの時刻（例：`↻3h 52m (19:52)`）も表示されます。残量表示にカーソルを合わせると詳細が開きます（セクション2を参照）。

![サイドパネル Antigravity Cockpit](https://raw.githubusercontent.com/Nordicstocks/antigravity-quota-monitor/main/images/guide-sidebar.png)

### ヘッダーと概要の上部にあるもの
- **タブ**：**概要**、**分析**、**設定**。ページタイトルはタブ内には表示されず、ヘッダーにのみ表示されます。
- **最終更新時刻と`更新`**：時刻はデータを最後に更新した時刻で、ボタンを押すと最新のデータをその場で取得します。
- **目のアイコンのボタン**：すべてのカードを一覧表示し、表示中のカードにチェックを付けます。チェックを外すとカードが非表示になり、入れると再表示されます。**Enter**または**OK**で反映します。**Esc**を押すと、保存せずに閉じます。ボタンの数字は、非表示のカードの数です。サイドパネルにも、更新ボタンの横に同じボタンがあります。
- **バージョンボタン（`v2.0.54`）**：新しいバージョンがあるか確認します。ある場合は、ボタンの表示が **`…に更新`** に変わります。クリックしてから、ウィンドウを再読み込みしてください。
- **言語**：ドロップダウンは、どのタブでも右上にあります。最初の選択肢**自動**には、現在使われている言語も表示されます。エディターの言語に従い、エディターが英語の場合はシステムの言語に従います。その下に37言語が、それぞれの言語の表記で並びます。選ぶとすぐに反映され、変わるのはこの拡張機能の言語だけです。リストを開いた状態で文字を入力すると、その文字で始まる最初の言語に移動します。同じ設定は、設定の**全般**にもあります。
- **`Night / Day / 自動`**：ダークテーマ、ライトテーマ、エディターのテーマのどれかに切り替えます。
- **概要の最初の見出しの横**：**`ブラウザで開く`**（Pro。7日間の体験期間中も使えます）は、ダッシュボードを既定のブラウザで開きます。たとえば2台目のディスプレイに表示したいときに便利です。**`ユーザーガイド`** は、このガイドを開きます。無料版では、**`Proを購入`** と **`キーをお持ちの方`** もここにあります。
- **最初に表示されるもの**：制限カード（週間制限、5時間制限の順）です。利用中のGoogleプラン、プロンプトクレジット、API換算の推定額、モデル数はその下にあります。
- **ウィンドウが広いほど多く表示されます**：1行に並ぶカードが増えます。設定タブでは、ウィンドウの幅が約1,500ピクセルになると列数が増えます。概要では、約1,700ピクセルでGoogleプランの詳細が右側の列に移り、約2,400ピクセルで分析が制限カードの横に表示されます。

---

## 2. ステータスバーのポップアップ

ステータスバーの残量表示にカーソルを合わせると、次の内容のポップアップが開きます。
- **ライセンスの状態**：上部のリンクの後に、有料のライセンスキーがあるときは赤字で**Proが有効です**と表示され、体験期間中は `無料体験・残り5日`（残り日数）と表示されます。無料版では、ポップアップにライセンスの状態は表示されません。
- **上部のリンク**：**ダッシュボード**、**ブラウザで開く**、**設定**（設定タブを開きます）、**クイックアクション**（メニューを開きます）。無料版では、購入用のリンクもあります。
- **アカウントとプロンプトクレジットを1行で表示**：利用中のGoogleプラン（`Google AI Pro`）、メールアドレス、プロンプトクレジット（`500 / 50,000`）が出ます。
- **週間制限と5時間制限**：各モデルの行は、4ブロックの残量バー、リセット時刻、使い切り予測とともに1行に収まります。リセット時刻と使い切り予測はPro機能で、無料版ではこの2列に鍵のマークが表示されます。

**ステータスバーに出る週間制限の別表示**：Geminiのモデル、またはClaudeとGPTのモデルの週間クォータの残量が少なくなると、ステータスバーの残量表示の隣に別の項目（例：`G 7d 15%`）が現れます。既定では、週間クォータの残量が30%以下で警告アイコンが付き、22%以下でオレンジの背景、15%以下で赤の背景になります。30%と15%のしきい値はエディターの設定で変更でき（セクション4の**Proのアラート・残量ガード**を参照）、オレンジの段階はその中間です。クリックするとダッシュボードが開きます。週間クォータの残量が十分にあるときは、この項目は表示されません。

---

## 3. モデルカード：ドラッグ＆ドロップ（`⋮⋮`）、カラーパレット（`🎨`）、リセット通知（`🔔`）、非表示（`✕`）

![ドラッグハンドル、カラーパレット、リセット通知、カードを非表示にする✕が付いたモデルカード](https://raw.githubusercontent.com/Nordicstocks/antigravity-quota-monitor/main/images/guide-card.png)

カードの並べ替え、色の選択、非表示は、すべて無料版で使え、選択は自動的に保存されます。カードの **`🔔 リセット時に通知`** ボタンはPro機能で、そのモデルのリセット時刻に通知を設定します。クォータが100%に戻ったときの基本のアラートは、どのプランでもエディターに届きます。
- **① ⋮⋮ カードの並べ替え（ドラッグ＆ドロップ）**：カード左上のハンドル **`⋮⋮`** をつかんで、好きな位置までドラッグします。
- **② 🎨 カードのカラーパレット**：どのカードでも、ヘッダーのパレットボタン **`🎨`** をクリックして色（**標準**、**ミント**、**スカイ**、**ラベンダー**、**ピーチ**、**ローズ**、**ティール**）を選びます。
- **③ 🔔 リセット通知**：どのモデルカードでも、下部の **`🔔 リセット時に通知`** をクリックします。そのモデルの制限がリセットされると、エディターに通知が表示され、音が鳴り（WindowsとmacOS）、設定していればスマホにも通知が届きます。エディターは開いたままにしておく必要があります。
- **④ ✕ カードを非表示にする**：カード右上の✕をクリックすると、そのカードがダッシュボード、サイドパネル、ステータスバーのポップアップ、ステータスバーから消えます。選択は保存されます。元に戻すには、**`更新`** の横の目のアイコンのボタン、カードの下の「**非表示：**」の行にある＋、または **設定 → 全般 → ダッシュボードに表示するカード** を使います。カードを非表示にしても、制限は変わりません。新しいモデルは、これまでどおり自動で表示されます。ある制限のアラートが止まるのは、その制限を共有するすべてのモデルを非表示にしたときだけです。

---

## 4. 設定：ライセンス、全般、ステータスバー、Proのアラート・残量ガード、自動スタート、スマホとチャットへの通知、ターミナル、ディスク容量

![設定タブ](https://raw.githubusercontent.com/Nordicstocks/antigravity-quota-monitor/main/images/guide-settings.png)

**設定**タブを開きます（ステータスバーのポップアップやメニューからも、コマンド `Antigravity Quota: 設定タブを開く` からも開けます）。すべてのセクションが1ページに表示され、折りたたまれているものはありません。セクションは1列に並び、ウィンドウが広いときは複数の列になります。左のリンクから各セクションに移動でき、ウィンドウが狭いときは、リンクが上部に1行で並びます。順番は **ライセンス、全般、ステータスバー、Proのアラート・残量ガード、自動スタート、スマホとチャットへの通知、ターミナル、ディスク容量** です。**Proのアラート・残量ガード**、**自動スタート**、**スマホとチャットへの通知**、**ターミナル**の各セクションはPro機能（体験期間中も使えます）で、PROのタグが付いています。無料版では、これらの項目を操作すると購入ダイアログが開きます。無料版でも、エディターでの基本のアラートは、これらの設定がなくても働きます。クォータが10%まで下がったとき、5%まで下がったとき、そして100%に戻ったときにお知らせします。

- **ライセンス**：ライセンスが有効なときは、状態と、**`ライセンスキーを変更`**、**`ライセンスを再確認`**、**`キーを削除`** が1行に並びます。無料版と体験期間中は、キーの入力欄とそのボタン、購入リンクが表示されます。
- **全般**：表示言語（ヘッダーと同じ選択）、テーマ、更新間隔、**ダッシュボードに表示するカード**。
- **ステータスバー**：表示モード（*GeminiとClaude*、*残量が最も少ないモデル*、*Gemini*、*Claude*）と、プレビュー付きの8種類の残量バーのスタイル。
- **Proのアラート・残量ガード**：**残量ガード**、朝のサマリー、サウンド（WindowsとmacOS）、モデル切り替えアシスト、推奨モデル名のコピー。**`エディターのすべての設定`** は、エディター自体の設定を、この拡張機能の項目だけに絞って開きます。警告のしきい値など、あまり使わないオプションもそこにあります。このリンクを開くだけでは、何も変わりません。

複数のモデルが1つの制限を共有しているときは、エディターの通知もスマホの通知も、モデルごとではなくグループ全体で1件です。タイトルにはグループ名が入ります（例：**Geminiのモデル（5時間制限）**）。

- **自動スタート — `5時間枠を自動で開始`**：初期状態ではオフです。5時間枠は、決まった時刻ではなく、最初のプロンプトで始まります。この設定をオンにすると、拡張機能が指定した時刻に `agy` を実行し、ご自身のアカウントから、選択したモデルに短いプロンプト（`OK`）を送ります。実際のリクエストです。5時間枠が `07:00` に始まれば、制限は `12:00` ごろにリセットされます。
  - **初回は同意を求められます。** モデルに送るメッセージは、クォータを消費します。[Google Antigravity 追加利用規約](https://antigravity.google/terms)のセクション6では、Googleが提供していない製品に関連してサービスを利用することが禁止されています。また、第三者のソフトウェアを使ってサービスにアクセスすることは違反にあたり、Antigravity、Gemini CLI、またはその両方のアカウントの停止や終了につながる場合がある、とされています。判断はご自身に委ねられています。
  - **`07:00` にエディターが閉じていた場合**：指定した時刻から3時間以内にエディターを開くと、自動スタートが実行されます。3時間を過ぎると、翌日まで待ちます。
  - **実行に失敗した場合**：拡張機能がそのことを知らせ、30分後に再試行します。再試行は1日最大3回で、指定した時刻から3時間以内に限ります。プロンプトを再送するのは、失敗したモデルだけです。`agy` がインストールされていない場合、その日は再試行しません。
  - **常に実際の結果が表示されます**：`agy` が見つからない、または失敗したときは、エラーが表示されます。5時間枠が始まったことを知らせるスマホへの通知は、実行が成功した後にだけ送られます。エディターのウィンドウを複数開いている場合、プロンプトを送るのは1つのウィンドウだけです。
- **`5時間枠を今すぐ開始`**：同じプロンプトをすぐに送ります。初回は、こちらも同意を求められます。
- **スマホとチャットへの通知 — `スマホを接続`（ntfy、アカウント不要）**：
  1. 無料の**ntfy**アプリをインストールします（App Store / Google Play）。
  2. アプリで **`+`** をタップし、ダッシュボードに表示されているトピックを入力します（**コピー**ボタンがあります）。ntfy.sh のトピックは公開されていて、名前を知っていれば誰でもメッセージを読んだり送ったりできます。そのため、提示されるトピックは長いランダムな文字列になっています。他の人には教えないでください。
  3. 拡張機能に戻り、**`保存してテスト通知を送信`** をクリックします。結果はエディターに表示されます。
  - **QRコード**：Android用のQRコードを読み取ると、ntfyアプリがインストールされている場合はアプリが開き、トピックが登録されます。もう一方のQRコードはトピックのウェブページを開くだけで、アプリには登録されません。そのため、iPhoneでは手順2を手動で行ってください。
- **Discord/Slack Webhook & Telegram**：Webhook URLを入力し、**`保存`** をクリックします。Telegramの場合は、チャットIDを入力して **`保存`** をクリックし、続けて **`ボットトークンを設定`** をクリックして、ウィンドウ上部の入力欄にトークンを貼り付けます。
- **`テスト通知`**：クリックすると、設定したすべてのチャンネルに、選択した言語でテスト通知を送ります。
- **ターミナル用のステータスファイルとスニペット**：**`zsh`**、**`Starship`**、**`tmux`** のどれかをクリックしてスニペットを開き、使っているツール用のものをコピーして、そのスニペットに書かれたファイルに貼り付けます（ステータスファイル：`~/.antigravity-quota/status.json`）。
- **ディスク容量**：**会話**（フォルダー `~/.gemini/antigravity/brain`。隣にある `conversations` フォルダーは変更しません）と**コードトラッカー**（`code_tracker`）が使っている容量を表示します。**`🧹 7日間変更のない会話ファイルを整理`** の対象は `brain` だけです。過去7日間に変更されたファイルが1つもないフォルダーを一覧にし、確認の前に、フォルダー数、ファイル数、サイズを表示します。これらのフォルダーには、古い会話の画像、プラン、ログが入っていることがあります。確認して実行すると、フォルダーはシステムのゴミ箱（Windowsではごみ箱）に移動し、空にするまでは元に戻せます。移動できなかった場合は、そのまま残り、拡張機能がその旨を知らせます。`code_tracker` は容量を測るだけで、整理の対象にはなりません。

### クイックアクション（メニュー）

ステータスバーのポップアップの**クイックアクション**リンク、サイドパネルの**クイックアクション**ボタン、コマンド `Antigravity Quota: メニューを開く` は、どれも同じメニューを開きます。項目は、ダッシュボード、ブラウザ、更新、リセット通知、レポート、テスト通知、使用履歴（CSVまたはJSONで保存できます）、**外観、言語、ステータスバー**、ユーザーガイド、ライセンスです。このメニューには操作だけが並びます。クォータの数値を見るには、ステータスバー、そのポップアップ、またはダッシュボードを見てください。**戻る**を選ぶと1つ上の階層に戻り、サブメニュー**外観、言語、ステータスバー**の最後の行は**設定**タブを開きます。

この拡張機能の一覧、ダイアログ、案内のポップアップを閉じるには、隅の**X**をクリックするか、**Esc**を押します。

### 週次レポートと使用履歴（Pro）

**クイックアクション**から**週次レポート**または**使用履歴**を開きます（上を参照）。**週次レポート**は分析タブにもあります。どちらの場合も、2つのタブがあるページが開きます。

- **週次レポート**には、過去7日間の次の情報が表示されます：制限に達した回数、次に使い切りそうなクォータ、使用が最も多い時間帯、最も使ったモデルとプロジェクト、制限の現在の状態、日と時間帯ごとのクォータ使用量のグラフ（ヒートマップ）、プロジェクト別の推定使用量です。
- **使用履歴**は、クォータの残量が過去7日間、30日間、90日間にどう推移したかを、5時間制限と週間制限のそれぞれについて表示します。細い縦線は、リセットを示します。5時間制限の30日間と90日間の表示にはこの線がなく、各点はその日の最低の残量を示します。

1つの制限を共有するモデルは、1つのグラフにまとまります。**週次レポート**タブの **レポートを保存（HTML）** ボタンと **レポートを保存（Markdown）** ボタン、**使用履歴**タブの **CSVエクスポート** ボタンと **JSONエクスポート** ボタンは、保存先を尋ね、保存後にファイルを開くかどうかを確認します。

## 5. 🎁 7日間のPro無料体験とライセンスの有効化

拡張機能を初めてインストールすると、**Proの全機能を7日間**使えます。カードの登録も、アカウント登録も要りません。その後も、無料版の機能は引き続き使えます：ステータスバーの残量表示、ダッシュボードとサイドパネル、カードの並び順と色、8種類の残量バーのスタイル、37言語、クォータが少なくなったとき・100%に戻ったときのエディターでの自動アラート、24時間分の履歴（より長い使用履歴はPro機能です）。

1. **プランを選びます**：
   - **[💎 Pro買い切りプラン — €9.99（1回払い）](https://buy.polar.sh/polar_cl_xdY0LqtPIfPHfnG9o8Wo5QIIpJRlvhxQOZ6vL4g5jIB)**
   - **[Pro月額プラン — €2.99/月（いつでも解約できます）](https://buy.polar.sh/polar_cl_avl0NAvpPN4jQD0vZRRg11yZ92BQ2OHCKw29f4dxlPW)**
2. **キーの場所**：キーは、購入確認メール、または決済サービスPolarの確認ページに記載されています。
3. **有効化**：`PRO-XXXX-...` 形式のキーを設定の**ライセンス**セクションに貼り付け、**`ライセンスキーを入力`** をクリックします。体験期間のバナー、概要、サイドパネルにある **`キーをお持ちの方`** からも入力できます。有効化すると、体験期間のバナーはすぐに消え、バッジが**PRO**に変わります。ウィンドウの再読み込みは要りません。
4. **購入後**：購入ボタンをクリックしてから30分以内にエディターに戻ると、拡張機能はクリップボードにライセンスキーがあるかどうかを1回だけ確認し、有効化する前に尋ねます。それ以外のときにクリップボードを読み取ることはなく、クリップボードの内容を保存することもありません。
5. **キーの確認と削除**：設定 → ライセンス → **`ライセンスを再確認`** は、Polarに照会して、ライセンスをすぐに確認します。**`キーを削除`**（またはコマンド `Antigravity Quota: Proライセンスキーを削除`）はキーを削除します。確認して実行すると、`~/.antigravity-quota/license.key` のファイルを含め、キーがこのコンピューターから削除されます。拡張機能がPolarに接続できる場合は、このコンピューターの有効化も解除されるので、キーを別のコンピューターで使えます。購入そのものは有効なままです。キーを削除しても、月額プランは解約されません。月額プランは、Polarで解約するまで続きます。
