function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0) {
        return "rock";
    } else if (randomNumber === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
    let choice = prompt("Enter rock, paper, or scissors:").toLowerCase();
    return choice;
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log("It's a tie!");
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "scissors" && computerChoice === "paper") ||
        (humanChoice === "paper" && computerChoice === "rock")
    ) {
        humanScore++;
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
    } else {
        computerScore++;
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
    }
}

function playGame() {
    for (let i = 0; i < 5; i++) {
        console.log(`\nRound ${i + 1}:`);
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    }

    if (humanScore > computerScore) {
        console.log(`\nYou won the game! Final Score: Human ${humanScore} - Computer ${computerScore}`);
    } else if (humanScore < computerScore) {
        console.log(`\nComputer won the game! Final Score: Human ${humanScore} - Computer ${computerScore}`);
    } else {
        console.log(`\nIt's a tie! Final Score: Human ${humanScore} - Computer ${computerScore}`);
    }
}

let humanScore = 0;
let computerScore = 0;
playGame();
