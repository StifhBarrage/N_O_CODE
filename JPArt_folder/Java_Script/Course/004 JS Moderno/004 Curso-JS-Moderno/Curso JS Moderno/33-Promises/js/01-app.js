const paises = ['Francia', 'España', 'Portugal', 'Australia', 'Inglaterra', 'Irlanda'];

function nuevoPais(pais, callback) {
    setTimeout(() => {
        paises.push(pais);
        callback(); // Llamar la función que se pasa por parámetro
    }, 2000);
}

function mostrarPaises() {
    setTimeout(() => {
        paises.forEach(pais => {
            console.log(pais);
        });
    }, 1000);
}

mostrarPaises();

nuevoPais('Alemania', mostrarPaises); // Se pasa la función por parámetro