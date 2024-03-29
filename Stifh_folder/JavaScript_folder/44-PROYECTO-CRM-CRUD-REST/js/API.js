const ulr = 'http://localhost:4000/clientes';

// Crear un nuevo cliente

export const nuevoCliente = async cliente => {
    try {
        await fetch(ulr, {
            method: 'POST',
            body: JSON.stringify(cliente),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        window.location.href = 'index.html';
    } catch (error) {
        console.log(error);
    }
}

// Obtener todos los clientes

export const obtenerClientes = async () => {
    try {
        const resultado = await fetch(ulr);
        const clientes = await resultado.json();
        return clientes;
    } catch (error) {
        console.log(error);
    }
}

// Eliminar cliente

export const eliminarCliente = async id => {
    try {
        await fetch(`${ulr}/${id}`, {
            method: 'DELETE'
        });
    } catch (error) {
        console.log(error);
    }
}

// Obtener un cliente por su ID

export const obtenerCliente = async id => {
    try {
        const resultado = await fetch(`${ulr}/${id}`);
        const cliente = await resultado.json();
        return cliente;
    } catch (error) {
        console.log(error);
    }
}

// Actualizar un registro

export const editarCliente = async cliente => {
    try {
        await fetch(`${ulr}/${cliente.id}`, {
            method: 'PUT',
            body: JSON.stringify(cliente),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        window.location.href = 'index.html';
    } catch (error) {
        console.log(error);
    }
}