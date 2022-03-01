const originalnum = Math.floor(Math.random() * 10) + 1;
var counter = 4;
var enter_sound = new Audio('sounds/pop.mp3');
var win_sound = new Audio('sounds/win.mp3');
var lose_sound = new Audio('sounds/lose.mp3');
document.getElementById("win_display").style.display = "none";
document.getElementById("lose_display").style.display = "none";
document.getElementById("restart_btn").style.display = "none";


function guess() {
enter_sound.play();
enter_sound.currentTime = 0;
var guessnum = document.getElementById('input_num').value;

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
document.getElementById("lose_display").style.display = "";
document.getElementById("lose_display").style.display = "";
document.getElementById("enter_btn").style.display = "none";
document.getElementById("restart_btn").style.display = "";

}
}
function restartgame() {
enter_sound.play();
enter_sound.currentTime = 0;
originalnum = Math.floor(Math.random() * 10) + 1;
counter = 4;



}
