// delete element from local storage

localStorage.removeItem('nombre')
localStorage.removeItem('meses')
// localStorage.clear() // clear all local storage

// Update a value from local storage
mesesArray.push('Abril')
console.log(mesesArray)
localStorage.setItem('meses', JSON.stringify(mesesArray))