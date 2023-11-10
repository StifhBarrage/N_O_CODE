// New Binding

function Automovil(modelo, color) {
    this.modelo = modelo;
    this.color = color;
}

const auto = new Automovil('Camaro', 'Negro')
console.log(auto)


//Window Binding 

window.color = 'negro';

function hola() {
    console.log(color)
}

hola();