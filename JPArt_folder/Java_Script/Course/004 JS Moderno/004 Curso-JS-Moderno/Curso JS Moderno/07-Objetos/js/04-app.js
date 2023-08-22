// Objeto
const producto1 = {
    nombre: 'Monitor 20 pulgadas',
    precio: 300,
    disponible: true,
    imagen : 'imagen.jpg'
}

// Destructuring - Extraer valores de un objeto (basic)
const nombre1 = producto1.nombre;
console.log(nombre1);


// Destructuring (advanced)
// const {nombre} = producto1;
// const {precio} = producto1;
// const {disponible} = producto1;

// forma más rápida
const {nombre,precio,disponible} = producto1;


console.log(nombre);
console.log(precio);
console.log(disponible);

console.log(producto1,nombre);