(function(exports){
  
"use strict";

function Medida(valor,tipo) {
  this.valor = valor || "0";
  this.tipo = tipo;
  this.mostrar = function mostrar() {
    converted.innerHTML = "Se ha introducido una medida";
  }
}

Temperatura.prototype = new Medida();

function Temperatura(valor,tipo) {
  this.valor = valor || "0"; //¿Se tienen que volver a declarar?
  this.tipo = tipo;
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
    converted.innerHTML = result;
  }

}

exports.Temperatura = Temperatura;

exports.calculate = function calculate() {

  var original = document.getElementById("original");
  var temp = original.value;
  //var regex = /^\s*([-+]?\d+(?:\.\d+)?(?:e[+-]?\d+)?)\s*([cCfFgG])\s*$/i;
  var regex = /^\s*([-+]?\d+(?:\.\d+)?(?:e[+-]?\d+)?)\s*([aAbBcCdDeEfFgG])\s*$/i;

  var m = temp.match(regex);

  if(m) {
    var num = m[1];
    num = parseFloat(num);
    var type = m[2];
    console.log(type);

   if (type == 'c' || type == 'C' || type == 'f' || type == 'F') {
     console.log("HOla");
     var temperatura = new Temperatura(num,type);
     console.log("Holaaa");
     temperatura.calcular();
     console.log("Hooooooooolaaaaa");
   }

   else {
     console.log("Genero objeto medida");
     var medida = new Medida(num,type);
     medida.mostrar();
   }
   /*if (type != 'c' || type != 'C' || type != 'f' || type != 'F') {
     console.log("Genero objeto medida");
     var medida = new Medida(num,type);
     medida.mostrar();
   }*/
  /*else {
    console.log("Else");
    if(type != 'c' || type != 'C' || type != 'f' || type != 'F') {
      console.log("Genero objeto medida");
      var medida = new Medida(num,type);
      medida.mostrar();
    }
    console.log("Chivato");
  }
  console.log("JA");*/

  }
}

})(this);