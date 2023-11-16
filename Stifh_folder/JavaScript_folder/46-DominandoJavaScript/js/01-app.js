// SCOPE

const cliente = 'Juan'; // global
const login = true;

function mostrarCliente() {
    const cliente = 'Pedro'; // local
    console.log(cliente); // Pedro

    if (login) {
        const cliente = 'Admin'; // local
        console.log(cliente); // Admin
    }
}

mostrarCliente();
console.log(cliente); // Juan

function fun2() {
    console.log(cliente); // Juan
}

fun2();

