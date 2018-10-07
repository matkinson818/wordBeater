window.onload = init;

const levels = {
    easy: 5,
    medium: 3,
    hard: 2
}

const currentLevel = levels.easy;

//Globals vars
let time = currentLevel;
let isPlaying;
let score = 0;

const currentWord = document.getElementById('current-word');
const wordInput = document.querySelector('#word-input');
const timeDisplay = document.querySelector('#time');
const scoreDisplay = document.getElementById('score');
const message = document.querySelector('#message');
const intialSeconds = document.querySelector('#seconds');

const words = [
    "lucky",
    "generate",
    "stubborn",
    "cocktail",
    "runaway",
    "echo",
    "joke",
    "developer",
    "siblings",
    "nutrition",
    "javascript",
    "horrendous",
    "magic",
    "laughter",
    "master",
    "definition",
    "space",
    "revolver",
    "establishment"
];

//Initialize game
function init() {
    intialSeconds.innerHTML = currentLevel;
    showRandom(words);
    wordInput.addEventListener('input', startMatch);
    startMatch();
    setInterval(countDown, 1000);
    setInterval(checkIfPlaying, 50);
}

//Starts the game with word input
function startMatch() {
    if(matchWords()) {
        isPlaying = true;
        time = currentLevel + 1;
        showRandom(words);
        wordInput.value = '';
        score++;
    }
    if(score === -1){
        scoreDisplay.innerHTML = 0;
    } else {
        scoreDisplay.innerHTML = score;
    }
}

function matchWords() {
    if(wordInput.value === currentWord.innerHTML) {
        message.innerHTML = 'Correct';
        return true;
    } else {
        message.innerHTML = '';
        return false;
    }
}


//Show random word
function showRandom(words) {
    let randomWord = Math.floor(Math.random() * words.length);
    currentWord.innerHTML = words[randomWord];
}

//Start countdown
function countDown() {
  if(time > 0) {
      time--;
  } else if(time === 0) {
        isPlaying = false;
  }
    timeDisplay.innerHTML = time;
}

//Checks if game is playing
function checkIfPlaying() {
    if(isPlaying === false) {
        message.innerHTML = "Game Over!!!";
        score = -1;
    }
}
