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
        console.log(`You threw ${playerSelection} and the computer threw ${computerSelection}. You win!`);
    } else if (playerSelection == 'paper' && computerSelection =='rock') {
        console.log(`You threw ${playerSelection} and the computer threw ${computerSelection}. You win!`);
    } else if (playerSelection == 'scissors' && computerSelection =='paper') {
        console.log(`You threw ${playerSelection} and the computer threw ${computerSelection}. You win!`);
    } else if (playerSelection == 'rock' && computerSelection =='paper') {
        console.log(`You threw ${playerSelection} and the computer threw ${computerSelection}. You lose!`);
    } else if (playerSelection == 'paper' && computerSelection =='scissors') {
        console.log(`You threw ${playerSelection} and the computer threw ${computerSelection}. You lose!`);
    } else if (playerSelection == 'scissors' && computerSelection =='rock') {
        console.log(`You threw ${playerSelection} and the computer threw ${computerSelection}. You lose!`);
    }
}


const playerSelection = prompt(`Please type 'rock', 'paper', or 'scissors'.`);
const computerSelection = computerPlay();
playRound(playerSelection, computerSelection);

