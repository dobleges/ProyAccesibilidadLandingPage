# Reporte de Cumplimiento WCAG - Landing Page Accesible

## 1. Información general del proyecto

**Proyecto:** Budgeta - Landing Page de gestión de gastos  
**Asignatura:** Interfaz de Usuario  
**Carrera:** Tecnicatura Superior en Desarrollo de Software  
**Tecnologías utilizadas:** HTML5, CSS3 y JavaScript

### Objetivo

El objetivo del proyecto es desarrollar una Landing Page para una aplicación ficticia de gestión de gastos personales, aplicando principios de accesibilidad web basados en las pautas **WCAG 2.1/2.2**.

La implementación busca reducir barreras de acceso para personas que utilizan exclusivamente el teclado, lectores de pantalla, ampliación de texto o configuraciones de alto contraste.

La accesibilidad fue considerada desde la estructura HTML hasta los estilos visuales y las interacciones implementadas mediante JavaScript.

---

# 2. Principios de accesibilidad aplicados

Las Pautas de Accesibilidad para el Contenido Web (WCAG) se organizan alrededor de cuatro principios fundamentales, conocidos como **POUR**:

### Perceptible

La información y los componentes de la interfaz deben poder ser percibidos por los usuarios.

En el proyecto se aplican, entre otras, las siguientes medidas:

- Uso de contraste suficiente entre texto y fondos.
- Estructura visual clara.
- Posibilidad de aumentar el tamaño del texto.
- Uso de HTML semántico.
- Uso de textos descriptivos en los elementos interactivos.
- Los SVG utilizados como decoración poseen `aria-hidden="true"`.

### Operable

Los componentes de la interfaz deben poder utilizarse mediante diferentes métodos de interacción.

La página incorpora:

- Navegación mediante teclado.
- Indicadores de foco visibles.
- Enlace para saltar directamente al contenido principal.
- Menú responsive controlado mediante un botón.
- Botones accesibles mediante teclado.
- Formularios cuyos campos pueden recibir foco.

### Comprensible

La información y el funcionamiento de la interfaz deben ser fáciles de comprender.

Se aplican:

- Etiquetas explícitas para los campos del formulario.
- Mensajes de error descriptivos.
- Estructura de encabezados coherente.
- Textos claros en botones y enlaces.
- Estados de los controles comunicados mediante atributos ARIA.

### Robusto

El contenido debe poder ser interpretado correctamente por diferentes navegadores y tecnologías asistivas.

Para esto se utilizan:

- Elementos semánticos de HTML5.
- Atributos ARIA cuando son necesarios.
- Relaciones explícitas entre etiquetas y campos.
- Atributos como `aria-expanded`, `aria-controls`, `aria-describedby` y `aria-pressed`.

---

# 3. Fragmento: Enlace de salto al contenido principal (Skip Link)

### Criterio de Conformidad

**WCAG 2.4.1 - Evitar bloques (Nivel A)**

### Ubicación en el proyecto

- `index.html`
- `styles.css`

### Código implementado

```html
<a href="#main-content" class="skip-link">
  Saltar al contenido principal
</a>

<main id="main-content">
````

El estilo correspondiente es:

```css
.skip-link{
  position:absolute;
  left:1rem;
  top:-3.5rem;
}

.skip-link:focus{
  top:0;
}
```

### Explicación técnica

El enlace de salto permite que las personas que navegan mediante teclado puedan evitar los elementos repetitivos de la cabecera y acceder directamente al contenido principal.

El enlace se encuentra fuera de la posición visible normal, pero aparece cuando recibe el foco mediante teclado.

Esto permite reducir la cantidad de pulsaciones necesarias para llegar al contenido principal.

---

# 4. Fragmento: Estructura semántica HTML5

### Criterio de Conformidad

**WCAG 1.3.1 - Información y relaciones (Nivel A)**

### Ubicación en el proyecto

`index.html`

### Código implementado

```html
<header>
  ...
  <nav aria-label="Navegación principal">
    ...
  </nav>
</header>

<main id="main-content">
  <section id="inicio">
    ...
  </section>

  <section id="caracteristicas">
    ...
  </section>

  <section id="accesibilidad">
    ...
  </section>

  <section id="seguridad">
    ...
  </section>

  <section id="contacto">
    ...
  </section>
</main>

<footer>
  ...
</footer>
```

### Explicación técnica

Se utilizan elementos semánticos de HTML5 para definir la estructura y las diferentes regiones de la página.

Los elementos `header`, `nav`, `main`, `section` y `footer` proporcionan información estructural que puede ser interpretada por navegadores y tecnologías asistivas.

El elemento `main` identifica el contenido principal de la página, mientras que `nav` identifica la región destinada a la navegación.

También se utilizan elementos `article` en la sección de características para representar contenidos independientes.

---

# 5. Fragmento: Jerarquía de encabezados

### Criterio de Conformidad

**WCAG 1.3.1 - Información y relaciones (Nivel A)**

### Ubicación en el proyecto

`index.html`

### Código implementado

La página utiliza un encabezado principal:

```html
<h1>Controlá tus gastos.<br>Organizá tu futuro.</h1>
```

y encabezados secundarios:

```html
<h2>Todo lo que necesitás para organizar tus finanzas</h2>
<h2>Construida para que la use cualquier persona</h2>
<h2>Tu información, protegida</h2>
<h2>Contactate con nosotros</h2>
```

Los contenidos internos utilizan `h3`:

```html
<h3>Seguimiento de gastos</h3>
<h3>Presupuestos</h3>
<h3>Estadísticas</h3>
```

### Explicación técnica

La utilización de encabezados permite representar la jerarquía lógica del contenido.

El `h1` identifica el propósito principal de la página, mientras que los `h2` representan las diferentes secciones y los `h3` identifican contenidos secundarios dentro de ellas.

Esta estructura permite que los usuarios de lectores de pantalla puedan recorrer y comprender la organización del documento mediante sus encabezados.

---

# 6. Fragmento: Navegación interactiva mediante teclado

### Criterio de Conformidad

**WCAG 2.1.1 - Teclado (Nivel A)**

### Ubicación en el proyecto

* `index.html`
* `styles.css`
* `script.js`

### Código implementado

Los elementos interactivos utilizan elementos HTML nativos:

```html
<a href="#caracteristicas">Características</a>

<button type="button" id="btn-menu">
  Menú
</button>
```

Los campos del formulario también utilizan elementos HTML nativos:

```html
<input type="text" id="nombre" name="nombre">
<input type="email" id="email" name="email">
<textarea id="mensaje" name="mensaje"></textarea>
```

### Explicación técnica

Los enlaces, botones y controles de formulario utilizados son elementos HTML nativos y, por lo tanto, pueden recibir foco y ser operados mediante teclado.

No se utilizan elementos `div` simulando botones o enlaces, evitando la necesidad de implementar manualmente comportamientos básicos de teclado.

---

# 7. Fragmento: Indicador de foco visible

### Criterio de Conformidad

**WCAG 2.4.7 - Foco visible (Nivel AA)**

### Ubicación en el proyecto

`styles.css`

### Código implementado

```css
a:focus-visible,
button:focus-visible,
input:focus-visible,
textarea:focus-visible{
  outline:3px solid var(--focus);
  outline-offset:3px;
  border-radius:1px;
}
```

### Explicación técnica

Los elementos interactivos poseen un indicador de foco visible cuando son utilizados mediante teclado.

El indicador utiliza un contorno de tres píxeles y un desplazamiento adicional para diferenciarlo claramente del contenido.

Esto permite identificar visualmente qué elemento se encuentra actualmente seleccionado durante la navegación mediante teclado.

El proyecto evita eliminar el indicador de foco mediante reglas como `outline: none`.

---

# 8. Fragmento: Menú responsive con ARIA

### Criterio de Conformidad

**WCAG 4.1.2 - Nombre, función, valor (Nivel A)**

### Ubicación en el proyecto

* `index.html`
* `script.js`

### Código implementado

```html
<button
  type="button"
  class="menu-toggle"
  aria-expanded="false"
  aria-controls="menu-principal"
  id="btn-menu">
  Menú
</button>

<ul id="menu-principal">
  ...
</ul>
```

En JavaScript:

```javascript
var abierto = menu.classList.toggle('abierto');

btnMenu.setAttribute(
  'aria-expanded',
  abierto ? 'true' : 'false'
);
```

### Explicación técnica

El botón controla la visualización del menú de navegación en dispositivos con pantallas pequeñas.

El atributo `aria-controls` identifica el elemento que es controlado por el botón.

El atributo `aria-expanded` informa si el menú está actualmente expandido o cerrado.

JavaScript actualiza dinámicamente el valor de `aria-expanded` cada vez que cambia el estado del menú.

Esto permite que las tecnologías asistivas puedan conocer el estado actual del componente interactivo.

---

# 9. Fragmento: Controles de accesibilidad

### Criterio de Conformidad

**WCAG 4.1.2 - Nombre, función, valor (Nivel A)**

### Ubicación en el proyecto

* `index.html`
* `script.js`
* `styles.css`

### Código implementado

```html
<button
  type="button"
  id="btn-texto"
  class="a11y-btn"
  aria-pressed="false">
  A+ Texto
</button>

<button
  type="button"
  id="btn-contraste"
  class="a11y-btn"
  aria-pressed="false">
  Alto contraste
</button>
```

JavaScript modifica el estado:

```javascript
btnTexto.setAttribute(
  'aria-pressed',
  activo ? 'true' : 'false'
);

btnContraste.setAttribute(
  'aria-pressed',
  activo ? 'true' : 'false'
);
```

### Explicación técnica

Los botones de accesibilidad permiten modificar determinadas características visuales de la página.

`aria-pressed` comunica si el control se encuentra activo o inactivo.

El tamaño del texto se modifica mediante la clase:

```javascript
texto-grande
```

y el modo de contraste mediante:

```javascript
contraste-alto
```

Esto permite mantener separada la lógica de interacción de los estilos visuales.

---

# 10. Fragmento: Formulario con etiquetas explícitas

### Criterios de Conformidad

* **WCAG 1.3.1 - Información y relaciones (Nivel A)**
* **WCAG 3.3.2 - Etiquetas o instrucciones (Nivel A)**

### Ubicación en el proyecto

`index.html`

### Código implementado

```html
<label for="nombre">Nombre</label>

<input
  type="text"
  id="nombre"
  name="nombre"
  autocomplete="name"
  required
  aria-describedby="nombre-error">
```

Otro ejemplo:

```html
<label for="email">Correo electrónico</label>

<input
  type="email"
  id="email"
  name="email"
  autocomplete="email"
  required
  aria-describedby="email-error">
```

### Explicación técnica

Cada campo del formulario posee una etiqueta `label` asociada explícitamente mediante los atributos `for` e `id`.

Por ejemplo:

```html
<label for="email">
```

se relaciona con:

```html
<input id="email">
```

Esta relación permite que las tecnologías asistivas identifiquen correctamente el propósito de cada campo.

El atributo `required` indica que el campo es obligatorio y `autocomplete` proporciona información adicional que permite a los navegadores completar datos conocidos del usuario.

---

# 11. Fragmento: Asociación de mensajes de error

### Criterios de Conformidad

* **WCAG 3.3.1 - Identificación de errores (Nivel A)**
* **WCAG 3.3.3 - Sugerencias para la corrección de errores (Nivel AA)**
* **WCAG 4.1.3 - Mensajes de estado (Nivel AA)**

### Ubicación en el proyecto

* `index.html`
* `script.js`

### Código implementado

```html
<input
  type="email"
  id="email"
  name="email"
  required
  aria-describedby="email-error">

<p id="email-error" role="alert"></p>
```

La validación se realiza mediante JavaScript:

```javascript
if (!emailOk) {
  setError(
    'email-error',
    'Ingresá un correo electrónico válido.'
  );

  valido = false;
}
```

### Explicación técnica

Los mensajes de error poseen identificadores únicos y se relacionan con sus respectivos campos mediante `aria-describedby`.

Por ejemplo:

```text
input#email
      ↓
aria-describedby="email-error"
      ↓
p#email-error
```

El uso de `role="alert"` permite que el mensaje pueda ser anunciado por tecnologías asistivas cuando aparece.

Además, cuando existen errores, el script intenta llevar el foco al primer campo que requiere corrección.

---

# 12. Fragmento: Validación del formulario

### Criterios de Conformidad

* **WCAG 3.3.1 - Identificación de errores (Nivel A)**
* **WCAG 3.3.3 - Sugerencias para la corrección de errores (Nivel AA)**

### Ubicación en el proyecto

`script.js`

### Código implementado

```javascript
if (!nombre.value.trim()) {
  setError('nombre-error', 'Ingresá tu nombre.');
  valido = false;
}

var emailOk = /\S+@\S+\.\S+/.test(email.value);

if (!emailOk) {
  setError(
    'email-error',
    'Ingresá un correo electrónico válido.'
  );
  valido = false;
}

if (!mensaje.value.trim()) {
  setError(
    'mensaje-error',
    'Escribí tu mensaje.'
  );
  valido = false;
}
```

### Explicación técnica

El formulario realiza una validación antes de procesar el envío.

Cuando un dato no cumple las condiciones esperadas, se muestra un mensaje específico indicando al usuario qué debe corregir.

Los mensajes evitan utilizar únicamente cambios de color para comunicar el error, proporcionando información textual adicional.

---

# 13. Fragmento: Contraste y modo de alto contraste

### Criterio de Conformidad

**WCAG 1.4.3 - Contraste (mínimo) (Nivel AA)**

### Ubicación en el proyecto

`styles.css`

### Código implementado

El proyecto utiliza variables CSS para controlar los principales colores:

```css
:root{
  --ink:#16241c;
  --paper:#eff1e9;
  --jade:#2b6a4e;
  --jade-deep:#1c3f2e;
  --gold:#c0923b;
  --line:#c3cbb6;
  --muted:#52604f;
  --error:#a6432b;
  --focus:#c0923b;
}
```

También existe un tema de alto contraste:

```css
body.contrast-alto,
body.contraste-alto{
  --paper:#ffffff;
  --paper-raised:#ffffff;
  --ink:#000000;
  --jade:#004d26;
  --jade-deep:#000000;
  --jade-deeper:#000000;
  --gold:#7a4f00;
  --line:#000000;
  --muted:#111111;
  --error:#900000;
  --focus:#000000;
}
```

### Explicación técnica

La interfaz utiliza una paleta definida mediante variables CSS para facilitar el control consistente de los colores.

Además, se ofrece un modo de alto contraste que modifica las variables principales para proporcionar una combinación visual más marcada.

Para la conformidad con WCAG 2.1 Nivel AA, el texto normal debe alcanzar una relación de contraste mínima de **4.5:1**, mientras que el texto de gran tamaño debe alcanzar **3:1**.

La relación de contraste definitiva debe verificarse mediante herramientas específicas de auditoría como **axe DevTools, WAVE o Lighthouse**.

---

# 14. Fragmento: Texto ampliable

### Criterio de Conformidad

**WCAG 1.4.4 - Cambio de tamaño del texto (Nivel AA)**

### Ubicación en el proyecto

* `styles.css`
* `script.js`

### Código implementado

```css
html.texto-normal, body.texto-normal{ font-size:100%; }
html.texto-grande, body.texto-grande{ font-size:118%; }
html.texto-muy-grande, body.texto-muy-grande{ font-size:136%; }
```

El control accesible utiliza un menú desplegable accesible con opciones `role="menuitemradio"` y `aria-checked`:

```html
<button id="btn-texto" aria-haspopup="true" aria-expanded="false" aria-controls="menu-tamanos">
  Texto: <strong id="lbl-tamano-actual">Normal</strong>
</button>
<div id="menu-tamanos" role="menu" hidden>
  <button class="opt-tamano" role="menuitemradio" aria-checked="true" data-size="normal">Normal (100%)</button>
  <button class="opt-tamano" role="menuitemradio" aria-checked="false" data-size="grande">Grande (118%)</button>
  <button class="opt-tamano" role="menuitemradio" aria-checked="false" data-size="muy-grande">Muy grande (136%)</button>
</div>
```

### Explicación técnica

La página permite seleccionar entre tres niveles de tamaño de texto (Normal, Grande y Muy grande) mediante un menú desplegable totalmente operable por teclado (flechas arriba/abajo, Enter, Escape).

Al cambiar el tamaño, la escala se aplica al elemento raíz (`html`), garantizando que todos los elementos que utilizan unidades `rem` escalen de forma armónica y proporcional.

Asimismo, se incorporaron reglas de diseño adaptativo con `auto-fit` y `minmax()` para que la página conserve intacta su organización y distribución visual sin desbordamientos ni solapamientos, incluso con el tamaño máximo de texto activado.

---

# 15. Fragmento: Respeto por la reducción de movimiento

### Criterio de Conformidad relacionado

**WCAG 2.3.3 - Animación de las interacciones (Nivel AAA)**

### Ubicación en el proyecto

* `styles.css`
* `script.js`

### Código implementado

En CSS:

```css
@media (prefers-reduced-motion: reduce){
  html{
    scroll-behavior:auto;
  }

  *,
  *::before,
  *::after{
    animation-duration:0.001ms !important;
    animation-iteration-count:1 !important;
    transition-duration:0.001ms !important;
    scroll-behavior:auto !important;
  }
}
```

En JavaScript también se consulta la preferencia del sistema:

```javascript
var reduce = window.matchMedia(
  '(prefers-reduced-motion: reduce)'
).matches;
```

### Explicación técnica

El proyecto detecta la preferencia del usuario respecto a la reducción de movimiento.

Cuando el sistema indica que el usuario prefiere reducir las animaciones, el contador animado del balance se muestra directamente en su valor final y se reducen las transiciones y desplazamientos suaves.

Esto mejora la experiencia de usuarios que pueden experimentar molestias ante determinados efectos de movimiento.

---

# 16. Fragmento: SVG decorativos

### Criterio de Conformidad relacionado

**WCAG 1.1.1 - Contenido no textual (Nivel A)**

### Ubicación en el proyecto

`index.html`

### Código implementado

Los iconos utilizados en la sección de características poseen:

```html
<svg
  class="icon"
  width="28"
  height="28"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="1.6"
  aria-hidden="true">
```

### Explicación técnica

Los SVG utilizados en esta sección tienen una función principalmente decorativa, ya que la información relevante se encuentra expresada mediante los títulos y textos correspondientes.

Por esta razón se utiliza `aria-hidden="true"` para evitar que un lector de pantalla intente interpretar los gráficos como contenido adicional.

---

# 17. Fragmento: Navegación y landmarks

### Criterios relacionados

* **WCAG 1.3.1 - Información y relaciones (Nivel A)**
* **WCAG 2.4.1 - Evitar bloques (Nivel A)**

### Ubicación en el proyecto

`index.html`

### Código implementado

```html
<header>
```

```html
<nav aria-label="Navegación principal">
```

```html
<main id="main-content">
```

```html
<footer>
```

### Explicación técnica

Los landmarks permiten que las tecnologías asistivas reconozcan las diferentes regiones funcionales del documento.

El `aria-label` del elemento `nav` permite diferenciar la navegación principal de otras posibles regiones de navegación.

El `main` identifica el contenido principal y se utiliza además como destino del Skip Link.

---

# 18. Primera regla de ARIA

El proyecto sigue la primera regla general del uso de ARIA:

> Si se puede utilizar un elemento HTML nativo con la semántica y comportamiento requerido, debe preferirse ese elemento antes que recrear su comportamiento mediante ARIA.

Por ejemplo, se utiliza:

```html
<button type="button">
```

en lugar de utilizar un `div` que intente comportarse como un botón.

ARIA se utiliza principalmente para comunicar información adicional sobre estados, relaciones o comportamientos dinámicos que no quedan expresados suficientemente mediante HTML nativo.

Entre los atributos utilizados se encuentran:

* `aria-expanded`
* `aria-controls`
* `aria-pressed`
* `aria-describedby`
* `aria-hidden`

---

# 19. Arquitectura de archivos

La implementación se divide en archivos independientes para separar responsabilidades:

```text
├── index.html
├── styles.css
├── script.js
├── ACCESSIBILITY.md
└── README.md
```

### `index.html`

Contiene la estructura semántica, contenido y componentes interactivos de la página.

### `styles.css`

Contiene la presentación visual, diseño responsive, estados de foco, modo de alto contraste, ampliación de texto y adaptación a preferencias de movimiento reducido.

### `script.js`

Contiene las interacciones dinámicas:

* Apertura y cierre del menú responsive.
* Actualización de `aria-expanded`.
* Activación del modo de texto grande.
* Activación del modo de alto contraste.
* Animación del balance de ejemplo.
* Detección de `prefers-reduced-motion`.
* Validación del formulario.

### `ACCESSIBILITY.md`

Documenta las decisiones relacionadas con accesibilidad y su relación con los criterios WCAG.

### `README.md`

Contiene información general del proyecto, su objetivo, tecnologías y forma de ejecución.

---

# 20. Herramientas de evaluación recomendadas

Para evaluar la accesibilidad de la página se recomienda utilizar diferentes métodos automáticos y manuales.

### axe DevTools

Permite detectar problemas frecuentes de accesibilidad relacionados con estructura, nombres accesibles, contraste y atributos ARIA.

### WAVE

Permite realizar una evaluación visual de la estructura de la página, contraste, etiquetas y elementos potencialmente problemáticos.

### Lighthouse

La auditoría de accesibilidad de Chrome permite obtener una evaluación automatizada de diferentes aspectos relacionados con accesibilidad.

### Validador HTML de W3C

Permite comprobar la validez sintáctica del documento HTML.

### Pruebas manuales

También es necesario realizar pruebas manuales, especialmente:

* Navegación utilizando únicamente el teclado.
* Uso de `Tab` y `Shift + Tab`.
* Activación de botones mediante `Enter` y `Espacio`.
* Comprobación del Skip Link.
* Comprobación de los estados del menú.
* Prueba del formulario y sus mensajes de error.
* Comprobación del foco visible.
* Prueba con diferentes niveles de zoom.

---

# 21. Matriz de correspondencia WCAG

| Implementación | Criterio WCAG | Nivel | Estado |
|---|---|:---:|---|
| Skip Link | 2.4.1 Evitar bloques | A | Implementado |
| HTML semántico | 1.3.1 Información y relaciones | A | Implementado |
| Jerarquía de encabezados | 1.3.1 Información y relaciones | A | Implementado |
| Navegación mediante teclado | 2.1.1 Teclado | A | Implementado |
| Foco visible | 2.4.7 Foco visible | AA | Implementado |
| Etiquetas de formulario | 3.3.2 Etiquetas o instrucciones | A | Implementado |
| Asociación de errores | 3.3.1 Identificación de errores | A | Implementado |
| Sugerencias de corrección | 3.3.3 Sugerencias para la corrección de errores | AA | Implementado |
| Estados del menú | 4.1.2 Nombre, función, valor | A | Implementado |
| Estados de botones de accesibilidad | 4.1.2 Nombre, función, valor | A | Implementado |
| Texto ampliable | 1.4.4 Cambio de tamaño del texto | AA | Implementado |
| Contraste | 1.4.3 Contraste (mínimo) | AA | Requiere verificación |
| SVG decorativos | 1.1.1 Contenido no textual | A | Implementado |
| Mensajes de estado | 4.1.3 Mensajes de estado | AA | Implementado |
| Reducción de movimiento | 2.3.3 Animación de las interacciones | AAA | Implementación preventiva |

---

# 22. Limitaciones y mejoras futuras

La implementación actual está orientada a demostrar técnicas de accesibilidad en una Landing Page académica.

El formulario de contacto realiza una validación mediante JavaScript, pero no posee un backend ni realiza el envío real de información.

También pueden realizarse mejoras futuras, entre ellas:

* Incorporar `aria-invalid` dinámicamente en los campos que presentan errores.
* Incorporar validación durante la interacción con los campos además de la validación al enviar el formulario.
* Realizar una auditoría completa con axe DevTools, WAVE y Lighthouse.
* Realizar pruebas manuales con lectores de pantalla.
* Verificar individualmente los ratios de contraste de toda la paleta.
* Mejorar la persistencia de las preferencias de accesibilidad mediante almacenamiento local.

Estas mejoras no modifican el objetivo principal del trabajo práctico, que consiste en demostrar la implementación de principios y técnicas de accesibilidad web mediante HTML5, CSS3 y JavaScript.

---

# 23. Conclusión

La Landing Page de Budgeta fue desarrollada considerando la accesibilidad como parte de la estructura y funcionamiento de la interfaz, y no únicamente como una modificación visual posterior.

Se implementaron elementos semánticos de HTML5, navegación mediante teclado, Skip Link, indicadores de foco, componentes dinámicos con atributos ARIA, formulario con etiquetas asociadas, mensajes de error, controles de ampliación de texto, modo de alto contraste y adaptación a las preferencias de reducción de movimiento.

Estas implementaciones permiten reducir diferentes barreras de acceso y proporcionan una experiencia más flexible para usuarios con distintas necesidades y formas de interacción.

El proyecto toma como referencia los principios y criterios de las **Web Content Accessibility Guidelines (WCAG)**, priorizando especialmente los criterios de conformidad de nivel A y AA solicitados para el trabajo práctico.

