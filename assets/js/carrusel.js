/* =========================================================
   BENEFICIOS ESTELAR — carrusel de fotos
   ---------------------------------------------------------
   Se activa solo en <div class="carrusel" data-carrusel>.
   Usa scroll nativo con scroll-snap: las flechas y los puntos
   mueven el scroll, así que en celular también se puede
   arrastrar con el dedo. En desktop se suma arrastre con el
   mouse, porque el scroll nativo no responde al mouse (solo
   a trackpad, rueda o barra de scroll).
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

  document.querySelectorAll("[data-carrusel]").forEach(carrusel => {
    const pista  = carrusel.querySelector("[data-carrusel-pista]");
    const slides = Array.from(pista.children);
    const puntos = Array.from(carrusel.querySelectorAll("[data-carrusel-punto]"));
    const anterior = carrusel.querySelector("[data-carrusel-prev]");
    const siguiente = carrusel.querySelector("[data-carrusel-next]");

    function indiceActual(){
      return Math.round(pista.scrollLeft / pista.clientWidth);
    }

    function irA(indice){
      const destino = Math.max(0, Math.min(slides.length - 1, indice));
      slides[destino].scrollIntoView({ behavior: "smooth", inline: "start", block: "nearest" });
    }

    function marcarPuntoActivo(){
      const indice = indiceActual();
      puntos.forEach((punto, i) => punto.setAttribute("aria-current", i === indice ? "true" : "false"));
    }

    puntos.forEach((punto, i) => punto.addEventListener("click", () => irA(i)));
    anterior?.addEventListener("click", () => irA(indiceActual() - 1));
    siguiente?.addEventListener("click", () => irA(indiceActual() + 1));

    let temporizador;
    pista.addEventListener("scroll", () => {
      clearTimeout(temporizador);
      temporizador = setTimeout(marcarPuntoActivo, 80);
    });

    // --- Arrastre con mouse (desktop) ---
    let arrastrando = false;
    let inicioX = 0;
    let scrollInicio = 0;

    pista.addEventListener("mousedown", (e) => {
      arrastrando = true;
      pista.classList.add("carrusel__pista--arrastrando");
      pista.style.scrollSnapType = "none";
      inicioX = e.pageX;
      scrollInicio = pista.scrollLeft;
    });

    window.addEventListener("mousemove", (e) => {
      if (!arrastrando) return;
      e.preventDefault();
      pista.scrollLeft = scrollInicio - (e.pageX - inicioX);
    });

    function soltarArrastre(){
      if (!arrastrando) return;
      arrastrando = false;
      pista.classList.remove("carrusel__pista--arrastrando");
      pista.style.scrollSnapType = "";
      irA(indiceActual());
    }
    window.addEventListener("mouseup", soltarArrastre);
    window.addEventListener("mouseleave", soltarArrastre);

    marcarPuntoActivo();
  });

});
