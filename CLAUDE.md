# Contexto del proyecto — Beneficios Estelar

## Qué es

Micrositio **público** del programa de convenios corporativos de Hoteles Estelar Perú.
Lo usan colaboradores de empresas afiliadas para ver sus beneficios y reservar.
Toda conversión sale por WhatsApp hacia Karla Rojas (ventas directas).

No hay validación por empresa: el sitio es abierto y se indexa en Google.

## Stack

Sitio estático: HTML + CSS + JS plano. **Sin frameworks, sin build, sin npm.**
Se despliega en Netlify conectado a GitHub; cada commit publica automáticamente.

No introduzcas React, Tailwind, ni ningún paso de compilación. Si algo requiere
una dependencia, propónlo antes en vez de instalarlo.

## Estructura

```
index.html              Página única con anclas (#hoteles, #alojamiento, #planes, #piso21)
assets/css/style.css    Todo el diseño. Los tokens están en :root al inicio
assets/js/config.js     WhatsApp, dominio, analítica. Motor de enlaces data-wa
assets/img/             Fotos. LEEME.txt tiene los nombres y medidas exactas
```

## Secciones de la página

1. **Hero** — promesa del convenio + CTA a WhatsApp
2. **Hoteles** — Estelar Miraflores y Estelar Apartamentos Bellavista
3. **Alojamiento** — tarifa preferencial de cada hotel
4. **Planes** — 3 de Miraflores, 2 de Bellavista
5. **Piso 21** — restaurante, galería y descuento en carta

## Identidad visual

Colores institucionales de Hoteles Estelar (definidos en `:root`):

- `--azul-estelar: #003062` — azul corporativo, CTA y fondos fuertes
- `--noche-mar: #0b1b2e` — hero, nav, footer
- `--horizonte: #c68a3d` — dorado, color de firma
- `--niebla / --papel` — fondos claros

**Motivo de marca:** la "línea de horizonte" (`.horizonte`), una línea dorada fina
que referencia la vista del Pacífico desde el piso 21. Es el elemento de firma del
sistema visual de Estelar; aparece también en el sitio hermano de Piso 21.

**Tipografía:** Google Sans Flex, familia única y variable (SIL Open Font License).
Títulos y cuerpo se diferencian variando los ejes `wght` y `wdth` vía
`font-variation-settings`, no metiendo una segunda tipografía. Mantén ese criterio.

## Convenciones del proyecto

### Contenido pendiente
Todo dato faltante va envuelto en `<span class="todo">TODO: descripción</span>`.
Se renderiza en amarillo con borde punteado para que sea imposible publicarlo
por accidente. Al completar un dato, se borra el span entero y queda solo el texto.

**No elimines el sistema `.todo` ni "rellenes" datos inventados** —
tarifas, precios y porcentajes los define el negocio, no el código.
Si falta un dato, déjalo marcado y pregunta.

### Botones de WhatsApp
Cualquier `<a>` con atributo `data-wa` se convierte en enlace de WhatsApp con
mensaje prellenado, vía el motor en `config.js`:

```html
<a class="wa" data-wa="tarifa en Miraflores" href="#">Reservar</a>
```

Genera: *"Hola, escribo por Beneficios Estelar. Me interesa: tarifa en Miraflores."*

Cada botón debe tener un `data-wa` **distinto y específico**, para que Karla
identifique de qué sección vino la consulta. Nunca uses un texto genérico repetido.

### Estilos
Todo color y medida sale de una variable CSS. No escribas hex sueltos en el
cuerpo del archivo. Si necesitas un color nuevo, agrégalo a `:root` con nombre
en español, siguiendo la nomenclatura existente.

### Idioma
Todo el contenido, los comentarios del código y los nombres de clases van en
**español**. El público es peruano.

## Estado actual

- Estructura y diseño: completos
- Contenido: ~30 datos pendientes marcados con `.todo`
- Número de WhatsApp: placeholder `51999999999` en `config.js`
- Dominio: placeholder `REEMPLAZA-CON-TU-DOMINIO.pe` en 4 archivos
  (`config.js`, `index.html`, `robots.txt`, `sitemap.xml`)
- Fotos: ninguna subida; los contenedores muestran el nombre de archivo esperado

## Proyecto hermano

Piso 21 (`piso21lima.pe`, en desarrollo) comparte el mismo sistema visual y las
mismas convenciones (`.todo`, `config.js` centralizado, línea de horizonte).
Si cambias un patrón aquí, considera si conviene alinearlo allá.

## Antes de publicar

- Número real de WhatsApp de Karla
- Cero elementos `.todo` en la página
- Tarifas validadas con Carlos Monsef (país) — el sitio es público e indexable
- Fotos subidas con las etiquetas `<img>` activadas
- Dominio reemplazado en los 4 archivos
