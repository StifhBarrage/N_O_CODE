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

////////// GET ITEM FROM LOCAL STORAGE ///////////

// get item from local storage
const nombre = localStorage.getItem('nombre')
console.log(nombre)

// get a object from local storage
const productoJSON = localStorage.getItem('producto')
console.log(JSON.parse(productoJSON))

// get a array from local storage
const mesesArray = JSON.parse(localStorage.getItem('meses'))
console.log(mesesArray)
