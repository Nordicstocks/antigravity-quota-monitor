# Antigravity Quota Monitor: Guia do utilizador

*Versão 2.0.53*

**Idioma:** [🇬🇧 English](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.md) · [🇪🇪 Eesti keel](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.et.md) · [🇩🇪 Deutsch](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.de.md) · [🇫🇮 Suomi](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.fi.md) · [🇪🇸 Español](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.es.md) · [🇫🇷 Français](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.fr.md) · [🇮🇹 Italiano](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.it.md) · [🇵🇱 Polski](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.pl.md) · [🇳🇱 Nederlands](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.nl.md) · [🇸🇪 Svenska](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.sv.md) · 🇵🇹 Português (Portugal) · [🇧🇷 Português (Brasil)](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.pt-BR.md) · [🇧🇬 Български](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.bg.md) · [🇭🇷 Hrvatski](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.hr.md) · [🇨🇿 Čeština](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.cs.md) · [🇩🇰 Dansk](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.da.md) · [🇬🇷 Ελληνικά](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.el.md) · [🇭🇺 Magyar](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.hu.md) · [🇮🇪 Gaeilge](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.ga.md) · [🇱🇻 Latviešu](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.lv.md) · [🇱🇹 Lietuvių](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.lt.md) · [🇱🇺 Lëtzebuergesch](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.lb.md) · [🇲🇹 Malti](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.mt.md) · [🇷🇴 Română](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.ro.md) · [🇸🇰 Slovenčina](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.sk.md) · [🇸🇮 Slovenščina](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.sl.md) · [🇺🇦 Українська](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.uk.md) · [🇿🇦 Afrikaans](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.af.md) · [🇯🇵 日本語](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.ja.md) · [🇨🇳 简体中文](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.zh-CN.md) · [🇹🇼 繁體中文](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.zh-TW.md) · [🇰🇷 한국어](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.ko.md) · [🇻🇳 Tiếng Việt](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.vi.md) · [🇮🇩 Bahasa Indonesia](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.id.md) · [🇮🇳 हिन्दी](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.hi.md) · [🇰🇪 Kiswahili](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.sw.md) · [🇸🇦 العربية](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.ar.md)

---

## 1. Primeiros passos: onde encontrar tudo

![Painel: separador Visão geral com os controlos do cabeçalho](https://raw.githubusercontent.com/Nordicstocks/antigravity-quota-monitor/main/images/guide-overview.png)

Depois de instalada, a extensão fica disponível em dois locais:
1. **📌 Ícone na Barra de Atividades:** clique no ícone do medidor na Barra de Atividades para abrir o painel lateral **Antigravity Cockpit**.
2. **📊 Indicador da barra de estado, no canto inferior direito:** no plano Free, tem este aspeto: `G: 87% 🟩🟩🟩🟩⬜ | C: 97% 🟩🟩🟩🟩🟩`. G representa os modelos Gemini e C, os modelos Claude e GPT. O Pro mostra também o tempo que falta até à reposição e a hora a que ela ocorre, por exemplo `↻3h 52m (19:52)`. Passe o rato sobre o indicador para ver os detalhes (ver secção 2).

![Painel lateral Antigravity Cockpit](https://raw.githubusercontent.com/Nordicstocks/antigravity-quota-monitor/main/images/guide-sidebar.png)

### O que há no cabeçalho e no topo da Visão geral:
- **Separadores:** **Visão geral**, **Análise** e **Definições**. Os separadores não repetem o título da página; este aparece apenas no cabeçalho.
- **Hora da última atualização e `Atualizar`:** a hora indica quando os dados foram atualizados pela última vez; o botão obtém agora os dados mais recentes.
- **Botão do olho:** lista todos os cartões, com uma marca nos que estão visíveis. Desmarque um cartão para o ocultar ou marque-o para o voltar a mostrar e, depois, prima **Enter** ou **OK** para aplicar. **Esc** fecha a lista sem guardar. O número no botão indica quantos cartões estão ocultos. O painel lateral tem o mesmo botão ao lado do botão de atualizar.
- **Botão da versão (`v2.0.53`):** verifica se existe uma versão mais recente. Quando existe, o botão diz **`Atualizar para …`**. Clique nele e, depois, recarregue a janela do editor.
- **Idioma:** a lista pendente fica no canto superior direito, em todos os separadores. A primeira opção, **Automático**, mostra também o idioma que está em uso. Segue o idioma do editor ou, se o editor estiver em inglês, o idioma do sistema. Abaixo dela estão 37 idiomas, cada um escrito na sua própria língua. A escolha aplica-se de imediato e altera apenas o idioma desta extensão. Com a lista aberta, escreva uma letra para saltar para o primeiro idioma que começa por ela. A mesma definição existe na secção **Geral** das Definições.
- **`Noite / Dia / Automático`:** muda para o tema escuro, o tema claro ou o tema do editor.
- **Junto ao primeiro título da Visão geral:** **`Abrir no navegador`** (Pro, incluído no teste de 7 dias) abre o painel no navegador predefinido, por exemplo para o mostrar num segundo ecrã, e **`Guia do utilizador`** abre este guia. No plano Free encontra aí também **`Comprar Pro`** e **`Tenho uma chave`**.
- **O que aparece primeiro:** os cartões dos limites (semanal e, depois, de 5 horas). O seu plano Google, os créditos de prompts, o valor estimado da API e o número de modelos estão abaixo deles.
- **Uma janela maior mostra mais:** cabem mais cartões por linha. As Definições passam a ter mais colunas quando a janela tem cerca de 1500 píxeis de largura. Na Visão geral, os detalhes do plano Google passam para uma coluna à direita a cerca de 1700 píxeis, e a Análise aparece ao lado dos limites a cerca de 2400 píxeis.

---

## 2. Pop-up da barra de estado

Ao passar o rato sobre o indicador da barra de estado, abre-se um pop-up com estas partes:
- **Estado da licença:** depois das ligações, o pop-up diz **O Pro está ativo** a vermelho quando tem uma licença paga e `TESTE · 5 d` (os dias que restam) durante o teste. No plano Free, o pop-up não mostra o estado da licença.
- **Ligações no topo:** **Painel**, **Abrir no navegador**, **Definições** (abre o separador Definições) e **Ações rápidas** (abre o menu). No plano Free, há ainda uma ligação para comprar.
- **Conta e créditos de prompts numa só linha:** mostra o seu plano Google (`Google AI Pro`), o e-mail e os créditos de prompts (`500 / 50 000`).
- **Limites semanais e Limites de 5 horas:** cada linha de modelo fica numa única linha, com o seu medidor de 4 blocos, a hora de reposição e a previsão de esgotamento. A hora de reposição e a previsão são funcionalidades Pro; no plano Free, essas duas colunas mostram um cadeado.

**Aviso separado do limite semanal na barra de estado:** quando resta pouca quota semanal para os modelos Gemini ou para os modelos Claude e GPT, aparece um item à parte junto ao indicador da barra de estado, por exemplo `G 7d 15%`. Por predefinição, o item mostra um ícone de aviso quando resta 30% ou menos da quota semanal, passa a ter fundo laranja com 22% ou menos e fundo vermelho com 15% ou menos. Pode alterar os limiares de 30% e 15% nas definições do editor (ver **Alertas** na secção 4); o nível laranja fica a meio entre eles. Um clique abre o painel. O item não aparece enquanto houver quota semanal suficiente.

---

## 3. Cartões de modelos: arrastar e largar (`⋮⋮`), paleta de cores (`🎨`), lembrete de reposição (`🔔`) e ocultar (`✕`)

![Cartão de modelo com a pega de arrastar, a paleta de cores, o lembrete de reposição e a cruz que oculta o cartão](https://raw.githubusercontent.com/Nordicstocks/antigravity-quota-monitor/main/images/guide-card.png)

Reordenar os cartões, escolher as suas cores e ocultá-los fazem parte do plano Free, e as suas escolhas são guardadas automaticamente. O botão **Lembrar-me na reposição** num cartão é uma funcionalidade Pro: define um lembrete para a hora de reposição desse modelo. Em todos os planos, recebe o alerta básico no editor quando a quota volta a 100%.
- **① ⋮⋮ Arrastar e largar para ordenar os cartões:** agarre qualquer cartão pela pega **`⋮⋮`**, no canto superior esquerdo, e arraste-o para onde quiser.
- **② 🎨 Paleta de cores do cartão:** clique no botão da paleta **`🎨`** no cabeçalho de qualquer cartão para escolher uma cor (**Predefinida**, **Menta**, **Azul-céu**, **Lavanda**, **Pêssego**, **Rosa**, **Azul-petróleo**).
- **③ 🔔 Lembrete de reposição:** clique em **`🔔 Lembrar-me na reposição`** na parte inferior de qualquer cartão de modelo. Quando o limite desse modelo for reposto, recebe uma notificação no editor, ouve um som (no Windows e no macOS) e, se as tiver configurado, recebe notificações no telemóvel. O editor tem de estar aberto.
- **④ ✕ Ocultar um cartão:** clique na cruz no canto superior direito de um cartão para o retirar do painel, do painel lateral, do pop-up da barra de estado e da barra de estado. A sua escolha fica guardada. Volte a mostrá-lo com o botão do olho ao lado de **`Atualizar`**, com o sinal de mais na linha **Ocultos:** por baixo dos cartões, ou em **Definições → Geral → Cartões no painel**. Ocultar um cartão não altera os seus limites. Os modelos novos continuam a aparecer automaticamente. Só deixa de receber alertas de um limite quando todos os modelos que o partilham estão ocultos.

---

## 4. Definições: Licença, Geral, Barra de estado, Alertas, Auto-Starter, Notificações no telemóvel e em chats, Terminal, Espaço em disco

![Separador Definições](https://raw.githubusercontent.com/Nordicstocks/antigravity-quota-monitor/main/images/guide-settings.png)

Abra o separador **Definições** (também a partir do pop-up da barra de estado, do menu ou do comando `Antigravity Quota: abrir separador de definições`). Todas as secções aparecem numa só página; nenhuma está recolhida. Estão numa só coluna ou, quando a janela é larga, em várias colunas. As ligações à esquerda levam a cada secção; numa janela estreita formam uma linha no topo. A ordem é **Licença, Geral, Barra de estado, Alertas, Auto-Starter, Notificações no telemóvel e em chats, Terminal, Espaço em disco**. As secções **Alertas**, **Auto-Starter**, **Notificações no telemóvel e em chats** e **Terminal** são funcionalidades Pro (incluídas no teste) e têm uma etiqueta **Pro**. No plano Free, os respetivos controlos abrem a janela de compra. No plano Free, os alertas básicos no editor funcionam sem estas definições: é avisado quando a quota desce para 10% e 5% e quando volta a 100%.

- **Licença:** com uma licença ativa, esta secção mostra uma linha com o estado e **`Alterar chave`**, **`Verificar licença`** e **`Remover chave`**. No plano Free e durante o teste, mostra o campo da chave com o respetivo botão e uma ligação para comprar.
- **Geral:** idioma da interface (a mesma escolha do cabeçalho), tema, intervalo de atualização e **Cartões no painel**.
- **Barra de estado:** modo de apresentação (*Gemini e Claude*, *Menor quota restante*, *Gemini*, *Claude*) e 8 estilos de barra de progresso com pré-visualização.
- **Alertas:** Reserve Guard, resumo matinal, sons (no Windows e no macOS), Assistente de mudança de modelo e cópia do nome do modelo recomendado. **`Todas as definições no editor`** abre as definições do próprio editor, filtradas para esta extensão. Essas definições incluem opções menos usadas, como os limiares de aviso. A ligação em si não altera nada.

Quando vários modelos partilham um limite, recebe uma notificação no editor e uma no telemóvel para todo o grupo, e não uma por modelo. O título indica o grupo, por exemplo **Modelos Gemini (limite de 5 horas)**.

- **Auto-Starter — `Iniciar automaticamente a janela de 5 horas`:** desativado por predefinição. A janela de 5 horas começa com o seu primeiro prompt, e não a uma hora fixa. Quando esta definição está ativada, a extensão executa `agy` à hora que escolher e envia um prompt curto (`OK`), a partir da sua própria conta, para os modelos selecionados. É um pedido real. Se a janela de 5 horas começar às `07:00`, o limite será reposto por volta das `12:00`.
  - **Na primeira utilização, pede o seu consentimento.** A mensagem que envia aos modelos consome a sua quota. A secção 6 dos [Termos de Serviço Adicionais do Google Antigravity](https://antigravity.google/terms) proíbe a utilização do serviço em ligação com produtos que não sejam fornecidos pela Google. Refere que usar software de terceiros para aceder ao serviço é uma violação que pode levar à suspensão ou à cessação das suas contas do Antigravity e/ou do Gemini CLI. A decisão é sua.
  - **Se o editor estava fechado às `07:00`:** o Auto-Starter é executado quando abrir o editor, desde que não tenham passado mais de 3 horas desde a hora que escolheu. Passadas essas 3 horas, espera pelo dia seguinte.
  - **Se uma execução falhar:** a extensão avisa e tenta de novo passados 30 minutos, até 3 vezes por dia, e apenas dentro das mesmas 3 horas a seguir à hora que escolheu. O prompt só é enviado de novo aos modelos que falharam. Se o `agy` não estiver instalado, a extensão não volta a tentar nesse dia.
  - **Vê sempre o resultado real:** se o `agy` não existir ou falhar, vê um erro. A notificação no telemóvel a indicar que a janela de 5 horas começou só é enviada depois de uma execução bem-sucedida. Se houver várias janelas do editor abertas, apenas uma delas envia o prompt.
- **`Iniciar agora a janela de 5 horas`:** envia de imediato o mesmo prompt. Na primeira utilização, também pede o seu consentimento.
- **Notificações no telemóvel e em chats — `Ligar o telemóvel` (ntfy, sem necessidade de conta):**
  1. Instale a aplicação gratuita **ntfy** (App Store / Google Play).
  2. Na aplicação, toque em **`+`** e introduza o tópico indicado no painel (tem um botão **Copiar**). Os tópicos do ntfy.sh são públicos: qualquer pessoa que saiba o nome pode ler e enviar mensagens. Por isso, o tópico sugerido é longo e aleatório. Não o partilhe.
  3. Volte à extensão e clique em **`Guardar e enviar notificação de teste`**. O resultado aparece no editor.
  - **Códigos QR:** o código QR para Android abre a aplicação ntfy, se estiver instalada, e subscreve o tópico. O outro código QR abre a página web do tópico, que não subscreve a aplicação; por isso, no iPhone faça o passo 2 manualmente.
- **Webhook do Discord/Slack e Telegram:** introduza o URL do Webhook e clique em **`Guardar`**. Para o Telegram, introduza o ID do chat, clique em **`Guardar`**, clique em **`Definir token do bot`** e cole o token na caixa de texto no topo da janela.
- **`Notificação de teste`:** clique para enviar uma notificação de teste a todos os canais que configurou, no idioma selecionado.
- **Ficheiro de estado para o terminal e excertos:** clique em **`zsh`**, **`Starship`** ou **`tmux`** para abrir os excertos, copie o excerto da ferramenta que usa e cole-o no ficheiro indicado nesse excerto (ficheiro de estado: `~/.antigravity-quota/status.json`).
- **Espaço em disco:** mostra o espaço em disco ocupado por **Conversas** (a pasta `~/.gemini/antigravity/brain`; a pasta `conversations`, que fica ao lado, não é tocada) e por **Code Tracker** (`code_tracker`). **`🧹 Limpar conversas antigas (>7 dias)`** analisa apenas `brain`: lista as pastas em que nenhum ficheiro mudou nos últimos 7 dias e mostra o número de pastas, o número de ficheiros e o tamanho antes de confirmar. Estas pastas podem conter imagens, planos e registos de conversas antigas. Depois de confirmar, são movidas para o Lixo do sistema (Reciclagem, no Windows) e pode restaurá-las até esvaziar o Lixo. Se isso falhar, ficam onde estão e a extensão avisa-o. A extensão só mede `code_tracker`; nunca o limpa.

### Ações rápidas (o menu)

A ligação **Ações rápidas** no pop-up da barra de estado, o botão **Ações rápidas** no painel lateral e o comando `Antigravity Quota: ações rápidas` abrem o mesmo menu: painel, navegador, atualizar, lembrete, relatório, notificação de teste, histórico de utilização (pode guardar CSV ou JSON), **Aspeto, idioma e barra de estado**, guia do utilizador e licença. Este menu só tem ações. Para ver os números da sua quota, consulte a barra de estado, o respetivo pop-up ou o painel. **Voltar — cancelar seleção** sobe um nível, e a última linha do submenu **Aspeto, idioma e barra de estado** abre o separador **Definições**.

Para fechar qualquer lista, caixa de diálogo ou pop-up de informação da extensão, clique no **X** no canto ou prima **Esc**.

### Relatório semanal e Histórico de utilização (Pro)

Abra **Relatório semanal** ou **Histórico de utilização** a partir das **Ações rápidas** (ver acima). O **Relatório semanal** também está no separador Análise. Em qualquer dos casos, abre-se uma página com dois separadores:

- **Relatório semanal** mostra os últimos 7 dias: quantas vezes atingiu um limite, o próximo limite a esgotar-se, a hora de maior utilização, o modelo e o projeto mais usados, o estado atual dos seus limites, um gráfico da utilização da quota por dia e hora (um mapa de calor) e a utilização estimada por projeto.
- **Histórico de utilização** mostra a quota que restava ao longo de 7, 30 ou 90 dias, tanto para o limite de 5 horas como para o limite semanal. Uma linha vertical fina marca cada reposição. As vistas de 30 e 90 dias do limite de 5 horas não têm essas linhas; nelas, cada ponto mostra o nível mais baixo desse dia.

Os modelos que partilham um limite partilham um gráfico. Os botões **Guardar relatório (HTML)** e **Guardar relatório (Markdown)** no separador Relatório semanal e os botões **Exportar CSV** e **Exportar JSON** no separador Histórico de utilização pedem que escolha onde guardar o ficheiro e, depois, perguntam se quer abri-lo.

## 5. 🎁 Teste Pro de 7 dias e ativação da licença

Quando instala a extensão pela primeira vez, tem **todas as funcionalidades Pro durante 7 dias**, sem cartão de pagamento e sem registo. Depois disso, mantém as funcionalidades do plano Free: o indicador da barra de estado, o painel e o painel lateral, a ordem e as cores dos cartões, 8 estilos de barra de progresso, 37 idiomas, alertas automáticos no editor quando a quota está baixa ou volta a 100%, e 24 horas de histórico (o Histórico de utilização mais longo é uma funcionalidade Pro).

1. **Escolha um plano:**
   - **[💎 Pro vitalício — pagamento único de 9,99 €](https://buy.polar.sh/polar_cl_xdY0LqtPIfPHfnG9o8Wo5QIIpJRlvhxQOZ6vL4g5jIB)**
   - **[Pro mensal — 2,99 €/mês, cancele quando quiser](https://buy.polar.sh/polar_cl_avl0NAvpPN4jQD0vZRRg11yZ92BQ2OHCKw29f4dxlPW)**
2. **Encontre a sua chave:** a chave está no e-mail de compra ou na página de confirmação da Polar, o nosso fornecedor de pagamentos.
3. **Ative:** cole a sua chave `PRO-XXXX-...` na secção **Licença** das Definições e clique em **`Ativar`**. Também pode clicar em **`Tenho uma chave`**, que está na faixa do teste, na Visão geral e no painel lateral. Após a ativação, a faixa do teste desaparece de imediato e a etiqueta passa a dizer **Pro**. Não precisa de recarregar a janela do editor.
4. **Depois de comprar:** se tiver clicado num botão de compra e voltar ao editor no prazo de 30 minutos, a extensão verifica uma única vez se a área de transferência contém uma chave de licença e pergunta antes de a ativar. Não lê a área de transferência em mais nenhum momento, e o texto da área de transferência não é guardado.
5. **Verificar ou remover uma chave:** Definições → Licença → **`Verificar licença`** verifica de imediato a sua licença junto da Polar. **`Remover chave`** (ou o comando `Antigravity Quota: remover chave de licença Pro`) remove a chave. Depois de confirmar, a chave é apagada deste computador, incluindo o ficheiro `~/.antigravity-quota/license.key`. Se a extensão conseguir contactar a Polar, a ativação deste computador também é removida, e a chave pode ser usada noutro computador. A sua compra continua válida. Remover a chave não cancela uma subscrição mensal. A subscrição continua até a cancelar na Polar.
