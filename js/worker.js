
/*var myWorker = new Worker("temperature.js");

myWorker.onmessage = function (oEvent) {
  console.log("Called back by the worker!\n");
};

myWorker.postMessage(""); // start the worker. */

if(typeof(Worker) !== "undefined") {
    console.log("recojo workers");
} else {
    console.log("no recojo workers");
} 