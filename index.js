let getUserChoice = () => {
    let userChoice, temp;
    do {
        userChoice = prompt("Choose from rock,paper or scissors");
        temp = userChoice.toLowerCase();
    }
    while (temp !== 'rock' || temp !== 'paper' || temp !== 'scissors');
    return userChoice;

}