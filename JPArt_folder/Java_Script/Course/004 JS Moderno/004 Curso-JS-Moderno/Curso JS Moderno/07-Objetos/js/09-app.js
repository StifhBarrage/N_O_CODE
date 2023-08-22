'use strict'; // Habilitar el modo estricto, no se permite modificar los objetos y el código debe ser perfecto

// use strict habilita métodos especiales para los objetos

// Objeto
const producto1 = {
    nombre: 'Monitor 20 pulgadas',
    precio: 300,
    disponible: true
}


// Seal: Permite modificar las propiedades existentes pero no agregar ni eliminar propiedades

Object.seal(producto1);

// producto1.imagen = 'imagen.jpg';
producto1.disponible = false;
// delete producto1.precio;

console.log(producto1);

//Saber si un objeto está sellado
console.log(Object.isSealed(producto1)); // Devuelve true o false


