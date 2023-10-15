const aplicarDescuento = new Promise((resolve, reject) => {
    const descuento = false;

    if (descuento) {
        resolve('Descuento aplicado');
    } else {
        reject('No se pudo aplicar el descuento');
    }
});

// resolve ==> then que se cumplió el promise
// reject ==> catch que no se cumplió el promise


aplicarDescuento

    .then(resultado => {console.log(resultado)}) // Descuento aplicado

    .catch(error => {console.log(error)}); // No se pudo aplicar el descuento
    

console.log(aplicarDescuento); // Promise {<fulfilled>: "Descuento aplicado"}

// Hay 3 valores posibles en los promises
// fulfilled ==> El promise se cumplió
// rejected ==> El promise no se cumplió
// pending ==> No se ha cumplido y tampoco se rechazó


function descuento(mensaje) {
    console.log(mensaje);
};