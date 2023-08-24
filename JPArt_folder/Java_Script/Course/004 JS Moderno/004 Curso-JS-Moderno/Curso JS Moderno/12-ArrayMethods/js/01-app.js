const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

// Comprobar si un valor existe en un arreglo
meses.forEach( mes => {
    if (mes === 'Enero'){
        console.log(mes)
    }
})

const resultado = meses.includes('Diciembre');
console.log(resultado);	// true


// En un arreglo de objetos se debe usar .some
const existe = carrito.some( producto => producto.nombre === 'Celular');
console.log(existe);	// true, busca en el arreglo de objetos

// En un arreglo tradicional se puede usar .some o .includes
const existe2 = meses.some( mes => mes === 'Febrero');
console.log(existe2);	// true

// .some soporta arreglo de objetos y tradicional
// .includes solo soporta arreglo tradicional