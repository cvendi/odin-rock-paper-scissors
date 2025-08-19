
let humanScore = 0;
let computerScore = 0;

function playRound() {

    let humanChoice = null;
    let computerChoice = null;

    const playerChoiceDiv = document.querySelector('#player-choice');
    const rockBtn = document.getElementById('rock');
    rockBtn.addEventListener('click', () => {
        humanChoice = 'rock';

        playerChoiceDiv.textContent = `You chose ${humanChoice}!`;
        
        computerChoice = getComputerChoice();
        calculateRoundResult(humanChoice, computerChoice)
    });

    const paperBtn = document.querySelector('#paper');
    paperBtn.addEventListener('click', () => {
        humanChoice = 'paper';

        playerChoiceDiv.textContent = `You chose ${humanChoice}!`;
        
        computerChoice = getComputerChoice();
        calculateRoundResult(humanChoice, computerChoice)
    });

    const scissorsBtn = document.querySelector('#scissors');
    scissorsBtn.addEventListener('click', () => {
        humanChoice = 'scissors';

        playerChoiceDiv.textContent = `You chose ${humanChoice}!`;
        
        computerChoice = getComputerChoice();
        calculateRoundResult(humanChoice, computerChoice)
    });
}

function getComputerChoice() {

    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    const computerChoiceDiv = document.querySelector('#computer-choice');
    computerChoiceDiv.textContent = `Computer chose ${computerChoice}!`;

    return computerChoice;
}

function calculateRoundResult(humanChoice, computerChoice) {

    const roundResultDiv = document.querySelector('#round-result');
    let humanWin = false;
    let computerWin = false;
    let tie = false;

    if (humanChoice === 'rock' && computerChoice === 'scissors') {
       humanWin = true;
       roundResultDiv.textContent = 'Player won!';
    } else if (humanChoice === 'scissors' && computerChoice === 'paper') {
        humanWin = true;
        roundResultDiv.textContent = 'Player won!';
    } else if (humanChoice === 'paper' && computerChoice === 'rock') {
        humanWin = true;
        roundResultDiv.textContent = 'Player won!';
    } else if (humanChoice === computerChoice) {
        tie = true;
        roundResultDiv.textContent = 'It was a tie.';
    } else {
        computerWin = true;
        roundResultDiv.textContent = 'Computer won.';
    }

    console.log('\n============================');
    console.log(`Player: ${humanChoice}`);
    console.log(`Computer: ${computerChoice}`);

    updateScore(humanWin, computerWin, tie);

}

function updateScore(humanWin, computerWin, tie) {
    if (humanWin === true) {
        humanScore += 1;

        const humanScoreDiv = document.querySelector('#human-score');
        humanScoreDiv.textContent = `Player score: ${humanScore}`;

        console.log('Player won!');
    } else if (computerWin === true) {
        computerScore += 1;

        const computerScoreDiv = document.querySelector('#computer-score');
        computerScoreDiv.textContent = `Computer score: ${computerScore}`;

        console.log('Computer won.');
    } else if (tie === true) {
        console.log('It was a tie.');
    } else {
        console.log('Something went wrong.');
    }

    console.log(`Player score: ${humanScore}`);
    console.log(`Computer score: ${computerScore}`);
    console.log('============================');

    if (humanScore === 5 || computerScore === 5) {


        const rockBtn = document.querySelector('#rock');
        const paperBtn = document.querySelector('#paper');
        const scissorsBtn = document.querySelector('#scissors');

        rockBtn.disabled = true;
        paperBtn.disabled = true;
        scissorsBtn.disabled = true;

        calculateFinalScore();

        const playAgainBtn = document.querySelector('#play-again');
        playAgainBtn.style.display = 'block';
        playAgainBtn.addEventListener('click', () => {
            humanScore = 0;
            computerScore = 0;

            const humanScoreDiv = document.querySelector('#human-score');
            const computerScoreDiv = document.querySelector('#computer-score');

            humanScoreDiv.textContent = `Player score: ${humanScore}`;
            computerScoreDiv.textContent = `Computer score: ${computerScore}`;

            playRound();

            playAgainBtn.style.display = 'none';
        });
    }
}

function calculateFinalScore() {

    const gameResultDiv = document.querySelector('#game-result');

    if (humanScore > computerScore) {
        console.log(`\nPlayer won the game with ${humanScore} points!`);
        gameResultDiv.textContent = `Player won the game with ${humanScore} points!`;
    } else if (computerScore > humanScore) {
        console.log(`\nComputer won the game with ${computerScore} points.`);
        gameResultDiv.textContent = `Computer won the game with ${computerScore} points.`;
    } else if (humanScore === computerScore) {
        console.log(`\nIt was a tie at ${humanScore} points!`);
        gameResultDiv.textContent = `It was a tie at ${humanScore} points!`;
    } else {
        console.log(`\nSomething went wrong.`);
    }
}

playRound();