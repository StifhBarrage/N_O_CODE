const carrito = [];
const producto = {
    nombre: "Screen TV",
    precio: 400
};

const producto2 = {
    nombre: "phone",
    precio: 800
};
const producto3 = {
    nombre: "keyboard",
    precio: 50
};

resultado = [...carrito, producto];
resultado = [...resultado, producto2];
resultado = [producto3, ...resultado];
console.table(resultado);
