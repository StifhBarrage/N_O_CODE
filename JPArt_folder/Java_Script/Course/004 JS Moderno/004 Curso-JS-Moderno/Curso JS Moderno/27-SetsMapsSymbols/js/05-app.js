// Symbols --> No es iterable

const sym = Symbol();   
const sym2 = Symbol(); 

if (sym === sym2) {
    console.log('Son iguales');
} else {
    console.log('Son diferentes');
} // Los symbols son diferentes aunque tengan el mismo nombre SIEMPRE

const nombre = Symbol();
const apellido = Symbol();

const persona = {};

// Agregar nombre y apellido como llaves del objeto
persona[nombre] = 'Juan';
persona[apellido] = 'De la torre';
persona.tipoCliente = 'Premium';
persona.saldo = 500;

console.log(persona);

// Acceder a una propiedad de un symbol
console.log(persona[nombre]);

// Las propiedades que utilizan un symbol no son iterables
for(let i in persona) {
    console.log(i);
}

// Definir una descripción del symbol
const nombreCliente = Symbol('Nombre del cliente');
const cliente = {};

cliente[nombreCliente] = 'Pedro';

console.log(cliente);
console.log(cliente[nombreCliente]);
console.log(nombreCliente); // No se puede acceder a la descripción del symbol
