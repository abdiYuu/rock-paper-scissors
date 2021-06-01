function computerPlays() {
	const rock = 1;
	const paper = 2;
	const scissors = 3;
	let randomOption = Math.floor(Math.random()*3) + 1;
	return (randomOption === rock) ? 'ROCK' : (randomOption == paper) ? 'PAPER' : 'SCISSORS';

}


function rpsRound(playerChoice, computerChoice) {
	playerChoice = playerChoice.toUpperCase();


	if (playerChoice === computerChoice) {
		return `A tie! ${playerChoice} and ${computerChoice} are the same.`;

	}else if (playerChoice === 'ROCK' && computerChoice === 'PAPER' ||
		  playerChoice === 'PAPER' && computerChoice === 'SCISSORS' ||
		  playerChoice === 'SCISSORS' && computerChoice === 'ROCK') {
		return `You lose! ${computerChoice} beats ${playerChoice}.`;

	}else if (playerChoice === 'PAPER' && computerChoice === 'ROCK' ||
                  playerChoice === 'SCISSORS' && computerChoice === 'PAPER' ||
                  playerChoice === 'ROCK' && computerChoice ==='SCISSORS') {
		return `You win! ${playerChoice} beats ${computerChoice}.`;
	
	} else {
		return `Error! ${playerChoice} is not a valid option. Please try again`;
	}
}



function game(rounds) {
	if (typeof(rounds) !== 'number' || rounds < 1) {return 'Invalid Entry. Please  choose one or more rounds'};
	rounds = Math.floor(rounds)
	let result;
	let winningMessage = ''
	let playerScore = 0;
	let computerScore = 0;
	let counter = 1;
	while(counter <= rounds) {
		if (counter === 1) {
			result = rpsRound(prompt(`Let\'s play! Round 1:\nRock, Paper, or Scissors?`), computerPlays());
		} else if (counter ===  rounds) {
			result = rpsRound(prompt(`Final Round:\nRock, Paper, or Scissors?`), computerPlays());
		}else {
			result = rpsRound(prompt(`Round ${counter}:\nRock, Paper, or Scissors?`), computerPlays());
		}

		if (result.includes('win')) {
			playerScore+=1;
			counter+=1;
		}else if (result.includes('lose')) {
			computerScore+= 1;
			counter+=1;
		}else if (result.includes('tie')) {
			computerScore+=1;
			playerScore+=1;
			counter+=1;
		}else {
			alert('Error: Invalid Choice. Please try again!');
			counter+=0
		}
	}

	switch(true) {
		case (playerScore > computerScore):
			winningMessage+='You won! Good game.\n';
			break;
		case (computerScore > playerScore):
			winningMessage+='You lost! Beter luck next time.\n';
			break;
		default:
			winningMessage+='It was a tie! Great minds think alike!\n'
	}

	winningMessage+=`Player: ${playerScore}\nComputer: ${computerScore}\nTotal Rounds: ${rounds}`;
	return winningMessage;
}
