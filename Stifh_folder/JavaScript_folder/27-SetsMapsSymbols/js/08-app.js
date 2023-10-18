const ciudades = ['Londres', 'New York', 'Madrid', 'Paris'];
const ordenes = new Set([123, 231, 131, 102]);
const datos = new Map();

datos.set('nombre', 'juan');
datos.set('profesion', 'desarrollador web');

// Entries iterador

for (let entry  of ciudades.entries() ) {
    console.log(entry);
}

for (let entry  of ordenes.entries()) {
    console.log(entry);
}

for (let entry  of datos.entries()) {
    console.log(entry);
}

// Values iterador

for (let entry  of ciudades.values() ) {
    console.log(entry);
}

for (let entry  of ordenes.values()) {
    console.log(entry);
}

for (let entry  of datos.values()) {
    console.log(entry);
}

// Keys iterador

for (let entry  of ciudades.keys() ) {
    console.log(entry);
}

for (let entry  of ordenes.keys()) {
    console.log(entry);
}

for (let entry  of datos.keys()) {
    console.log(entry);
}

// Default

for (let entry  of ciudades) {
    console.log(entry);
}

for (let entry  of ordenes) {
    console.log(entry);
}

for (let entry  of datos) {
    console.log(entry);
}
