// Programacion funcional en JS

/* 
- las funciones tienen entrada y salida
- las funciones no deben permitir la modificacion de datos externos
- las funciones deben ser puras

funciones puras:
- no debe modificar datos externos
- no debe depender de datos externos
- debe retornar un valor

first class functions:
- las funciones son tratadas como cualquier otro valor
- pueden ser asignadas a variables
- pueden ser pasadas como argumentos
- pueden ser retornadas por otras funciones

high order functions:
- reciben otras funciones como argumentos
- retornan una funcion

currying:
- convertir una funcion de multiples argumentos en una funcion de un solo argumento
- cada vez que se llama a la funcion se retorna una nueva funcion con el argumento inicial
- se continua retornando funciones hasta que se alcanza el numero de argumentos
- se ejecuta la funcion con todos los argumentos

composicion de funciones:
- combinar dos o mas funciones para obtener una nueva funcion
- la salida de una funcion es la entrada de la siguiente funcion
- se ejecutan de derecha a izquierda
- se pueden ejecutar de izquierda a derecha
*/

// first class functions

const suma = function(a,b) {
    return a + b;
}

// funcion asignada a una variable
const resultado = suma;

const suma2 = (a,b) => a + b;

console.log(suma2(1,2));
console.log(resultado(1,2));

