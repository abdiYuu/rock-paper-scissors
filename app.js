function cpuPlays() {
	const rock = 1;
	const paper = 2;
	const scissors = 3;
	let randomOption = Math.floor(Math.random()*3) + 1;
	return (randomOption === rock) ? 'ROCK' : (randomOption == paper) ? 'PAPER' : 'SCISSORS';

}

function rpsRound(e) {

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

	if ((cpuScore == 5) || (playerScore == 5)) {
		setTimeout(function() { 
			choices.style.visibility='hidden';
			play_msg.innerText = (playerScore > cpuScore) ? 'Nice! you won!' :
			(cpuScore > playerScore) ? 'Aw. Better luck next time!' : 'A tie! Good game!';
			gameStart.innerText = 'Play again?'
			gameStart.style.visibility= 'visible';
		}, 500)
	}

}

function game(e) {
	e.target.style.visibility='hidden'
	choices.style.visibility='visible';
	playerScore = 0;
	cpuScore = 0;
	playerCell.innerText = playerScore
	cpuCell.innerText = cpuScore
	play_msg.innerText = 'Let\'s Play!'


}
const choices = document.querySelector('.choices')
const play_msg = document.querySelector('.msg__top');
const weapons = document.querySelector('.msg__bottom');

const gameStart = document.querySelector('.btn__game');
gameStart.addEventListener('click', game)

let rounds = 0;
let playerScore = 0;
let cpuScore = 0;
const buttons = document.querySelectorAll('.btn__rps');
for(let btn of buttons) {btn.addEventListener('click', rpsRound)}
const playerCell = document.querySelector('#player_td');
const cpuCell = document.querySelector('#cpu_td');
