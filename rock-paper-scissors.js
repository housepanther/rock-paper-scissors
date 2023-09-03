function getComputerChoice() {
    let rndChoiceNum = Math.floor(Math.random() * 3);
    let choice;

    if (rndChoiceNum == 1) {
        choice = "rock";
    } else if (rndChoiceNum == 2) {
        choice = "paper";
    } else {
        choice = "scissors"
    }

    return choice;
}

function game() {
    function playRound(playerSelection, computerSelection) {
        playerSelection = playerSelection.toLowerCase();
        computerSelection = computerSelection.toLowerCase();
        let message;

        if (playerSelection == "rock" && computerSelection == "rock") {
            message = "This round is a draw!";
        } else if (playerSelection == "rock" && computerSelection == "paper") {
            message = "You lose! paper beats rock";
        } else if (playerSelection == "rock" && computerSelection == "scissors") {
            message = "You win! rock beats scissors";
        } else if (playerSelection == "paper" && computerSelection == "paper") {
            message = "This round is a draw!";
        } else if (playerSelection == "paper" && computerSelection == "scissors") {
            message = "You loose! scissors beats paper";
        } else if (playerSelection == "paper" && computerSelection == "rock") {
            message = "You win! paper beats rock";
        } else if (playerSelection == "scissors" && computerSelection == "scissors") {
            message = "This round is a draw!";
        } else if (playerSelection == "scissors" && computerSelection == "rock") {
            message = "You lose! rock beats scissors";
        } else {
            message = "You win! scissors beats paper";
        }

        return message;
    }
    
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Rock, Paper, or Scissors");
        let computerSelection = getComputerChoice();
        let message = playRound(playerSelection, computerSelection);
        alert(message);
    }
}

game();