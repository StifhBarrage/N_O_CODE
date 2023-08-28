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