const name = (prompt('MILONARIOS FC Champion 2023 \n ¿Cuál es tu nombre?'))
if (name == 'Jhon'|| name == "jhon") {
    document.querySelector('.contenido').innerHTML = `${name}, eres arte bro`;
} else if (name == 'Stifh' || name == 'stifh') {
    document.querySelector('.contenido').innerHTML = `${name}, sos cacorro
    \nConviértete al azul!`;
} else {
    saludar();
}

function saludar() {
    const cond = (prompt('¿Eres de Millonarios FC?'));
if (cond == 'Yes' || cond == 'yes' || cond == 'si' || cond == 'Si') { 
    document.querySelector('.contenido').innerHTML = `Eres arte bro, soloMillos`;
}   else {  
    document.querySelector('.contenido').innerHTML = 'Sos cacorro, Conviértete al azul!';
}
}