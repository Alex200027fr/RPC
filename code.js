const choices =['rock', 'paper', 'cissors'];

        function getComputerChoice(){
            let randomNumber = Math.floor(Math.random()*3);
            return (choices[randomNumber]);
        }