function sumar (a, b) {
    return a + b; //Lo ideal es que las funciones retornen un valor
}

const resultado = sumar(2, 3); // 5

console.log(resultado);


//Ejemplo más avanzado
let total = 0;

function agregarCarrito(precio) {
    return total += precio;
}

function calcularImpuesto(total) {
    return total * 1.15;
}


total = agregarCarrito(300);
total = agregarCarrito(100);
total = agregarCarrito(600);

const totalPagar = calcularImpuesto(total);

console.log(`El total a pagar es de: ${totalPagar}`	);