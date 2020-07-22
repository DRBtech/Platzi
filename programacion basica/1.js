var d = document.getElementById("dibujito"); 
var lienzo = d.getContext("2d");
var lados = parseInt(prompt("Cuantos lados tiene la figura que quieres crear?"));
var largo = parseInt(prompt("Cuanto mide cada lado de la figura?"));
var x = d.width/2;
var y = d.height/2; 
var pi = function(){
    return Math.sin(Math.PI());
};

function dibujar_linea(color, xi, yi, xf, yf){
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xi,yi);
    lienzo.lineTo(xf,yf);
    lienzo.stroke();
    lienzo.closePath();   
}
//falta algo
for (var i=0; i < lados; i++){
    var Xfinal= x+largo*Math.cos((3.14*(lados-2))*(i));
    var Yfinal = y+largo*Math.sin((3,14*(lados-2))*(i));
    dibujar_linea("red",x,y, Xfinal, Yfinal);
    x = Xfinal;
    y = Yfinal;
}

document.write = pi();