function descargarNuevosClientes () {

    return new Promise( resolve => {
        console.log('Descargando clientes... espere...');

        setTimeout( () => {
            resolve('Los clientes fueron descargados');
        }, 5000);
    }); 

}


function descargarNuevosPedidos () {

    return new Promise( resolve => {
        console.log('Descargando pedidos... espere...');

        setTimeout( () => {
            resolve('Los pedidos fueron descargados');
        }, 3000);
    }); 

}

// Async Await con 2 o más funciones
const app = async () => {

    try {

        // Más lento

        // const clientes = await descargarNuevosClientes();
        // const pedidos = await descargarNuevosPedidos();
        // console.log(clientes);
        // console.log(pedidos);

        // Más rápido
        const respuesta = await Promise.all([descargarNuevosClientes(), descargarNuevosPedidos()]); // Promise.all() ejecuta todas las promesas al mismo tiempo
        console.log(respuesta[0]);
        console.log(respuesta[1]);
     
    } catch (error) {
        console.log(error);
    }
}   


app();	
