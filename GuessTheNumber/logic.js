// const { useReducer } = require("react");

let randomNumber = parseInt(Math.random()*100+1)

const submit = document.querySelector("#subt");
const userInput = document.querySelector("#guessField");
const guessSlot = document.querySelector(".guesses");
const remainig = document.querySelector(".lastResult");

const lowOrHigh = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas");

const p = document.createElement('p');

// stores previous guesses
let prevGuess = [];

// stores the number of guess
let NumGuess = 1;

// base condition to play game
let playGame = true;

if (playGame){
    submit.addEventListener('click' ,function(e){
        e.preventDefault();
        const guess = parseInt(userInput.value);
        console.log(guess);
        validateGuess(guess);
    })
}

function validateGuess(guess){
    // check whether the user input is correct or not
    if (isNaN(guess)){
        alert('Please enter a valid number');
    }
    else if (guess < 1){
        alert('Please enter a valid number more than 1');
    }
    else if (guess > 100){
        alert('Please enter a valid number less than 100');
    }
    else {
        prevGuess.push(guess);
        if (NumGuess === 11){
            displayGuess(guess);
            displayMessage(`Game Over : Random Number was ${randomNumber}`);
            endGame();
        }
        else {
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(guess){
    // checks how far off the guess is . 
    if (guess === randomNumber){
        displayMessage(`You Guessed it right`)
        endGame()
    }
    else if (guess < randomNumber){
        displayMessage(`Number is too low`);
    }
    else if (guess > randomNumber){
        displayMessage(`Number is too high`);
    }
}

function displayMessage(message){
    // takes the message from the user 
    lowOrHigh.innerHTML = `<h2>${message}</h2>`
}

function displayGuess(guess){
    // Clean the values , update the arrays
    userInput.value = '';
    guessSlot.innerHTML += `${guess} |  `
    NumGuess++;
    remainig.innerHTML = `${11 - NumGuess}`
    
}

function newGame(){
    // starts the new game
    const newGame = document.querySelector('#newGame')
    newGame.addEventListener('click' , function(e){
        randomNumber = parseInt(Math.random() * 100 + 1)
        prevGuess = []
        NumGuess = 1
        guessSlot.innerHTML = ''
        remainig.innerHTML = `${guess}  |  `
        userInput.removeAttribute('disabled')

        startOver.removeChild(p)
        playGame = true;
    })
}

function endGame(){
    // end the prev game
    userInput.value =''
    userInput.setAttribute('disabled','')
    p.classList.add('button')
    p.innerHTML = `<h2 id = 'newGame'>Start new Game</h2>`
    startOver.appendChild(p);
    playGame = false;
    newGame();
}