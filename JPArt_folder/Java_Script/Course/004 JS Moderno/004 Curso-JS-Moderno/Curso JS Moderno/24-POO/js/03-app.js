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

// Herencia 
class Empresa extends Cliente { // Hereda de la clase Cliente
    constructor(nombre, saldo, telefono, categoria) {
        // Super va hacia el constructor padre
        super(nombre, saldo);
        this.telefono = telefono;
        this.categoria = categoria;
    }

    static bienvenida() {   // Sobreescribe el método de la clase padre
        return `Bienvenido al cajero de empresas`;
    }

}


const juan = new Cliente('Juan', 400);
const empresa = new Empresa('Empresa1', 5000);
console.log(empresa);
console.log(empresa.mostrarInformacion()); // Hereda el método de la clase padre
console.log(Empresa.bienvenida()); // Hereda el método de la clase padre
console.log(Cliente.bienvenida()); // Se llama directamente a la clase