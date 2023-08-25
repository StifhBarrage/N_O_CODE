// Traversing the DOM

const navegacion = document.querySelector('.navegacion');
console.log(navegacion.firstElementChild);
console.log(navegacion.lastElementChild);
// console.log(navegacion.childNodes); // Devuelve los nodos hijos


// console.log(navegacion.children); // Devuelve los elementos hijos reales
// console.log(navegacion.children[1].nodeName); // Devuelve el nombre del elemento
// console.log(navegacion.children[1].nodeType); // Devuelve el tipo de elemento (1: Elemento, 2: Atributo, 3: Texto, 8: Comentario, 9: Documento, 10: Doctype)

const card = document.querySelector('.card');
// console.log(card.children[1].children[1].textContent = 'Nuevo heading desde traversing the DOM');

// console.log(card.children[0].src = 'img/hacer3.jpg');


// Traversing de hijo a padre
console.log(card.parentNode.parentElement.parentElement);


//Traversing de hermano a hermano
console.log(card.nextElementSibling.nextElementSibling);

const ultimoCard = document.querySelector('.card:nth-child(4)');
console.log(ultimoCard.previousElementSibling.previousElementSibling)

