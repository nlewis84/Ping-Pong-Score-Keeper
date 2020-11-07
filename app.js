var p1Score = 0;
var p2Score = 0;
var winningScore = 1;
var select = document.getElementById("winningScore");
const p1Button = document.getElementById("playerOneIncrease")
const playerOneIncrease = p1Button;
const p2Button = document.getElementById("playerTwoIncrease");
const playerTwoIncrease = p2Button;
const reset = document.getElementById("reset");
const p1Display = document.getElementById("p1Score")
const p2Display = document.getElementById("p2Score")


select.addEventListener('change', (e) => {
    winningScore = parseInt(select.options.value, 10);
})

function updateScore() {
    p1Display.innerText = p1Score;
    if (p1Score === (select.selectedIndex)) {
        p1Display.className = "green";
        p2Display.className = "red";
        p1Button.className = "disabled";
        p2Button.className = "disabled";
    }
    p2Display.innerText = p2Score;
    if (p2Score === (select.selectedIndex)) {
        p2Display.className = "green";
        p1Display.className = "red";
        p1Button.className = "disabled";
        p2Button.className = "disabled";
    }
}

playerOneIncrease.addEventListener('click', (e) => {
    p1Score++;
    updateScore();
})

playerTwoIncrease.addEventListener('click', (e) => {
    p2Score++;
    updateScore();
})

reset.addEventListener('click', (e) => {
    p1Score = 0;
    p2Score = 0;
    updateScore();
    p1Display.className = "";
    p2Display.className = "";
    p1Button.className = "";
    p2Button.className = "";
})
