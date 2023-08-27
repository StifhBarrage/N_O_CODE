const busqueda = document.querySelector('.busqueda');


// busqueda.addEventListener('keydown', () => {
//     console.log('escribiendo');
// });

// busqueda.addEventListener('keyup', () => {
//     console.log('escribiendo');
// });

busqueda.addEventListener('blur', () => {
    console.log('blur');
});

// busqueda.addEventListener('copy', () => {
//     console.log('copiando');
// });

// busqueda.addEventListener('paste', () => {  
//     console.log('pegando');
// });

// busqueda.addEventListener('cut', () => {
//     console.log('cortando');
// });

busqueda.addEventListener('input', (evt) => { // evt es el evento
    console.log(evt);
}); 


busqueda.addEventListener('input', (evto) => { // evto es el evento
    if (evto.target.value === '') {
        console.log('Fallo la validación');
    }
}); 