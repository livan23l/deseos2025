const htmlDias = document.getElementById('dias');
const htmlHoras = document.getElementById('horas');
const htmlMinutos = document.getElementById('minutos');
const htmlSegundos = document.getElementById('segundos');

const fechaObjetivo = new Date(2025, 0, 1, 0, 0, 0);
let diferencia;

function fechaDiferencia(fecha1, fecha2) {
    let segundos;

    if(fecha1 > fecha2) {
        segundos = fecha1 - fecha2;
    } else {
        segundos = fecha2 - fecha1;
    }

    return Math.floor(segundos / 1000);
}

setInterval(() => {
    let fechaActual = new Date();
    let segundos, minutos, horas, dias;
    segundos = fechaDiferencia(fechaActual, fechaObjetivo);

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
}, 1000);