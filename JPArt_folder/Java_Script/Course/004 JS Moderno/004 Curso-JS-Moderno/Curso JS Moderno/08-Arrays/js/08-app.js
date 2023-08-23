// Objeto
const producto1 = {
    nombre: 'Monitor 20 pulgadas',
    precio: 300,
    disponible: true,
    imagen : 'imagen.jpg'
}

// Destructuring - Extraer valores de un objeto (basic)
const nombre1 = producto1.nombre;
console.log(nombre1);

// Destructuring con arreglos

const numeros = [10, 20, 30, 40, 50];

const [primero, , tercero, ...cuarto] = numeros; // la única diferencia son los corchetes
console.log(primero);
console.log(tercero);
console.log(cuarto); // ... REST OPERATOR -> toma el resto de los elementos del arreglo