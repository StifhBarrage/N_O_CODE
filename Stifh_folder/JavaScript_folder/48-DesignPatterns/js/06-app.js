// Mixin Pattern

class Persona {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
}


const funcionesPersona = {
    mostrarInformacion() {
        console.log(`Nombre Persona: ${this.name} Email: ${this.email}`);
    },
    mostrarNombre() {
        console.log(`Mi nombre es ${this.name}`);
    }
}

// Añadir funcionesPersona a la clase Persona
// Esto seria como un mixin
Object.assign(Persona.prototype, funcionesPersona);


const cliente = new Persona('Stifh', 'correo@correo.com');

console.log(cliente);
cliente.mostrarInformacion();
cliente.mostrarNombre();
