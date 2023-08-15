"use strict";
const producto9 = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true
}
producto9.disponible = false;
console.log(producto9)
// Object.seal() - Permite modificar las propiedades existentes pero no crear ni eliminar
Object.seal(producto9);
producto9.disponible = true; // Se puede modificar
producto9.imagen = "imagen.jpg"; // No se puede agregar ERROR
console.log(producto9)
console.log(Object.isSealed(producto9)) // Saber si un objeto esta sellado
console.log(Object.isFrozen(producto9)) // Saber si un objeto esta congelado
