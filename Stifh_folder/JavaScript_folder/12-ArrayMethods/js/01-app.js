const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

meses.forEach(mes => {
    if (mes === "Enero"){
        console.log('Enero si existe');
    }
})
// .includes() saber si esta o no en una arreglo
const resultado = meses.includes('Enero');
console.log(resultado);

// .some() ideal para arreglo de objetos
const existe = carrito.some(producto => producto.nombre === 'Celular');
console.log(existe);
