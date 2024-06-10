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



function playGame(){

    function playRound(humanChoice, computerChoice){
        if (humanChoice === computerChoice){
            results.textContent = "Tie!";
        //rock cases    
        } else if (humanChoice === "rock"){
            if (computerChoice === "scissors"){
                results.textContent = "You win! Rock beats Scissors";
                humanScore++;
                
            } else {
                results.textContent = "You lose! Rock loses to Paper";
                computerScore++;
            }
        //paper cases    
        } else if (humanChoice === "paper"){
            if (computerChoice === "rock"){
                results.textContent = "You win! Paper beats Rock";
                humanScore++;
            } else {
                results.textContent = "You lose! Paper loses to Scissors";
                computerScore++;
            }
        //scissors cases    
        } else {
            if (computerChoice === "paper"){
                results.textContent = "You win! Scissors beats Paper";
                humanScore++;
            } else {
                results.textContent = "You lose! Scissors loses to Rock";
                computerScore++;
            }
        }
    }

    let humanScore = 0;
    let computerScore = 0;

    const results = document.querySelector(".results");
    const playerScoreDisplay = document.querySelector(".playerScore");
    const computerScoreDisplay = document.querySelector(".computerScore");
    playerScoreDisplay.textContent = humanScore;
    computerScoreDisplay.textContent = computerScore;

    const rockBtn = document.querySelector("#rock");
    const paperBtn = document.querySelector("#paper");
    const scissorsBtn = document.querySelector("#scissors");

    rockBtn.addEventListener("click", function() {
        playRound("rock", getComputerChoice());
        playerScoreDisplay.textContent = humanScore;
        computerScoreDisplay.textContent = computerScore;
        if (humanScore === 5){
            results.textContent = "Game Over! You Win!";
            rockBtn.disabled = true;
            paperBtn.disabled = true;
            scissorsBtn.disabled = true;
        } else if (computerScore === 5) {
            results.textContent = "Game Over! You lose!";
            rockBtn.disabled = true;
            paperBtn.disabled = true;
            scissorsBtn.disabled = true;
        }
    });
    paperBtn.addEventListener("click", function() {
        playRound("paper", getComputerChoice());
        playerScoreDisplay.textContent = humanScore;
        computerScoreDisplay.textContent = computerScore;
        if (humanScore === 5){
            results.textContent = "Game Over! You Win!";
            rockBtn.disabled = true;
            paperBtn.disabled = true;
            scissorsBtn.disabled = true;
        } else if (computerScore === 5) {
            results.textContent = "Game Over! You lose!";
            rockBtn.disabled = true;
            paperBtn.disabled = true;
            scissorsBtn.disabled = true;
        }
    });
    scissorsBtn.addEventListener("click", function() {
        playRound("scissors", getComputerChoice());
        playerScoreDisplay.textContent = humanScore;
        computerScoreDisplay.textContent = computerScore;
        if (humanScore === 5){
            results.textContent = "Game Over! You Win!";
            rockBtn.disabled = true;
            paperBtn.disabled = true;
            scissorsBtn.disabled = true;
        } else if (computerScore === 5) {
            results.textContent = "Game Over! You lose!";
            rockBtn.disabled = true;
            paperBtn.disabled = true;
            scissorsBtn.disabled = true;
        }
    });

}

    playGame();