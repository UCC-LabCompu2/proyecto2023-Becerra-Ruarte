
/**
 * Dibuja el planeta seleccionado en el canvas.
 * @method dibujar
 */
function dibujar() {
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");

    canvas.width = canvas.width;

    let img = new Image();

    let gravedadSelect = document.getElementById('gravedad');

    let planeta = gravedadSelect.value;

    switch (planeta) {
        case 'tierra':
            img.src = "imagenes/tierra.png";
            img.onload = function () {
                const escala = 0.6;
                let ancho = img.width * escala;
                let alto = img.height * escala;
                ctx.drawImage(img, 0, 35, ancho, alto);
            }
            break;
        case 'marte':
            img.src = "imagenes/marte.png";
            img.onload = function () {
                const escala = 0.3;
                let ancho = img.width * escala;
                let alto = img.height * escala;
                ctx.drawImage(img, 0, 35, ancho, alto);
            }
            break;
        case 'luna':
            img.src = "imagenes/luna.png";
            img.onload = function () {
                const escala = 0.3;
                let ancho = img.width * escala;
                let alto = img.height * escala;
                ctx.drawImage(img, 0, 35, ancho, alto);
            }
            break;
        case 'mercurio':
            img.src = "imagenes/mercurio.png";
            img.onload = function () {
                const escala = 0.3;
                let ancho = img.width * escala;
                let alto = img.height * escala;
                ctx.drawImage(img, 0, 35, ancho, alto);
            }
            break;
        case 'jupiter':
            img.src = "imagenes/jupiter.png";
            img.onload = function () {
                const escala = 0.3;
                let ancho = img.width * escala;
                let alto = img.height * escala;
                ctx.drawImage(img, 0, 35, ancho, alto);
            }
            break;
        case 'saturno':
            img.src = "imagenes/saturno.png";
            img.onload = function () {
                const escala = 0.3;
                let ancho = img.width * escala;
                let alto = img.height * escala;
                ctx.drawImage(img, 0, 35, ancho, alto);
            }
            break;
        case 'neptuno':
            img.src = "imagenes/neptuno.png";
            img.onload = function () {
                const escala = 0.3;
                let ancho = img.width * escala;
                let alto = img.height * escala;
                ctx.drawImage(img, 0, 35, ancho, alto);
            }
            break;
    }
    setInterval(mover, 50);


}

/**
 * Anima el planeta dibujado en el canvas.
 * @method mover
 */

let x = 0;
const dx = 4;
let i = 0;

function mover() {
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");

    let img = new Image();

    let gravedadSelect = document.getElementById('gravedad');

    let planeta = gravedadSelect.value;

    switch (planeta) {
        case 'tierra':
            img.src = "imagenes/tierra.png";
            img.onload = function () {
                const escala = 0.6;
                let ancho = img.width * escala;
                let alto = img.height * escala;
                canvas.width = canvas.width;
                ctx.drawImage(img, x, 35, ancho, alto);
            }
            break;
        case 'marte':
            img.src = "imagenes/marte.png";
            img.onload = function () {
                const escala = 0.3;
                let ancho = img.width * escala;
                let alto = img.height * escala;
                canvas.width = canvas.width;
                ctx.drawImage(img, x, 35, ancho, alto);
            }
            break;
        case 'luna':
            img.src = "imagenes/luna.png";
            img.onload = function () {
                const escala = 0.3;
                let ancho = img.width * escala;
                let alto = img.height * escala;
                canvas.width = canvas.width;
                ctx.drawImage(img, x, 35, ancho, alto);
            }
            break;
        case 'mercurio':
            img.src = "imagenes/mercurio.png";
            img.onload = function () {
                const escala = 0.3;
                let ancho = img.width * escala;
                let alto = img.height * escala;
                canvas.width = canvas.width;
                ctx.drawImage(img, x, 35, ancho, alto);
            }
            break;
        case 'jupiter':
            img.src = "imagenes/jupiter.png";
            img.onload = function () {
                const escala = 0.3;
                let ancho = img.width * escala;
                let alto = img.height * escala;
                canvas.width = canvas.width;
                ctx.drawImage(img, x, 35, ancho, alto);
            }
            break;
        case 'saturno':
            img.src = "imagenes/saturno.png";
            img.onload = function () {
                const escala = 0.3;
                let ancho = img.width * escala;
                let alto = img.height * escala;
                canvas.width = canvas.width;
                ctx.drawImage(img, x, 35, ancho, alto);
            }
            break;
        case 'neptuno':
            img.src = "imagenes/neptuno.png";
            img.onload = function () {
                const escala = 0.3;
                let ancho = img.width * escala;
                let alto = img.height * escala;
                canvas.width = canvas.width;
                ctx.drawImage(img, x, 35, ancho, alto);
            }
            break;
    }

    if (x > canvas.width) {
        x = 0;
        i++;
    }

    if (i >= 2) {
        return;
    }

    x += dx;
}
