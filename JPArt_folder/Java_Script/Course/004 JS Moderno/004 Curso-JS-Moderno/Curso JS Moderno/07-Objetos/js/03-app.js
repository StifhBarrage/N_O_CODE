// Objeto
const producto1 = {
    nombre: 'Monitor 20 pulgadas',
    precio: 300,
    disponible: true,
    imagen : 'imagen.jpg'
}


// Agregar nuevas propiedades al objeto
producto1.imagen1 = 'imagen1.jpg';

// Eliminar propiedades del objeto
delete producto1.disponible;

console.log(producto1);