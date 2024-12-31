const anterior = document.getElementById("boton-anterior");
const siguiente = document.getElementById("boton-siguiente");
const imagen = document.getElementById("carrusel-imagen");

const imagenes = ["../img/carrusel/imagen-1.webp",
                  "../img/carrusel/imagen-2.webp",
                  "../img/carrusel/imagen-3.webp",];

let i = 0;


anterior.addEventListener("click", function() {
    if(i == 0) {
        i = imagenes.length - 1;
    } else {
        i--;
    }

    imagen.setAttribute("src", imagenes[i]);
})

siguiente.addEventListener("click", function() {
    if(i == imagenes.length - 1) {
        i = 0;
    } else {
        i++;
    }

    imagen.setAttribute("src", imagenes[i]);
})