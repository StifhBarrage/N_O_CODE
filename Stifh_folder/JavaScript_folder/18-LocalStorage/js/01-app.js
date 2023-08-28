////////// SET ITEM TO LOCAL STORAGE //////////

// Local storage for all the time
localStorage.setItem('nombre', 'Juan')

// Session storage for one session 
sessionStorage.setItem('nombre', 'Juan')

const producto = {
    nombre : 'Monitor 24 pulgadas',
    precio: 300
}

// add to local storage a object
const productoString = JSON.stringify(producto)
localStorage.setItem('producto', productoString)

// add to local storage a array
const meses = ['Enero', 'Febrero', 'Marzo']
localStorage.setItem('meses', JSON.stringify(meses))