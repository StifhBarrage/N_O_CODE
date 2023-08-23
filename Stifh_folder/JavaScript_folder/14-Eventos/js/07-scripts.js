const cardDiv = document.querySelectorAll('.card');
/*
cardDiv.addEventListener('click', (e) => {
    console.log(e.target); // Shows the element that was clicked
    console.log(e.target.classList.contains('precio')); // Shows the element that has the event listener
});
*/

// Event delegation
cardDiv.forEach((card) => {
    card.addEventListener('click', (e) => {
        console.log(e.target); // Shows the element that was clicked
        if (e.target.classList.contains('precio')) {
            console.log('Diste click en precio');
        }
        if (e.target.classList.contains('card')) {
            console.log('Diste click en card');
        }
        if (e.target.classList.contains('info')) {
            console.log('Diste click en info');
        }
        if (e.target.classList.contains('categoria')) {
            console.log(`Diste click en ${e.target.textContent}`);
        }
        
    });
});
