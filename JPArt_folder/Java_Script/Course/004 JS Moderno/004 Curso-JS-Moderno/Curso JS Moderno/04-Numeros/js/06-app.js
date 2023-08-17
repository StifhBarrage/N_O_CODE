const numero1 = '20';
const numero2 = "20.2";
const numero3 = 'Uno';
const numero4 = 20;

// pasar de string a numero ENTERO
console.log(Number.parseInt(numero1));
console.log(Number.parseInt(numero2));
console.log(Number.parseInt(numero3)); //NaN


// pasar de string a numero DECIMAL
console.log(Number.parseFloat(numero2));

//Revisar si un numero es entero o no
console.log(Number.isInteger(numero1));
console.log(Number.isInteger(numero2));
console.log(Number.isInteger(numero3));
