// Constructor Pattern

// this is like a abstract class
class Cliente {
    constructor(nombre, saldo) {
        this.nombre = nombre;
        this.saldo = saldo;
    }
}

// for example this class heredate from Cliente
class Empresa extends Cliente {
    constructor(nombre, saldo, telefono, tipo) {
        // super() is the constructor of the class Cliente
        super(nombre, saldo);
        this.telefono = telefono;
        this.tipo = tipo;
    }
}

const empresa = new Empresa('Udemy', 1000000, 123456789, 'Educacion');
console.log(empresa);


