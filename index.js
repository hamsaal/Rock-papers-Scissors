// Create a function, which displays the prompt and unless the user enters the correct input, show it again and again
let getUserChoice = () => {
    let userChoice, temp;
    do {
        userChoice = prompt("Choose from rock,paper or scissors");
        temp = userChoice.toLowerCase();
    }
    while (temp !== 'rock' && temp !== 'paper' && temp !== 'scissors');
    return userChoice;

}
const getComputerChoice = () => {
    const choices = ["rock", "paper", "scissors"];
    const random = Math.floor(Math.random() * 3);
    return choices[random];
}
console.log(getComputerChoice());