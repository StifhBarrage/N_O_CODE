class Cliente {
    // # Propiedades privadas
    #nombre; // Propiedad privada

    // constructor(nombre, saldo) {
    //     this.#nombre = nombre;
    //     this.saldo = saldo;
    // }

    // mostrarInformacion() {
    //     return `Cliente: ${this.#nombre}, tu saldo es de ${this.saldo}`;
    // } //Accede a la propiedad privada
    
    // static bienvenida() {
    //     return `Bienvenido al cajero`;
    // }

    setNombre(nombre) {
        this.#nombre = nombre;
    } // set para modificar la propiedad privada

    getNombre() {
        return this.#nombre;
    } // get para obtener la propiedad privada

}

const juan = new Cliente('Juan', 400);
juan.setNombre('Juan');
console.log(juan.getNombre());
// console.log(juan.#nombre); // Prpiedad pública