let moves = ["rock", "paper", "scissor"];

function computerPlay() {
    return moves[Math.floor(Math.random() * 3)];
}


function playRound(playerSelection, computerSelection) {


    if (playerSelection === 'rock' && computerSelection === 'paper' ||
        playerSelection === 'paper' && computerSelection === 'scissor' ||
        playerSelection === 'scissor' && computerSelection === 'rock') {
        return alert('You lose!')
    } else if (playerSelection === 'rock' && computerSelection === 'scissor' ||
        playerSelection === 'paper' && computerSelection === 'rock' ||
        playerSelection === 'scissor' && computerSelection === 'paper') {
        return alert('You win!')
    } else if (playerSelection === computerSelection) {
        return alert("Draw!")
    }
}
