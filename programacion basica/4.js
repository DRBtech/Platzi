var input_numero = document.getElementById("numero");
var numero = parseInt(input_numero);
var botoncito = document.getElementById("boton");
botoncito.addEventListener("click", fizzbuzz);


function fizzbuzz(){
    for (var i = 1; i<=numero; i++)
    {
        if (i%3 == 0 && i%5 == 0)
        {
            document.write("Fizz Buzz");
        } 
        else if (i%3 == 0)
        {
            document.write("Fizz");
        } 
        else if (i % 5 ==0)
        {
            document.write("Buzz");
        } 
        else 
        {
            document.write(i);
        }
        document.write("<br/>");
    }
}