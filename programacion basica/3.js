var d = document.getElementById("dibujo");
var lienzo = d.getContext("2d");
var teclas = {
    UP: 38,
    DOWN: 40,
    RIGHT: 39,
    LEFT: 37
};
var xi = 200;
var yi = 200;
var xf = 200;
var yf = 200;
var MOV = 1;
document.addEventListener("keydown", dibujarTeclado);
function dibujar_linea(color, xinicial, yinicial, xfinal, yfinal){
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.lineWidth = 3;
    lienzo.moveTo(xinicial,yinicial);
    lienzo.lineTo(xfinal,yfinal);
    lienzo.stroke();
    lienzo.closePath();   
}
function dibujarTeclado(evento){
    switch(evento.keyCode){
        case teclas.UP:
            yf = yi - MOV;
        break;
        case teclas.DOWN:
            yf = yi + MOV;
        break;
        case teclas.RIGHT:
            xf = xi + MOV;
        break;
        case teclas.LEFT:
            xf = xi - MOV;
        break;
        default:
            console.log("otra tecla");
    }
    dibujar_linea("red", xi,yi,xf,yf)
    xi = xf;
    yi = yf; 
}
var dibujar = false;
d.addEventListener("mousedown", function(event){
    dibujar = true;
    xi = event.x;
    yi = event.y;
});
d.addEventListener("mousemove", function(event){
    if (dibujar == true){
        dibujar_linea("blue", xi, yi, event.x, event.y);
        xi = event.x;
        yi = event.y;
    }
});
d.addEventListener("mouseup", function(event){
    dibujar = false;
});