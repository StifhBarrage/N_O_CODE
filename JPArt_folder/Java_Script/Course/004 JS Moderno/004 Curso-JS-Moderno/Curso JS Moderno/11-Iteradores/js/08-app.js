const pendientes = ['Tarea', 'Comer', 'Proyecto', 'Estudiar JavaScript'];

for (pendiente of pendientes) { // pendiente es el valor de cada elemento del arreglo
    console.log(pendiente);
}

const automovil = {
    modelo: "camaro",
    year: 1969,
    motor: "6.0"
}

for (let propiedad in automovil) {
    console.log(`${propiedad} : ${automovil[propiedad]}`)
}

for (let [llave, valor] of Object.entries(automovil)) {
    console.log(`${llave} : ${valor}`)
}