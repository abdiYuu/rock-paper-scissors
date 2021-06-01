
//function that generates a random choice of rock paper or scissors
function computerPlays() {
	//initialize the values binded to rock paper or scissors
	const rock = 1;
	const paper = 2;
	const scissors = 3;
	//generate a random whole number between 1 and 3, return the appropriate binding in string form
	let randomOption = Math.floor(Math.random()*3) + 1;
	return (randomOption === rock) ? 'ROCK' : (randomOption == paper) ? 'PAPER' : 'SCISSORS';

}

//function plays a single round of rock paper scissors
function rpsRound(playerChoice, computerChoice) {
	//make the player's choice uppercase like the computer choice return values
	playerChoice = playerChoice.toUpperCase();

	//rock beats scissors, scissors beats paper, paper beats rock
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

	//sisors rok and payper dont make sense....	
	} else {
		return `Error! ${playerChoice} is not a valid option. Please try again`;
	}
}


//function that runs the game; takes only the number of rounds as a parameter
function game(rounds) {
	//checking if rounds is a positive number > 1 and making it a whole number
	if (typeof(rounds) !== 'number' || rounds < 1) {return 'Invalid Entry. Please  choose one or more rounds'};
	rounds = Math.floor(rounds)
	//declare result
	//initialize winning message,  scores and round counter
	let result;
	let winningMessage = ''
	let playerScore = 0;
	let computerScore = 0;
	let counter = 1;
	//while the total number of rounds hasn't been reached
	while(counter <= rounds) {
		//prompt the user to choose rock paper or scissors; display a different message depending on the round
		if (counter === 1) {
			result = rpsRound(prompt(`Let\'s play! Round 1:\nRock, Paper, or Scissors?`), computerPlays());
		} else if (counter ===  rounds) {
			result = rpsRound(prompt(`Final Round:\nRock, Paper, or Scissors?`), computerPlays());
		}else {
			result = rpsRound(prompt(`Round ${counter}:\nRock, Paper, or Scissors?`), computerPlays());
		}

		//check the results of the current round, add 1 to the round counter and 1 to the score of the winner
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
			//if the user inputted an invalid value, display an error message  and do not add to the round counter
			alert('Error: Invalid Choice. Please try again!');
			counter+=0
		}
	}

	//player won or lost? or was it a tie? let them know!
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
	//add the scores		
	winningMessage+=`Player: ${playerScore}\nComputer: ${computerScore}\nTotal Rounds: ${rounds}`;
	return winningMessage;
}
