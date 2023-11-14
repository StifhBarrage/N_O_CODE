const carrito = [
    { nombre: 'Monitor 27 pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
    { nombre: 'Bocinas', precio: 800 },
    { nombre: 'Laptop', precio: 900 },
];

// hight order function
const resultado = carrito.filter(producto => producto.precio > 400);
console.log(resultado);


// high order function
const mayor400 = producto => producto.precio > 400;

// retorna una funcion como argumento de otra funcion
const resultado2 = carrito.filter(mayor400);
console.log(resultado2);