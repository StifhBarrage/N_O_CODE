// Even loop 

// el codigo de js se ejecuta en un solo hilo
// el event loop es el encargado de manejar el orden de ejecucion de las tareas
// el event loop se encarga de las tareas que se van a ejecutar y las que se van a agregar a la pila de ejecucion
// Unas tareas se colocan en el Stack y otras en el Queue (cola) 
// el stack es la pila de ejecucion
// el queue es la cola de tareas
// el event loop se encarga de pasar las tareas del queue al stack
// el orden de prioriodad del event loop
/* 


*/


console.log('primero');

setTimeout(() => {
    console.log('segundo');
}, 0);

console.log('tercero');

setTimeout(() => {
    console.log('cuarto');
}, 0);

new Promise(function(resolve) {
    resolve('Desconocido...')
}).then(console.log);

console.log('Ultimo')