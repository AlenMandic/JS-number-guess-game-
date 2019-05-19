// First we create a variable which is assigned a random number,using the Math library.
let randomNumber = Math.floor(Math.random() * 100) + 1;

//Now we create the first three constants,which reference their HTML result paragraphs in our index tab.
const guesses = document.querySelector(".guesses");
const lastResult = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");

//And the remaining two constants,for the form,which control input and guess submission.
const guessField = document.querySelector(".guessField");
const guessSubmit = document.querySelector(".guessSubmit");

let guessCount = 1; //These 2 variables store a guess count of 1,and a reference to our submit button,which doesnt yet exist,but will.
let resetButton;

// This is function which will check whether or not the guess is correct,and have it respond appropriately.
function checkGuess() {
  let userGuess = Number(guessField.value);
  if (guessCount === 1) {
    guesses.textContent = "Previous guesses: ";
  }
  guesses.textContent += userGuess + " ";

  /* In the above code block inside the function,we first create a new variable that makes sure that the user inputs a number.Then if the guessCount is equal to 1,it means the game has started,so we log a message which
  will keep track of the previous guesses.
  */

  if (userGuess === randomNumber) {
    lastResult.textContent = "Congratulations! You got it right!";
    lastResult.style.backgroundColor = "green";
    lowOrHi.textContent = "";
    setGameOver();
  } else if (guessCount === 10) {
    lastResult.textContent = "GAME OVER";
    setGameOver();
  } else {
    lastResult.textContent = "Wrong";
    lastResult.style.backgroundColor = "red";
    if (userGuess < randomNumber) {
      lowOrHi.textContent = "Last guess was too low";
    } else if (userGuess > randomNumber) {
      lowOrHi.textContent = "Last guess was too high";
    }
  }

  //Once all the above conditional statements run,increment guess count by 1,set the input field value to empty,and give the input field focus.This prepares the user for the next turn.
  guessCount++;
  guessField.value = "";
  guessField.focus();
}

//The above code block consists of our conditional if/else statements for the user input.

//Here we call the above function whenever the submit value button is clicked!
guessSubmit.addEventListener("click", checkGuess);

//Now we create the function which resets the game,if the guess count is bigger than 10,or if the user won.
//It disabled the input field and submit button from being used anymore,and we create a button for restarting the game,and append it to our HTML.
//Then we give it an event listener,that when clicked it should run the game reset function,which we will now create!
function setGameOver() {
  guessField.disabled = true;
  guessSubmit.disabled = true;
  resetButton = document.createElement("button");
  resetButton.textContent = "Start new game!";
  document.body.appendChild(resetButton);
  resetButton.addEventListener("click", resetGame);
}

//This function will reset user guessCount back to 1,then target all of the paragraphs inside my result div,loop through them all,and set them to empty.
//We will also remove the reset game button,enable the input field and submit button again and also reset their value, and give our randomNumber a random value again!
function resetGame() {
  guessCount = 1;
  const resetParas = document.querySelectorAll(".resultParas p");
  for (let i = 0; i < resetParas.length; i++) {
    resetParas[i].textContent = "";
  }
  resetButton.parentNode.removeChild(resetButton);
  guessField.disabled = false;
  guessSubmit.disabled = false;
  guessField.value = "";
  guessField.focus();
  lastResult.backgroundColor = "white";
  randomNumber = Math.floor(Math.random() * 100) + 1;
}
