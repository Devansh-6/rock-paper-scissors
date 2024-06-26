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
    let humanChoice = prompt("What is your choice?");
    return humanChoice;
}


console.log(getComputerChoice());
console.log(getHumanChoice());
