// Map --> permite tener llave y valor (cualquier tipo de dato)

const cliente = new Map();

cliente.set('nombre', 'Karen');
cliente.set('tipo', 'Premium');
cliente.set('saldo', 3000);
cliente.set(true, true);

console.log(cliente);

// Algunos métodos
console.log(cliente.size);
console.log(cliente.has('nombre'));
console.log(cliente.get('nombre'));
cliente.delete('saldo');
console.log(cliente.has('saldo')); // false
console.log(cliente.get('saldo')); // undefined

cliente.clear();
console.log(cliente);

const paciente = new Map([['nombre', 'paciente'], ['cuarto', 'no definido']]); // Se le pasa un arreglo de arreglos

paciente.set('dr', 'Dr asignado');
paciente.set('nombre', 'Antonio');


console.log(paciente);

paciente.forEach( (datos, index) => {
    console.log(`${index} : ${datos}`);
});


// Map TIENE MEJOR PERFORMANCE QUE UN OBJETO