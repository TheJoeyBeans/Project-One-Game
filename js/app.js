const greenButton = document.getElementById('green');
const redButton = document.getElementById('red');
const yellowButton = document.getElementById('yellow');
const blueButton = document.getElementById('blue');
const startButton = document.getElementById('start');
const resetButton = document.getElementById('reset');
const cpuInput = [];//Going to store the input of the game
const userInput = [];//Going to store the input of the user

let greenSound = new Audio();
greenSound.src = 'Sounds/GreenSound.mp3';

startButton.addEventListener('click', (e) =>{
	console.log('buttonWorks');
});

resetButton.addEventListener('click', (e) =>{
	console.log('buttonWorks');
})

greenButton.addEventListener('click', (e) =>{
	const green = e.target.id;//'green' is stored here
	sounds.playGreenSound();
	console.log(green);
});

redButton.addEventListener('click', (e) =>{
	const red = e.target.id;//'red' is stored here
	console.log(red);
});

yellowButton.addEventListener('click', (e) =>{
	const yellow = e.target.id;//'yellow' is stored here
	console.log(yellow);
});

blueButton.addEventListener('click', (e) =>{
	const blue = e.target.id;//'blue' is stored here
	console.log(blue);
});

const sounds = {
	playGreenSound(){
		greenSound.play();
	}
}