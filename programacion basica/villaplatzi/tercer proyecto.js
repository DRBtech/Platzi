var vp = document.getElementById("mapa");
var papel = vp.getContext("2d");

var fondo = {
    url: "tile.png",
    cargaOK: false
};
var vaca = {
    url: "vaca.png",
    cargaOK: false
};
var pollo = {
    url: "pollo.png",
    cargaOK: false
};
var cerdo = {
    url: "cerdo.png",
    cargaOK: false,
    xI: aleatorio(0,420),
    yI: aleatorio(0,420),
};


fondo.objeto = new Image();
fondo.objeto.src = fondo.url;
fondo.objeto.addEventListener("load", cargarFondo);

vaca.objeto = new Image();
vaca.objeto.src = vaca.url;
vaca.objeto.addEventListener("load", cargarVaca);

pollo.objeto = new Image();
pollo.objeto.src = pollo.url;
pollo.objeto.addEventListener("load", cargarPollo);

cerdo.objeto = new Image();
cerdo.objeto.src = cerdo.url;
cerdo.objeto.addEventListener("load", cargarCerdo);

var teclas = {
    UP: 38,
    DOWN: 40,
    RIGTH: 39,
    LEFT: 37
};
document.addEventListener("keyup", movCerdo)

function cargarFondo (){
    fondo.cargaOK = true;
    dibujar();
}
function cargarVaca (){
    vaca.cargaOK = true;
    dibujar();
}
function cargarPollo (){
    pollo.cargaOK = true;
    dibujar();
}
function cargarCerdo (){
    cerdo.cargaOK = true;
    dibujar();
}

function dibujar (){
    if (fondo.cargaOK){
        papel.drawImage(fondo.objeto, 0, 0);
    }
    if (vaca.cargaOK){
        papel.drawImage(vaca.objeto, aleatorio(0,420), aleatorio(0,420));
    }
    if (pollo.cargaOK){
        papel.drawImage(pollo.objeto, aleatorio(0,420), aleatorio(0,420));
    }
    if (cerdo.cargaOK){
        papel.drawImage(cerdo.objeto, cerdo.xI, cerdo.yI);
    }
}

function movCerdo (event){
    switch (event.keyCode){
        case teclas.UP:
            cerdo.yI= cerdo.yI-10;
        break;
        case teclas.DOWN:
            cerdo.yI= cerdo.yI+10;
        break;
        case teclas.RIGTH:
            cerdo.xI = cerdo.xI+10;
        break;
        case teclas.LEFT:
            cerdo.xI = cerdo.xI-10;
    }
    console.log("x:"+ cerdo.xI +" y:" + cerdo.yI);
    dibujar();
}

function aleatorio (min, max){
    var resultado;
    resultado = Math.floor(Math.random()*(max-min+1))+min;
    return resultado;
}