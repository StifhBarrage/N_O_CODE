

// (function() { 
//     console.log('Desde Un IIFE');

//     window.nombreCliente = 'Juan'; // Se puede acceder a esta variable desde el archivo app.js
// })();

export const nombreCliente = 'Jhon'
export const ahorro = 1275;


export function mostrarInformacion(nombre, ahorro) {
    return `Cliente: ${nombre} - Ahorro: ${ahorro}`;
}

// Exportar clases
export function tieneSaldo(ahorro) {
    if(ahorro > 0) {
        console.log('Sí tiene saldo');
    } else {
        console.log('No tiene saldo');
    }
}

export class Cliente {
    constructor(nombre, ahorro) {
        this.nombre = nombre;
        this.ahorro = ahorro;
    }

    mostrarInformacion() {
        return `Cliente: ${this.nombre} - Ahorro: ${this.ahorro}`;
    }

}


export default function nuevaFuncion() { // Solo se puede tener un export default por archivo
    console.log('Este es el export default');
}  