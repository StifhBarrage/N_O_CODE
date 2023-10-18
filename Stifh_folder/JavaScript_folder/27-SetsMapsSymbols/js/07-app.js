// generator function

function *crearGenerador() {
    // yield
    yield 1;
    yield 'Nombre';
    yield 3 + 3;
    yield true;
}

const iterador = crearGenerador();

console.log(iterador.next().value);
console.log(iterador.next().value);
console.log(iterador.next().value);
console.log(iterador.next().value);


function *nuevoGenerador(carrito7) {
    for(let i = 0; i < carrito7.length; i++) {
        yield carrito7[i];
    }
}

const carrito7 = ['Producto 1', 'Producto 2', 'Producto 3', 'Producto 4'];

const iterador2 = nuevoGenerador(carrito7);

console.log(iterador2.next());
console.log(iterador2.next());
console.log(iterador2.next());
console.log(iterador2.next());
console.log(iterador2.next());
