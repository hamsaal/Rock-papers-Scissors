
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
let playRound = (myChoice, computerChoice) => {

    let win = "You win!";
    let defeat = "You Lose!"
    const cpuChoice = computerChoice();
    if (checkTie(myChoice, cpuChoice)) {
        div.innerText = `It is a tie`
    }
    else {
        switch (cpuChoice) {
            case 'rock':
                switch (myChoice) {
                    case 'scissors':
                        div.innerText = `${defeat}, ${cpuChoice} beats ${myChoice}`
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


// Add event Listeners to the buttons and using the classList try to name your buttons 
// Creating a divison that can actually store the results and display them on the webpage
const div = document.createElement('div');
let playerWins, cpuWins;
function gamesCounter(counter) {
    if (counter < 5) {
        div.innerText = `${counter}`;
    }
    else {
        div.innerText = `GameOver`;
    }
}
const buttons = document.querySelectorAll("button");
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const playerSelection = button.classList.value;
        playRound(playerSelection, getComputerChoice);
        gamesCount++;

    }
    )
})