function game() {

    let moves = ["rock", "paper", "scissor"];

    function computerPlay() {
        return moves[Math.floor(Math.random() * 3)];
    }

    let computerChoice = computerPlay();

    let playerChoice = window.prompt("Pick your move").toLowerCase();



    function playRound(playerSelection, computerSelection) {



        if (playerSelection === computerSelection) {
            return alert("Draw!")
        } else if (playerSelection === 'rock' && computerSelection === 'paper' ||
            playerSelection === 'paper' && computerSelection === 'scissor' ||
            playerSelection === 'scissor' && computerSelection === 'rock') {
            return alert('You lose!')
        } else if (playerSelection === 'rock' && computerSelection === 'scissor' ||
            playerSelection === 'paper' && computerSelection === 'rock' ||
            playerSelection === 'scissor' && computerSelection === 'paper') {
            return alert('You win!')
        } else {
            return alert("Invalid input");
        }
    }

    playRound(playerChoice, computerChoice);
}