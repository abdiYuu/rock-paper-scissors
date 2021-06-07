function computerPlays() {
	const rock = 1;
	const paper = 2;
	const scissors = 3;
	let randomOption = Math.floor(Math.random()*3) + 1;
	return (randomOption === rock) ? 'ROCK' : (randomOption == paper) ? 'PAPER' : 'SCISSORS';

}

function rpsRound(e) {
	computerChoice = computerPlays();
	playerChoice = e.target.id;


	if (playerChoice === computerChoice) {
		play_msg.innerText = `A tie!`;
		return 'tie'

	}else if (playerChoice === 'ROCK' && computerChoice === 'PAPER' ||
		  playerChoice === 'PAPER' && computerChoice === 'SCISSORS' ||
		  playerChoice === 'SCISSORS' && computerChoice === 'ROCK') {

		play_msg.innerText = `PC Point. ${computerChoice} beats ${playerChoice}.`;
		return 'loss'

	}else if (playerChoice === 'PAPER' && computerChoice === 'ROCK' ||
                  playerChoice === 'SCISSORS' && computerChoice === 'PAPER' ||
                  playerChoice === 'ROCK' && computerChoice ==='SCISSORS') {

		play_msg.innerText = `Your Point! ${playerChoice} beats ${computerChoice}.`;
		return 'win'
	}
}

function game(e) {
	e.target.style.display = 'none'
	const choices = document.querySelector('.choices')
	choices.style.visibility='visible';

	const buttons = document.querySelectorAll('.btn__rps');
	for(let btn of buttons) {btn.addEventListener('click', rpsRound)}

}

const play_msg = document.querySelector('.msg__top');
const weapons = document.querySelector('.msg__bottom');

const gameStart = document.querySelector('.btn__game');
gameStart.addEventListener('click', game)
