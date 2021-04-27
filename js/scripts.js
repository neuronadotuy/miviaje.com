/** @format */

// Boton Flotante en el footer

document.addEventListener("DOMContentLoaded", () => {
  // Obtener la imagen del Hero
  const imgHero = document.querySelector(".hero");
  // Inicializar las Variables
  let i = 0;
  let tiempo = 0;

  const imagenes = ["arriba2.jpg", "arriba.jpg"];

  setInterval(() => {
    // "-" hace que vaya en negativo
    imgHero.style.backgroundPositionY = "-" + tiempo + "px";

    if (tiempo > 40) {
      tiempo = 0;
      imgHero.style.backgroundImage = "url(../img/" + imagenes[i] + ")";

      if (i === imagenes.length - 1) {
        i = 0;
      } else {
        i++;
      }
    } else {
      tiempo++;
    }
    // console.log(tiempo);
  }, 100);

  //
  //
  //   Boton flotante del Footer
  const btnFlotante = document.querySelector(".btn-flotante");
  btnFlotante.addEventListener("click", (e) => {
    e.preventDefault();
    //  Previene el default y ejecutamos el siguiente codigo
    const footer = document.querySelector("#footer");
    if (footer.classList.contains("activo")) {
      footer.classList.remove("activo");
      btnFlotante.classList.remove("activo");
      btnFlotante.innerText = "Idioma y Moneda";
    } else {
      footer.classList.add("activo");
      btnFlotante.classList.add("activo");
      btnFlotante.innerText = "X Cerrar";
    }
  });
});
