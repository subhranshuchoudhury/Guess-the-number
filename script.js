var originalnum = Math.floor(Math.random() * 10) + 1;
var counter = 4;
var enter_sound = new Audio('sounds/pop.mp3');
var win_sound = new Audio('sounds/win.mp3');
var lose_sound = new Audio('sounds/lose.mp3');
document.getElementById("win_display").style.display = "none";
document.getElementById("lose_display").style.display = "none";
document.getElementById("restart_btn").style.display = "none";
var lastguess;
//enter button -- keyboard.
var input = document.getElementById("input_num");
input.addEventListener("keyup", function(event) {
if (event.keyCode === 13) {
event.preventDefault();
document.getElementById("enter_btn").click();
}
});
//end
function guess() {
enter_sound.play();
enter_sound.currentTime = 0;
var guessnum = document.getElementById('input_num').value;
lastguess = guessnum;
document.getElementById('last_guess').innerHTML = "Last guess: " + lastguess;
//if guess is smaller.
if (guessnum < originalnum) {
document.getElementById('display').innerHTML = "Your Guess Is Small &#128528;";
}
else if (guessnum > originalnum) {
document.getElementById('display').innerHTML = "Your Guess Is Large &#128530;";
}
if (guessnum == originalnum) {
win_sound.play();
win_sound.currentTime = 0;
document.getElementById('display').innerHTML = "You Won!";
document.getElementById("win_display").style.display = "";
document.getElementById("enter_btn").style.display = "none";
document.getElementById("restart_btn").style.display = "";
}
else{
counter--;
}
document.getElementById('total_guess').innerHTML = "Chance Left: " + counter;
if (counter == 0) {
lose_sound.play();
document.getElementById('display').innerHTML = "You Lose!";
document.getElementById("lose_display").style.display = "";
document.getElementById("enter_btn").style.display = "none";
document.getElementById("restart_btn").style.display = "";
}
}
function restartgame() {
enter_sound.play();
enter_sound.currentTime = 0;
window.counter = 4;
window.originalnum = Math.floor(Math.random() * 10) + 1;
document.getElementById("win_display").style.display = "none";
document.getElementById("lose_display").style.display = "none";
document.getElementById("restart_btn").style.display = "none";
document.getElementById("enter_btn").style.display = "";
document.getElementById('total_guess').innerHTML = "Chance Left: " + counter;
document.getElementById('last_guess').innerHTML = "Game restarted!";
document.getElementById('display').innerHTML = "Guess a number between 1-10 !";
//location.reload()
}