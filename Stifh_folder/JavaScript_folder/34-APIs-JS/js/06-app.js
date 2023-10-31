const headset = document.querySelector('#salida');
const microphone = document.querySelector('#microfono');

microphone.addEventListener('click', executeSpeechAPI);

function executeSpeechAPI(){
    const SpeechRecognition = webkitSpeechRecognition;
    recognition = new SpeechRecognition(); // Assign recognition in the outer scope

    recognition.start();

    recognition.onstart = function () {
        headset.classList.add('mostrar');
        headset.textContent = 'Listening...';
    };
    
    recognition.onspeechend = function () {
        headset.firstChild.textContent = 'Stopped...';
        recognition.stop();
    };

    recognition.onresult = function(e) {
        console.log(e.results[0][0]);
        const { confidence, transcript } = e.results[0][0];

        const speech = document.createElement('p');
        speech.textContent = `Speech: ${transcript}`;

        const accuracy = document.createElement('p');
        accuracy.textContent = `Accuracy: ${parseInt(confidence * 100)}%`;

        headset.appendChild(speech);
        headset.appendChild(accuracy);

    }

}



