# Antigravity Quota Monitor: guia do usuário

*Versão 2.0.54*

**Idioma:** [🇬🇧 English](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.md) · [🇪🇪 Eesti keel](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.et.md) · [🇩🇪 Deutsch](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.de.md) · [🇫🇮 Suomi](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.fi.md) · [🇪🇸 Español](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.es.md) · [🇫🇷 Français](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.fr.md) · [🇮🇹 Italiano](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.it.md) · [🇵🇱 Polski](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.pl.md) · [🇳🇱 Nederlands](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.nl.md) · [🇸🇪 Svenska](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.sv.md) · [🇵🇹 Português (Portugal)](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.pt-PT.md) · 🇧🇷 Português (Brasil) · [🇧🇬 Български](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.bg.md) · [🇭🇷 Hrvatski](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.hr.md) · [🇨🇿 Čeština](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.cs.md) · [🇩🇰 Dansk](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.da.md) · [🇬🇷 Ελληνικά](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.el.md) · [🇭🇺 Magyar](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.hu.md) · [🇮🇪 Gaeilge](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.ga.md) · [🇱🇻 Latviešu](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.lv.md) · [🇱🇹 Lietuvių](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.lt.md) · [🇱🇺 Lëtzebuergesch](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.lb.md) · [🇲🇹 Malti](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.mt.md) · [🇷🇴 Română](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.ro.md) · [🇸🇰 Slovenčina](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.sk.md) · [🇸🇮 Slovenščina](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.sl.md) · [🇺🇦 Українська](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.uk.md) · [🇿🇦 Afrikaans](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.af.md) · [🇯🇵 日本語](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.ja.md) · [🇨🇳 简体中文](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.zh-CN.md) · [🇹🇼 繁體中文](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.zh-TW.md) · [🇰🇷 한국어](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.ko.md) · [🇻🇳 Tiếng Việt](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.vi.md) · [🇮🇩 Bahasa Indonesia](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.id.md) · [🇮🇳 हिन्दी](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.hi.md) · [🇰🇪 Kiswahili](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.sw.md) · [🇸🇦 العربية](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.ar.md)

---

## 1. Primeiros passos: onde encontrar tudo

![Painel: aba Visão geral com os controles do cabeçalho](https://raw.githubusercontent.com/Nordicstocks/antigravity-quota-monitor/main/images/guide-overview.png)

Depois de instalada, a extensão fica em dois lugares:
1. **📌 Ícone na Barra de Atividades:** clique no ícone de medidor na Barra de Atividades para abrir o painel lateral **Antigravity Cockpit**.
2. **📊 Medidor na barra de status, no canto inferior direito:** no plano Grátis, ele aparece assim: `G: 87% 🟩🟩🟩🟩⬜ | C: 97% 🟩🟩🟩🟩🟩`. G representa os modelos Gemini e C, os modelos Claude e GPT. No Pro, o medidor mostra também o tempo que falta para a redefinição e o horário dela, por exemplo `↻3h 52m (19:52)`. Passe o mouse sobre o medidor para ver os detalhes (veja a seção 2).

![Painel lateral Antigravity Cockpit](https://raw.githubusercontent.com/Nordicstocks/antigravity-quota-monitor/main/images/guide-sidebar.png)

### O que há no cabeçalho e no topo da aba Visão geral:
- **Abas:** **Visão geral**, **Análises** e **Configurações**. As abas não repetem o título da página, que aparece só no cabeçalho.
- **Hora da última atualização e `Atualizar`:** a hora mostra quando os dados foram atualizados pela última vez; o botão busca os dados mais recentes agora.
- **Botão do olho:** lista todos os cartões, com uma marca nos visíveis. Desmarque um cartão para ocultá-lo ou marque-o para ele voltar, e depois pressione **Enter** ou **OK** para aplicar. **Esc** fecha a lista sem salvar. O número no botão indica quantos cartões estão ocultos. O painel lateral tem o mesmo botão ao lado do botão de atualizar.
- **Botão da versão (`v2.0.54`):** verifica se há uma versão mais nova. Quando há, o botão mostra **`Atualizar para …`**. Clique nele e depois recarregue a janela.
- **Idioma:** a lista suspensa fica no canto superior direito de todas as abas. A primeira opção, **Automático**, mostra também o idioma em uso no momento. Ela segue o idioma do editor ou, se o editor estiver em inglês, o idioma do sistema. Abaixo dela há 37 idiomas, cada um escrito no próprio idioma. A escolha vale na hora e muda o idioma apenas desta extensão. Com a lista aberta, digite uma letra para ir ao primeiro idioma que começa com ela. A mesma configuração está na seção **Geral** de Configurações.
- **`Noite / Dia / Automático`:** alterna para o tema escuro, o claro ou o tema do editor.
- **Ao lado do primeiro título de Visão geral:** **`Abrir no navegador`** (Pro, incluído no teste de 7 dias) abre o painel no navegador padrão, por exemplo para exibi-lo em um segundo monitor, e **`Guia do usuário`** abre este guia. No plano Grátis, ali também ficam **`Comprar Pro`** e **`Tenho uma chave`**.
- **O que vem primeiro:** os cartões de limite (semanal, depois o de 5 horas). Abaixo deles estão seu plano do Google, os créditos de prompt, o valor estimado de API e o número de modelos.
- **Uma janela maior mostra mais:** cabem mais cartões por linha. Configurações ganha mais colunas quando a janela chega a cerca de 1.500 pixels de largura. Em Visão geral, os detalhes do plano do Google passam para uma coluna à direita com cerca de 1.700 pixels, e Análises aparece ao lado dos limites com cerca de 2.400 pixels.

---

## 2. Popup da barra de status

Ao passar o mouse sobre o medidor da barra de status, abre-se um popup com estas partes:
- **Estado da licença:** depois dos links, o popup mostra **PRO está ativo** em vermelho quando você tem uma chave paga, e `TESTE · 5d` (os dias restantes) durante o teste. No plano Grátis, o popup não mostra o estado da licença.
- **Links no topo:** **Painel**, **Abrir no navegador**, **Configurações** (abre a aba Configurações) e **Ações rápidas** (abre o menu). No plano Grátis, também há um link de compra.
- **Conta e créditos de prompt em uma linha:** mostra seu plano do Google (`Google AI Pro`), o e-mail e os créditos de prompt (`500 / 50.000`).
- **Limites semanais e Limites de 5 horas:** cada linha de modelo fica em uma só linha, com seu indicador de 4 blocos, a hora da redefinição e a previsão de esgotamento. A hora da redefinição e a previsão são recursos do Pro; no plano Grátis, essas duas colunas mostram um cadeado.

**Aviso separado de limite semanal na barra de status:** quando resta pouco da cota semanal dos modelos Gemini ou dos modelos Claude e GPT, aparece um item extra ao lado do medidor da barra de status, por exemplo `G 7d 15%`. Por padrão, ele ganha um ícone de aviso quando restam 30% ou menos da cota semanal, um fundo laranja com 22% ou menos e um fundo vermelho com 15% ou menos. Você pode alterar os limiares de 30% e 15% nas configurações do editor (veja **Alertas** na seção 4); o nível laranja fica no ponto médio entre os dois. Um clique abre o painel. O item não aparece enquanto ainda resta cota semanal suficiente.

---

## 3. Cartões de modelo: arrastar e soltar (`⋮⋮`), paleta de cores (`🎨`), lembrete de redefinição (`🔔`) e ocultar (`✕`)

![Cartão de modelo com a alça de arrastar, a paleta de cores, o lembrete de redefinição e o X que oculta o cartão](https://raw.githubusercontent.com/Nordicstocks/antigravity-quota-monitor/main/images/guide-card.png)

Reordenar os cartões, escolher suas cores e ocultá-los fazem parte do plano Grátis, e suas escolhas são salvas automaticamente. O botão **Avisar na redefinição** de um cartão é um recurso do Pro: ele cria um lembrete para a hora em que aquele modelo é redefinido. Todos os planos recebem o alerta básico no editor quando a cota volta a 100%.
- **① ⋮⋮ Reordenar cartões arrastando:** segure qualquer cartão pela alça **`⋮⋮`** no canto superior esquerdo e arraste-o para onde quiser.
- **② 🎨 Paleta de cores do cartão:** clique no botão da paleta **`🎨`** no cabeçalho de qualquer cartão para escolher uma cor (**Padrão**, **Menta**, **Céu**, **Lavanda**, **Pêssego**, **Rosa**, **Verde-azulado**).
- **③ 🔔 Lembrete de redefinição:** clique em **`🔔 Avisar na redefinição`** na parte de baixo de qualquer cartão de modelo. Quando o limite daquele modelo for redefinido, você recebe uma notificação no editor, um som (no Windows e no macOS) e, se você os configurou, notificações no celular. O editor precisa estar aberto.
- **④ ✕ Ocultar um cartão:** clique no X no canto superior direito de um cartão para removê-lo do painel, do painel lateral, do popup da barra de status e da barra de status. Sua escolha é salva. Para trazê-lo de volta, use o botão do olho ao lado de **`Atualizar`**, o sinal de mais na linha **Ocultos:** abaixo dos cartões, ou **Configurações → Geral → Cartões no painel**. Ocultar um cartão não altera seus limites. Modelos novos continuam aparecendo automaticamente. Você só deixa de receber alertas de um limite quando todos os modelos que o compartilham estão ocultos.

---

## 4. Configurações: Licença, Geral, Barra de status, Alertas, Auto-Starter, Notificações no celular e no chat, Terminal, Espaço em disco

![Aba Configurações](https://raw.githubusercontent.com/Nordicstocks/antigravity-quota-monitor/main/images/guide-settings.png)

Abra a aba **Configurações**. Você também pode abri-la pelo popup da barra de status, pelo menu ou pelo comando `Antigravity Quota: abrir aba de configurações`. Todas as seções aparecem em uma só página; nenhuma fica recolhida. Em janelas largas, as seções se distribuem em várias colunas; em janelas estreitas, ficam em uma só. Os links à esquerda levam a cada seção; em uma janela estreita, eles formam uma linha no topo. A ordem é **Licença, Geral, Barra de status, Alertas, Auto-Starter, Notificações no celular e no chat, Terminal, Espaço em disco**. As seções **Alertas**, **Auto-Starter**, **Notificações no celular e no chat** e **Terminal** são recursos do Pro (incluídos no teste) e têm uma etiqueta Pro. No plano Grátis, os controles delas abrem a janela de compra, mas os alertas básicos no editor funcionam sem essas configurações: você é avisado quando a cota cai para 10% e para 5% e quando volta a 100%.

- **Licença:** com uma licença ativa, esta seção mostra uma linha com o status e **`Trocar chave`**, **`Verificar licença`** e **`Remover chave`**. No plano Grátis e durante o teste, ela mostra o campo da chave com seu botão e um link de compra.
- **Geral:** idioma da interface (a mesma escolha do cabeçalho), tema, intervalo de atualização e **Cartões no painel**.
- **Barra de status:** modo de exibição (*Gemini e Claude*, *Menor cota restante*, *Gemini*, *Claude*) e 8 estilos de barra de progresso com pré-visualização.
- **Alertas:** Reserve Guard, resumo da manhã, sons (no Windows e no macOS), Assistente de troca de modelo e cópia do nome do modelo recomendado. **`Todas as configurações do editor`** abre as configurações do próprio editor, filtradas para esta extensão. Elas incluem opções menos usadas, como os limiares de aviso. O link em si não altera nada.

Quando vários modelos compartilham um limite, você recebe uma notificação no editor e uma no celular para o grupo inteiro, e não uma por modelo. O título nomeia o grupo, por exemplo **Modelos Gemini (limite de 5 horas)**.

- **Auto-Starter — `Iniciar automaticamente a janela de 5 horas`:** desativado por padrão. O período de 5 horas começa com o seu primeiro prompt, não em um horário fixo. Quando esta opção está ativada, a extensão executa `agy` no horário que você escolheu e envia um prompt curto (`OK`) da sua própria conta aos modelos selecionados. É uma requisição real. Se o período de 5 horas começar às `07:00`, o limite será redefinido por volta das `12:00`.
  - **Na primeira vez, ela pede o seu consentimento.** A mensagem enviada aos modelos consome a sua cota. A Seção 6 dos [Termos de Serviço Adicionais do Google Antigravity](https://antigravity.google/terms) proíbe usar o serviço em conexão com produtos não fornecidos pelo Google. Ela diz que usar software de terceiros para acessar o serviço é uma violação que pode levar à suspensão ou ao encerramento de suas contas do Antigravity e/ou do Gemini CLI. A decisão é sua.
  - **Se o editor estiver fechado às `07:00`:** o Auto-Starter é executado quando você abre o editor, desde que não tenham se passado mais de 3 horas do horário escolhido. Passadas essas 3 horas, ele espera até o dia seguinte.
  - **Se uma execução falhar:** a extensão avisa e tenta de novo após 30 minutos, até 3 vezes por dia, e somente dentro das mesmas 3 horas após o horário escolhido. O prompt é enviado de novo apenas aos modelos que falharam. Se `agy` não estiver instalado, a extensão não tenta de novo naquele dia.
  - **Você sempre vê o resultado real:** se `agy` estiver ausente ou falhar, você vê um erro. A notificação no celular avisando que o período de 5 horas começou só é enviada depois de uma execução bem-sucedida. Se houver várias janelas do editor abertas, apenas uma delas envia o prompt.
- **`Iniciar janela de 5 horas agora`:** envia o mesmo prompt imediatamente. Na primeira vez, isso também pede o seu consentimento.
- **Notificações no celular e no chat — `Conecte seu celular` (ntfy, sem precisar de conta):**
  1. Instale o app gratuito **ntfy** (App Store / Google Play).
  2. No app, toque em **`+`** e digite o tópico mostrado no painel (ele tem um botão **Copiar**). Os tópicos do ntfy.sh são públicos: qualquer pessoa que souber o nome pode ler e enviar mensagens. Por isso o tópico sugerido é longo e aleatório. Não o compartilhe.
  3. Volte à extensão e clique em **`Salvar e enviar notificação de teste`**. O resultado aparece no editor.
  - **Códigos QR:** o código QR para Android abre o app ntfy, se ele estiver instalado, e inscreve você no tópico. O outro código QR abre a página web do tópico, que não inscreve o app no tópico; por isso, no iPhone, faça o passo 2 manualmente.
- **Discord/Slack Webhook & Telegram:** digite a URL do seu Webhook e clique em **`Salvar`**. No Telegram, digite o seu Chat ID, clique em **`Salvar`**, depois clique em **`Definir token do bot`** e cole o token no campo de entrada no topo da janela.
- **`Notificação de teste`:** clique para enviar uma notificação de teste a todos os canais que você configurou, no idioma selecionado.
- **Arquivo de status do terminal e snippets:** clique em **`zsh`**, **`Starship`** ou **`tmux`** para abrir os snippets, copie o snippet da ferramenta que você usa e cole-o no arquivo indicado nesse snippet (arquivo de status: `~/.antigravity-quota/status.json`).
- **Espaço em disco:** mostra o espaço em disco usado por **Conversas** (a pasta `~/.gemini/antigravity/brain`; a pasta `conversations` ao lado dela não é tocada) e **Rastreador de código** (`code_tracker`). **`🧹 Limpar conversas antigas (>7 dias)`** considera apenas `brain`: ele lista as pastas em que nenhum arquivo mudou nos últimos 7 dias e mostra a quantidade de pastas, a quantidade de arquivos e o tamanho antes de você confirmar. Essas pastas podem conter imagens, planos e logs de conversas antigas. Depois que você confirmar, elas vão para a lixeira do sistema (Lixo no macOS, Lixeira no Windows), e você pode restaurá-las até esvaziá-la. Se isso falhar, elas ficam onde estão e a extensão avisa. A extensão apenas mede `code_tracker`; ela nunca o limpa.

### Ações rápidas (o menu)

O link **Ações rápidas** no popup da barra de status, o botão **Ações rápidas** no painel lateral e o comando `Antigravity Quota: ações rápidas` abrem o mesmo menu: painel, navegador, atualizar, lembrete, relatório, notificação de teste, histórico de uso (que pode salvar CSV ou JSON), **Aparência, idioma e barra de status**, guia do usuário e licença. Este menu tem apenas ações. Para ver os números da sua cota, olhe a barra de status, o popup dela ou o painel. **Voltar — Cancelar seleção** sobe um nível, e a última linha do submenu **Aparência, idioma e barra de status** abre a aba **Configurações**.

Para fechar qualquer lista, caixa de diálogo ou popup de informações da extensão, clique no **X** no canto ou pressione **Esc**.

### Relatório semanal e Histórico de uso (Pro)

Abra **Relatório semanal** ou **Histórico de uso** em **Ações rápidas** (veja acima). O **Relatório semanal** também está na aba Análises. Nos dois casos, abre-se uma página com duas abas:

- **Relatório semanal** mostra os últimos 7 dias: quantas vezes você atingiu um limite, o que se esgota em seguida, o horário de pico, o modelo e o projeto mais usados, o estado atual dos seus limites, um gráfico do uso da cota por dia e hora (um mapa de calor) e o uso estimado por projeto.
- **Histórico de uso** mostra quanta cota restava nos últimos 7, 30 ou 90 dias, tanto para o limite de 5 horas quanto para o limite semanal. Uma linha vertical fina marca cada redefinição. As visualizações de 30 e 90 dias do limite de 5 horas não têm essas linhas; nelas, cada ponto mostra o nível mais baixo do dia.

Modelos que compartilham um limite aparecem em um único gráfico. Os botões **Salvar relatório (HTML)** e **Salvar relatório (Markdown)** na aba Relatório semanal e os botões **Exportar CSV** e **Exportar JSON** na aba Histórico de uso permitem escolher onde salvar o arquivo e depois oferecem abri-lo.

## 5. 🎁 Teste do Pro por 7 dias e ativação da licença

Na primeira vez que você instala a extensão, recebe **todos os recursos do Pro por 7 dias**, sem precisar informar um cartão e sem cadastro. Depois disso, você continua com os recursos do plano Grátis: o medidor na barra de status, o painel e o painel lateral, a ordem e as cores dos cartões, 8 estilos de barra de progresso, 37 idiomas, alertas automáticos no editor quando a cota está baixa ou volta a 100% e 24 horas de histórico (o Histórico de uso mais longo é um recurso do Pro).

1. **Escolha um plano:**
   - **[💎 Pro vitalício — pagamento único de € 9,99](https://buy.polar.sh/polar_cl_xdY0LqtPIfPHfnG9o8Wo5QIIpJRlvhxQOZ6vL4g5jIB)**
   - **[Pro mensal — € 2,99/mês, cancele quando quiser](https://buy.polar.sh/polar_cl_avl0NAvpPN4jQD0vZRRg11yZ92BQ2OHCKw29f4dxlPW)**
2. **Encontre a sua chave:** a chave está no e-mail da compra ou na página de confirmação da Polar, nosso provedor de pagamento.
3. **Ative:** cole a sua chave `PRO-XXXX-...` na seção **Licença** de Configurações e clique em **`Ativar`**. Você também pode clicar em **`Tenho uma chave`**, que fica no banner do teste, em Visão geral e no painel lateral. Após a ativação, o banner do teste some na hora e o selo mostra **Pro**. Não é preciso recarregar a janela.
4. **Depois de comprar:** se você clicou em um botão de compra e voltou ao editor em até 30 minutos, a extensão verifica uma única vez se a área de transferência contém uma chave de licença e pergunta antes de ativá-la. Ela não lê a área de transferência em nenhum outro momento, e o texto da área de transferência não é armazenado.
5. **Verificar ou remover uma chave:** Configurações → Licença → **`Verificar licença`** verifica sua licença na Polar imediatamente. **`Remover chave`** (ou o comando `Antigravity Quota: remover chave de licença Pro`) remove a chave. Depois que você confirmar, a chave será apagada deste computador, incluindo o arquivo `~/.antigravity-quota/license.key`. Se a extensão conseguir acessar a Polar, a ativação deste computador também é liberada, e a chave pode ser usada em outro computador. Sua compra continua válida. Remover a chave não cancela uma assinatura mensal. A assinatura continua até você cancelá-la na Polar.
