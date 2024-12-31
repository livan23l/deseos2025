// Volver anónimo al usuario
const checkboxAnonimo = document.getElementById('checkbox-anonimo');
const tooltipAnonimo = document.getElementById('anonimo-tooltip');
let remitente = document.getElementById('remitente');

// Si se recargó la página y estaba checkeado se vuelve a configurar
if(checkboxAnonimo.checked) {
    remitente.required = false;
    remitente.disabled = true;
    remitente.value = "Marcado como anónimo";
    tooltipAnonimo.innerHTML = 'Click para quitar <span class="tooltip__span">anónimo</span>';
}

// Cada que se marque como anónimo
checkboxAnonimo.addEventListener("change", function() {
    // Marcado como anónimo
    if(checkboxAnonimo.checked) {
        remitente.required = false;
        remitente.disabled = true;
        remitente.value = "Marcado como anónimo";
        tooltipAnonimo.innerHTML = 'Click para quitar <span class="tooltip__span">anónimo</span>';
    }
    // Sin marcar 
    else {
        remitente.required = true;
        remitente.disabled = false;
        remitente.value = "";
        tooltipAnonimo.innerHTML = 'Click para poner <span class="tooltip__span">anónimo</span>';
    }
});

// Funcionalidades de la creación de carta
const btnGenerarCarta = document.getElementById('boton-generar');
const btnVolverAGenerar = document.getElementById('boton-volver-a-generar');
const mainFormulario = document.getElementById('main-formulario');
const mainCarta = document.getElementById('main-carta');
const carta = document.getElementById('carta');
const cartaTitulo = document.getElementById('carta-titulo');
const cartaSubtitulo = document.getElementById('carta-subtitulo');
const cartaMsj = document.getElementById('carta-mensaje');
const cartaDst = document.getElementById('carta-destinatario');

// Secciones del formulario
let destinatario = document.getElementById('destinatario');
let mensaje = document.getElementById('mensaje');
let estilo1 = document.getElementById('estilo-1');
let estilo2 = document.getElementById('estilo-2');
let estilo3 = document.getElementById('estilo-3');
let color1 = document.getElementById('color-1');
let color2 = document.getElementById('color-2');
let color3 = document.getElementById('color-3');

let cartaRemitente, cartaDestinatario, cartaMensaje, cartaEstilo, cartaColor;

// Cambiar qué main se muestra
// Pasar de formulario a carta
btnGenerarCarta.addEventListener("click", function(event) {
    event.preventDefault();

    // Obtención del contenido del formulario
    if(checkboxAnonimo.checked) {
        cartaRemitente = "";
    } else {
        cartaRemitente = remitente.value;
    }

    cartaDestinatario = destinatario.value;
    cartaMensaje = mensaje.value;

    if(estilo1.checked) {
        cartaEstilo = ["estilo-1-titulo", "estilo-1-subtitulo", "estilo-1-cuerpo"];
    } else if(estilo2.checked) {
        cartaEstilo = ["estilo-2-titulo", "estilo-2-subtitulo", "estilo-2-cuerpo"];
    } else {
        cartaEstilo = ["estilo-3-titulo", "estilo-3-subtitulo", "estilo-3-cuerpo"];
    }

    // Color
    if(color1.checked) {
        cartaColor = "color-1"
    } else if(color2.checked) {
        cartaColor = "color-2"
    } else {
        cartaColor = "color-3"
    }

    // Ponemos los datos del formulario en la carta
    // Color
    carta.classList.remove("color-1");
    carta.classList.remove("color-2");
    carta.classList.remove("color-3");
    carta.classList.add(cartaColor);

    // Estilo
    // Estilo de título
    cartaTitulo.classList.remove("estilo-1-titulo");
    cartaTitulo.classList.remove("estilo-2-titulo");
    cartaTitulo.classList.remove("estilo-3-titulo");
    cartaTitulo.classList.add(cartaEstilo[0]);

    // Estilo de subtítulo
    cartaSubtitulo.classList.remove("estilo-1-subtitulo");
    cartaSubtitulo.classList.remove("estilo-2-subtitulo");
    cartaSubtitulo.classList.remove("estilo-3-subtitulo");
    cartaSubtitulo.classList.add(cartaEstilo[1]);

    // Estilo de mensaje:
    cartaMsj.classList.remove("estilo-1-cuerpo");
    cartaMsj.classList.remove("estilo-2-cuerpo");
    cartaMsj.classList.remove("estilo-3-cuerpo");
    cartaMsj.classList.add(cartaEstilo[2]);

    // Destinatario
    cartaDst.innerHTML = cartaDestinatario;

    // Remitente
    if(cartaRemitente == "") {
        cartaSubtitulo.innerHTML = "";
    } else {
        cartaSubtitulo.innerHTML = "De parte de " + cartaRemitente;
    }

    // Mensaje
    cartaMsj.innerHTML = cartaMensaje;

    // Cambiamos la vista que se muestra
    mainFormulario.classList.add('oculto');
    mainCarta.classList.remove('oculto');
});

// Pasar de carta a formulario
btnVolverAGenerar.addEventListener("click", function(event) {
    event.preventDefault();
    mainFormulario.classList.remove('oculto');
    mainCarta.classList.add('oculto');
});


// Descargar imagen al hacer click en el botón
const btnDescargarCarta = document.getElementById('boton-descargar-carta');

btnDescargarCarta.addEventListener("click", function () {
    html2canvas(carta).then(function (canvas) {
        var link = document.createElement('a');
        link.href = canvas.toDataURL();
        link.download = 'carta.jpg';
        link.click();
    });
});