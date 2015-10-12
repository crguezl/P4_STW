(function(exports) {
    "use strict";
    
    function Medida(valor,tipo) {
        this.valor = valor || "0";
        this.tipo = tipo || "C" || "F" || "";
    }
    
    
    function Temperatura(valor,tipo) {
        Medida.call(this,valor,tipo);
    }
    
    exports.Temperatura = Temperatura;
    
    exports.calculate = function() {
        
        
    }
    
})(this);