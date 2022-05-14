const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSOR = 'SCISSOR';
const RESULT_DRAW = 'DRAW';
const RESULT_PLAYER_WINS = 'PLAYER_WINS';
const RESULT_COMPUTER_WINS = 'COMPUTER_WINS';

const rockBtn = document.getElementById('rock-btn');
const paperBtn = document.getElementById('paper-btn');
const scissorBtn = document.getElementById('scissor-btn');

const playerCurrentScore = document.getElementById('player-score');
const cpuCurrentScore = document.getElementById('cpu-score');
const outputRoundWinner = document.getElementById('who-wins');

let playerChoice;
let cpuChoice;

let playerScore = 0;
let cpuScore = 0;

function playGame(playerSelectedOption){
    playerChoice = playerSelectedOption
    cpuChoice = getCpuOption();
    const winner = getWinner(playerChoice, cpuChoice);
    outputResult(winner, cpuChoice);
}

function getCpuOption(){
    let randomCpuValueToPlay = Math.random();
    if (randomCpuValueToPlay < 0.33) {
        console.log(`CPU chose ${ROCK}`)
        return ROCK;
    } else if (randomCpuValueToPlay < 0.66) {
        console.log(`CPU chose ${PAPER}`)
        return PAPER;
    } else {
        console.log(`CPU chose ${SCISSOR}`)
        return SCISSOR;
    }
    
}

function getWinner(playerOption, cpuOption){
    // check if it's a draw
    if (playerOption === cpuOption) {
        return RESULT_DRAW;
    // check if player wins
    } else if (playerOption === ROCK && cpuOption === SCISSOR ||
                playerOption === PAPER && cpuOption === ROCK ||
                playerOption === SCISSOR && cpuOption === PAPER) {
        playerScore++;
        return RESULT_PLAYER_WINS;
    // check if cpu wins
    } else if (cpuOption === ROCK && playerOption === SCISSOR ||
                cpuOption === PAPER && playerOption === ROCK ||
                cpuOption === SCISSOR && playerOption === PAPER) {
        cpuScore++;
        return RESULT_COMPUTER_WINS;
    }   
}

function outputResult (winner, cpuChoice) {
    if (winner === RESULT_DRAW) {
        outputRoundWinner.textContent = `IT'S A DRAW! CPU chose: ${cpuChoice}`
        return;
    } else if (winner === RESULT_PLAYER_WINS) {
        playerCurrentScore.textContent = playerScore;
        cpuCurrentScore.textContent = cpuScore;
        outputRoundWinner.textContent = `PLAYER WINS!. CPU chose: ${cpuChoice}`
    } else if (winner === RESULT_COMPUTER_WINS) {
        playerCurrentScore.textContent = playerScore;
        cpuCurrentScore.textContent = cpuScore;
        outputRoundWinner.textContent = `CPU WINS! CPU chose: ${cpuChoice}`
    }
}

rockBtn.addEventListener('click', () => {
     playGame(ROCK);
 });
paperBtn.addEventListener('click', () => {
    playGame(PAPER);
});
scissorBtn.addEventListener('click', () => {
    playGame(SCISSOR);
});