const cliente3 = new Map();

cliente3.set('nombre', 'karen');
cliente3.set('tipo', 'premium');
cliente3.set('saldo', 3000);
cliente3.set(true, false);

console.log(cliente3);

cliente3.delete('nombre');



const paciente3 = new Map([['nombre', 'paciente'], ['cuarto', 'no definido']]);
console.log(paciente3);
paciente3.set('nombre', 'Antonio');
paciente3.set('cuarto', '404');

console.log(paciente3);

paciente3.forEach((datos, index) => {
    console.log(`${index}: ${datos}`);
});
