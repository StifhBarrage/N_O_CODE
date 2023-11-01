const carrito = [
    { nombre: 'Monitor 27 pulgadas', precio: 500 },
    { nombre: 'Televisión 50 pulgadas', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
];

const resultado = carrito.filter(producto => producto.precio > 400);
console.log(resultado);

// Utilizando una función como argumento
const mayor400 = producto => producto.precio > 400;
const resultado2 = carrito.filter(mayor400);

console.log(resultado2);