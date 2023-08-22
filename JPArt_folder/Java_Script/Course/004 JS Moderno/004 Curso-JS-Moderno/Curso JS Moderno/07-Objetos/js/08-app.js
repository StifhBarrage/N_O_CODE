'use strict'; // Habilitar el modo estricto, no se permite modificar los objetos y el código debe ser perfecto

// use strict habilita métodos especiales para los objetos

// Objeto
const producto1 = {
    nombre: 'Monitor 20 pulgadas',
    precio: 300,
    disponible: true
}


// Prevenir que un objeto sea modificado

Object.freeze(producto1); // No permite agregar, eliminar o modificar propiedades del objeto

// producto1.imagen = 'imagen.jpg';
// producto1.disponible = false;
// delete producto1.precio;

console.log(producto1);

//Saber si un objeto está congelado
console.log(Object.isFrozen(producto1)); // Devuelve true o false