'use strict';

//this function will contain a random selection: rock, paper, or scissors
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

    if ((playerSelection == 'rock' && computerSelection == 'scissors') ||
        (playerSelection == 'paper' && computerSelection == 'rock') || 
        (playerSelection == 'scissors' && computerSelection == 'paper')) {
        //win
        playerWinCount++;
        console.log(`${playerSelection} versus ${computerSelection}. You win!`);

    } else if (playerSelection == computerSelection) {
        //tie
        console.log(`${playerSelection} versus ${computerSelection}. It's a draw!`); 

    } else {
        //loss (if not a win or a tie, then it's a loss)
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
        // console.log('computerSelection', computerSelection);
    }
    console.log(`You played 5 games! 
    You won ${playerWinCount} time(s).
    The computer won ${computerWinCount} time(s).`);
}

//add a way to use regular expressions to filter out invalid inputs such as numbers or symbols
//check for valid inputs: 'rock' 'paper' 'scissors'
let playerSelection; 
let computerSelection; 
let computerWinCount = 0;
let playerWinCount = 0;
game();