const choices =['rock', 'paper', 'scissors'];
let humanChoice = prompt('Rock, paper or scissors ?').toLowerCase();
let humanScore = 0;
let computerScore =0;

function getHumanChoice(){
    if (humanChoice !== 'rock' && humanChoice !== 'paper' && humanChoice !== 'scissors'){
        return null;
    } else {
        return humanChoice;
    }
}

    const humanSelection = getHumanChoice();

    if (!humanSelection){
        console.log('Please choose a signe bewteen "Rock", "Paper" or "Scissors"');
        return;
    } else{
        console.log(`You have chosen ${humanChoice}`);
    }




        function getComputerChoice(){
            let randomNumber = Math.floor(Math.random()*3);
            return (`Computer has chosen ${choices[randomNumber]}`);
        }

        console.log(getComputerChoice());

        

        function playRound(humanChoice, computerChoice){
            if (humanChoice === computerChoice){
                return ("It's a draw for this one !");

            } else if ((humanChoice === 'rock' && computerChoice === 'scissors') ||
                        (humanChoice === 'scissors' && computerChoice === 'paper') ||
                        (humanChoice === 'paper' && computerChoice === 'rock')) {
                    
                    humanScore++;
                    return ("You won this round !!");
            } else {
                    computerScore++;
                    return("Computer won this round")
            }
        }

        
        const computerSelection = getComputerChoice();

        console.log(playRound(humanSelection, computerSelection));
        console.log(`Your score is ${humanScore} and the computer score is ${computerScore}.`)