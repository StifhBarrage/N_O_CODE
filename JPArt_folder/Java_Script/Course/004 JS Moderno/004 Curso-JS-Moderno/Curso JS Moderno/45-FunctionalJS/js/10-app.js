// Composition
const obtenerNombre = info => ({
    mostrarNombre() {
        console.log(`Nombre: ${info.nombre}`);
    }

});

// Asignar email a un cliente o empleado
const guardarEmail = info => ({
    agregarEmail(email) {
        console.log(`Guardando email en: ${info.nombre}`);
        info.email = email;
    }

});

const obtenerEmpresa = info => ({
    mostrarEmpresa() {
        console.log(`Empresa: ${info.empresa}`);
    }

});

const obtenerPuesto = info => ({
    mostrarPuesto() {
        console.log(`Puesto: ${info.puesto}`);
    }

});


function Cliente(nombre, email, empresa) {
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

}

const obtenerEmail = info => ({
    mostrarEmail() {
        console.log(`Email: ${info.email}`);
    }

});


function Empleado(nombre, email, puesto) {
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

}

const cliente = Cliente('Juan', null, 'UNAL');
cliente.mostrarNombre();
cliente.agregarEmail('jhprieto@unal.edu.co');
cliente.mostrarEmail();
cliente.mostrarEmpresa();

console.log('=======================================');

const empleado = Empleado('Pedro', null, 'Developer');
empleado.mostrarNombre();
empleado.agregarEmail('empleado@correo.com');
empleado.mostrarEmail();
empleado.mostrarPuesto();