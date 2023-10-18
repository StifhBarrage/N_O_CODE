import preset, { nombreCliente as alias, ahorro, mostrarInformacion, tieneSaldo, Cliente} from './cliente.js';
import {Empresa} from './empresa.js';

preset();

console.log(alias);
console.log(ahorro);

console.log(mostrarInformacion(alias, ahorro));

tieneSaldo(ahorro);


const cliente = new Cliente(alias, ahorro);

console.log(cliente.mostrarInformacion());

const empresa = new Empresa('Codigo con Juan', 400, 'Aprendizaje en linea');
console.log(empresa.mostrarInformacion());



