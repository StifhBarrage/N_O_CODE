// Explicit Binding

function persona(el1, el2) {
    console.log(`Mi nombre es ${this.nombre} y escucho ${el1} y ${el2}`);
}

const informacion = {
    nombre: 'Juan'
}

const musicaFavorita = ['Heavy Metal', 'Rock'];


persona(); // undefined

persona.call(informacion, musicaFavorita[0], musicaFavorita[1]); // Mi nombre es Juan y escucho Heavy Metal y Rock

persona.apply(informacion, musicaFavorita); // Mi nombre es Juan y escucho Heavy Metal y Rock


const nuevaFn = persona.bind(informacion, musicaFavorita[0], musicaFavorita[1]); // Mi nombre es Juan y escucho Heavy Metal y Rock
nuevaFn();

// .bind crea una nueva función, no la ejecuta. Pero es lo mismo que .call
// .apply es lo mismo que call, pero los parámetros pueden ser un arreglo
// .call indica dónde están los valores que se necesitan
