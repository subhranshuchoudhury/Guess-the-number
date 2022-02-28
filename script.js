const originalnum = Math.floor(Math.random() * 10) + 1;
var counter = 0;
document.getElementById("win_display").style.display = "none";
function guess() {
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
document.getElementById('display').innerHTML = "You Won!";
document.getElementById("win_display").style.display = "";

}
document.getElementById('total_guess').innerHTML = "Total Guessed: " + counter + "/5";
if (counter == 5) {
alert("Game Over! You Lose :(");
location.reload()
}
}
function restartgame(argument) {
location.reload()
// body...
}