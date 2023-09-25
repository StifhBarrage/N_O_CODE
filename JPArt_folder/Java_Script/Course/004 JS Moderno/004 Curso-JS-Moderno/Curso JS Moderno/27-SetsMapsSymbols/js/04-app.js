// WeakMap

const producto = {
    idProducto: 10
}

const weakmap = new WeakMap();

weakmap.set(producto, 'Monitor');


console.log(weakmap.has(producto)); // Retorna true si existe el elemento
console.log(weakmap.get(producto)); // Retorna el valor del elemento
console.log(weakmap.size); // No tiene el método size
weakmap.delete(producto); // Elimina el elemento

console.log(weakmap);