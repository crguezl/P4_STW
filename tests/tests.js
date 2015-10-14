var expect = chai.expect;

describe("Medida", function() {
    describe("funcion mostrar", function() {
        it("Se debe introducir una medida", function() {
            var medida = new Medida();
            expect(medida.mostrar()).to.equal("Se ha introducido una medida");
        });
    });
});

describe("Temperatura", function() {
    describe("constructor", function() {
        it("Debe tener un valor por defecto", function() {
            var temperatura = new Temperatura();
            expect(temperatura.valor).to.equal("0");
        });
        
        it("Debe pasarle un valor distinto de 0", function() {
            var temperatura = new Temperatura();
            expect(temperatura.valor).not.equal("3.25");
        });
        it("No debe ser otro tipo de medida", function() {
            var temperatura = new Temperatura();
            expect(temperatura.tipo).not.equal("G");
        });
        it("El resultado debe ser un numero", function() {
            var temperatura = new Temperatura();
            expect(temperatura.result).not.to.be.null;
        });
    });
});

describe("SinonJS", function() {
    var sandbox;
    
    beforeEach(function(){
        sandbox = sinon.sandbox.create();
        
        sandbox.stub(window.console, "log");
        sandbox.stub(window.console, "error");
    });
    
    afterEach(function() {
        sandbox.restore();
    });
    
    describe("Debería mostrar un error si se pasa nada", function() {
        it("Debería mostrar un error si se pasa nada", function() {
            (new Temperatura()).calcular();
        
           // sinon.assert.notCalled(console.log);
            //sinon.assert.calledOnce(console.error);
            sinon.assert.calledWithExactly(console.error, "faltan argumentos", "")
            
        });
        
    });
});


// http://issuu.com/samuelsantos52/docs/backbone.js_testing