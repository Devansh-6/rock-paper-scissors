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

function playGame(){
    humanScore = 0;
    computerScore = 0;
    let humanSelection;
    let computerSelection;

    function playRound(humanChoice, computerChoice){
        humanChoice = getHumanChoice();
        computerChoice = getComputerChoice();
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
        console.log("Human: " + humanScore);
        console.log("Machine: " + computerScore);
    }

    for (let i = 0; i < 5; i++){
        playRound(humanSelection, computerSelection);
    }
    if (humanScore > computerScore){
        console.log(`You win!`);
    } else if (humanScore == computerScore){
        console.log(`You tie.`);
    } else{
        console.log(`You lose.`);
    }
}

let humanScore;
let computerScore;

// console.log(getComputerChoice());
// console.log(getHumanChoice());

playGame();
