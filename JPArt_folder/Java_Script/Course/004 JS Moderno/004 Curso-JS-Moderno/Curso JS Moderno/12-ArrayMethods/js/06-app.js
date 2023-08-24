const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
];

const resultado = carrito.every( producto => producto.precio < 600);
console.log(resultado); // true => Todos los productos cumplen con la condición

const resultado2 = carrito.some( producto => producto.precio < 600);
console.log(resultado2); // true => Todos los productos cumplen con la condición
