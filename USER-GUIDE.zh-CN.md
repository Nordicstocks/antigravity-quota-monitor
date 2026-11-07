# Antigravity Quota Monitor：用户指南

*版本 2.0.55*

**语言：** [🇬🇧 English](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.md) · [🇪🇪 Eesti keel](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.et.md) · [🇩🇪 Deutsch](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.de.md) · [🇫🇮 Suomi](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.fi.md) · [🇪🇸 Español](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.es.md) · [🇫🇷 Français](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.fr.md) · [🇮🇹 Italiano](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.it.md) · [🇵🇱 Polski](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.pl.md) · [🇳🇱 Nederlands](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.nl.md) · [🇸🇪 Svenska](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.sv.md) · [🇵🇹 Português (Portugal)](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.pt-PT.md) · [🇧🇷 Português (Brasil)](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.pt-BR.md) · [🇧🇬 Български](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.bg.md) · [🇭🇷 Hrvatski](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.hr.md) · [🇨🇿 Čeština](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.cs.md) · [🇩🇰 Dansk](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.da.md) · [🇬🇷 Ελληνικά](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.el.md) · [🇭🇺 Magyar](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.hu.md) · [🇮🇪 Gaeilge](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.ga.md) · [🇱🇻 Latviešu](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.lv.md) · [🇱🇹 Lietuvių](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.lt.md) · [🇱🇺 Lëtzebuergesch](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.lb.md) · [🇲🇹 Malti](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.mt.md) · [🇷🇴 Română](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.ro.md) · [🇸🇰 Slovenčina](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.sk.md) · [🇸🇮 Slovenščina](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.sl.md) · [🇺🇦 Українська](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.uk.md) · [🇿🇦 Afrikaans](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.af.md) · [🇯🇵 日本語](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.ja.md) · 🇨🇳 简体中文 · [🇹🇼 繁體中文](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.zh-TW.md) · [🇰🇷 한국어](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.ko.md) · [🇻🇳 Tiếng Việt](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.vi.md) · [🇮🇩 Bahasa Indonesia](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.id.md) · [🇮🇳 हिन्दी](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.hi.md) · [🇰🇪 Kiswahili](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.sw.md) · [🇸🇦 العربية](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.ar.md)

---

## 1. 快速上手：所有功能在哪里

![仪表板：概览选项卡和顶部栏控件](https://raw.githubusercontent.com/Nordicstocks/antigravity-quota-monitor/main/images/guide-overview.png)

安装插件后，可以在两个地方找到它：
1. **📌 活动栏图标**：点击活动栏中的仪表图标，打开 **Antigravity Cockpit** 侧边栏。
2. **📊 右下角的状态栏配额条**：免费版中它是这样的：`G: 87% 🟩🟩🟩🟩⬜ | C: 97% 🟩🟩🟩🟩🟩`。G 代表 Gemini 模型，C 代表 Claude 和 GPT 模型。Pro 还会显示距离重置的剩余时间和重置的具体时刻，例如 `↻3h 52m (19:52)`。把鼠标悬停在配额条上，可以查看更多详细信息（见第 2 节）。

![Antigravity Cockpit 侧边栏](https://raw.githubusercontent.com/Nordicstocks/antigravity-quota-monitor/main/images/guide-sidebar.png)

### 顶部栏和概览顶部的内容
- **选项卡**：**概览**、**分析**和**设置**。选项卡不重复页面标题，该标题只显示在顶部栏中。
- **最后更新时间和 `刷新`**：时间表示数据上次刷新的时刻；点击按钮会马上获取最新数据。
- **眼睛按钮**：列出所有卡片，已显示的卡片带有勾选标记。取消勾选可以隐藏卡片，勾选可以让它重新显示，然后按 **Enter** 或 **OK** 应用。按 **Esc** 会关闭列表，不保存更改。按钮上的数字表示隐藏了多少张卡片。侧边栏的刷新按钮旁边有同样的按钮。
- **版本按钮（`v2.0.55`）**：检查是否有更新的版本。有新版本时，按钮显示 **`更新到 …`**。点击它，然后重新加载窗口。
- **语言**：每个选项卡的右上角都有一个语言下拉菜单。第一项是**自动**，它同时显示当前使用的语言。它跟随编辑器的语言；编辑器设为英文时，则跟随系统语言。下面是 37 种语言，每种都用自己的文字书写名称。选择后马上生效，而且只改变这个插件的语言。列表展开时，输入一个字母，就能跳到第一个以该字母开头的语言。同样的设置也在**设置**的**常规**部分。
- **`夜间 / 日间 / 自动`**：切换到深色主题、浅色主题，或跟随编辑器的主题。
- **概览页第一个标题旁边**：**`在浏览器中打开`**（Pro 功能，7 天试用期内也能用）会在默认浏览器中打开仪表板，例如把它放到第二块显示器上；**`用户指南`** 会打开本指南。免费版在这里还有 **`购买 Pro`** 和 **`我有密钥`**。
- **排在最前面的内容**：限额卡片（先是每周限额，然后是 5 小时限额）。你的 Google 会员方案、提示词点数、折合 API 费用（估算）和模型数量在它们下方。
- **窗口越大，显示的内容越多**：一行能放下更多卡片。窗口宽度达到约 1,500 像素时，**设置**会分成更多列。在**概览**上，达到约 1,700 像素时，Google 会员方案的详情会移到右侧的一列；达到约 2,400 像素时，**分析**会显示在限额卡片旁边。

---

## 2. 状态栏弹窗

把鼠标悬停在状态栏配额条上，会弹出一个窗口，包含以下几部分：
- **许可证状态**：在这些链接下面，如果你有付费密钥，弹窗会用红色显示 **Pro 已激活**；试用期间显示 `试用·5天`（剩余天数）。在免费版中，弹窗里不会显示许可证状态这一项。
- **顶部链接**：**仪表板**、**在浏览器中打开**、**设置**（打开**设置**选项卡）和**快捷操作**（打开菜单）。免费版还有一个购买链接。
- **账号和提示词点数在同一行**：显示你的 Google 会员方案（`Google AI Pro`）、邮箱和提示词点数（`500 / 50,000`）。
- **每周限额和 5 小时限额**：每个模型占一行，带有 4 格的进度条、重置时间和耗尽预测。重置时间和耗尽预测是 Pro 功能；在免费版中，这两列显示一把锁。

**状态栏上单独的每周限额提醒**：当 Gemini 模型或 Claude 和 GPT 模型的每周配额所剩不多时，状态栏配额条旁边会多出一个单独的项目，例如 `G 7d 15%`。默认情况下，每周配额剩余 30% 或更少时，它带有提醒图标；剩余 22% 或更少时，背景为橙色；剩余 15% 或更少时，背景为红色。30% 和 15% 这两个阈值可以在编辑器的设置中修改（见第 4 节的**提醒**）；橙色这一档正好位于这两个阈值的中间。点击这一项会打开仪表板。每周配额还很充足时，不显示这一项。

---

## 3. 模型卡片：拖放（`⋮⋮`）、调色板（`🎨`）、重置提醒（`🔔`）和隐藏（`✕`）

![带有拖动手柄、调色板、重置提醒和隐藏卡片的叉号的模型卡片](https://raw.githubusercontent.com/Nordicstocks/antigravity-quota-monitor/main/images/guide-card.png)

调整卡片顺序、选择卡片颜色和隐藏卡片都属于免费版，你的选择会自动保存。卡片上的**重置时提醒我**按钮是 Pro 功能：它会在该模型的重置时间设置提醒。无论哪种方案，配额恢复到 100% 时，编辑器里都会有基本提醒。
- **① ⋮⋮ 拖放调整卡片顺序**：按住任意卡片左上角的 **`⋮⋮`** 手柄，把卡片拖到你想要的位置。
- **② 🎨 卡片调色板**：点击任意卡片标题栏中的调色板按钮 **`🎨`**，选择一种颜色（**默认**、**薄荷绿**、**天蓝色**、**薰衣草紫**、**蜜桃色**、**玫瑰色**、**青绿色**）。
- **③ 🔔 重置提醒**：点击任意模型卡片底部的 **`🔔 重置时提醒我`**。该模型的限额重置时，你会收到编辑器通知、提示音（Windows 和 macOS 上），如果设置了手机通知，还会收到手机通知。编辑器必须保持打开。
- **④ ✕ 隐藏卡片**：点击卡片右上角的叉号，这张卡片就会从仪表板、侧边栏、状态栏弹窗和状态栏中消失。你的选择会保存下来。要让它重新显示，可以点击 **`刷新`** 旁边的眼睛按钮，点击卡片下方 **已隐藏：** 一行中的加号，或者到 **设置 → 常规 → 仪表板上显示的卡片** 中操作。隐藏卡片不会改变你的限额。新增的模型仍会自动出现。只有共用同一限额的所有模型都已隐藏时，你才不会再收到这个限额的提醒。

---

## 4. 设置：许可证、常规、状态栏、提醒、自动预热、手机和聊天软件通知、终端、磁盘空间

![设置选项卡](https://raw.githubusercontent.com/Nordicstocks/antigravity-quota-monitor/main/images/guide-settings.png)

打开**设置**选项卡（也可以从状态栏弹窗、菜单或命令 `Antigravity Quota: 打开设置选项卡` 打开）。所有部分都显示在同一页上，所有部分都是展开的。各部分排成一列，窗口较宽时会排成多列。左侧的链接可以跳到各个部分；窗口较窄时，这些链接会排成一行，显示在顶部。各部分的顺序是：**许可证、常规、状态栏、提醒、自动预热、手机和聊天软件通知、终端、磁盘空间**。**提醒**、**自动预热**、**手机和聊天软件通知**和**终端**这几个部分是 Pro 功能（试用期内包含），带有 Pro 标签。在免费版中，点击这些部分里的控件，会打开购买对话框。即使不使用这些设置，免费版在编辑器里仍有基本提醒：配额降到 10% 和 5% 时，以及恢复到 100% 时，你都会收到通知。

- **许可证**：许可证有效时，这一部分只有一行，显示状态以及 **`更改许可证密钥`**、**`验证许可证`** 和 **`移除密钥`**。使用免费版或处于试用期时，这里会显示密钥输入框及其按钮，还有购买链接。
- **常规**：界面语言（和顶部栏中的选项相同）、颜色主题、刷新间隔和**仪表板上显示的卡片**。
- **状态栏**：显示模式（*紧凑（G | C）*、*剩余配额最少*、*Gemini*、*Claude*）和 8 种带预览的进度条样式。
- **提醒**：配额预留保护、早间配额摘要、提示音（Windows 和 macOS 上）、模型切换助手和复制推荐的模型名称。**`在编辑器中查看全部设置`** 会打开编辑器自带的设置，并只显示这个插件的设置项，其中包括不太常用的选项，例如提醒阈值。点击这个链接本身不会更改任何设置，它只是打开编辑器的设置页面。

当多个模型共用同一限额时，整个模型组只发一条编辑器通知和一条手机通知，不会每个模型各发一条。标题会写出这一组的名称，例如 **Gemini 模型（5 小时限额）**。

- **自动预热（`5 小时窗口自动预热`）**：默认关闭。5 小时窗口从你发出第一条提示词时开始计时，而不是从某个固定时间开始。开启此设置后，插件会在你选定的时间运行 `agy`，用你自己的账号向所选模型发送一条简短的提示词（`OK`）。这是一次真实的请求。如果 5 小时窗口在 `07:00` 开始，限额大约会在 `12:00` 重置。
  - **第一次使用时会征求你的同意。** 插件发给模型的这条消息会消耗你的配额。[Google Antigravity 附加服务条款](https://antigravity.google/terms)第 6 条禁止将该服务与非 Google 提供的产品结合使用。其中写明，使用第三方软件访问该服务属于违约，可能导致你的 Antigravity 和/或 Gemini CLI 账号被暂停或终止。决定权在你。
  - **如果 `07:00` 时编辑器没有打开**：只要距离你选定的时间不超过 3 小时，你打开编辑器时自动预热就会运行。超过这 3 小时后，它会等到第二天。
  - **如果某次运行失败**：插件会提示你，并在 30 分钟后重试，每天最多 3 次，而且只在你选定时间之后的 3 小时之内重试。重试时，只向失败的模型再发送一次提示词。如果没有安装 `agy`，插件当天就不会再重试了。
  - **运行结果**：如果找不到 `agy` 或运行失败，你会看到错误提示。只有运行成功之后，才会发出 5 小时窗口已开始计时的手机通知。同时打开多个编辑器窗口时，只有其中一个会发送提示词。
- **`立即启动 5 小时窗口`**：马上发送同一条提示词。第一次使用时，这里同样会征求你的同意。
- **手机和聊天软件通知（`连接手机`，使用 ntfy，无需账号）**：
  1. 安装免费的 **ntfy** 应用（App Store / Google Play）。
  2. 在应用中点击 **`+`**，输入仪表板上显示的主题（旁边有**复制**按钮）。ntfy.sh 的主题是公开的：知道名称的人都能读取和发送消息。所以建议使用又长又随机的主题名称，并且不要分享它。
  3. 回到插件，然后点击 **`保存并发送测试通知`**。测试结果会显示在编辑器中。
  - **二维码**：适用于 Android 的二维码会打开 ntfy 应用（如果已安装），并订阅这个主题。另一个二维码会打开这个主题的网页，网页不会让应用订阅，所以在 iPhone 上要手动完成第 2 步。
- **Discord/Slack Webhook 和 Telegram**：输入你的 Webhook URL，然后点击 **`保存`**。使用 Telegram 时，输入你的聊天 ID，点击 **`保存`**，再点击 **`设置机器人令牌`**，把令牌粘贴到窗口顶部的输入框中。
- **`测试通知`**：点击后，会用你选择的语言，向你已经设置好的每一个通知渠道发送一条测试通知。
- **终端状态文件和代码片段**：点击 **`zsh`**、**`Starship`** 或 **`tmux`** 打开代码片段，复制你所用工具对应的那一段，粘贴到该片段中注明的文件里（状态文件：`~/.antigravity-quota/status.json`）。
- **磁盘空间**：显示**对话**（文件夹 `~/.gemini/antigravity/brain`；旁边的 `conversations` 文件夹不会被改动）和**代码追踪**（`code_tracker`）占用的磁盘空间。**`🧹 清理超过 7 天的旧对话文件`** 只检查 `brain`：它会列出其中所有文件在最近 7 天内都没有改动的文件夹，并在你确认之前显示文件夹数、文件数和大小。这些文件夹中可能有旧对话留下的图片、计划和日志。你确认之后，它们会移到系统废纸篓（Windows 上是回收站），清空之前都可以恢复。如果移动失败，它们会留在原处，插件会告诉你。插件只统计 `code_tracker` 的大小，从不清理它。

### 快捷操作（菜单）

状态栏弹窗中的**快捷操作**链接、侧边栏中的**快捷操作**按钮，以及命令 `Antigravity Quota: 打开菜单`，打开的都是同一个菜单：仪表板、浏览器、刷新、提醒、报告、测试通知、用量历史（可以保存为 CSV 或 JSON）、**外观、语言和状态栏**、用户指南和许可证。这个菜单里只有操作，没有配额数字。要查看配额数字，请看状态栏、状态栏弹窗或仪表板。**返回**会回到上一级，**外观、语言和状态栏**子菜单的最后一行会打开**设置**选项卡。

要关闭插件的任何列表、对话框或信息弹窗，点击角上的 **X**，或按 **Esc**。

### 每周报告和用量历史（Pro）

从**快捷操作**（见上文）打开**每周报告**或**用量历史**。**每周报告**在**分析**选项卡上也有。无论从哪里打开，都会出现一个带两个选项卡的页面：

- **每周报告**显示最近 7 天的情况：你达到限额的次数、接下来最先耗尽的配额、最繁忙的时段、用量最多的模型和项目、各项限额的当前状态、按星期几和小时统计的配额使用图（热力图），以及各项目的估算用量。
- **用量历史**显示 5 小时限额和每周限额的剩余配额在 7 天、30 天或 90 天内的变化。每次重置都用一条细竖线标记。5 小时限额的 30 天和 90 天视图没有这样的线；在这两种视图中，每个点表示当天剩余配额的最低水平。

共用同一限额的模型共享一张图表。**每周报告**选项卡上的 **保存报告（HTML）** 和 **保存报告（Markdown）** 按钮，以及**用量历史**选项卡上的 **导出 CSV** 和 **导出 JSON** 按钮，会先询问保存位置，然后让你选择是否打开该文件。

## 5. 🎁 7 天 Pro 试用和许可证激活

第一次安装插件时，你可以在 7 天内使用**全部 Pro 功能**，无需银行卡，也无需注册账号。试用期结束后，你仍可使用免费版的功能：状态栏配额条、仪表板和侧边栏、卡片顺序和颜色、8 种进度条样式、37 种语言、配额偏低或恢复到 100% 时编辑器中的自动提醒，以及 24 小时的历史记录（更长的用量历史是 Pro 功能）。

1. **选择方案**：
   - **[💎 Pro 终身版 — €9.99 一次性买断](https://buy.polar.sh/polar_cl_xdY0LqtPIfPHfnG9o8Wo5QIIpJRlvhxQOZ6vL4g5jIB)**
   - **[Pro 月付版 — €2.99/月，可随时取消](https://buy.polar.sh/polar_cl_avl0NAvpPN4jQD0vZRRg11yZ92BQ2OHCKw29f4dxlPW)**
2. **找到你的密钥**：密钥在购买邮件里，或在我们的支付服务商 Polar 的确认页面上。
3. **激活**：把你的 `PRO-XXXX-...` 密钥粘贴到**设置**的**许可证**部分，然后点击 **`输入许可证密钥`**。也可以点击 **`我有密钥`**，该按钮位于试用横幅、**概览**页和侧边栏中。激活后，试用横幅会马上消失，徽章显示 **Pro**。不需要重新加载窗口。
4. **购买之后**：如果你点击了购买按钮，并在 30 分钟内回到编辑器，插件会检查一次剪贴板里有没有许可证密钥，并在激活前征求你的同意。除此之外，它不会读取剪贴板，剪贴板里的文字也不会保存。
5. **检查或移除密钥**：设置 → 许可证 → **`验证许可证`** 会马上向 Polar 核对你的许可证。**`移除密钥`**（或命令 `Antigravity Quota: 移除 Pro 许可证密钥`）会移除密钥。你确认之后，密钥会从这台电脑上删除，包括文件 `~/.antigravity-quota/license.key`。如果插件能连上 Polar，这台电脑的激活也会一并释放，这样密钥就可以用在另一台电脑上。你的购买仍然有效。移除密钥不会取消月付订阅。这个订阅会持续到你在 Polar 取消为止。
