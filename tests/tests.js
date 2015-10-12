var expect = chai.expect;

describe("Temperature", function( {
    describe("constructor", function() {
        it("debe tener un valor por defecto", function(){
            var objeto = new Temperatura();
            expect(objeto.valor).to.equal("0");
        });
        
        
}));