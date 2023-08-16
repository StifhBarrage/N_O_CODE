const pendientes = [
    'Tarea', 
    'Comer', 
    'Proyecto', 
    'Estudiar JavaScript'
];

const automovil = {
    modelo: 'Camaro',
    year: 1969,
    motor: '6.0'
}

for (const key in automovil) {
    console.log(`${automovil[key]}`);
}

for (let [key, values] of Object.entries(automovil)) {
    console.log(`${key}: ${values}`);
}