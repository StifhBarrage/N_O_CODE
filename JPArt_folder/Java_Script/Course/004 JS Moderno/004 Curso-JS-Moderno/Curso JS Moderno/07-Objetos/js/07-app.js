// Objeto
const producto1 = {
    nombre: 'Monitor 20 pulgadas',
    precio: 300,
    disponible: true
}

// Reasignar valores del objeto
producto1.nombre = 'Monitor 24 pulgadas';

// Eliminar propiedades del objeto
delete producto1.disponible;



console.log(producto1.nombre);
console.log(producto1);