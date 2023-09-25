// WeakSet --> Solo acepta objetos

const weakset = new WeakSet();

const cliente = {
    nombre: 'Juan',
    saldo: 100
}

const nombre = 'Juan';

const producto = { 
    nombre: 'Disco #1',
    precio: 100
}   

weakset.add(cliente);
// WeakSet.add(nombre); // Error porque no es un objeto


weakset.add(producto);
console.log(weakset.has(cliente)); // Retorna true si existe el elemento
console.log(weakset);