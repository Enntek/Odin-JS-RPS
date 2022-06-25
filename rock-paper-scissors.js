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
    if (playerSelection == computerSelection) {
    console.log(`You threw ${playerSelection} and the computer threw ${computerSelection}. It's a draw!`); 
    } else if (playerSelection == 'rock' && computerSelection =='scissors') {
        ++playerWinCount;
        console.log(`You threw ${playerSelection} and the computer threw ${computerSelection}. You win!`); 
    } else if (playerSelection == 'paper' && computerSelection =='rock') {
        ++playerWinCount;
        console.log(`You threw ${playerSelection} and the computer threw ${computerSelection}. You win!`); 
    } else if (playerSelection == 'scissors' && computerSelection =='paper') {
        ++playerWinCount;
        console.log(`You threw ${playerSelection} and the computer threw ${computerSelection}. You win!`); 
    } else if (playerSelection == 'rock' && computerSelection =='paper') {
        ++computerWinCount;
        console.log(`You threw ${playerSelection} and the computer threw ${computerSelection}. You lose!`); 
    } else if (playerSelection == 'paper' && computerSelection =='scissors') {
        ++computerWinCount;
        console.log(`You threw ${playerSelection} and the computer threw ${computerSelection}. You lose!`); 
    } else if (playerSelection == 'scissors' && computerSelection =='rock') {
        ++computerWinCount;
        console.log(`You threw ${playerSelection} and the computer threw ${computerSelection}. You lose!`); 
    } else {
        console.log(`Error, player threw: ${playerSelection}`);
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
    You won ${playerWinCount} times.
    The computer won ${computerWinCount} times.`);
}

//add a way to use regular expressions to filter out invalid inputs such as numbers or symbols
//check for valid inputs: 'rock' 'paper' 'scissors'
let playerSelection; 
let computerSelection; 
let computerWinCount = 0;
let playerWinCount = 0;
game();

