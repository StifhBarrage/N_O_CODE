const login = true;
const cliente = 'Juan';

function clienteAutenticado() {
    const cliente = 'Pedro';
    console.log(cliente);
    if(login) {
        const cliente = 'Admin';
        console.log(cliente);
    }
}

clienteAutenticado(); // Pedro Admin
console.log(cliente); // Juan

// Scope de un bloque