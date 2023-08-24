// For each

const pendientes = ['Tarea', 'Comer', 'Proyecto', 'Estudiar JavaScript'];

pendientes.forEach( (pendiente, index) => {
    console.log(`${index} : ${pendiente}`);
});


const carrito = [
    {nombre: 'Monitor 32 pulgadas', precio: 400},
    {nombre: 'Celular', precio: 800},
    {nombre: 'Teclado', precio: 50},   
    {nombre: 'Mouse', precio: 40},
    {nombre: 'Monitor 20 pulgadas', precio: 300},
    {nombre: 'Audifonos', precio: 200}
]

const nuevoArreglo = carrito.forEach( producto => producto.nombre);

const nuevoArreglo2 = carrito.map( (producto, index) => producto.nombre);

console.log(nuevoArreglo);
console.log(nuevoArreglo2); // map crea un nuevo arreglo, forEach no