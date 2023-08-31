const nombre = localStorage.getItem('nombre');
console.log(nombre);


const productoJSON = localStorage.getItem('producto');
console.log(JSON.parse(productoJSON)); // JSON.parse() convierte un string a un objeto


const mesesJSON = localStorage.getItem('meses');
console.log(JSON.parse(mesesJSON)); // JSON.parse() convierte un string a un objeto