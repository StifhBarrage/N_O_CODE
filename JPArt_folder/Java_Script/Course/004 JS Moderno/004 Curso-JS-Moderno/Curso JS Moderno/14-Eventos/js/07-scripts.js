const cardDiv = document.querySelector('.card');

cardDiv.addEventListener('click', (e) => {

    if (e.target.classList.contains('card')) {
        console.log('click en card');
    }
    if (e.target.classList.contains('titulo')) {
        console.log('click en titulo');
    }
    if (e.target.classList.contains('precio')) {
        console.log('click en precio');
    }
    
});