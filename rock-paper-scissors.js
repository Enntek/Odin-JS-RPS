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
game();

// Add: learn regular expression and filter out incorrect inputs, allow 'rock',
// 'paper', 'scissors' only 