var elem = document.getElementById('original');

function iniciarWebWorker() {
    var w;    
    if(typeof(Worker)!="undefined") {
        if(typeof(w)=="undefined") {
            w = new Worker('js/temperature.js');
            w.postMessage(elem);
        }
        w.onmessage = function(event) {
            document.getElementById('output').innerHTML = event.data;
        }
    }
    else {
        document.getElementById('output').innerHTML = "Tu navegador no soporta workers"; 
    }
}
    
    