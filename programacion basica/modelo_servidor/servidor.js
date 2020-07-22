var express = require("express");
const app = express();

app.get("/", inicio);

function inicio(peticion, resultado){
resultado.send("este es el home genial");
}
app.listen(8989);