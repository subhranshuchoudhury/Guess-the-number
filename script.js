const originalnum = Math.floor(Math.random() * 10) + 1;
var counter = 0;
var enter_sound = new Audio('sounds/pop.mp3');
var win_sound = new Audio('sounds/win.mp3');
var lose_sound = new Audio('sounds/lose.mp3');
document.getElementById("win_display").style.display = "none";
function guess() {
enter_sound.play();
enter_sound.currentTime = 0;
var guessnum = document.getElementById('input_num').value;
counter++;

//if guess is smaller.
if (guessnum < originalnum) {
document.getElementById('display').innerHTML = "Your Guess Is Small &#128528;";

}
else if (guessnum > originalnum) {
document.getElementById('display').innerHTML = "Your Guess Is Large &#128530;";

}
else if (guessnum == originalnum) {
win_sound.play();
win_sound.currentTime = 0;
document.getElementById('display').innerHTML = "You Won!";
document.getElementById("win_display").style.display = "";

}
document.getElementById('total_guess').innerHTML = "Total Guessed: " + counter + "/5";
if (counter == 5) {
lose_sound.play();
alert("Game Over! You Lose :(");
location.reload()
}
}
function restartgame(argument) {
enter_sound.play();
enter_sound.currentTime = 0;
location.reload()
// body...
}