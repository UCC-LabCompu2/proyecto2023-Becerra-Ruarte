function dibujar(){
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");

    let img = new Image();
    img.src = "imagenes/marte.png";

    img.onload = function () {
        const escala = 0.3;
        let ancho = img.width * escala;
        let alto = img.height * escala;
        ctx.drawImage(img, 0, 35, ancho, alto);
    }
}
/*
x=0;
dx=4;
function mover() {
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");

    canvas.width = canvas.width;

    let img = new Image();
    img.src = "imagenes/marte.png";

    img.onload = function () {
        const escala = 0.3;
        let ancho = img.width * escala;
        let alto = img.height * escala;
        ctx.drawImage(img, x, 35, ancho, alto);
    }

    if (x > canvas.width) {
        x = 0;
    }

    x += dx;
}*/