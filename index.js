// Create a function, which displays the prompt and unless the user enters the correct input, show it again and again
let getUserChoice = () => {
    let userChoice, temp;
    do {
        temp = prompt("Choose from rock,paper or scissors");
        userChoice = temp.toLowerCase();
    }
    while (userChoice !== 'rock' && userChoice !== 'paper' && userChoice !== 'scissors');
    return userChoice;
}
// Create a function , which gets a  random choice out of the three pre-defined choices of the game and assigns them to our computer

const getComputerChoice = () => {
    const choices = ["rock", "paper", "scissors"];
    const random = Math.floor(Math.random() * 3);
    return choices[random];
}
// Create a function, which checks if both the parties have got same results after choice picking
function checkTie(a, b) {
    if (a === b) {
        return true;
    }
}

// Create a function, which will compare the user's choice with the computer's choice and show the results to use
let playRound = (playerChoice, computerChoice) => {
    let win = "You win!";
    let defeat = "You Lose!"
    const myChoice = playerChoice();
    const cpuChoice = computerChoice();
    if (checkTie(myChoice, cpuChoice)) {
        console.log(`Nobody won try again`);
    }
    else {
        switch (cpuChoice) {
            case 'rock':
                switch (myChoice) {
                    case 'scissors':
                        return `${defeat}, ${cpuChoice} beats ${myChoice}`
                        break;
                    case 'paper':
                        return `${win}, ${myChoice} beats ${cpuChoice}`

                }
                break;
            case 'paper':
                switch (myChoice) {
                    case 'rock':
                        return `${defeat}, ${cpuChoice} beats ${myChoice}`;
                        break;
                    case 'scissors':
                        return `${win}, ${myChoice} beats ${cpuChoice}`;
                }
                break;
            case 'scissors':
                switch (myChoice) {
                    case 'rock':
                        return `${win}, ${myChoice} beats ${cpuChoice}`;
                        break;
                    case 'paper':
                        return `${defeat}, ${cpuChoice} beats ${myChoice}`;
                }
                break;
        }
    }
}
const game = () => {
    for (let i = 0; i < 5; i++) {
        console.log((playRound(getUserChoice, getComputerChoice)));
    }

}
game();