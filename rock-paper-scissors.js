'use strict';



const container = document.querySelector('#container');

// create the 3 'buttons', each button is 2 boxes inside of 1 box

const rockBox = document.createElement('div');
container.appendChild(rockBox);

const rockTop = document.createElement('div');
rockTop.classList.add('content');
rockTop.textContent = 'R';
rockBox.appendChild(rockTop);

const rockBottom = document.createElement('div')
rockBottom.classList.add('content');
rockBottom.textContent = 'Rock';
rockBox.appendChild(rockBottom);

const paperBox = document.createElement('div');
container.appendChild(paperBox);

const paperTop = document.createElement('div');
paperTop.classList.add('content');
paperTop.textContent = 'P';
paperBox.appendChild(paperTop);

const paperBottom = document.createElement('div');
paperBottom.classList.add('content');
paperBottom.textContent = 'Paper';
paperBox.appendChild(paperBottom);

const scissorsBox = document.createElement('div');
container.appendChild(scissorsBox)

const scissorsTop = document.createElement('div');
scissorsTop.classList.add('content');
scissorsTop.textContent = 'S';
scissorsBox.appendChild(scissorsTop);

const scissorsBottom = document.createElement('div');
scissorsBottom.classList.add('content');
scissorsBottom.textContent = 'Scissors';
scissorsBox.appendChild(scissorsBottom);











// Select randomly: rock, paper, or scissors
function computerPlay() {
    let rand = Math.random();
    if (rand < 1/3) {
        return 'rock';
    } else if (rand < 2/3) {
        return 'paper'
    } else {
        return 'scissors'
    }
}

function playRound(playerSelection, computerSelection) {

    // the 3 conditions: win, tie, or loss
    if ((playerSelection == 'rock' && computerSelection == 'scissors') ||
            (playerSelection == 'paper' && computerSelection == 'rock') || 
            (playerSelection == 'scissors' && computerSelection == 'paper')) {
        
        playerWinCount++;
        console.log(`${playerSelection} versus ${computerSelection}. You win!`);
    
    } else if (playerSelection == computerSelection) {
        console.log(`${playerSelection} versus ${computerSelection}. It's a draw!`); 

    } else {
        computerWinCount++;
        console.log(`${playerSelection} versus ${computerSelection}. You lose!`); 
    }
    
    console.log(`Player wins: ${playerWinCount}, Computer wins: ${computerWinCount}`);
}

function game() {

    for (let i = 0; i < 5; i++) {
        playerSelection = prompt(`Please type 'rock', 'paper', or 'scissors'.`).toLowerCase();
        computerSelection = computerPlay();
        playRound(playerSelection, computerSelection);
    }

    console.log(`You played 5 games! 
    You won ${playerWinCount} time(s).
    The computer won ${computerWinCount} time(s).`);
}

let playerSelection; 
let computerSelection; 
let computerWinCount = 0;
let playerWinCount = 0;
// game();

// Add: learn regular expression and filter out incorrect inputs, allow 'rock',
// 'paper', 'scissors' only 