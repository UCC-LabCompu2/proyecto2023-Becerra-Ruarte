/**
 * Verifica que la masa sea valida.
 * @method validarDatos.
 * @param {number} masa - la masa introducida por el usuario.
 * @return {boolean} true si la masa es valida, false si no lo es,
 */
function validarDatos(masa) {
    if (isNaN(masa)) {
        alert("Por favor, ingrese una masa válida en kilogramos.");
        return false;
    }
    if (masa < 0) {
        alert("La masa no puede ser un número negativo.");
        return false;
    }
    return true;
}

/**
 * Calcula el peso en un planeta específico.
 * @method calcularPeso
 * @return {number} El peso del objeto en el planeta especificado.
 */
function calcularPeso() {
    // Obtener referencia a los elementos HTML
    let masaInput = document.getElementById('masa');
    let pesoInput = document.getElementById('peso');

    // Obtener el valor de la masa ingresada y convertirlo a un número
    let masa = parseFloat(masaInput.value);

    // Validar que se haya ingresado una masa válida
    if (!validarDatos(masa)) {
        masaInput.value = '';
        pesoInput.value = '';
        return 0;
    }

    // Obtener referencia al select de gravedad
    let gravedadSelect = document.getElementById('gravedad');

    // Obtener el valor del planeta seleccionado en el select
    let planeta = gravedadSelect.value;

    // Variable para almacenar el valor de la gravedad según el planeta seleccionado
    let gravedad;

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
    let peso = masa * gravedad;

    // Mostrar el peso en el elemento de input readonly
    pesoInput.value = peso.toFixed(2);
}