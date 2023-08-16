const puntaje = 1000;
if (puntaje == 1000) {
    console.log('Si es igual');
} else {
    console.log('No es igual');
}
const personas = [
    {nombre: 'Juan', edad: 20},
    {nombre: 'maria', edad: 22},
    {nombre: 'carlos', edad: 13}
];


// quien es el mas viejo de todos
const mayor = personas.reduce((edadMayor, persona) => {
    if (edadMayor.edad > persona.edad) {
        return edadMayor;
    } else {
        return persona;
    }
});

console.log(`la persona mas mayor es ${mayor.nombre}
y tiene ${mayor.edad} años`);

// quien es el mas joven de todos
const menor = personas.reduce((edadMenor, persona) => {
    if (edadMenor.edad < persona.edad) {
        return edadMenor;
    } else {
        return persona;
    }
});

console.log(`la persona mas joven es ${menor.nombre}
y tiene ${menor.edad} años`);