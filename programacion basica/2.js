var text = document.getElementById("lineastext");
var botoncito = document.getElementById("boton");
botoncito.addEventListener("click",dibujoporclick);

var d = document.getElementById("dibujo");
var lienzo = d.getContext("2d");
var alto = d.height;
var ancho = d.width;
var lineas = alto/10;
var l = 0;
var Yi, Xf;

console.log(text);
dibujar_linea("black", 1, 1, 1, alto);
dibujar_linea("black", ancho-1, 1, ancho-1, alto);
dibujar_linea("black", 1, alto-1, ancho, alto-1);
dibujar_linea("black", 1, 1, ancho, 1);





function dibujar_linea(color, xi, yi, xf, yf){
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xi,yi);
    lienzo.lineTo(xf,yf);
    lienzo.stroke();
    lienzo.closePath();   
}
function dibujoporclick(){
    lineas= parseInt(text.value);
    for(l=0; l<lineas; l++){
        Yi = l*(alto/lineas);
        //de esta forma se adapta cuantos pixeles de ancho tiene la parte final del canvas 
        Xf = (l+1)*(ancho/lineas);
        dibujar_linea("grey", 0 , Yi, Xf, alto);
        dibujar_linea("grey", ancho , Yi, Xf, 0);
    } 
}