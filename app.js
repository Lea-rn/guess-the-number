"use strict";

// console.log(document.getElementById("high")); ===> get element by id

// console.log(document.querySelector("input").value);

//// intial values ::
let secretNumber = Math.trunc(Math.random() * 20 + 1);

let score = 20;
let highscore = 0;

// document.querySelector(".result-logo").textContent = secretNumber;

//// falsy values = 0 , undefined , null , NaN , ""

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

//// no number ,shih , ijib num ghlat (akther , a9al)

document.querySelector(".btn-check").addEventListener("click", function () {
  const guess = Number(document.querySelector("input").value);
  if (!guess) {
    displayMessage("No Number  🛑");
  } else if (guess === secretNumber) {
    displayMessage("correct Number !! 🥳");

    score++; /// update variable
    document.querySelector(".score-result").textContent = score; /// u.u.i ==> update user interface
    document.querySelector("body").style.backgroundColor = "greenyellow";
    document.querySelector(".result-logo").textContent = secretNumber;
    secretNumber = Math.trunc(Math.random() * 20 + 1); //// generate new number
    document.querySelector("input").value = "";

    if (score > highscore) {
      highscore = score; //// varibale
      document.querySelector(".highscore-result").textContent = highscore;
    }
  } else if (score > 0) {
    if (guess < secretNumber) {
      displayMessage("too low !! ⬇️");
      score--;
      document.querySelector(".score-result").textContent = score;
      document.querySelector("input").value = "";
    } else if (guess > secretNumber) {
      displayMessage("too high !! ⬆️");
      score--;
      document.querySelector(".score-result").textContent = score;
      document.querySelector("input").value = "";
    }
  } else {
    displayMessage("you loose the game !! 😭");
  }
});
