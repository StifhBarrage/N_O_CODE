const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

const meses2 = [...meses, 'Julio']
console.log(meses2);

const producto = { nombre: 'Disco Duro', precio: 300 };
const carrito2 = [...carrito, producto];
const carrito3 = [...carrito, {nombre: 'Mouse', precio: 500}];
console.log(carrito2);
console.log(carrito3);