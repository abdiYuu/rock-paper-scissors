function cpuPlays() {
	const rock = 1;
	const paper = 2;
	const scissors = 3;
	let randomOption = Math.floor(Math.random()*3) + 1;
	return (randomOption === rock) ? 'ROCK' : (randomOption == paper) ? 'PAPER' : 'SCISSORS';

}

function singleRound(e) {

	if ((playerScore < 5) && (cpuScore < 5)) {
		cpuChoice = cpuPlays();
		playerChoice = e.target.id;

		if (playerChoice === cpuChoice) {
			play_msg.innerText = `${playerChoice} ties ${cpuChoice}`;
			playerScore+=1;
			cpuScore+=1;
	

		} else if (playerChoice === 'ROCK' && cpuChoice === 'PAPER' ||
			  playerChoice === 'PAPER' && cpuChoice === 'SCISSORS' ||
			  playerChoice === 'SCISSORS' && cpuChoice === 'ROCK') {

			play_msg.innerText = `PC Point. ${cpuChoice} beats ${playerChoice}.`;
			cpuScore+=1;

		} else if (playerChoice === 'PAPER' && cpuChoice === 'ROCK' ||
	                  playerChoice === 'SCISSORS' && cpuChoice === 'PAPER' ||
	                  playerChoice === 'ROCK' && cpuChoice ==='SCISSORS') {

			play_msg.innerText = `Your Point! ${playerChoice} beats ${cpuChoice}.`;
			playerScore+=1;
		}
		playerCell.innerText = playerScore;
		cpuCell.innerText = cpuScore;
		rounds++;
	}

	if ((cpuScore == 5) || (playerScore == 5)) {setTimeout(displayWinner, 500)}

}


function displayWinner() {
	choices.style.visibility='hidden';

        play_msg.innerText = (playerScore > cpuScore) ? 'Nice! you won!' :
        (cpuScore > playerScore) ? 'Aw. Better luck next time!' : 'A tie! Good game!';

	/*also let the player choose to play again*/
        start_button.innerText = 'Play again?'
        start_button.style.visibility= 'visible';
}

function initializeGame(e) {

	rounds = 0;
	playerScore = 0;
	cpuScore = 0;

	/*initialize scoreboard*/
	playerCell = document.querySelector('#player_td');
        cpuCell = document.querySelector('#cpu_td');
	playerCell.innerText = playerScore
	cpuCell.innerText = cpuScore


	e.target.style.visibility='hidden'
	choices.style.visibility='visible';

	const buttons = document.querySelectorAll('.btn__rps');
	for(let btn of buttons) {btn.addEventListener('click', singleRound)}

	play_msg.innerText = 'Let\'s Play!'


}


const choices = document.querySelector('.choices')
const play_msg = document.querySelector('.msg__top');
const start_button = document.querySelector('.btn__game');
start_button.addEventListener('click', initializeGame)
