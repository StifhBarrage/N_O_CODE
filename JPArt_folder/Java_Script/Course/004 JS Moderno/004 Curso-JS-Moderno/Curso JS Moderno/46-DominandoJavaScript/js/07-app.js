// Event Loop

// Event Loop es un proceso que se encarga de recorrer el código y dar prioridades de ejecución

console.log('Primero')

setTimeout(() => {
    console.log('Segundo');
}, 30);

console.log('Tercero')

setTimeout(() => {
    console.log('Cuarto');
}, 0);


new Promise(function(resolve){
    resolve('Desconocido...')

}).then(console.log)

console.log('Último')

function hola() {
    console.log('Hola')
}

hola();

// console.log > function > promise > setTimeout