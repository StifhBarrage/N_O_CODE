function createIteraitor(carrito6) {
    let i = 0;

    return {
        siguiente: () => {
            const fin = (i >= carrito6.length);
            const valor = !fin ? carrito6[i++] : undefined;

            return {
                fin,
                valor
            }
        }
    }
}

const carrito6 = ['Producto 1', 'Producto 2', 'Producto 3', 'Producto 4'];


const recorrerCarrito = createIteraitor(carrito6);

console.log(recorrerCarrito.siguiente());
console.log(recorrerCarrito.siguiente());
console.log(recorrerCarrito.siguiente());
console.log(recorrerCarrito.siguiente());

