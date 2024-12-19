
function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"];
    let choice = choices[Math.floor(Math.random() * choices.length)];
    return choice
}

function playRound(playerChoice, computerChoice) {
    const playerChoiceUpper = playerChoice.toLoweCase();
    
    let alert = ""

    // When the user wins, result = 1, when the computer wins result = 2, else result = 0
    let result = 0

    switch (true) {

        case (playerChoiceUpper === "ROCK" && computerChoice === "PAPER") :
            alert = "You Lose the round! Paper beats Rock";
            result = 2;
            break;
        
        case (playerChoiceUpper === "ROCK" && computerChoice === "SCISORS") :
            alert = "You Win the round! Rock beats Scisors";
            result = 1;
            break;
        
        case (playerChoiceUpper === "PAPER" && computerChoice === "ROCK") :
            alert = "You Win the round! Paper beats Rock";
            result = 1;
            break;

        case (playerChoiceUpper === "PAPER" && computerChoice === "SCISORS") :
            alert = "You Lose the round! Scisors beats Paper";
            result = 2;
            break;

        case (playerChoiceUpper === "SCISORS" && computerChoice === "ROCK") :
            alert = "You Lose the round! Rock beats Scisors";
            result = 2;
            break;

        case (playerChoiceUpper === "SCISORS" && computerChoice === "PAPER") :
            alert = "You Win the round! Scisors beats Paper";
            result = 1;
            break;
        
        default:
            alert = "Thats a Tie!"
            result = 0;
            break;
    }

    console.log(alert)

    return result
}

function game() {
    let computerScore = 0;
    let playerScore = 0;
    let alert = ""

    for (let i = 0; i < 5; i++) {

        // Replaying ties
        
        let result = 0
        while(result === 0) {
        const computerChoice = getComputerChoice();
        const playerChoice = prompt("What do you want to play, Rock, Paper or Scisors?");
        result = playRound(playerChoice,computerChoice);
        }

        if (result === 1) {
            playerScore += 1
        } 
        else if (result === 2) {
            computerScore += 1
        }


    }

    if (playerScore > computerScore) {
        alert = `Congratulations!! You are the winner!!!
Your score: ${playerScore}, the computer score: ${computerScore}`
    }
    else if (computerScore > playerScore) {
        alert = `You lost the game, good luck next time! 
Your score: ${playerScore}, the computer score: ${computerScore}`
    }

    console.log(alert);
}