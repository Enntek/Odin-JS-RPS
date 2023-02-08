// add: when min width is below x, stack boxes vertically
// add transition (grow box)
// add sound
// add countdown of 3 seconds per game
// implement data-code like in tutorial

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
        textBox.textContent = `It's ${playerSelection} versus ${computerSelection}. You win!`;
    
    } else if (playerSelection == computerSelection) {
        textBox.textContent = `It's ${playerSelection} versus ${computerSelection}. It's a draw!`;

    } else {
        computerWinCount++;
        textBox.textContent = `It's ${playerSelection} versus ${computerSelection}. You lose!`;
    }
    
    scoreBox.textContent = `Player wins: ${playerWinCount} 
    Computer wins: ${computerWinCount}`;

    if (playerWinCount == 5) {
        playerWinCount = 0;
        computerWinCount = 0;
        textBox.textContent = `Player wins! Play again?`;
        
    } else if (computerWinCount == 5) {
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

const scoreBox = document.createElement('div')
scoreBox.setAttribute('id', 'scoreBox')
scoreBox.classList.add('content');
scoreBox.textContent = 'Select rock, paper or scissors to begin game:'
container.appendChild(scoreBox);

const textBox = document.createElement('div');
textBox.setAttribute('id', 'textBox');
textBox.classList.add('content');
textBox.textContent = "Click or press R, P, or S to begin."
container.appendChild(textBox)

const buttonBox = document.createElement('div');
buttonBox.setAttribute('class', 'cbuttonBox');
buttonBox.setAttribute('id', 'buttonBox');
container.appendChild(buttonBox);

const rockBox = document.createElement('div');
rockBox.setAttribute('class', 'choice')
rockBox.setAttribute('id', 'rockID')
rockBox.setAttribute('data-code', 'KeyR')
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
paperBox.setAttribute('class', 'choice')
paperBox.setAttribute('id', 'paperID')
paperBox.setAttribute('data-code', 'KeyP')
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
scissorsBox.setAttribute('class', 'choice');
scissorsBox.setAttribute('id', 'scissorsID')
scissorsBox.setAttribute('data-code', 'KeyS');
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
    
    if (this.id == 'rockID') {
        playRound('rock')
    } else if (this.id == 'paperID') {
        playRound('paper')
    } else if (this.id == 'scissorsID') {
        playRound('scissors')
    }

    //else if (this.classList.value == 'scissors')
    // console.log(e.target.id);
    // console.log(e.target.className); 
    // console.log(this.classList.value);
}

nodeList.forEach((child) => child.addEventListener('click', logClick))

function logKey(e) {
    if (e.code == 'KeyR') {
        // document.querySelector('#rockID').classList.add('playing')
        playRound('rock')
    } else if (e.code == 'KeyP') {
        // document.querySelector('#paperID').classList.add('playing')
        playRound('paper')
    } else if (e.code == 'KeyS') {
        // document.querySelector('#scissorsID').classList.add('playing')
        playRound('scissors')
    }
}

window.addEventListener('keydown', logKey)

// function removeTransition(e) {
//     if (e.code == 'KeyR') {
//         document.querySelector('#rockID').classList.remove('playing')
//         playRound('rock')
//     } else if (e.code == 'KeyP') {
//         document.querySelector('#paperID').classList.remove('playing')
//         playRound('paper')
//     } else if (e.code == 'KeyS') {
//         document.querySelector('#scissorsID').classList.remove('playing')
//         playRound('scissors')
//     }
//     // this.classList.remove('playing')
// }

// window.addEventListener('keyup', removeTransition)



// Add: learn regular expression and filter out incorrect inputs, allow 'rock',
// 'paper', 'scissors' only 