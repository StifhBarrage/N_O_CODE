const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

meses.forEach( (mes, i) => {
    if (mes === 'Abril'){
        console.log(`mes ${mes} en la posición ${i}`)
    }
})

// Encontrar el indice de Abril
const indice = meses.findIndex( mes => mes === 'Abril'); //findIndex retorna el indice del elemento buscado
console.log(`indice del mes Abril es ${indice}`);	// 3

const indice2 = carrito.findIndex ( producto => producto.nombre === 'Teclado'); //findIndex retorna el indice del elemento buscado
console.log(`indice del producto Teclado es ${indice2}`);	// 4

