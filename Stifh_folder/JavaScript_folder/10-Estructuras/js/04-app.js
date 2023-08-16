const dinero = 500;
const totalAPagar = 3000;
const targeta = true;
const cheque = true;


if (dinero >= totalAPagar) {
    console.log('Si podemos pagar');
} else if (targeta) {
    console.log('Si puedo pagar porque tengo la targeta');   
} else if (cheque){
    console.log('si tengo cheque');
} else {
    console.log('Fondos insuficientes');
}
