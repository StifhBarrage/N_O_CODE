// Event Boobling

const cardDiv = document.querySelector('.card');
const infoDiv = document.querySelector('.info');
const titulo = document.querySelector('.titulo');



cardDiv.addEventListener('click', (e) => {
    e.stopPropagation(); //detiene la propagación del evento, en este caso el click en card
    console.log('click en card');
});


infoDiv.addEventListener('click', (e) => {
    e.stopPropagation(); //detiene la propagación del evento, en este caso el click en info
    console.log('click en info');
});


titulo.addEventListener('click', (e) => {
    e.stopPropagation(); //detiene la propagación del evento, en este caso el click en titulo
    console.log('click en titulo');
});