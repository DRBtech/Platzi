var Banco_cliente = "Banco de chile";
var cuenta_cliente = true;
var saldo_cliente = 100000000;
var Banco_destino = "Santander"
var cuenta_destino = true;
var Hora_transferencia;
var valor_transferencia;


if(cuenta_cliente){
    if(9 < Hora_transferencia < 12 || 15 < Hora_transferencia < 20){
        if (saldo_cliente > valor_transferencia){
            if (cuenta_destino){
                if(Banco_cliente == Banco_destino){
                    saldo_cliente = saldo_cliente - valor_transferencia;
                } else {
                    saldo_cliente = saldo_cliente - (valor_transferencia + 100);
                }
            }
        }
    }
} else{
    alert("perro estupido");
}