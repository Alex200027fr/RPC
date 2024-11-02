const choices =['rock', 'paper', 'Scissors'];
let humanChoice = prompt('Rock, paper or scissors ?')

        function getComputerChoice(){
            let randomNumber = Math.floor(Math.random()*3);
            return (choices[randomNumber]);
        }

        function getHumanChoice(){
            if (humanChoice.toLowerCase() === 'rock'){
                console.log('rock')
            } else if (humanChoice.toLowerCase() === 'paper'){
                console.log('paper')
            } else if (humanChoice.toLowerCase() === 'scissors'){
                console.log('scissors')
            } else if (humanChoice !== 'rock' || 'paper' || 'scissors'){
                console.log('Please choose a sign between \'Rock\',\'Paper\' or \'Scissors\'.')
            }
        }