// Design Pattern: class pattern

// class declaration

class Cliente {
    constructor(nombre, saldo) {
        this.nombre = nombre;
        this.saldo = saldo;
    }
}

const cliente = new Cliente('Juan', 400);
console.log(cliente);