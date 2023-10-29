function descargarClientes() {

    return new Promise((resolve, reject) => {
        const error = false;

        setTimeout(() => {
            if (!error) {
                resolve('El cliente fue creado');
            } else {
                reject('Error en la creacion del cliente');
            }
        }, 3000);
    });
}

// Async Await
const ejecutar = async () => {
    try {
        const respuesta = await descargarClientes(); // await detiene la ejecucion del codigo hasta que se resuelva la promesa
        
        console.log(2+2);
        console.log(respuesta);

    } catch (error) {
        console.log(error);
    }
}

ejecutar();