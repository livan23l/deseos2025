// Volver anónimo al usuario
const checkboxAnonimo = document.getElementById('checkbox-anonimo');
const tooltipAnonimo = document.getElementById('anonimo-tooltip');
const inputRemitente = document.getElementById('remitente');

if(checkboxAnonimo.checked) {
    inputRemitente.required = false;
    inputRemitente.disabled = true;
    tooltipAnonimo.innerHTML = 'Click para quitar <span class="tooltip__span">anónimo</span>';
}

checkboxAnonimo.addEventListener("change", function() {
    // Marcado como anónimo
    if(checkboxAnonimo.checked) {
        inputRemitente.required = false;
        inputRemitente.disabled = true;
        tooltipAnonimo.innerHTML = 'Click para quitar <span class="tooltip__span">anónimo</span>';
    }
    // Sin marcar 
    else {
        inputRemitente.required = true;
        inputRemitente.disabled = false;
        tooltipAnonimo.innerHTML = 'Click para poner <span class="tooltip__span">anónimo</span>';
    }
});