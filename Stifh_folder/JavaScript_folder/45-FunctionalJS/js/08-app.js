// closure - es una funcion que recuerda el valor de una variable aunque esa funcion sea ejecutada en otro lugar

const obtenerCliente = () => {
    const nombre = 'Stifh'; // Esta variable se encuentra en el scope de la función obtenerCliente() 

    function muestraNombre() {
        console.log(nombre); // Esta variable se encuentra en el scope de la función muestraNombre()
    }

    return muestraNombre;
}

const cliente = obtenerCliente();
cliente(); // Stifh

