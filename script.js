let items = ["Rock", "Paper", "Scissors"];



function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * items.length);
    let compSelection = items[randomIndex];
    return compSelection;
};
let computerSelection = getComputerChoice();
let playerSelection = "Scissors";

function playRound(playerSelection , computerSelection){
    if (playerSelection === computerSelection) {
        console.log("It's a tie!");}
    else if (
            (playerSelection === "Rock" && computerSelection === "Scissors") ||
            (playerSelection === "Paper" && computerSelection === "Rock") ||
            (playerSelection === "Scissors" && computerSelection === "Paper")
            )
    {
        console.log("you win! " + playerSelection + " beats " + computerSelection)
    }
    else {
        console.log("you lose! " + playerSelection + " doesnt beat " + computerSelection)
    }
    
    };
    console.log("player choice is " + playerSelection);
    console.log("Computer choice is " + computerSelection);
    
playRound(playerSelection,computerSelection);





