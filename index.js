// Important Global variables and HTML elements and important query selectors
const bd = document.querySelector("body");
const buttons = document.querySelectorAll("button");
const Resultdiv = document.createElement('div');
bd.appendChild(div);
let playerWins, cpuWins;
let TotalGamesPlayed;

// Create a function , which gets a  random choice out of the three pre-defined choices of the game and assigns them to our compute
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

function gamesCounterCheck(counter) {
    if (counter < 5) {
        div.innerText = `${counter} `;
    }
    else {
        div.innerText = `GameOver`;
    }
}

// Add event Listeners to the buttons and using the classList try to name your buttons 

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const playerSelection = button.classList.value;
        playRound(playerSelection, getComputerChoice);



    }
    )
})
// Create a function, which will compare the user's choice with the computer's choice and show the results to use

let playRound = (myChoice, computerChoice) => {

    let win = "You win!";
    let defeat = "You Lose!"
    const cpuChoice = computerChoice();
    if (checkTie(myChoice, cpuChoice)) {
        div.innerText = `It is a tie`
        ++TotalGamesPlayed;
        gamesCounterCheck(TotalGamesPlayed);
    }
    else {
        switch (cpuChoice) {
            case 'rock':
                switch (myChoice) {
                    case 'scissors':
                        div.innerText = `${defeat}, ${cpuChoice} beats ${myChoice}`
                        ++TotalGamesPlayed;
                        gamesCounterCheck(TotalGamesPlayed);
                        break;
                    case 'paper':
                        div.innerText = `${myChoice} beats ${cpuChoice}`
                        ++TotalGamesPlayed;
                        gamesCounterCheck(TotalGamesPlayed);

                }
                break;
            case 'paper':
                switch (myChoice) {
                    case 'rock':
                        div.innerText = `${defeat}, ${cpuChoice} beats ${myChoice}`
                        ++TotalGamesPlayed;
                        gamesCounterCheck(TotalGamesPlayed);
                        break;
                    case 'scissors':
                        div.innerText = `${myChoice} beats ${cpuChoice}`
                        ++TotalGamesPlayed;
                        gamesCounterCheck(TotalGamesPlayed);

                }
                break;
            case 'scissors':
                switch (myChoice) {
                    case 'rock':
                        div.innerText = `${myChoice} beats ${cpuChoice}`
                        ++TotalGamesPlayed;
                        gamesCounterCheck(TotalGamesPlayed);

                        break;
                    case 'paper':
                        div.innerText = `${defeat}, ${cpuChoice} beats ${myChoice}`
                        ++TotalGamesPlayed;
                        gamesCounterCheck(TotalGamesPlayed);
                }
                break;
        }
    }
}