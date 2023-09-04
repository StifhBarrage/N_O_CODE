//Class declaration
class Cliente {
    constructor(nombre, saldo) {
        this.nombre = nombre;
        this.saldo = saldo;
    }

}

// Instanciarlo
const juan = new Cliente('Juan', 400);
console.log(juan);



// Class expression
const Cliente2 = class {
    constructor(nombre, saldo) {
        this.nombre = nombre;
        this.saldo = saldo;
    }
}

// Instanciarlo
const juan2 = new Cliente2('Jhon', 5000);
console.log(juan2);