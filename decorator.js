class Prenda {
    constructor() {
    }
    temperature() {
        return 0;
    }
}
class PrendaDecorator {
    constructor(prenda) {
        this.prenda = prenda;
    }
    temperature() {
        return this.temperature();
    }
}
class Chalina extends PrendaDecorator {
    constructor(prenda) {
        super(prenda);
        this.abriga = 1;
    }
    temperature() {
        return this.abriga;
    }
}
let prenda = new Prenda();
prenda = new Chalina(prenda);
console.log(prenda.temperature());
