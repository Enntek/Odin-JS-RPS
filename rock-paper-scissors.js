// add: when min width is below x, stack boxes vertically
// add transition (grow box)
// add sound
// add countdown of 3 seconds per game

'use strict';
document.body.style.backgroundImage = "url('white-bg.jpg')"
document.body.style.backgroundSize = "100vw";

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
    


    textBox.textContent = `Player wins: ${playerWinCount} 
    Computer wins: ${computerWinCount}`;

    if (playerWinCount == 3) {
        playerWinCount = 0;
        computerWinCount = 0;
        textBox.textContent = `Player wins. Play again?`;
        
    } else if (computerWinCount == 3) {
        playerWinCount = 0;
        computerWinCount = 0;
        textBox.textContent = `Computer wins. Play again?`; 
    }
}

// function game(choice) {

//     for (let i = 0; i < 5; i++) {
//         playerSelection = choice;
//         computerSelection = computerPlay();
//         playRound(playerSelection, computerSelection);
//     }

//     console.log(`You played 5 games! 
//     You won ${playerWinCount} time(s).
//     The computer won ${computerWinCount} time(s).`);

// }

let playerSelection; 
let computerSelection; 
let computerWinCount = 0;
let playerWinCount = 0;
// game();


const container = document.querySelector('#container');
container.setAttribute('class', 'container1')

const textBox = document.createElement('div')
textBox.setAttribute('id', 'textBox')
textBox.classList.add('content');
textBox.textContent = 'Select rock, paper or scissors to begin game:'
container.appendChild(textBox);

const buttonBox = document.createElement('div');
buttonBox.setAttribute('id', 'buttonBox');
container.appendChild(buttonBox);

const rockBox = document.createElement('div');
rockBox.setAttribute('class', 'rock')
buttonBox.appendChild(rockBox);

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
buttonBox.appendChild(paperBox);

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
buttonBox.appendChild(scissorsBox)

const scissorsTop = document.createElement('div');
scissorsTop.classList.add('content');
scissorsTop.textContent = 'S';
scissorsBox.appendChild(scissorsTop);

const scissorsBottom = document.createElement('div');
scissorsBottom.classList.add('content');
scissorsBottom.textContent = 'Scissors';
scissorsBox.appendChild(scissorsBottom);

const nodeList = document.querySelectorAll('#buttonBox > div')

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

function logKey(e) {
    if (e.code == 'KeyR') {
        playRound('rock')
    } else if (e.code == 'KeyP') {
        playRound('paper')
    } else if (e.code == 'KeyS') {
        playRound('scissors')
    }
    // console.log(e.code);
    // console.log(e.key);
}

window.addEventListener('keydown', logKey)

// Add: learn regular expression and filter out incorrect inputs, allow 'rock',
// 'paper', 'scissors' only 