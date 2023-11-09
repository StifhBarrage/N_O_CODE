function descargar(){
    return new Promise((resolve, reject) => {
        const exito = true;
        setTimeout(() => {
            if(!exito){
                resolve('El archivo se descargo correctamente');
            }else{
                reject('El archivo no se pudo descargar');
            }
        }, 3000);
    });
}

// Async await

async function ejecutar(){
    try {
        const resultado = await descargar();


        console.log(2 + 2);
        console.log(resultado);
    } catch (error) {
        console.log(error);
    }
}

ejecutar();