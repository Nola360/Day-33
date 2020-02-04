// GAME FUNCITIONS:
// - Player must guess a number between min snd max
// - Player gets a certain amount of guesses
// - Notify player of remaining guesses
// - Notify player of correct answer if loses
// - Let player choose to play again

// Game values
let min = 1,
  max = 10,
  winningNum = getRandomNum(min, max);
guessesLeft = 3;

// UL Elements
const game = document.querySelector('#game'),
  minNum = document.querySelector('.min-num'),
  maxNum = document.querySelector('.max-num'),
  guessBtn = document.querySelector('#guess-btn'),
  guessInput = document.querySelector('#guess-input'),
  message = document.querySelector('.message');

// Assign Min & Max in UI
minNum.textContent = min;
maxNum.textContent = max;


// Play Again Event Listener
game.addEventListener('mousedown', function (e) {
  if (e.target.className === 'play-again') {
    window.location.reload();
  }
})

// Listen for guess
guessBtn.addEventListener('click', function () {
  // ParseInt turns string to integer
  let guess = parseInt((guessInput.value));
  // console.log(guess);
  if (isNaN(guess) || guess < min || guess > max) {
    setMessage(`Please enter number betweeen ${min} & ${max}`, 'red');
  }

  // Check if won
  if (guess === winningNum) {

    // Game over - Won  
    gameOver(true, `${winningNum} is the correct number! You Win`, 'green');
  } else {

    // Wrong Number
    guessesLeft -= 1;
    if (guessesLeft === 0) {

      // Game Over - Lost
      gameOver(false, `Incorrect! ${winningNum} is the winning number. Game Over!`, 'red');

    } else {

      // Change border color
      guessInput.style.borderColor = 'red';

      // Clear Input
      guessInput.value = '';

      // Game Continue - Answer Wrong
      setMessage(`${guess} is incorrect, ${guessesLeft} guesses left!`, 'red');
    }
  }
});

// Game Over Function
function gameOver(won, msg) {

  let color;
  won === true ? color = 'green' : color = 'red';

  // Change border color
  guessInput.style.borderColor = color;
  // Disable Input
  guessInput.disabled = true;
  setMessage(msg, color);

  // Play Again
  guessBtn.value = "Play Again?";
  guessBtn.className += 'play-again';
}

// Get Random Number Function
function getRandomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);

}


// Set Message Function
function setMessage(msg, color) {
  message.textContent = msg;
  message.style.color = color;
}


