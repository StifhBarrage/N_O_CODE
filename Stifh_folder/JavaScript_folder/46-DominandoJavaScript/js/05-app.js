// Explicit Binding

function persona(el1, el2) {
    console.log(`Hola soy ${this.nombre} y me gusta el ${el1} y el ${el2}`);
}

const informacion = {
    nombre: 'Stifh'
}

const genMusicales = ['Heavy Metal', 'Rock'];

// call

persona.call(informacion, genMusicales[0], genMusicales[1]);
// call permite pasar los argumentos de uno en uno

// apply
persona.apply(informacion, genMusicales);
// apply permite pasar los argumentos en un arreglo

// bind
const nuevaFn = persona.bind(informacion, genMusicales[0], genMusicales[1]);
nuevaFn();
// bind lo que hace es crear una nueva función
// y pasarle el objeto que nosotros le indiquemos de forma explícita