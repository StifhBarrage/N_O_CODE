//ARROW FUNCTIONS

const aprendiendo = function(tecnología, tecnología2){ //Función normal
    console.log(`Aprendiendo ${tecnología} y ${tecnología2}	`);
}


//Arrow function
const aprendiendo2 = (tecnología, tecnología2) => `Aprendiendo ${tecnología} y ${tecnología2}`; //Retorna lo mismo que la función de arriba y es más SENCILLA


console.log(aprendiendo2('JavaScript', 'React'));
console.log(aprendiendo('JavaScript', 'node.js'));