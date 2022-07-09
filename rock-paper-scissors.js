'use strict';

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

    computerSelection = computerPlay();

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

function game(choice) {

    for (let i = 0; i < 5; i++) {
        playerSelection = choice;
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


const container = document.querySelector('#container');
container.setAttribute('class', 'container1')

const rockBox = document.createElement('div');
rockBox.setAttribute('class', 'rock')
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
paperBox.setAttribute('class', 'paper')
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
scissorsBox.setAttribute('class', 'scissors');
container.appendChild(scissorsBox)

const scissorsTop = document.createElement('div');
scissorsTop.classList.add('content');
scissorsTop.textContent = 'S';
scissorsBox.appendChild(scissorsTop);

const scissorsBottom = document.createElement('div');
scissorsBottom.classList.add('content');
scissorsBottom.textContent = 'Scissors';
scissorsBox.appendChild(scissorsBottom);

const nodeList = document.querySelectorAll('#container > div')

function logClick(e) {
    
    if (this.classList.value == 'rock') {
        playRound('rock')
    } else if (this.classList.value == 'paper') {
        playRound('paper')
    } else if (this.classList.value == 'scissors') {
        playRound('scissors')
    }

    // console.log(e.target.id);
    // console.log(this.classList.value);
}

nodeList.forEach((child) => child.addEventListener('click', logClick))

// Add: learn regular expression and filter out incorrect inputs, allow 'rock',
// 'paper', 'scissors' only 