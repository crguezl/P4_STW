(function(exports){
  
"use strict";

console.log("entro");

function Medida(valor,tipo) {
  this.valor = valor || "0";
  this.tipo = tipo;
  console.log("medida");
  this.mostrar = function mostrar() {
    return "Se ha introducido una medida";
  }
}


Temperatura.prototype = new Medida();

function Temperatura(valor,tipo) {
  this.valor = valor || "0"; 
  this.tipo = tipo;
  console.log("temperatura");
  var result;
  this.calcular = function calcular(valor,tipo) {
    
    if(this.tipo == 'c' || this.tipo == 'C') {
      result = (this.valor *9/5)+32;
      result = result + " Farenheit";
      
    }
    else {
      result = (this.valor - 32)*5/9;
      result = result + " Celsius";
    }
   
   return result;
  }

}


this.addEventListener('message', function(event) {

  var aux = event.data;
  var temp = original.value;
  var regex = /^\s*([-+]?\d+(?:\.\d+)?(?:e[+-]?\d+)?)\s*([a-z]|[A-Z])\s*$/i;
  var respuesta;

  var m = temp.match(regex);

  if(m) {
    var num = m[1];
    num = parseFloat(num);
    var type = m[2];

    if (type == 'c' || type == 'C' || type == 'f' || type == 'F') {
      var temperatura = new Temperatura(num,type);
      respuesta = temperatura.calcular();
     
    }
    else {
      var medida = new Medida(num,type);
      respuesta = medida.mostrar();
    }

    this.postMessage(respuesta);

  }
}, false);


})(this);




