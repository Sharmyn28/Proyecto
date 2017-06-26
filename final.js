var clave;
clave = prompt("Ingresa la clave secreta para empezar el Quiz");


/*while (clave != "Laboratoria2016") {
  escribirPreguntas("Ingresa la clave secreta para empezar el Quiz");
}*/

if(clave == "Laboratoria2016"){
  var paises = escribirPreguntas("En cuantos paises opera Laboratoria?");
  var capital = escribirPreguntas("Cual es la capital de Peru?");
  var baile = escribirPreguntas("Cual es el baile tipico de Chile?");
  var moneda = escribirPreguntas("Cual es la moneda de Mexico?");
}
while(clave != "Laboratoria2016"){
  escribirPreguntas("Ingresa la clave secreta para empezar el Quiz");
  if(clave == "Laboratoria2016"){
    break;
  }
}

function escribirPreguntas(pregunta){
  prompt(pregunta);
}
