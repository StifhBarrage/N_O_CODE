"use strict";
const producto8 = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true
}
producto8.disponible = false;
producto8.imagen = "imagen.jpg";
console.log(producto8)
// Object.freeze() - Congela un objeto, no se puede agregar, ni eliminar, ni modificar
Object.freeze(producto8);
producto8.disponible = true; // No se puede modificar ERROR

