function computerSelection() {
    const hand = ['Rock', 'Paper', 'Scissors'];
    return hand[Math.floor(Math.random() * hand.length )];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    console.log(`Computer Selection: ${computerSelection}`);
    
    if (playerSelection == computerSelection) {
        return "Draw!!\n";
    } 
    
    else if ( (playerSelection == "rock" && computerSelection == "scissors") ) {
        playerPoints++;
        return `You Won! ${playerSelection} beats ${computerSelection}\n`;
    }
    
    else if ( (playerSelection == "scissors" && computerSelection == "paper") ) {
        playerPoints++;
        return `You Won! ${playerSelection} beats ${computerSelection}\n`;
    }

    else if ( (playerSelection == "paper" && computerSelection == "rock") ) {
        playerPoints++;
        return `You Won! ${playerSelection} beats ${computerSelection}\n`;
    }

    else {
        computerPoints++;
        return `You Lose! ${playerSelection} beats ${computerSelection}\n`
    }
}

function game() {
  
    for (let turn = 0; turn < 5; turn++) {
        var userSelection = prompt("Please Select: Rock, Paper, Scissors")
        console.log( `Winner: ${ playRound( userSelection, computerSelection() ) }` );
    }

    console.log(`\n\nPlayer Points: ${playerPoints}`);
    console.log(`Computer Points: ${computerPoints}`);

}

var playerPoints = 0;
var computerPoints = 0;

// Starts the game
game();
