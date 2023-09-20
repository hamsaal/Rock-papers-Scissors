// Important Global variables and HTML elements and important query selectors
const bd = document.querySelector("body");
let buttons = document.querySelectorAll(".buttons");
const buttonsArray = Array.from(buttons);


// Create and place  Results container which will dynamically show the results of the game
const scoreContainer = document.querySelector(".score-container")
const resultsContainer = document.createElement('div');
const finalResults = document.createElement('p');

scoreContainer.appendChild(resultsContainer);
resultsContainer.appendChild(finalResults);

// Accessing the span element which displays the current number of game 
let gameNumber = document.querySelector(".current-game-num");
let gameNumberContainer = document.querySelector(".game-number-container");

// Accessing variables to increase the per round score
let playerScore = document.querySelector(".player-score");
console.log(playerScore);
let computerScore = document.querySelector(".computer-score");

// Game Variables
let playerWins = 0
let cpuWins = 0;
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


// Create function such that the number of playerWins increase every time the player wins
const increasePlayerWins = () => {
    ++playerWins;
    playerScore.innerText = playerWins;
}

// Create function such that number of Computer wins increase every time the Cpu wins
const increaseCpuWins = () => {
    ++cpuWins;
    computerScore.innerText = cpuWins;
}

// Create function such that the winner is announced after the game finishes
const announceWinner = (playerWins, computerWins) => {

    if (playerWins > computerWins) {
        finalResults.innerText = `You saved the Earth by winning against AI`;
    }
    else if (playerWins < computerWins) {
        finalResults.innerText = `AI took over, you lost`;
    }
    else {
        finalResults.innerText = `It is a Tie, You both are tuff!!!`
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
    if (counter <= 5) {
        gameNumber.innerText = `${counter} `;
    }
    else {
        gameNumberContainer.innerText = `GameOver`;
    }
}

// Add event Listeners to the buttons and using the classList try to name your buttons 
// Define the event listener function
const handleButtonClick = (event) => {
    const playerSelection = event.target.className;



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

let playRound = (playerChoice, computerChoice, function1, function2) => {
    const cpuChoice = computerChoice();


    gamesCounterCheck(TotalGamesPlayed);

    let winner = ``;
    switch (cpuChoice) {
        case 'rock':
            switch (playerChoice) {
                case 'scissors':
                    winner = `cpu`;

                    break;


                    break;
                case 'paper':
                    winner = `player`;


                    break;

            }
            break;
        case 'paper':
            switch (playerChoice) {
                case 'rock':
                    winner = `cpu`;

                    break;


                case 'scissors':
                    winner = `player`;

                    break;


            }
            break;
        case 'scissors':
            switch (playerChoice) {
                case 'rock':
                    winner = `player`;

                    break;


                case 'paper':
                    winner = `cpu`;


                    break;

            }
            break;
    }
    ++TotalGamesPlayed;
    gamesCounterCheck(TotalGamesPlayed);
    (winner === `player`) ? function1() : function2();
}
