iniciarApp(); 

function iniciarApp() {
    console.log('Iniciando app...');
    segundaFuncion(); // Una función puede llamar a otra función
}   

function segundaFuncion() { //Segunda función
    console.log('Desde la segunda función');
    usuarioAutenticado('Jhon Prieto'); // Otra función puede llamar a otra función
}

function usuarioAutenticado(usuario) { // Tercera función
    console.log('Autenticando usuario...');
    console.log(`Usuario autenticado exitosamente: ${usuario}`);
}

// NOTA: El orden de las funciones es importante, si se llama a una función antes de que esta sea declarada, se producirá un error

