# Antigravity Quota Monitor: guía de usuario

*Versión 2.0.55*

**Idioma:** [🇬🇧 English](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.md) · [🇪🇪 Eesti keel](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.et.md) · [🇩🇪 Deutsch](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.de.md) · [🇫🇮 Suomi](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.fi.md) · 🇪🇸 Español · [🇫🇷 Français](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.fr.md) · [🇮🇹 Italiano](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.it.md) · [🇵🇱 Polski](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.pl.md) · [🇳🇱 Nederlands](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.nl.md) · [🇸🇪 Svenska](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.sv.md) · [🇵🇹 Português (Portugal)](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.pt-PT.md) · [🇧🇷 Português (Brasil)](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.pt-BR.md) · [🇧🇬 Български](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.bg.md) · [🇭🇷 Hrvatski](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.hr.md) · [🇨🇿 Čeština](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.cs.md) · [🇩🇰 Dansk](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.da.md) · [🇬🇷 Ελληνικά](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.el.md) · [🇭🇺 Magyar](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.hu.md) · [🇮🇪 Gaeilge](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.ga.md) · [🇱🇻 Latviešu](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.lv.md) · [🇱🇹 Lietuvių](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.lt.md) · [🇱🇺 Lëtzebuergesch](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.lb.md) · [🇲🇹 Malti](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.mt.md) · [🇷🇴 Română](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.ro.md) · [🇸🇰 Slovenčina](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.sk.md) · [🇸🇮 Slovenščina](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.sl.md) · [🇺🇦 Українська](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.uk.md) · [🇿🇦 Afrikaans](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.af.md) · [🇯🇵 日本語](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.ja.md) · [🇨🇳 简体中文](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.zh-CN.md) · [🇹🇼 繁體中文](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.zh-TW.md) · [🇰🇷 한국어](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.ko.md) · [🇻🇳 Tiếng Việt](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.vi.md) · [🇮🇩 Bahasa Indonesia](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.id.md) · [🇮🇳 हिन्दी](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.hi.md) · [🇰🇪 Kiswahili](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.sw.md) · [🇸🇦 العربية](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.ar.md)

---

## 1. Primeros pasos: dónde está todo

![Panel: pestaña Resumen con los controles del encabezado](https://raw.githubusercontent.com/Nordicstocks/antigravity-quota-monitor/main/images/guide-overview.png)

Cuando la extensión está instalada, la encuentras en dos sitios:
1. **📌 Icono en la barra de actividades:** haz clic en el icono del velocímetro de la barra de actividades para abrir la barra lateral **Antigravity Cockpit**.
2. **📊 Medidor de la barra de estado, abajo a la derecha:** en el plan Gratis tiene este aspecto: `G: 87% 🟩🟩🟩🟩⬜ | C: 97% 🟩🟩🟩🟩🟩`. G corresponde a los modelos de Gemini y C a los modelos de Claude y GPT. El plan Pro muestra además el tiempo que falta para el restablecimiento y la hora de restablecimiento, por ejemplo `↻3h 52m (19:52)`. Pasa el cursor sobre el medidor para ver los detalles (consulta la sección 2).

![Barra lateral Antigravity Cockpit](https://raw.githubusercontent.com/Nordicstocks/antigravity-quota-monitor/main/images/guide-sidebar.png)

### Qué hay en el encabezado y en la parte superior de Resumen:
- **Pestañas:** **Resumen**, **Analítica** y **Configuración**. Las pestañas no repiten el título de la página, que aparece solo en el encabezado.
- **Hora de la última actualización y `Actualizar`:** la hora indica cuándo se actualizaron los datos por última vez; el botón carga ahora los datos más recientes.
- **Botón del ojo:** enumera todas las tarjetas y marca las visibles. Desmarca una tarjeta para ocultarla o márcala para volver a mostrarla, y pulsa **Intro** u **OK** para aplicar el cambio. **Esc** cierra la lista sin guardar. El número del botón indica cuántas tarjetas hay ocultas. La barra lateral tiene el mismo botón junto a su botón de actualizar.
- **Botón de la versión (`v2.0.55`):** comprueba si hay una versión más reciente. Cuando la hay, el botón indica **`Actualizar a …`**. Haz clic en él y luego recarga la ventana del editor.
- **Idioma:** el menú desplegable está arriba a la derecha en todas las pestañas. La primera opción, **Automático**, muestra además el idioma en uso. Sigue el idioma del editor, o el del sistema si el editor está en inglés. Debajo hay 37 idiomas, cada uno escrito en su propia lengua. Tu elección se aplica de inmediato y cambia el idioma solo de esta extensión. Con la lista abierta, escribe una letra para saltar al primer idioma que empiece por ella. La misma opción está en la sección **General** de Configuración.
- **`Noche / Día / Automático`:** cambia al tema oscuro, al claro o al del editor.
- **Junto al primer título de Resumen:** **`Abrir en el navegador`** (Pro, incluido en la prueba de 7 días) abre el panel en tu navegador predeterminado, por ejemplo para mostrarlo en un segundo monitor, y **`Guía de usuario`** abre esta guía. En el plan Gratis también encuentras ahí **`Comprar Pro`** y **`Tengo una clave`**.
- **Qué aparece primero:** las tarjetas de límites (primero la semanal y luego la de 5 horas). Debajo están tu plan de Google, los créditos de prompt, el valor estimado a precios de la API y el número de modelos.
- **Con una ventana más grande se ve más:** caben más tarjetas en cada fila. Configuración tiene más columnas a partir de unos 1500 píxeles de ancho. En Resumen, los detalles del plan de Google pasan a una columna a la derecha a partir de unos 1700 píxeles, y Analítica aparece junto a los límites a partir de unos 2400 píxeles.

---

## 2. Ventana emergente de la barra de estado

Al pasar el cursor sobre el medidor de la barra de estado se abre una ventana emergente con estas partes:
- **Estado de la licencia:** tras los enlaces, la ventana emergente muestra **PRO está activo** en rojo si tienes una clave de pago y `PRUEBA · 5d` (los días que quedan) durante la prueba. En el plan Gratis la ventana emergente no muestra ningún estado de licencia.
- **Enlaces superiores:** **Panel**, **Abrir en el navegador**, **Configuración** (abre la pestaña Configuración) y **Acciones rápidas** (abre el menú). En el plan Gratis hay además un enlace de compra.
- **Cuenta y créditos de prompt en una sola fila:** muestra tu plan de Google (`Google AI Pro`), tu correo y tus créditos de prompt (`500 / 50 000`).
- **Límites semanales y límites de 5 horas:** cada modelo ocupa una sola fila, con su medidor de 4 bloques, la hora de restablecimiento y el pronóstico de agotamiento. La hora de restablecimiento y el pronóstico son funciones Pro; en el plan Gratis esas dos columnas muestran un candado.

**Aviso aparte del límite semanal en la barra de estado:** cuando queda poca cuota semanal de los modelos de Gemini o de Claude y GPT, junto al medidor de la barra de estado aparece un elemento independiente, por ejemplo `G 7d 15%`. Por defecto muestra un icono de aviso si queda el 30 % o menos de la cuota semanal, un fondo naranja con el 22 % o menos y un fondo rojo con el 15 % o menos. Puedes cambiar los umbrales del 30 % y del 15 % en la configuración del editor (consulta **Alertas** en la sección 4); el nivel naranja queda a medio camino entre los dos. Al hacer clic se abre el panel. Mientras quede suficiente cuota semanal, el elemento no se muestra.

---

## 3. Tarjetas de modelos: arrastrar y soltar (`⋮⋮`), paleta de colores (`🎨`), aviso de restablecimiento (`🔔`) y ocultar (`✕`)

![Tarjeta de modelo con el asa de arrastre, la paleta de colores, el aviso de restablecimiento y la cruz que oculta la tarjeta](https://raw.githubusercontent.com/Nordicstocks/antigravity-quota-monitor/main/images/guide-card.png)

Ordenar las tarjetas, elegir sus colores y ocultarlas forman parte del plan Gratis, y tus cambios se guardan automáticamente. El botón **Avisarme cuando se restablezca** de una tarjeta es una función Pro: programa un aviso para la hora de restablecimiento de ese modelo. Todos los planes reciben el aviso básico en el editor cuando la cuota vuelve al 100 %.
- **① ⋮⋮ Arrastrar y soltar para ordenar:** agarra cualquier tarjeta por el asa **`⋮⋮`** de su esquina superior izquierda y arrástrala adonde quieras.
- **② 🎨 Paleta de colores de la tarjeta:** haz clic en el botón de la paleta **`🎨`** del encabezado de cualquier tarjeta para elegir un color (**Predeterminado**, **Menta**, **Celeste**, **Lavanda**, **Salmón**, **Rosa**, **Turquesa**).
- **③ 🔔 Aviso de restablecimiento:** haz clic en **`🔔 Avisarme cuando se restablezca`**, en la parte inferior de cualquier tarjeta de modelo. Cuando se restablece el límite de ese modelo, recibes una notificación en el editor, oyes un sonido (en Windows y macOS) y, si los has configurado, te llegan avisos al teléfono. El editor tiene que estar abierto.
- **④ ✕ Ocultar una tarjeta:** haz clic en la cruz de la esquina superior derecha de una tarjeta para quitarla del panel, de la barra lateral, de la ventana emergente de la barra de estado y de la barra de estado. Tu elección se guarda. Para recuperarla, usa el botón del ojo junto a **`Actualizar`**, el signo más de la fila **Tarjetas ocultas:** debajo de las tarjetas, o ve a **Configuración → General → Tarjetas visibles en el panel**. Ocultar una tarjeta no cambia tus límites. Los modelos nuevos siguen apareciendo automáticamente. Dejas de recibir alertas de un límite solo cuando están ocultos todos los modelos que lo comparten.

---

## 4. Configuración: Licencia, General, Barra de estado, Alertas, Inicio automático, Notificaciones: teléfono y chat, Terminal, Espacio en disco

![Pestaña Configuración](https://raw.githubusercontent.com/Nordicstocks/antigravity-quota-monitor/main/images/guide-settings.png)

Abre la pestaña **Configuración** (también desde la ventana emergente de la barra de estado, desde el menú o con el comando `Antigravity Quota: Abrir la pestaña Configuración`). Todas las secciones se muestran en una sola página; ninguna está plegada. Van en una columna, o en más si la ventana es ancha. Los enlaces de la izquierda llevan a cada sección; en una ventana estrecha forman una fila en la parte superior. El orden es **Licencia, General, Barra de estado, Alertas, Inicio automático, Notificaciones: teléfono y chat, Terminal, Espacio en disco**. Las secciones **Alertas**, **Inicio automático**, **Notificaciones: teléfono y chat** y **Terminal** son funciones Pro (incluidas en la prueba) y llevan una etiqueta PRO. En el plan Gratis, sus controles abren el cuadro de compra, mientras que las alertas básicas del editor funcionan sin esta configuración: se te avisa cuando la cuota baja al 10 % y al 5 % y cuando vuelve al 100 %.

- **Licencia:** con una licencia activa, esta sección muestra una fila con el estado y los botones **`Cambiar clave`**, **`Comprobar licencia`** y **`Quitar clave`**. En el plan Gratis y durante la prueba muestra el campo de la clave con su botón y un enlace de compra.
- **General:** idioma de la interfaz (la misma opción que en el encabezado), tema, intervalo de actualización y **Tarjetas visibles en el panel**.
- **Barra de estado:** modo de visualización (*Gemini y Claude*, *Menor cuota restante*, *Gemini*, *Claude*) y 8 estilos de barra de progreso con vista previa.
- **Alertas:** Reserve Guard, resumen matutino, sonidos (en Windows y macOS), Asistente de cambio de modelo y copia del nombre del modelo recomendado. **`Toda la configuración en el editor`** abre la configuración propia del editor, filtrada para esta extensión. Incluye opciones menos habituales, como los umbrales de aviso. El enlace en sí no cambia nada.

Cuando varios modelos comparten un límite, recibes una notificación en el editor y una en el teléfono para todo el grupo, no una por modelo. El título nombra el grupo, por ejemplo **Modelos de Gemini (límite de 5 horas)**.

- **Inicio automático: `Inicio automático de la ventana de 5 horas`:** desactivado por defecto. La ventana de 5 horas empieza con tu primer prompt, no a una hora fija. Con esta opción activada, la extensión ejecuta `agy` a la hora que elijas y envía desde tu propia cuenta un prompt breve (`OK`) a los modelos seleccionados. Es una solicitud real. Si la ventana de 5 horas empieza a las `07:00`, el límite se restablecerá alrededor de las `12:00`.
  - **La primera vez, la extensión te pide tu consentimiento.** El mensaje que envía a los modelos consume tu cuota. La sección 6 de los [Términos de servicio adicionales de Google Antigravity](https://antigravity.google/terms) prohíbe usar el servicio en relación con productos que no proporciona Google. Indica que acceder al servicio con software de terceros es un incumplimiento que puede dar lugar a la suspensión o la cancelación de tus cuentas de Antigravity y/o de Gemini CLI. La decisión es tuya.
  - **Si el editor estaba cerrado a las `07:00`:** el Inicio automático se ejecuta cuando abres el editor, siempre que no hayan pasado más de 3 horas desde la hora elegida. Pasadas esas 3 horas, el Inicio automático espera al día siguiente.
  - **Si una ejecución falla:** la extensión te lo indica y lo vuelve a intentar a los 30 minutos, hasta 3 veces al día y solo dentro de esas mismas 3 horas posteriores a la hora elegida. El prompt se vuelve a enviar solo a los modelos que fallaron. Si `agy` no está instalado, la extensión no vuelve a intentarlo ese día.
  - **Siempre ves el resultado real:** si `agy` no está instalado o falla, ves un error. La notificación al teléfono que avisa de que la ventana de 5 horas ha empezado solo se envía tras una ejecución correcta. Si hay varias ventanas del editor abiertas, solo una envía el prompt.
- **`Iniciar la ventana de 5 horas ahora`:** envía el mismo prompt de inmediato. La primera vez también pide tu consentimiento.
- **Notificaciones: teléfono y chat. `Conecta tu teléfono` (ntfy, sin necesidad de cuenta):**
  1. Instala la aplicación gratuita **ntfy** (App Store / Google Play).
  2. En la aplicación, toca **`+`** e introduce el tema que aparece en el panel (tiene un botón **Copiar**). Los temas de ntfy.sh son públicos: cualquiera que conozca el nombre puede leer y enviar mensajes. Por eso el tema propuesto es largo y aleatorio. No lo compartas.
  3. Vuelve a la extensión y haz clic en **`Guardar y enviar una notificación de prueba`**. El resultado aparece en el editor.
  - **Códigos QR:** el código QR para Android abre la aplicación ntfy, si está instalada, y la suscribe al tema. El otro código QR abre la página web del tema, que no suscribe la aplicación, así que en iPhone haz el paso 2 a mano.
- **Webhook de Discord o Slack y Telegram:** pega la URL de tu webhook y haz clic en **`Guardar`**. Para Telegram, introduce tu ID de chat, haz clic en **`Guardar`**, después en **`Configurar token del bot`** y pega el token en el cuadro de entrada de la parte superior de la ventana.
- **`Notificación de prueba`:** haz clic para enviar una notificación de prueba a todos los canales que hayas configurado, en el idioma elegido.
- **Archivo de estado y fragmentos de código para el terminal:** haz clic en **`zsh`**, **`Starship`** o **`tmux`** para abrir los fragmentos, copia el del programa que uses y pégalo en el archivo que se indica en ese fragmento (archivo de estado: `~/.antigravity-quota/status.json`).
- **Espacio en disco:** muestra el espacio que ocupan **Conversaciones** (la carpeta `~/.gemini/antigravity/brain`; la carpeta `conversations` que hay a su lado no se toca) y **Code tracker** (`code_tracker`). **`🧹 Limpiar conversaciones sin cambios en 7 días`** solo mira `brain`: enumera las carpetas en las que ningún archivo ha cambiado en los últimos 7 días y, antes de que confirmes, muestra el número de carpetas, el número de archivos y el tamaño. Esas carpetas pueden contener imágenes, planes y registros de conversaciones antiguas. Tras tu confirmación, se mueven a la Papelera del sistema (Papelera de reciclaje en Windows), y puedes restaurarlas hasta que la vacíes. Si no se pueden mover, siguen en su sitio y la extensión te lo indica. La extensión solo mide `code_tracker`; nunca lo limpia.

### Acciones rápidas (el menú)

El enlace **Acciones rápidas** de la ventana emergente de la barra de estado, el botón **Acciones rápidas** de la barra lateral y el comando `Antigravity Quota: Acciones rápidas` abren el mismo menú: panel, navegador, actualización, aviso, informe, notificación de prueba, historial de uso (permite guardarlo en CSV o JSON), **Apariencia, idioma y barra de estado**, guía de usuario y licencia. Este menú solo contiene acciones. Para ver las cifras de tu cuota, mira la barra de estado, su ventana emergente o el panel. **Atrás** sube un nivel, y la última fila del submenú **Apariencia, idioma y barra de estado** abre la pestaña **Configuración**.

Para cerrar cualquier lista, cuadro de diálogo o ventana de información de la extensión, haz clic en la **X** de la esquina o pulsa **Esc**.

### Informe semanal e Historial de uso (Pro)

Abre **Informe semanal** o **Historial de uso** desde **Acciones rápidas** (consulta más arriba). **Informe semanal** también está en la pestaña Analítica. Sea cual sea el camino, se abre una página con dos pestañas:

- **Informe semanal** muestra los últimos 7 días: cuántas veces llegaste a un límite, qué límite será el próximo en agotarse, la hora de mayor uso, el modelo y el proyecto más usados, el estado actual de tus límites, un gráfico del uso de la cuota por día y hora (un mapa de calor) y el uso estimado por proyecto.
- **Historial de uso** muestra cuánta cuota quedaba a lo largo de 7, 30 o 90 días, tanto del límite de 5 horas como del límite semanal. Una línea vertical fina marca cada restablecimiento. Las vistas de 30 y 90 días del límite de 5 horas no tienen esas líneas; en ellas, cada punto muestra el nivel más bajo de ese día.

Los modelos que comparten un límite comparten también el gráfico. Los botones **Guardar informe (HTML)** y **Guardar informe (Markdown)** de la pestaña Informe semanal y los botones **Exportar CSV** y **Exportar JSON** de la pestaña Historial de uso preguntan dónde guardar el archivo y luego ofrecen abrirlo.

## 5. 🎁 Prueba de Pro de 7 días y activación de la licencia

La primera vez que instalas la extensión, tienes **todas las funciones Pro durante 7 días**, sin tarjeta de pago y sin registro. Después sigues teniendo las funciones del plan Gratis: el medidor de la barra de estado, el panel y la barra lateral, el orden y los colores de las tarjetas, 8 estilos de barra de progreso, 37 idiomas, alertas automáticas en el editor cuando la cuota es baja o vuelve al 100 %, y 24 horas de historial (el Historial de uso más largo es una función Pro).

1. **Elige un plan:**
   - **[💎 Pro de por vida: 9,99 €, pago único](https://buy.polar.sh/polar_cl_xdY0LqtPIfPHfnG9o8Wo5QIIpJRlvhxQOZ6vL4g5jIB)**
   - **[Pro mensual: 2,99 €/mes, cancela cuando quieras](https://buy.polar.sh/polar_cl_avl0NAvpPN4jQD0vZRRg11yZ92BQ2OHCKw29f4dxlPW)**
2. **Encuentra tu clave:** la clave está en el correo que recibes al comprar o en la página de confirmación de Polar, nuestro proveedor de pagos.
3. **Actívala:** pega tu clave `PRO-XXXX-...` en la sección **Licencia** de Configuración y haz clic en **`Activar clave de licencia`**. También puedes hacer clic en **`Tengo una clave`**, que está en el aviso de la prueba, en Resumen y en la barra lateral. Tras la activación, el aviso de la prueba desaparece de inmediato y la insignia muestra **PRO**. No hace falta recargar la ventana del editor.
4. **Después de comprar:** si haces clic en un botón de compra y vuelves al editor en menos de 30 minutos, la extensión comprueba una sola vez si el portapapeles contiene una clave de licencia y te pregunta antes de activarla. No lee el portapapeles en ningún otro momento y el texto del portapapeles no se guarda.
5. **Comprobar o quitar una clave:** Configuración → Licencia → **`Comprobar licencia`** comprueba tu licencia con Polar de inmediato. **`Quitar clave`** (o el comando `Antigravity Quota: Quitar clave de licencia Pro`) quita la clave. Tras tu confirmación, la clave se elimina de este equipo, incluido el archivo `~/.antigravity-quota/license.key`. Si la extensión puede conectarse con Polar, también se libera la activación de este equipo, de modo que la clave se puede usar en otro equipo. Tu compra sigue siendo válida. Quitar la clave NO cancela una suscripción mensual: la suscripción continúa hasta que la canceles en Polar.
