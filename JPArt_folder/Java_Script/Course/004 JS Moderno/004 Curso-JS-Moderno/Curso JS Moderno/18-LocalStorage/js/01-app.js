localStorage.setItem('nombre', 1); // Solo se puede guardar strings

const producto = {
    nombre: 'Monitor 24 pulgadas',
    precio: 300
}

localStorage.setItem('producto', JSON.stringify(producto));

const meses = ['Enero', 'Febrero', 'Marzo'];
localStorage.setItem('meses', JSON.stringify(meses));
