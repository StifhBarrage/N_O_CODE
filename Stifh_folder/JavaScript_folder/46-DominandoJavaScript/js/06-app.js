// New Binding


function Auto(modelo, color){
    this.modelo = modelo;
    this.color = color;
}

const auto = Auto('Camaro', 'Negro')
console.log(auto)

// Window Binging

window.color = 'negro';

function hola(){
    console.log(color);
}
hola()