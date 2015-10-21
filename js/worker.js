"use strict";

var w = new Worker('js/temperature.js');

function iniciarWebWorker() {
   /* var w; */   
   /* if(typeof(Worker)!="undefined") {
        if(typeof(w)=="undefined") {*/
            var elem = document.getElementById('original').value;
            w.postMessage(elem);
            console.log(elem);
        }
     
        w.onmessage = function(event) {
            console.log(event.data);
            document.getElementById('converted').innerHTML = event.data;
        }
   // }
   /* else {
        document.getElementById('output').innerHTML = "Tu navegador no soporta workers"; 
    }*/
//}
    
    