"use strict";

var w = new Worker('js/temperature.js');

function iniciarWebWorker() {
    var elem = document.getElementById('original').value;
    w.postMessage(elem);
}
     
w.onmessage = function(event) {
    document.getElementById('converted').innerHTML = event.data;
}
    