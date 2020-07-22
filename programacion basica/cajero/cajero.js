class Billetes{
    constructor(valor, cantidad){
        this.valor = valor;
        this.cantidad = cantidad; 
    }
}
var caja = [];
caja.push(new Billetes(50,3));
caja.push(new Billetes(20,2));
caja.push(new Billetes(10,2));
var dinero; 
var entregado = [];
var div = 0;
var papeles = 0;
var boton = document.getElementById("boton");
boton.addEventListener("click", entregardinero);
var resultado = document.getElementById("resultado");

function entregardinero(){
    var t = document.getElementById("dinero_id");
    dinero = parseInt(t.value);
    for (var bi of caja){
        if (dinero > 0){
            div = Math.floor(dinero/bi.valor);
            if (div > bi.cantidad){
                papeles = bi.cantidad;
            } else {
                papeles = div;
            }
            dinero = dinero - bi.valor*papeles;
            entregado.push(new Billetes(bi.valor, papeles));
        } 
    }
    if(dinero>0){
        resultado.innerHTML = "no hay dinero suficiente";
    } else{
        resultado.innerHTML = null;
        for (var e of entregado){
            resultado.innerHTML = resultado.innerHTML + e.cantidad + " billetes de $" + e.valor + "<br />";
        }
    }
}