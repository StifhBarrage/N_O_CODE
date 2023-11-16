// Implicit Binding

const usuario = {
    nombre: 'Stifh',
    edad: 25,
    informacion() {
        console.log(`Mi nombre es ${this.nombre} y tengo ${this.edad} años`);
    },

    mascota: {
        nombre: 'Hook',
        edad: 1,
        informacion() {
            console.log(`Mi nombre es ${this.nombre} y tengo ${this.edad} años`);
        }
    }
}

usuario.informacion();

// En este caso this apunta al objeto usuario porque 
// es el que está llamando al método informacion()

usuario.mascota.informacion();
// En este caso this apunta al objeto mascota porque
// es el que está llamando al método informacion()
