# Beneficios Estelar

Micrositio público del programa de convenios corporativos de Hoteles Estelar Perú.
Sitio estático (HTML + CSS + JS, sin frameworks ni compilación) desplegado en Netlify.

---

## Estructura

```
beneficios-estelar/
├── index.html              Todo el contenido de la página
├── assets/
│   ├── css/style.css       Colores, tipografía y diseño
│   ├── js/config.js        WhatsApp, dominio y medición
│   └── img/                Fotos (ver LEEME.txt para los nombres)
├── robots.txt
├── sitemap.xml
├── netlify.toml            Configuración de despliegue
└── .gitignore
```

---

## Qué falta completar

Todo lo pendiente está marcado con `class="todo"` y se ve **en amarillo con borde punteado**
en el navegador, para que no se publique por accidente. La consola del navegador (F12)
avisa cuántos quedan.

| Qué | Dónde | Cómo |
|---|---|---|
| Número de WhatsApp de Luisa | `assets/js/config.js` | Línea `whatsapp:` — formato `51987654321`, sin `+` ni espacios |
| Tarifas de los 2 hoteles | `index.html` → sección `alojamiento` | Reemplaza `S/ TODO` y el tipo de habitación |
| Los 5 planes | `index.html` → sección `planes` | Nombre, beneficios y precio de cada uno |
| Descuento de Piso 21 | `index.html` → sección `piso21` | El porcentaje y los días en que aplica |
| Fotos | `assets/img/` | Ver `LEEME.txt` para nombres y medidas exactas |
| Dominio | `config.js`, `index.html`, `robots.txt`, `sitemap.xml` | Buscar y reemplazar `REEMPLAZA-CON-TU-DOMINIO.pe` |

**Cómo llenar un dato:** busca el texto en amarillo, por ejemplo

```html
<div class="tarifa__precio"><span class="todo">S/ TODO</span></div>
```

y déjalo así:

```html
<div class="tarifa__precio">S/ 285</div>
```

Se borra el `<span class="todo">` completo y queda solo el dato. Al hacerlo,
el amarillo desaparece.

---

## Publicar en GitHub

Desde el editor web de GitHub (sin instalar nada):

1. Entra a github.com y crea un repositorio nuevo: **beneficios-estelar**, en privado.
2. En el repo vacío haz clic en **uploading an existing file**.
3. Arrastra la carpeta completa. GitHub conserva la estructura de subcarpetas.
4. Escribe un mensaje de commit (ej. "Estructura inicial del sitio") y confirma.

Para editar después: entra al archivo → ícono del lápiz → cambia → **Commit changes**.

---

## Publicar en Netlify

1. Entra a app.netlify.com → **Add new site** → **Import an existing project**.
2. Conecta con GitHub y elige el repositorio `beneficios-estelar`.
3. Deja el comando de build vacío y el directorio de publicación en `.` (punto).
4. Deploy.

Desde ese momento, cada cambio que hagas en GitHub se publica solo en un par de minutos.

---

## Cambiar colores o tipografía

Todo vive en el bloque `:root` al inicio de `assets/css/style.css`:

```css
--azul-estelar:#003062;      /* azul corporativo */
--horizonte:#c68a3d;         /* dorado de firma */
--font:"Google Sans Flex", ...
```

Cambia el valor y se actualiza en toda la página. Para cambiar la tipografía
hay que actualizar además el `<link>` de Google Fonts en el `<head>` del `index.html`.

**Sobre la tipografía:** Google Sans Flex es una fuente variable con ejes de peso y
ancho. El sitio usa una sola familia para títulos y cuerpo, variando esos ejes
(`font-variation-settings`) para diferenciarlos. Licencia SIL Open Font License:
uso comercial libre, sin atribución requerida.

---

## Cómo funcionan los botones de WhatsApp

En el HTML, cualquier enlace con el atributo `data-wa` se convierte automáticamente
en un enlace de WhatsApp con el mensaje ya escrito:

```html
<a class="wa" data-wa="Hotel Estelar Miraflores" href="#">Reservar</a>
```

A Luisa le llega: *"Hola Estelar, deseo reservar en Hotel Estelar Miraflores."*

Así identifica desde qué botón entró cada consulta sin tener que preguntarlo.
Para agregar un botón nuevo, copia la etiqueta y cambia el texto de `data-wa`.
Si el texto no queda natural con "deseo reservar en...", se puede escribir el
mensaje completo a mano con `data-wa-mensaje` (ver el comentario en `config.js`).

---

## Antes de publicar

- [x] Número real de WhatsApp en `config.js` (Luisa)
- [ ] Cero elementos en amarillo en la página
- [ ] Fotos subidas y etiquetas `<img>` activadas
- [ ] Dominio reemplazado en los 4 archivos
- [ ] Tarifas validadas con Carlos Monsef (el sitio es público: quedan indexadas en Google)
- [ ] Luisa avisada de que empezarán a llegar consultas por este canal
