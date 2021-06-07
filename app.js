function computerPlays() {
	const rock = 1;
	const paper = 2;
	const scissors = 3;
	let randomOption = Math.floor(Math.random()*3) + 1;
	return (randomOption === rock) ? 'ROCK' : (randomOption == paper) ? 'PAPER' : 'SCISSORS';

}

function rpsRound(e) {

	if (rounds < 5) {
		computerChoice = computerPlays();
		playerChoice = e.target.id;

		if (playerChoice === computerChoice) {
			play_msg.innerText = `${playerChoice} ties ${computerChoice}`;
			playerScore+=1;
			computerScore+=1;
	

		} else if (playerChoice === 'ROCK' && computerChoice === 'PAPER' ||
			  playerChoice === 'PAPER' && computerChoice === 'SCISSORS' ||
			  playerChoice === 'SCISSORS' && computerChoice === 'ROCK') {

			play_msg.innerText = `PC Point. ${computerChoice} beats ${playerChoice}.`;
			computerScore+=1;

		} else if (playerChoice === 'PAPER' && computerChoice === 'ROCK' ||
	                  playerChoice === 'SCISSORS' && computerChoice === 'PAPER' ||
	                  playerChoice === 'ROCK' && computerChoice ==='SCISSORS') {

			play_msg.innerText = `Your Point! ${playerChoice} beats ${computerChoice}.`;
			playerScore+=1;
		}
		rounds++;
	}

	if (rounds == 5) {
		choices.style.visibility='hidden'
		play_msg.innerText = (playerScore > computerScore) ? 'Nice! You won!' :
			(computerScore > playerScore) ? 'Aw. Better luck next time!' : 'A tie! Good game!';
	}

}

function game(e) {
	e.target.style.display = 'none'
	choices.style.visibility='visible';

}
const choices = document.querySelector('.choices')
const play_msg = document.querySelector('.msg__top');
const weapons = document.querySelector('.msg__bottom');

const gameStart = document.querySelector('.btn__game');
gameStart.addEventListener('click', game)

let rounds = 0;
let playerScore = 0;
let computerScore = 0;
const buttons = document.querySelectorAll('.btn__rps');
for(let btn of buttons) {btn.addEventListener('click', rpsRound)}

