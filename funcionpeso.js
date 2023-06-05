function calcularPeso() {
    // Obtener referencia a los elementos HTML
    var masaInput = document.getElementById('masa');
    var pesoInput = document.getElementById('peso');

    // Obtener el valor de la masa ingresada y convertirlo a un número
    var masa = parseFloat(masaInput.value);

    // Validar que se haya ingresado una masa válida
    if (isNaN(masa)) {
        alert("Por favor, ingrese una masa válida en kilogramos.");
        masaInput.value = '';
        pesoInput.value = '';
        return;
    }
    if (masa < 0) {
        alert("La masa no puede ser un número negativo.");
        masaInput.value = '';
        pesoInput.value = '';
        return;
    }

    // Obtener referencia al select de gravedad
    var gravedadSelect = document.getElementById('gravedad');

    // Obtener el valor del planeta seleccionado en el select
    var planeta = gravedadSelect.value;

    // Variable para almacenar el valor de la gravedad según el planeta seleccionado
    var gravedad;

    // Asignar la gravedad correspondiente según el planeta seleccionado
    switch (planeta) {
        case 'tierra':
            gravedad = 9.8;
            break;
        case 'marte':
            gravedad = 3.7;
            break;
        case 'luna':
            gravedad = 1.6;
            break;
        case 'mercurio':
            gravedad = 3.7;
            break;
        case 'jupiter':
            gravedad = 24.8;
            break;
        case 'saturno':
            gravedad = 10.4;
            break;
        case 'neptuno':
            gravedad = 11.2;
            break;
        default:
            gravedad = 0;
    }

    // Calcular el peso multiplicando la masa por la gravedad correspondiente
    var peso = masa * gravedad;

    // Mostrar el peso en el elemento de input readonly
    pesoInput.value = peso.toFixed(2);
}