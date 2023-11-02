//Doble arrow function

const obtenerCliente = () => () => console.log('Juan'); // Funcion que retorna otra funcion

const fn = obtenerCliente();

fn();
