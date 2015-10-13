var expect = chai.expect;

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
        
       /* it("Debe tener un tipo asignado C", function() {
            var temperatura = new Temperatura();
            expect(temperatura.tipo).string("C");
        });*/
    });
});

