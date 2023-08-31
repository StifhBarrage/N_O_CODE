localStorage.removeItem('nombre');


// Actualizar un registro
const mesesArray = JSON.parse(localStorage.getItem('meses'));
mesesArray.push('Abril');
console.log(mesesArray);

localStorage.setItem('meses', JSON.stringify(mesesArray)); // Reescribir los valores del localStorage

// No hay update, se tiene que reescribir el valor del localStorage

localStorage.clear(); // Eliminar todo el localStorage