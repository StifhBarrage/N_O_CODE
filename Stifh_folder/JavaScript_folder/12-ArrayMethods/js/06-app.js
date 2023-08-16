const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 100 },
    { nombre: 'Celular', precio: 100 },
]
// todos los objectos deben cumplir la condicion propuesta
const resultado = carrito.every(producto => producto.precio <= 500);
console.log(resultado);
