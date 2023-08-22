// DOM traversing
const nav = document.querySelector('.navegacion');
console.log(nav);
console.log(nav.childNodes); // white spaces are considered as text nodes
console.log(nav.children); // only the elements are considered as children

/* transform the children into an array and
    iterate over it to get the text content of each element 
*/
console.log(Array.from(nav.children).forEach(content => {
   console.log(content.textContent); 
}));

const card = document.querySelector('.card');
card.children[1].children[1].textContent = 'New heading from traversing the DOM';
console.log(card.children[1].children[1].textContent);
card.children[0].src = 'img/hacer3.jpg';
console.log(card.children[0]);


