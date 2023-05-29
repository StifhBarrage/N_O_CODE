// name declaration
const first_name = prompt("¿Cual es tu nombre?");
// print in index.html file - you can see the result in the browser
if (first_name !== '') {
  document.querySelector(
    ".contenido"
  ).innerHTML = `${first_name} welcome to this new life style`;
} else {}
