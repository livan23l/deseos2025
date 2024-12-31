const fechaObjetivo = new Date(2025, 0, 1, 0, 0, 0);
const gifCargando = document.getElementById('gif-cargando')

let htmlDias, htmlHoras, htmlMinutos, htmlSegundos, htmlOculto;
let diferencia;

function fechaDiferencia(fechaObj, fechaAct) {
    let segundos;

    if(fechaObj > fechaAct) {
        segundos = fechaObj - fechaAct;
        // Hacemos que la cuenta regresiva no esté oculta:
        htmlOculto = document.getElementById('cuenta-regresiva');
        htmlOculto.classList.remove('oculto');
        
        // Ocultamos la cuenta progresiva:
        htmlOculto = document.getElementById('cuenta-progresiva');
        htmlOculto.classList.add('oculto');

        htmlDias = document.getElementById('reg-dias');
        htmlHoras = document.getElementById('reg-horas');
        htmlMinutos = document.getElementById('reg-minutos');
        htmlSegundos = document.getElementById('reg-segundos');
    } else {
        segundos = fechaAct - fechaObj;
        // Hacemos que la cuenta regresiva no esté oculta:
        htmlOculto = document.getElementById('cuenta-regresiva');
        htmlOculto.classList.add('oculto');

        // Ocultamos la cuenta progresiva:
        htmlOculto = document.getElementById('cuenta-progresiva');
        htmlOculto.classList.remove('oculto');

        htmlDias = document.getElementById('pro-dias');
        htmlHoras = document.getElementById('pro-horas');
        htmlMinutos = document.getElementById('pro-minutos');
        htmlSegundos = document.getElementById('pro-segundos');
    }

    return Math.floor(segundos / 1000);
}

setInterval(() => {
    let fechaActual = new Date();
    let segundos, minutos, horas, dias;
    segundos = fechaDiferencia(fechaObjetivo, fechaActual);

    // Días
    dias = Math.floor(segundos / 86400).toString().padStart(2, '0');
    segundos -= (86400 * dias);

    // Horas
    horas = Math.floor(segundos / 3600).toString().padStart(2, '0');
    segundos -= (3600 * horas);

    // Minutos
    minutos = Math.floor(segundos / 60).toString().padStart(2, '0');
    segundos = (segundos - (60 * minutos)).toString().padStart(2, '0');;

    htmlSegundos.innerHTML = segundos;
    htmlMinutos.innerHTML = minutos;
    htmlHoras.innerHTML = horas;
    htmlDias.innerHTML = dias;

    gifCargando.classList.add('oculto');
}, 1000);