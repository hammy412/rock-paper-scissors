function getComputerChoice(){
    let rand = Math.random() * 100;
    if (rand <= 33){
        return "rock";
    } else if (rand <= 66){
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice(){
    let choice = prompt("Type 'R' for Rock, 'P' for Paper, or 'S' for Scissors");
    if (choice.toUpperCase() == "R"){
        return "rock";
    } else if (choice.toUpperCase() == "P"){
        return "paper";
    } else if (choice.toUpperCase() == "S"){
        return "scissors";
    }
}


function playGame(){
    function playRound(humanChoice, computerChoice){
        if (humanChoice === computerChoice){
            console.log("Tie!")
        //rock cases    
        } else if (humanChoice === "rock"){
            if (computerChoice === "scissors"){
                console.log("You win! Rock beats Scissors");
                humanScore++;
            } else {
                console.log("You lose! Rock loses to Paper"); 
                computerScore++;
            }
        //paper cases    
        } else if (humanChoice === "paper"){
            if (computerChoice === "rock"){
                console.log("You win! Paper beats Rock");
                humanScore++;
            } else {
                console.log("You lose! Paper loses to Scissors");
                computerScore++;
            }
        //scissors cases    
        } else {
            if (computerChoice === "paper"){
                console.log("You win! Scissors beats Paper");
                humanScore++;
            } else {
                console.log("You lose! Scissors loses to Rock");
                computerScore++;
            }
        }
    }

    let humanScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++){
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection);
    }

    if (humanScore > computerScore){
        console.log("Human wins " + humanScore + " to " + computerScore);
    } else if (computerScore > humanScore) {
        console.log("Computer wins " + computerScore + " to " + humanScore);
    } else {
        console.log("Scores tied at " + humanScore);
    }
}

playGame();