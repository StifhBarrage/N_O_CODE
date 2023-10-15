const paises = [];

const nuevoPais = pais => new Promise( resolve => {
    setTimeout(() => {
        paises.push(pais);
        resolve(`Agregando: ${pais}`);
    }, 3000);
});

nuevoPais('Alemania')
    .then(resultado => { // resultado = resultado del resolve
        console.log(resultado);
        console.log(paises);
        return nuevoPais('Francia');
        
    })

    .then(resultado => {
        console.log(resultado);
        console.log(paises);
        return nuevoPais('Inglaterra'); 
    })
    
    .then(resultado => {
        console.log(resultado);
        console.log(paises);
    });
