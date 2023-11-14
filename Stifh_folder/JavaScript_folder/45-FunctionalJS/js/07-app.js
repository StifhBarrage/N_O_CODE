// Funciones que retornan funciones

// En este caso la función obtenerCliente() retorna otra función que es la que se va a ejecutar
const obtenerCliente = () => () => console.log('Juan');

// fn es la función que retorna obtenerCliente()
const fn = obtenerCliente();

// Aqui se ejecuta la función que retorna obtenerCliente()
fn();

