// document.getElementById('checkButton').addEventListener('click', function() {
//     const inputWord = document.getElementById('inputWord').value.trim();
//     const reversedWord = inputWord.split('').reverse().join('');
    
//     let resultMessage = `Omdraaien: ${reversedWord}<br>`;

//     if (inputWord.toLowerCase() === reversedWord.toLowerCase()) {
//         resultMessage += "Dit woord is een palindroom!";
//     } else {
//         resultMessage += "Dit woord is geen palindroom.";
//     }
    
//     document.getElementById('result').innerHTML = resultMessage;
// });


document.getElementById('checkButton').addEventListener('click', checkWord);
document.getElementById('inputWord').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        checkWord();
    }
});

function checkWord() {
    const inputWord = document.getElementById('inputWord').value.trim();

    // Controleer of de invoer leeg is of cijfers bevat
    if (inputWord === '') {
        document.getElementById('result').innerHTML = "Voer een woord in.";
        return;
    }
    
    if (/\d/.test(inputWord)) {
        document.getElementById('result').innerHTML = "Voer alleen letters in, geen cijfers.";
        return;
    }

    const reversedWord = inputWord.split('').reverse().join('');
    let resultMessage = `Omdraaien: ${reversedWord}<br>`;

    if (inputWord.toLowerCase() === reversedWord.toLowerCase()) {
        resultMessage += "Dit woord is een palindroom!";
    } else {
        resultMessage += "Dit woord is geen palindroom.";
    }

    document.getElementById('result').innerHTML = resultMessage;
}

