function descargar(){
    return new Promise((resolve, reject) => {
        const error = false;
        setTimeout(() => {
            if(!error){
                resolve('El archivo se descargo correctamente');
            }else{
                reject('El archivo no se pudo descargar');
            }
        }, 3000);
    });
}

// Async await
// function expression async 
const ejecutar = async () => {
    try {
        const resultado = await descargar();


        console.log(2 + 2);
        console.log(resultado);
    } catch (error) {
        console.log(error);
    }
}

ejecutar();