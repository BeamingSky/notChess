// ----------------TIMER------------------
// function startTimer(duration, display) {
//   var timer = duration,
//     minutes,
//     seconds;
//   setInterval(function () {
//     minutes = parseInt(timer / 60, 10);
//     seconds = parseInt(timer % 60, 10);

//     minutes = minutes < 10 ? "0" + minutes : minutes;
//     seconds = seconds < 10 ? "0" + seconds : seconds;

//     display.textContent = minutes + ":" + seconds;

//     if (--timer < 0) {
//       timer = duration;
//     }
//   }, 1000);
// }

// window.onload = function () {
//   var tenMinutes = 60 * 5,
//     display = document.querySelector("#timer");
//   startTimer(tenMinutes, display);
// };

// --------------popup--------------

function openPopup() {
  var popup = document.createElement("div");
  popup.className = "popup";

  var closeButton = document.createElement("span");
  closeButton.innerHTML = "X";
  closeButton.style =
    "color: rgba(204, 201, 201, 0.829);   font-family: Gill Sans, Gill Sans MT, Calibri, Trebuchet MS, sans-serif";
  closeButton.className = "close-btn";
  closeButton.onclick = function () {
    popup.style.display = "none";
  };

  // var button = document.createElement("button");
  // button.innerHTML = "Click Me";
  // button.className = "popup-button";

  popup.appendChild(closeButton);
  // popup.appendChild(button);
  document.body.appendChild(popup);
  popup.style.display = "block";
}
// ------------------------------

let chance = Math.floor(Math.random() * 4) + 1; // Generating a random number between 1 and 4
console.log(chance);

var imageArray = ["Bird1.png", "Bamboo1.png", "Wind1.png", "Dragon1.png"];

var imgElement = document.getElementById("randomImage");
var index = chance - 1; // Adjusting to zero-based index
imgElement.src = imageArray[index];

// timer------------

var timerStarted = false;

function startTimer() {
  if (!timerStarted) {
    timerStarted = true;
    document.getElementById("startButton").style.display = "none"; // Hide the button when timer starts

    var timeLeft = 5 * 60; // 5 minutes in seconds
    var timerDisplay = document.getElementById("timer");

    var timerInterval = setInterval(function () {
      var minutes = Math.floor(timeLeft / 60);
      var seconds = timeLeft % 60;

      timerDisplay.innerHTML =
        minutes + ":" + (seconds < 10 ? "0" : "") + seconds;

      if (--timeLeft < 0) {
        clearInterval(timerInterval);
        timerDisplay.innerHTML = "0:00"; // Timer done message
        alert("Game finished!"); // Alert when the timer finishes
        // Replace this with any action you want when the timer finishes
      }
    }, 1000); // Update every second
  }
}
