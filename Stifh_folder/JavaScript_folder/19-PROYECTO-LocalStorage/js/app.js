const listaTweets = document.querySelector('#lista-tweets');
const formulario = document.querySelector('#formulario');

eventListeners();

function eventListeners() {
    // when the user add a new tweet
    formulario.addEventListener('submit', agregarTweet);

    // when the document is ready
    document.addEventListener('DOMContentLoaded', localStorageListo);

    // delete tweets
   listaTweets.addEventListener('click', borrarTweet);
}


// add tweet to the list
function agregarTweet(e) {
    e.preventDefault();
    // read the textarea value
    const tweet = document.querySelector('#tweet').value;

    // validate the textarea
    if (tweet === '') {
        mostrarError('A tweet cannot be empty');
        return; // stop the function execution
    }

    // create a delete button
    const botonBorrar = document.createElement('a');
    botonBorrar.classList = 'borrar-tweet';
    botonBorrar.innerText = 'X';

    // create an element and add the content to the list
    const li = document.createElement('li');
    li.innerText = tweet;

    // add the delete button to each tweet
    li.appendChild(botonBorrar);

    // add to the list
    listaTweets.appendChild(li);
    // add to local storage
    agregarTweetLocalStorage(tweet);
    // reset the form
    formulario.reset();
}

// delete tweet from the DOM
function borrarTweet(e) {
    e.preventDefault();
    if (e.target.classList.contains('borrar-tweet')) { // Use contains() for class check
        e.target.parentElement.remove();
        borrarTweetLocalStorage(e.target.parentElement.innerText);
    }
}

// show data from local storage in the list
function localStorageListo() {
    const tweets = obtenerTweetsLocalStorage();
    tweets.forEach(function(tweet) {
        const botonBorrar = document.createElement('a');
        botonBorrar.classList = 'borrar-tweet';
        botonBorrar.innerText = 'X';
        const li = document.createElement('li');
        li.innerText = tweet;
        li.appendChild(botonBorrar);
        listaTweets.appendChild(li);
    });
}


// add tweet to local storage
function agregarTweetLocalStorage(tweet) {
    const tweetsArray = obtenerTweetsLocalStorage();
    tweetsArray.push(tweet);
    localStorage.setItem('tweets', JSON.stringify(tweetsArray));
}

// check if there are elements in local storage, return an array
function obtenerTweetsLocalStorage() {
    let tweetsArray;
    if (localStorage.getItem('tweets') === null) {
        tweetsArray = [];
    } else {
        tweetsArray = JSON.parse(localStorage.getItem('tweets'));
    }
    return tweetsArray;
}

// delete tweet from local storage
function borrarTweetLocalStorage(tweet) {
    const tweetBorrar = tweet.substring(0, tweet.length - 1);
    const tweetsArray = obtenerTweetsLocalStorage();
    const nuevoArray = tweetsArray.filter(function(tweet) {
        return tweet !== tweetBorrar;
    });
    localStorage.setItem('tweets', JSON.stringify(nuevoArray));
}

// error message when the user try to add a empty tweet
function mostrarError(error) {
    const mensajeError = document.createElement('p');
    mensajeError.textContent = error;
    mensajeError.classList.add('error');
    formulario.appendChild(mensajeError);
    setTimeout(() => {
        mensajeError.remove();
    }, 3000);
}