// querySelector selects the first element .card
const card = document.querySelector('.card');
console.log(card);

// we can get specific selectors like CSS
const info = document.querySelector('.premium .info');
console.log(info);

const secondCard = document.querySelector(
    'section.hospedaje .card:nth-child(2)');
console.log(secondCard);

const form = document.querySelector('#formulario');
console.log(form);

// seleccionar elementos HTML
const nav = document.querySelector('nav');
console.log(nav);