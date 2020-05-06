let play = ["rock", "paper", "scissors"];
function computerPlay(){
    const randomPlay = play[Math.floor(Math.random() * play.length)];
    return randomPlay;
}

function playRound(playerSelection, computerSelection) {

    let playIndex = play.indexOf(playerSelection);
    let compIndex = play.indexOf(computerSelection);

    if (playIndex == compIndex) {
        return "Draw!";
    } else if ((playIndex == compIndex - 1) || ((playIndex == 0) && (compIndex == 3))) {
        compScore = compScore + 1;
        return `You lose! ${computerSelection} beats ${playerSelection}!`;
    } else {
        playScore = playScore + 1;
        return `You win! ${playerSelection} beats ${computerSelection}!`;
    }
}

function game() {
    for (i = 1; i <= 5; i++) {
        let playerSelection = prompt("Please enter:").toLowerCase();
        let computerSelection = computerPlay();
        console.log(`round ${i}`);
        console.log(playRound(playerSelection, computerSelection));
    }
    if (playScore > compScore) {
        return `Player: ${playScore} points, Computer: ${compScore} points. Player wins!`;
    } else {
        return `Player: ${playScore} points, Computer: ${compScore} points. Computer wins!`;
    }
}

let playScore = 0;
let compScore = 0;
console.log(game());
