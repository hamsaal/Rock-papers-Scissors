// Important Global variables and HTML elements and important query selectors
const bd = document.querySelector("body");
const buttons = document.querySelectorAll("button");
const roundResultDiv = document.createElement('div');
const gamesCounterDiv = document.createElement('div');
const finalResultDiv = document.createElement('div');
bd.appendChild(roundResultDiv);
bd.appendChild(gamesCounterDiv);
bd.appendChild(finalResultDiv);
let playerWins, cpuWins;
let TotalGamesPlayed = 0;

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


// Create function such that the number of playerWins increase everytime the player wins
const increasePlayerWins = () => {
    ++playerWins;
}

// Create function such that number of Computer wins increase every time the Cpu wins
const increaseCpuWins = () => {
    ++cpuWins;
}

// Create function such that the winner is announced after the game finishes
const announceWinner = (playerWins, computerWins) => {
    roundResultDiv.innerText = ``;
    if (playerWins > computerWins) {
        finalResultDiv.innerText = `You saved the Earth by winning against AI`;
    }
    else if (playerWins < computerWins) {
        finalResultDiv.innerText = `AI took over, you lost`;
    }
    else {
        finalResultDiv.innerText = `It is a Tie, You both are tuff!!!`
    }
}
// Define the refreshGame function , such that it removes the event listners after the game is finsihed
const refreshGame = () => {
    buttons.forEach(button => {
        button.removeEventListener("click", handleButtonClick);
    });
};


// function to check how many games have been played so far
function gamesCounterCheck(counter) {
    if (counter < 5) {
        gamesCounterDiv.innerText = `${counter} `;
    }
    else {
        gamesCounterDiv.innerText = `GameOver`;
    }
}

// Add event Listeners to the buttons and using the classList try to name your buttons 
// Define the event listener function
const handleButtonClick = (event) => {
    const button = event.target;
    const playerSelection = button.classList.value;
    playRound(playerSelection, getComputerChoice, increasePlayerWins, increaseCpuWins);

    if (TotalGamesPlayed === 5) {
        announceWinner(playerWins, cpuWins);
        refreshGame();
    }
};

// Add the event listeners
buttons.forEach(button => {
    button.addEventListener('click', handleButtonClick);
});



// Create a function, which will compare the user's choice with the computer's choice and show the results to use

let playRound = (myChoice, computerChoice, function1, function2) => {

    let win = "You won this round!";
    let defeat = "You Lost this round!";
    let winner;
    const cpuChoice = computerChoice();
    if (checkTie(myChoice, cpuChoice)) {
        roundResultDiv.innerText = `It is a tie`
        ++TotalGamesPlayed;
        gamesCounterCheck(TotalGamesPlayed);
    }
    else {
        switch (cpuChoice) {
            case 'rock':
                switch (myChoice) {
                    case 'scissors':
                        roundResultDiv.innerText = `${defeat}, ${cpuChoice} beats ${myChoice}`
                        winner = `Player`;


                        break;
                    case 'paper':
                        roundResultDiv.innerText = `${win}, ${myChoice} beats ${cpuChoice}`
                        winner = `Computer`;


                }
                break;
            case 'paper':
                switch (myChoice) {
                    case 'rock':
                        roundResultDiv.innerText = `${defeat}, ${cpuChoice} beats ${myChoice}`
                        winner = `Computer`;


                        break;
                    case 'scissors':
                        roundResultDiv.innerText = `${win}, ${myChoice} beats ${cpuChoice}`;
                        winner = `Player`;


                }
                break;
            case 'scissors':
                switch (myChoice) {
                    case 'rock':
                        roundResultDiv.innerText = `${win}, ${myChoice} beats ${cpuChoice}`
                        winner = `Player`;


                        break;
                    case 'paper':
                        roundResultDiv.innerText = `${defeat}, ${cpuChoice} beats ${myChoice}`
                        winner = `Computer`;


                }
                break;
        }
        ++TotalGamesPlayed;
        gamesCounterCheck(TotalGamesPlayed);
        (winner === 'Player') ? function1() : function2();
    }
}