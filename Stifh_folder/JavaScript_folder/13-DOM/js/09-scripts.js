const primerLink = document.querySelector('a');
primerLink.remove();

const nav = document.querySelector('.navegacion');
console.log(nav.children);
nav.removeChild(nav.children[2]);

