/* =========================================================
   BENEFICIOS ESTELAR — configuración central
   ---------------------------------------------------------
   ESTE ES EL ÚNICO ARCHIVO QUE NECESITAS EDITAR
   para cambiar teléfonos, links y datos de contacto.
   Los cambios se aplican en toda la página automáticamente.

   Las TARIFAS y los PLANES viven en index.html porque
   son contenido, no configuración. Búscalos ahí por la
   palabra TODO (están marcados en amarillo en el navegador).
   ========================================================= */

const CONFIG = {

  /* --- WhatsApp de reservas -----------------------------
     Formato internacional, SIN el signo + y SIN espacios.
     Ejemplo para Perú: 51987654321
     ---------------------------------------------------- */
  whatsapp: "51962383333",          // Luisa

  /* --- Identidad del sitio ---------------------------- */
  dominio: "https://REEMPLAZA-CON-TU-DOMINIO.pe",   // TODO: al comprar el dominio

  /* --- Medición (opcional) ----------------------------
     Deja las cadenas vacías si aún no los vas a usar.
     ---------------------------------------------------- */
  googleAnalytics: "",              // ej. "G-XXXXXXXXXX"
  metaPixel: "",                    // ej. "123456789012345"

  /* --- Redes ------------------------------------------ */
  instagram: {
    corporativo: "https://www.instagram.com/hotelesestelar_peru/",
    piso21:      "https://www.instagram.com/estelarpiso21/"
  }
};


/* =========================================================
   MOTOR DE ENLACES DE WHATSAPP
   ---------------------------------------------------------
   No hace falta tocar nada de aquí para abajo.

   Cómo funciona: en el HTML, cualquier enlace con el
   atributo data-wa se convierte en un enlace de WhatsApp
   con el mensaje ya escrito. Ejemplo:

     <a class="wa" data-wa="Hotel Estelar Miraflores">Reservar</a>

   Le llega a Luisa:
     "Hola Estelar, deseo reservar en Hotel Estelar Miraflores."

   Así sabe desde qué botón entró la consulta. Si el texto no
   queda natural con "deseo reservar en...", se puede escribir
   el mensaje completo a mano con data-wa-mensaje, por ejemplo:

     <a data-wa="afiliar mi empresa"
        data-wa-mensaje="Hola Estelar, quiero afiliar a mi empresa al convenio.">
       Escríbenos
     </a>
   ========================================================= */

function waLink(elemento){
  const texto = elemento.dataset.waMensaje
    ? elemento.dataset.waMensaje
    : `Hola Estelar, deseo reservar en ${elemento.dataset.wa}.`;
  return `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(texto)}`;
}

document.addEventListener("DOMContentLoaded", () => {

  // 1. Activa todos los botones de WhatsApp
  document.querySelectorAll("[data-wa]").forEach(a => {
    a.href   = waLink(a);
    a.target = "_blank";
    a.rel    = "noopener";
  });

  // 2. Aviso si quedó contenido pendiente sin completar
  const pendientes = document.querySelectorAll(".todo").length;
  if (pendientes > 0) {
    console.warn(
      `[Beneficios Estelar] Quedan ${pendientes} datos por completar ` +
      `(marcados en amarillo). Búscalos en index.html como class="todo".`
    );
  }
});
