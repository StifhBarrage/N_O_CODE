// composition of functions
// funcion que retorna un objeto
const obtenerNombre = info => ({
    mostrarNombre(){
        console.log(`Nombre: ${info.nombre}`);
    }
});

const guardarEmail = info => ({
    agregarEmail(email){
        console.log(`Guardando email en: ${info.nombre}`);
        info.email = email;
    }
});

const obtenerEmail = info => ({
    mostrarEmail(){
        console.log(`Correo: ${info.email}`);
    }
});

const obtenerEmpresa = info => ({
    mostrarEmpresa(){
        console.log(`Empresa: ${info.empresa}`);
    }
});

const obtenerPuesto = info => ({
    mostrarPuesto(){
        console.log(`Puesto: ${info.puesto}`);
    }
});

const cliente = function(nombre, email, empresa){
    let info = {
        nombre,
        email,
        empresa
    }

    return Object.assign(
        info,
        obtenerNombre(info),
        guardarEmail(info),
        obtenerEmail(info),
        obtenerEmpresa(info)
    );
};

const empleado = function(nombre, email, puesto){
    let info = {
        nombre,
        email,
        puesto
    }

    return Object.assign(
        info,
        obtenerNombre(info),
        guardarEmail(info),
        obtenerEmail(info),
        obtenerPuesto(info)

    );
};

const infoCliente = cliente('Juan', 'correo@correo.com', 'Udemy');
infoCliente.mostrarNombre();
infoCliente.agregarEmail('clienteCambiado@cliente.com');
infoCliente.mostrarEmail();
infoCliente.mostrarEmpresa();

console.log('-------------------');

const infoEmpleado = empleado('Pedro', 'empleado@empleado.com', 'Programador');
infoEmpleado.mostrarNombre();
infoEmpleado.agregarEmail('empeladoCambiado@empleado.colm');
infoEmpleado.mostrarEmail();
infoEmpleado.mostrarPuesto();



