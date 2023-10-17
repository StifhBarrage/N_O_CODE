//Class declaration
class Cliente {
    constructor(nombre, saldo) {
        this.nombre = nombre;
        this.saldo = saldo;
    }

    mostrarInformacion() {
        return `Cliente: ${this.nombre}, tu saldo es de ${this.saldo}`;
    }
    
    static bienvenida() {
        return `Bienvenido al cajero`;
    }

}

// Instanciarlo
const juan = new Cliente('Juan', 400);
console.log(juan.mostrarInformacion());
console.log(juan);
console.log(Cliente.bienvenida()); // Se llama directamente a la clase



// Class expression
const Cliente2 = class {
    constructor(nombre, saldo) {
        this.nombre = nombre;
        this.saldo = saldo;
    }

    mostrarInformacion() {
        return `Cliente: ${this.nombre}, tu saldo es de ${this.saldo}`;
    }
}

// Instanciarlo
const juan2 = new Cliente2('Jhon', 5000);
console.log(juan2.mostrarInformacion());
console.log(juan2);