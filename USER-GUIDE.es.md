# 📖 Antigravity Quota Monitor: guía de usuario ilustrada

*Versión 2.0.51*

**Idioma:** [English](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.md) · [Eesti](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.et.md) · [Deutsch](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.de.md) · [简体中文](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.zh-CN.md) · [日本語](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.ja.md) · [Español](https://github.com/Nordicstocks/antigravity-quota-monitor/blob/main/USER-GUIDE.es.md)

---

## 1. Inicio rápido: controles del encabezado, barra de actividades a la izquierda (`Antigravity Cockpit`), vista en el navegador y campo de la clave de licencia

![Controles del encabezado y navegación](https://raw.githubusercontent.com/Nordicstocks/antigravity-quota-monitor/fb46f6f/images/guide-1-open-and-header.png)

Una vez instalada la extensión, tienes **dos accesos siempre visibles**:
1. **📌 Icono de la barra de actividades, a la izquierda (`Antigravity Cockpit`):** haz clic en el **icono del velocímetro**, en el extremo izquierdo de la ventana, para abrir la **barra lateral de Antigravity Cockpit**.
2. **📊 Medidor de la barra de estado, abajo a la derecha:** `📊 G: 87% 🟩🟩🟩🟩⬜ ↻3h 52m (19:52) | C: 97% 🟩🟩🟩🟩🟩`.

### Qué hay en el encabezado y en la parte superior de la pestaña Resumen
- **Pestañas:** **Resumen**, **Analítica** y **Configuración**. El título del panel solo aparece en el encabezado.
- **Hora de actualización y `Actualizar`:** la hora indica la última actualización; el botón vuelve a cargar los datos de inmediato.
- **Botón del ojo:** este botón muestra todas las tarjetas, con una marca en las visibles. Desmarca una tarjeta para ocultarla y márcala para volver a mostrarla. El número indica cuántas hay ocultas. La barra lateral tiene el mismo botón, junto al de actualizar.
- **Botón de la versión (`v2.0.51`):** este botón comprueba si hay una versión más reciente. Cuando la hay, el botón indica **`Actualizar a …`**. Haz clic en él y luego recarga la ventana.
- **Idioma:** el menú desplegable está arriba a la derecha en todas las pestañas. La primera opción, **Automático** junto al idioma en uso, sigue el idioma del editor, o el del sistema si el editor está en inglés. A continuación aparecen 37 idiomas, cada uno con su nombre en su propia lengua. El cambio se aplica de inmediato y solo afecta a esta extensión. Si escribes una letra, la lista salta a un idioma que empiece por esa letra. La misma opción está en la sección **General** de Configuración.
- **`Noche / Día / Automático`:** con estos botones eliges el tema oscuro, el claro o el del editor.
- **Junto al primer título de Resumen:** **`Abrir en el navegador`** abre el panel en tu navegador predeterminado, por ejemplo en un segundo monitor (función Pro, incluida en la prueba de 7 días), y **`Guía de usuario`** abre esta guía. En la versión gratuita también encontrarás ahí **`Comprar Pro`** y **`Tengo una clave`**.
- **Qué aparece primero:** las tarjetas de límites (la semanal y luego la de 5 horas). El plan, los créditos de prompt, el valor estimado a precios de la API y el número de modelos están debajo.
- **Con una ventana más grande se ve más:** caben más tarjetas en cada fila. A partir de unos 1700 píxeles de ancho, los detalles del plan pasan a una columna a la derecha. A partir de unos 2400 píxeles, la pestaña Analítica se abre junto a los límites, y la pestaña Configuración tiene más columnas a partir de unos 1500 píxeles.

---

## 2. Ventana emergente ancha de la barra de estado

![Ventana emergente ancha de la barra de estado](https://raw.githubusercontent.com/Nordicstocks/antigravity-quota-monitor/fb46f6f/images/guide-2-status-hover-popup.png)

Al pasar el cursor sobre el medidor de cuota de la barra de estado, abajo a la derecha, se abre una **tabla ancha y compacta, con una fila por elemento**:
- **Aviso del límite semanal en la barra de estado:** cuando queda poca cuota del límite semanal de una familia de modelos, aparece un elemento aparte junto al principal, por ejemplo `G 7d 15%`. El elemento muestra un icono de aviso si queda el 30 % o menos, se vuelve naranja con el 22 % o menos y rojo con el 15 % o menos (los umbrales se definen en la configuración). Al hacer clic se abre el panel. Si queda cuota suficiente, el elemento no aparece.
- **Estado de la licencia:** tras los enlaces, la ventana emergente muestra **PRO está activo** en rojo si tienes una licencia de pago y, durante la prueba, la palabra **PRUEBA** con los días que quedan. En la versión gratuita no aparece nada más.
- **Enlaces superiores:** **Panel**, **Abrir en el navegador**, **Configuración** (abre la pestaña Configuración) y **Acciones rápidas** (abre el menú). En la versión gratuita hay además un enlace de compra.
- **Cuenta y créditos de prompt en una sola fila:** aquí ves tu plan (`Google AI Pro`), tu correo y tus créditos de prompt (`500 / 50.000`).
- **Límites semanales y de 5 horas por modelo:** cada modelo ocupa **una sola fila**, con su medidor de 5 bloques, su hora de restablecimiento y su pronóstico de agotamiento.

---

## 3. Tarjetas de modelos arrastrables (`⋮⋮`), paleta de colores (`🎨`) y aviso de restablecimiento con un clic (`🔔`)

![Personalización de las tarjetas de modelos: icono de arrastre, paleta de colores y aviso de restablecimiento](https://raw.githubusercontent.com/Nordicstocks/antigravity-quota-monitor/fb46f6f/images/guide-3-cards-color-drag.png)

Ordenar las tarjetas, cambiar sus colores y ocultarlas es gratis, y tus cambios se guardan automáticamente. El aviso de restablecimiento es una función Pro.
- **`① ⋮⋮ Cambiar el orden de las tarjetas`:** arrastra cualquier tarjeta por el icono **`⋮⋮`** de su esquina superior izquierda y suéltala donde prefieras.
- **`② 🎨 Paleta de colores de la tarjeta`:** haz clic en el botón de la paleta **`🎨`**, en el encabezado de cualquier tarjeta, para elegir un tono (**Predeterminado**, **Menta**, **Celeste**, **Lavanda**, **Ámbar**, **Rosa**, **Turquesa**).
- **`③ 🔔 Aviso de restablecimiento con un clic` (`Avisarme cuando se restablezca`):** haz clic en **`🔔 Avisarme cuando se restablezca`**, en la parte inferior de cualquier tarjeta de modelo. Cuando llegue la hora de restablecimiento de ese modelo, oirás un sonido, verás una notificación en el editor y, si has configurado las alertas en el teléfono, también te llegará una. El editor tiene que estar abierto.
- **`④ ✕ Ocultar tarjeta`:** haz clic en la cruz de la esquina superior derecha de una tarjeta para quitarla del panel, de la barra lateral, de la ventana emergente y de la barra de estado. Tu elección se guarda. Para volver a mostrarla, usa el botón del ojo junto a **`Actualizar`**, el signo más de la fila **Tarjetas ocultas:**, debajo de las tarjetas, o ve a **Configuración → General → Tarjetas visibles en el panel**. Tus límites no cambian y los modelos nuevos aparecen automáticamente. Las alertas de un límite solo dejan de llegar cuando ocultas todos sus modelos.

---

## 4. Configuración: licencia, idioma, barra de estado, alertas, Inicio automático, teléfono, terminal y espacio en disco

![Configuración: archivos de conversaciones antiguas, Inicio automático a las 07:00 y notificaciones en el teléfono](https://raw.githubusercontent.com/Nordicstocks/antigravity-quota-monitor/fb46f6f/images/guide-4-control-center.png)

Abre la pestaña **Configuración** (también desde la ventana emergente de la barra de estado, desde el menú o con el comando `Antigravity Quota: Abrir la pestaña Configuración`). Todas las secciones están desplegadas, en una sola columna o en más si la ventana es ancha. Los enlaces de la izquierda llevan a cada sección; en una ventana estrecha forman una fila en la parte superior. El orden es **Licencia, General, Barra de estado, Alertas, Inicio automático, Notificaciones: teléfono y chat, Terminal, Espacio en disco**.

- **Licencia:** con una licencia activa, verás una fila con el estado y los botones **`Cambiar clave`**, **`Comprobar licencia`** y **`Quitar clave`**. En la versión gratuita y durante la prueba, verás el campo de la clave con su botón y un enlace de compra.
- **General:** idioma de la interfaz (la misma opción que en el encabezado), tema e intervalo de actualización.
- **Barra de estado:** modo de visualización (*Compacto (G | C)*, *Menor cuota restante*, *Gemini*, *Claude*) y 8 estilos de barra de progreso con vista previa.
- **Alertas:** Protección de reserva, resumen matutino de la cuota, sonidos de macOS (solo en ese sistema), Asistente de cambio de modelo y opción de copiar el nombre del modelo recomendado. **`Toda la configuración en el editor`** abre la configuración del propio editor, filtrada para esta extensión, donde también encontrarás opciones menos habituales, como los umbrales de aviso. Abrir ese enlace no cambia nada.

Los modelos que comparten un mismo límite generan una sola notificación y una sola alerta en el teléfono, por ejemplo **Modelos de Gemini (límite de 5 horas)**, no una por modelo.

- **`Inicio automático de la ventana de 5 horas`:** está desactivado por defecto. La ventana de 5 horas es un periodo de tiempo, no una ventana de la pantalla. Empieza con tu primer prompt, no a una hora fija. Si activas esta opción, la extensión ejecuta `agy` a la hora que elijas y envía desde tu propia cuenta un prompt breve (`OK`) a los modelos seleccionados. Es una solicitud real. Si ese periodo empieza a las `07:00`, el siguiente restablecimiento debería producirse alrededor de las `12:00`.
  - **La primera vez, la extensión te pide tu consentimiento.** El prompt consume cuota. Los términos de Antigravity prohíben usar el servicio con productos que no proporciona Google. También indican que acceder a él con software de terceros es un incumplimiento que puede dar lugar a la suspensión o la cancelación de tu cuenta. La decisión es tuya.
  - **Si el editor está cerrado a las `07:00`:** el Inicio automático se ejecuta cuando lo abras, siempre que sea dentro de las 3 horas siguientes. Pasado ese plazo, ese día ya no se ejecuta.
  - **Si una ejecución falla:** la extensión te lo indica y vuelve a intentarlo a los 30 minutos, con un máximo de 3 intentos al día y dentro de las 3 horas posteriores a la hora programada. El nuevo intento solo incluye los modelos que fallaron.
  - **Lo que ves es el resultado real:** si no se encuentra `agy` o si falla, ves un error. La notificación de inicio de la ventana solo llega al teléfono si el prompt se ha enviado correctamente. Con varias ventanas del editor abiertas, solo una envía el prompt.
- **`Iniciar la ventana de 5 horas ahora`:** este botón envía el mismo prompt de inmediato y también necesita tu consentimiento.
- **Notificaciones: teléfono y chat. `Conecta tu teléfono` (ntfy, sin necesidad de cuenta):**
  1. Instala la aplicación gratuita **ntfy** (App Store / Google Play).
  2. En la aplicación, toca **`+`** e introduce el tema que aparece en el panel (tiene un botón **Copiar**). El tema es largo y aleatorio porque los temas de ntfy.sh son públicos: no lo compartas.
  3. Vuelve a la extensión y haz clic en **`Guardar y enviar una notificación de prueba`**. El resultado aparece en el editor.
  - **Códigos QR:** el código para Android (con la aplicación ntfy instalada) abre la aplicación y la suscribe al tema. El otro código abre la página web del tema, que no tiene botón de suscripción, así que en iPhone haz el paso 2 a mano.
- **Webhook de Discord o Slack y bot de Telegram:** pega la URL de tu webhook y haz clic en **`Guardar`**. Para Telegram, pega tu ID de chat, haz clic en **`Guardar`**, luego en **`Configurar token del bot`** y pega el token en el cuadro que se abre en la parte superior de la ventana.
- **`Notificación de prueba`:** haz clic para enviar una notificación de prueba a todos los canales configurados, en el idioma que hayas elegido.
- **Archivo de estado y fragmentos de código para el terminal:** haz clic en **`zsh`**, **`Starship`** o **`tmux`** para abrir los fragmentos, copia el que uses y pégalo en el archivo que se indica (archivo de estado: `~/.antigravity-quota/status.json`).
- **Espacio en disco:** aquí ves cuánto espacio ocupan **Conversaciones** (`~/.gemini/antigravity/brain`) y **Code tracker** (`code_tracker`). El botón **`🧹 Limpiar conversaciones sin cambios en 7 días`** solo actúa sobre `brain`: enumera las carpetas en las que ningún archivo ha cambiado en los últimos 7 días y, antes de que confirmes, indica cuántas carpetas y archivos hay y cuánto ocupan. Esas carpetas pueden contener imágenes, planes y registros de conversaciones antiguas. Tras tu confirmación, se mueven a la **Papelera del sistema**, desde donde puedes restaurarlas. Si no se pueden mover, siguen en su sitio y la extensión te lo indica. De `code_tracker` solo se muestra cuánto ocupa.

### Acciones rápidas (el menú)

El enlace **Acciones rápidas** de la ventana emergente de la barra de estado, el botón de la barra lateral y el comando `Antigravity Quota: Acciones rápidas` abren el mismo menú: panel, navegador, actualización, aviso, informe, historial de uso (desde ahí puedes guardarlo en CSV o JSON), notificación de prueba, **Apariencia, idioma y barra de estado**, guía de usuario y licencia. Las cifras se ven en la barra de estado, en su ventana emergente y en el panel. **Atrás** vuelve al nivel anterior y la última fila del submenú abre la pestaña **Configuración**.

### Informe semanal e historial de uso (Pro)

Abre **Informe semanal** o **Historial de uso** desde el menú de la barra de estado, o **Informe semanal** desde la pestaña Analítica. Se abre una página con dos pestañas:

- **Informe semanal** muestra los últimos 7 días: cuántas veces llegaste a un límite, qué límite será el próximo en agotarse, la hora de mayor uso, el modelo y el proyecto más usados, los límites actuales, un mapa de calor por día de la semana y hora, y el uso estimado por proyecto.
- **Historial de uso** muestra la cuota restante de los límites semanales y de 5 horas a lo largo de 7, 30 o 90 días. Una línea vertical fina marca un restablecimiento. En las vistas de 30 y 90 días del límite de 5 horas, cada punto representa el nivel más bajo de ese día.

Los modelos que comparten un mismo límite comparten también el gráfico. **Guardar informe (HTML)**, **Guardar informe (Markdown)**, **Exportar CSV** y **Exportar JSON** preguntan dónde guardar el archivo y luego ofrecen abrirlo.

## 5. 🎁 Prueba gratuita de 7 días de Pro y activación de la licencia

Cada instalación nueva incluye **todas las funciones Pro durante 7 días** en la propia extensión, sin tarjeta y sin registro. Después, sigues teniendo las funciones gratuitas.

1. **Elige un plan:**
   - **[💎 Pro de por vida: 9,99 €, pago único](https://buy.polar.sh/polar_cl_xdY0LqtPIfPHfnG9o8Wo5QIIpJRlvhxQOZ6vL4g5jIB)**
   - **[Pro mensual: 2,99 €/mes, cancela cuando quieras](https://buy.polar.sh/polar_cl_avl0NAvpPN4jQD0vZRRg11yZ92BQ2OHCKw29f4dxlPW)**
2. **Activa la clave:** pega tu clave `PRO-XXXX-...` en la sección **Licencia** de Configuración y haz clic en **`Activar clave de licencia`**. También puedes hacer clic en **`Tengo una clave`** en Resumen.
3. **Comprobar o quitar una clave:** en Configuración → Licencia, **`Comprobar licencia`** consulta a Polar de inmediato. **`Quitar clave`** (o el comando `Antigravity Quota: Quitar clave de licencia Pro`) la quita. Tras tu confirmación, la clave se elimina de este equipo, incluido el archivo `~/.antigravity-quota/license.key`, y se libera, si es posible, la activación asignada a este equipo. Tu compra sigue siendo válida. Para cancelar una suscripción mensual, ve a Polar.
4. **Dónde encontrar la clave y dónde pegarla:** la encontrarás en el correo que recibiste al comprar o en la página de confirmación de Polar. El botón **`Tengo una clave`** está en el aviso de la prueba, en Resumen y en la barra lateral; la pestaña Configuración empieza con el campo de la clave y el estado (Gratis / Prueba gratuita). Tras la activación, el aviso de la prueba desaparece de inmediato y la insignia muestra **PRO**, sin necesidad de recargar la ventana.
5. **Después de comprar:** si haces clic en un botón de compra y vuelves al editor en menos de 30 minutos, la extensión comprueba, una sola vez, si el portapapeles contiene una clave de licencia y te pregunta antes de activarla. No lee el portapapeles en ningún otro momento y el texto no se guarda.

Las ventanas y los cuadros de información de la extensión se cierran con la **X** de su esquina superior derecha o con **Esc**.
