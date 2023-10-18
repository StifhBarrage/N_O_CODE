const producto = {
    idProdcuto: 10
}

const weakmap = new WeakMap();

weakmap.set(producto, 'Monitor');
console.log(weakmap.has(producto)); // true

