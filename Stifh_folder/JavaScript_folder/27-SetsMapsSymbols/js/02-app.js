// weakSet 
// solo se puede pasar objetos
// no se puede iterar
const weakSet = new WeakSet();

const cliente = {
    nombre: 'Juan',
    saldo: 100
}

weakSet.add(cliente);
console.log(weakSet)
