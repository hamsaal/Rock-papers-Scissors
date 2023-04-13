// Create a function, which displays the prompt and unless the user enters the correct input, show it again and again
let getUserChoice = () => {
    let userChoice, temp;
    do {
        temp = prompt("Choose from rock,paper or scissors");
        userChoice = temp.toLowerCase();
    }
    while (userChoice !== 'rock' && userChoice !== 'paper' && userChoice !== 'scissors');
    return userChoice
}
// Create a function , which gets a  random choice out of the three pre-defined choices of the game and assigns them to our computer

const getComputerChoice = () => {
    const choices = ["rock", "paper", "scissors"];
    const random = Math.floor(Math.random() * 3);
    return choices[random];
}

let playRound = (playerChoice, computerChoice) => {
    let win = "You win!";
    let defeat = "You Lose!"
    switch (computerChoice) {
        case 'rock':
            switch (playerChoice) {
                case 'scissors':
                    return `${defeat}, ${computerChoice} beats ${playerChoice}`
                    break;
                case 'paper':
                    return `${win}, ${playerChoice} beats ${computerChoice}`

            }
            break;
        case 'paper':
            switch (playerChoice) {
                case 'rock':
                    return `${defeat}, ${computerChoice} beats ${playerChoice}`;
                    break;
                case 'scissors':
                    return `${win}, ${playerChoice} beats ${computerChoice}`;
            }
            break;
        case 'scissors':
            switch (playerChoice) {
                case 'rock':
                    return `${win}, ${playerChoice} beats ${computerChoice}`;
                    break;
                case 'paper':
                    return `${defeat}, ${computerChoice} beats ${playerChoice}`;
            }
            break;
    }
}
