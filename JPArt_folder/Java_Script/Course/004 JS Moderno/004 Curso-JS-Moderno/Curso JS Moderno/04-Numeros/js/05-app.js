let puntaje = 5;    

//incremento
puntaje = puntaje++; //6 pero, se muestra 5 porque se incrementa despues de mostrarlo
puntaje = ++puntaje; //7 se muestra 7 porque se incrementa antes de mostrarlo

let puntaje2 = 5;
//decremento
puntaje2 = puntaje2--; //4 pero, se muestra 5 porque se decrementa despues de mostrarlo
puntaje2 = --puntaje2; //3 se muestra 3 porque se decrementa antes de mostrarlo

console.log(puntaje);
console.log(puntaje2);