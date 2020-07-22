var imagenes = [];
imagenes["Cauchin"] = "vaca.png"
imagenes["Pokacho"] = "pollo.png"
imagenes["Tocinauro"] = "cerdo.png"

class Pakiman
{
    constructor(nombre, vida, ataque)
    {
        this.nombre = nombre;
        this.vida = vida;
        this.ataque = ataque;
        this.imagen = new Image();
        this.imagen.src = imagenes[this.nombre];
    }
    hablar()
    {
       alert(this.nombre); 
    }
    mostrar()
    {
        document.write("<p>");
        document.body.appendChild(this.imagen);
        document.write(this.nombre+"<br/> vida: " + this.vida + "<br/> ataque: " + this.ataque)
        document.write("</p> <hr/>");
    }
}

var coleccion = [];
coleccion.push(new Pakiman("Cauchin", 100, 30));
coleccion.push(new Pakiman("Pokacho", 80, 50));
coleccion.push(new Pakiman("Tocinauro", 120, 40));

for (var p of coleccion)
{
    p.mostrar();
}