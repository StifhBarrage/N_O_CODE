const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];
const meses2 = ['Agosto', 'Septiembre'];
const meses3 = ['Octubre', 'Noviembre', 'Diciembre'];

// .concat() 
const resultado = meses.concat('mes0', meses2, meses3, 'otro mes');
console.log (resultado);

// Spread Operator (REST Operator)
const resultado2 = ['mes0', ...meses, ...meses2, ...meses3, 'otro mes'];
console.log (resultado2);

