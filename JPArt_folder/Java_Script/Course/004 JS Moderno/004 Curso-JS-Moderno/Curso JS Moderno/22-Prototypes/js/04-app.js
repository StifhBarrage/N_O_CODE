function Cliente (nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo

}

Cliente.prototype.tipoCliente = function() {
    let tipo;
    if (this.saldo > 10000) {
        tipo = 'Gold'
    } else if (this.saldo > 5000) {
        tipo = 'Platinium'
    } else {
        tipo = 'Normal'
    }
    return tipo; 
    }

Cliente.prototype.nombreClienteSaldo = function () {
    return `Nombre: ${this.nombre}, Saldo: ${this.saldo}, Tipo de cliente: ${this.tipoCliente()} `
}

Cliente.prototype.retiraSaldo = function(retira) {
    this.saldo -= retira
}



function Persona (nombre, saldo, telefono) {
    Cliente.call(this, nombre, saldo); // Heredar nombre y saldo de cliente a persona
    this.telefono = telefono
}


Persona.prototype = Object.create (Cliente.prototype); // Copiar el prototype de cliente
Persona.prototype.constructor = Cliente;


// Instanciarlo
const juan = new Persona ('Juan', 5000, 13258965);
console.log(juan);
console.log(juan.nombreClienteSaldo());



Persona.prototype.mostrarTelefono = function () {
    `El telefono de esta persona es ${this.telefono}`
}