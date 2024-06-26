function getComputerChoice(){
    let randInt = Math.trunc(Math.random() * 3) + 1;
    
    if (randInt == 1){
        return "Rock";
    } else if (randInt == 2){
        return "Paper";
    } else if (randInt == 3){
        return "Scissors";
    }
    
}

function getHumanChoice(){
    return prompt("What is your choice?");
}

function playRound(humanChoice, computerChoice){

}


console.log(getComputerChoice());
console.log(getHumanChoice());

let humanScore = 0;
let computerScore = 0;

