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

//instanciarlo
const pedro = new Cliente('Pedro', 6000);
console.log(pedro.tipoCliente());
console.log(pedro.nombreClienteSaldo())
pedro.retiraSaldo(1000)
console.log(pedro.nombreClienteSaldo())


console.log(pedro)



function Empresa (nombre, saldo, categoria) {
    this.nombre = nombre
    this.saldo = saldo
    this.categoria = categoria

}

const CCJ = new Empresa ('JPArt', 45000, 'Narcotráfico');
console.log(CCJ);