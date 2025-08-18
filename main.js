
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];

    const choice = choices[Math.floor(Math.random() * choices.length)];

    return choice;
}

function getPlayerChoice() {
    const choices = ['rock', 'paper', 'scissors'];

    // const choice = prompt('rock, paper, scissors: ').toLowerCase();
    const choice = choices[Math.floor(Math.random() * choices.length)];

    return choice;
}

function playRound (humanChoice, computerChoice) {

    let humanWin = null;
    let computerWin = null;
    let tie = null;

    if (humanChoice === 'rock' && computerChoice === 'scissors') {
       humanWin = true;
    } else if (humanChoice === 'scissors' && computerChoice === 'paper') {
        humanWin = true;
    } else if (humanChoice === 'paper' && computerChoice === 'rock') {
        humanWin = true;
    } else if (humanChoice === computerChoice) {
        tie = true;
    } else {
        computerWin = true;
    }

    console.log('\n============================');
    console.log(`Player: ${humanChoice}`);
    console.log(`Computer: ${computerChoice}`);

    if (humanWin === true) {
        humanScore += 1;
        console.log('Player won!')
    } else if (computerWin === true) {
        computerScore += 1;
        console.log('Computer won.');
    } else if (tie === true) {
        console.log('It was a tie.');
    } else {
        console.log('Something went wrong.');
    }

    console.log(`Player score: ${humanScore}`);
    console.log(`Computer score: ${computerScore}`);
    console.log('============================');
}

function playGame(totalRounds) {

    console.log(`Playing ${totalRounds} rounds...`);

    for (i = 1; i <= totalRounds; i++) {
        let humanSelection = getPlayerChoice();
        let computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection);
    }

    if (humanScore > computerScore) {
        console.log(`\nPlayer won the game with ${humanScore} points!`);
    } else if (computerScore > humanScore) {
        console.log(`\nComputer won the game with ${computerScore} points.`);
    } else if (humanScore === computerScore) {
        console.log(`\nIt was a tie at ${humanScore} points!`);
    } else {
        console.log(`\nSomething went wrong.`);
    }
}

playGame(5);
