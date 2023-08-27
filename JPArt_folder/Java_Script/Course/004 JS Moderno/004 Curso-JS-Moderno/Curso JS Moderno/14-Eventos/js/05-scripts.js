window.addEventListener('scroll', () => {

    const premium = document.querySelector('.premium');
    const ubicacion = premium.getBoundingClientRect(); //devuelve un objeto con las medidas del elemento
     
    
    if (ubicacion.top < 784) {
        console.log('El elemento ya está visible');
    } else {
        console.log('Aún no, da más scroll');
    }

}); //Se ejecuta cuando el HTML está listo, pero sin esperar a que carguen imágenes y otros recursos