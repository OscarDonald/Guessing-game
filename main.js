// Datorn genererar ett slumpmässigt nummer mellan 0 och 100 (använd Math.random()).

// Spelaren matar in ett tal i en input-ruta, d.v.s det tal som gissas på.
// Om talet är samma som datorns, så får spelaren ett meddelande att man vunnit.
// Om talet är lägre än datorn och över 0 får spelaren ett meddelande om att talet är för lågt.
// Om talet är högre än datorn och mindre än 100 får spelaren ett meddelande om att talet är för högt.
// Spelaren har 5 chanser på sig att gissa rätt tal.

// Generate number between 0-100
let secretNumber = Math.floor(Math.random() * 99);
console.log(secretNumber);

// Get the users guess from the input
const numberInput = document.getElementById("guessingInput");
const verifyNumber = document.getElementById("guessButton");
const playAgainButton = document.getElementById("playAgainButton");
const resultMessage = document.getElementById("resultMessage");
const previousGuessesUl = document.getElementById("previousGuessesUl");
let attempts = 5;

// Check if the guess is correct, too high or too low
verifyNumber.addEventListener("click", () => {
  const userGuess = parseInt(numberInput.value);

  if (isNaN(userGuess) || userGuess < 0 || userGuess > 100) {
    resultMessage.textContent =
      "Please enter a valid number between 0 and 100.";
  } else {
    attempts--;

    if (userGuess === secretNumber) {
      resultMessage.textContent =
        "Congratulations! You guessed the correct number!";
      endGame();
    } else if (attempts === 0) {
      resultMessage.textContent =
        "Sorry, you've run out of attempts. The correct number was " +
        secretNumber;
      // Adds the last guess
      const guessItem = document.createElement("li");
      guessItem.textContent = "Attempt #" + (5 - attempts) + ": " + userGuess;
      previousGuessesUl.appendChild(guessItem);
      endGame();
    } else {
      resultMessage.textContent =
        userGuess < secretNumber
          ? "Too low! You have " + attempts + " attempts left."
          : "Too high! You have " + attempts + " attempts left.";

      // Add guesses to a list
      const guessItem = document.createElement("li");
      guessItem.textContent = "Attempt #" + (5 - attempts) + ": " + userGuess;
      previousGuessesUl.appendChild(guessItem);
    }
  }
});

// Ends the game when all your guesses are used
function endGame() {
  numberInput.disabled = true;
  verifyNumber.disabled = true;
  playAgainButton.style.display = "block";
}

// Resets the game
function resetGame() {
  location.reload();
}

// Play again button function
playAgainButton.addEventListener("click", () => {
  resetGame();
});
