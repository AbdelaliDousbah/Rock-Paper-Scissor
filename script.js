const items = ["Rock", "Paper", "Scissors"];

function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * items.length);
    return items[randomIndex];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "It's a tie!";
    } else if (
        (playerSelection === "Rock" && computerSelection === "Scissors") ||
        (playerSelection === "Paper" && computerSelection === "Rock") ||
        (playerSelection === "Scissors" && computerSelection === "Paper")
    ) {
        return "You win! " + playerSelection + " beats " + computerSelection;
    } else {
        return "You lose! " + playerSelection + " doesn't beat " + computerSelection;
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        const computerSelection = getComputerChoice();
        const playerSelection = prompt("Enter your choice: Rock, Paper, or Scissors").trim();
        
        console.log("Player choice is " + playerSelection);
        console.log("Computer choice is " + computerSelection);
        
        const result = playRound(playerSelection, computerSelection);
        console.log(result);
    }
}

// Call the game function to play 5 rounds
game();
