var gridCell = document.querySelectorAll('.grid-cell');
var box0 = document.getElementById('0')
var box1 = document.getElementById('1')
var box2 = document.getElementById('2')
var box3 = document.getElementById('3')
var box4 = document.getElementById('4')
var box5 = document.getElementById('5')
var box6 = document.getElementById('6')
var box7 = document.getElementById('7')
var box8 = document.getElementById('8')
const xWins = document.getElementById('X_wins').classList;
const Owins = document.getElementById('O_wins').classList;
const tie = document.getElementById('tieGame').classList;
const restart = document.getElementById('restartBtn')
document.getElementById('restartBtn').style.visibility = 'hidden';



gridCell.forEach(cell => {
    cell.addEventListener('click', showLetter, { once: true })
})

const player_X = "X";
const player_O = "O";
let switchPlayer;

function showLetter() {


    switchPlayer = switchPlayer === player_X ? player_O : player_X;
    this.textContent = switchPlayer;
    this.style.display = "flex"
    this.style.alignItems = "center"
    this.style.justifyContent = "center"
    this.style.fontSize = "100px"
    checkWinner();
}

function checkWinner() {
    if (box0.innerHTML.includes("X") && box1.innerHTML.includes("X") && box2.innerHTML.includes("X") || box3.innerHTML.includes("X") && box4.innerHTML.includes("X") && box5.innerHTML.includes("X") || box6.innerHTML.includes("X") && box7.innerHTML.includes("X") && box8.innerHTML.includes("X") || box0.innerHTML.includes("X") && box3.innerHTML.includes("X") && box6.innerHTML.includes("X") || box1.innerHTML.includes("X") && box4.innerHTML.includes("X") && box7.innerHTML.includes("X") || box2.innerHTML.includes("X") && box5.innerHTML.includes("X") && box8.innerHTML.includes("X") || box0.innerHTML.includes("X") && box4.innerHTML.includes("X") && box8.innerHTML.includes("X") || box2.innerHTML.includes("X") && box4.innerHTML.includes("X") && box6.innerHTML.includes("X")) {
        xWins.add('active')
        document.getElementById('restartBtn').style.visibility = 'visible';
        restartGame();
    } else if (box0.innerHTML.includes("O") && box1.innerHTML.includes("O") && box2.innerHTML.includes("O") || box3.innerHTML.includes("O") && box4.innerHTML.includes("O") && box5.innerHTML.includes("O") || box6.innerHTML.includes("O") && box7.innerHTML.includes("O") && box8.innerHTML.includes("O") || box0.innerHTML.includes("O") && box3.innerHTML.includes("O") && box6.innerHTML.includes("O") || box1.innerHTML.includes("O") && box4.innerHTML.includes("O") && box7.innerHTML.includes("O") || box2.innerHTML.includes("O") && box5.innerHTML.includes("O") && box8.innerHTML.includes("O") || box0.innerHTML.includes("O") && box4.innerHTML.includes("O") && box8.innerHTML.includes("O") || box2.innerHTML.includes("O") && box4.innerHTML.includes("O") && box6.innerHTML.includes("O")) {
        Owins.add('active')
        document.getElementById('restartBtn').style.visibility = 'visible';
        restartGame();
    } else if ((box0.innerHTML.includes("X") || box0.innerHTML.includes("O")) && (box1.innerHTML.includes("X") || box1.innerHTML.includes("O")) && (box2.innerHTML.includes("X") || box2.innerHTML.includes("O")) && (box3.innerHTML.includes("X") || box3.innerHTML.includes("O")) && (box4.innerHTML.includes("X") || box4.innerHTML.includes("O")) && (box5.innerHTML.includes("X") || box5.innerHTML.includes("O")) && (box6.innerHTML.includes("X") || box6.innerHTML.includes("O")) && (box7.innerHTML.includes("X") || box7.innerHTML.includes("O")) && (box8.innerHTML.includes("X") || box8.innerHTML.includes("O"))) {
        tie.add('active')
        document.getElementById('restartBtn').style.visibility = 'visible';
        restartGame();
    }
}

function restartGame() {
    restart.addEventListener('click', () => {
        window.location.reload();
    })
}
