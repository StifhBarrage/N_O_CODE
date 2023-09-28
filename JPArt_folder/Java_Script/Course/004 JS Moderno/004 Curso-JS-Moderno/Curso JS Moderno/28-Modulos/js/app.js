import alias , { nombreCliente as nombre1, ahorro, mostrarInformacion, tieneSaldo, Cliente } from './cliente.js'
import { Empresa } from './empresa.js';
// export default no va dentro de los corchetes y no interesa con qué nombre se mande a llamar,
// ya que solo se puede tener un export default por archivo


alias();

console.log(nombre1);
console.log(ahorro);  

console.log( mostrarInformacion( nombre1, ahorro ) ); // Cliente: Jhon - Ahorro: 1275

tieneSaldo(ahorro);// Sí tiene saldo

const cliente = new Cliente(nombre1, ahorro);


console.log(cliente.mostrarInformacion());

// Importar empresa
const empresa = new Empresa('Empresa1', 10000, 'Construcción');
console.log(empresa.mostrarInformacion());

