function getComputerChoice(){
    let randInt = Math.trunc(Math.random() * 3) + 1;
    
    if (randInt == 1){
        return "rock";
    } else if (randInt == 2){
        return "paper";
    } else if (randInt == 3){
        return "scissors";
    }
    
}

function getHumanChoice(){
    return prompt("What is your choice?").toLowerCase();
}

function playRound(humanChoice, computerChoice){
    if (humanChoice == "rock"){
        if (computerChoice == "rock"){
            console.log("You tie! Rock ties rock.");
        } else if (computerChoice == "paper"){
            console.log("You lose! Paper beats rock.");
            computerScore++;
        } else {
            console.log("You win! Rock beats scissors.");
            humanScore++;
        }
    }
    if (humanChoice == "paper"){
        if (computerChoice == "rock"){
            console.log("You win! Paper beats rock.");
            humanScore++;
        } else if (computerChoice == "paper"){
            console.log("You tie! Paper ties paper.");
        } else {
            console.log("You lose! Scissors beats paper.");
            computerScore++;
        }
    }
    if (humanChoice == "scissors"){
        if (computerChoice == "rock"){
            console.log("You lose! Rock beats scissors.");
            computerScore++;
        } else if (computerChoice == "paper"){
            console.log("You win! Scissors beats paper.");
            humanScore++;
        } else {
            console.log("You tie! Scissors ties scissors.");
        }
    }
}


// console.log(getComputerChoice());
// console.log(getHumanChoice());

let humanScore = 0;
let computerScore = 0;

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
console.log("Human: " + humanScore);
console.log("Machine: " + computerScore);
