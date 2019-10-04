const greenButton = document.getElementById('green');
const redButton = document.getElementById('red');
const yellowButton = document.getElementById('yellow');
const blueButton = document.getElementById('blue');
const startButton = document.getElementById('start');
const resetButton = document.getElementById('reset');
const cpuInput = [];//Going to store the input of the game
const userInput = [];//Going to store the input of the user

let greenSound = new Audio();//The sound effect for the green button
greenSound.src = 'Sounds/GreenSound.mp3';

let redSound = new Audio();//Sound effect for the red button
redSound.src = 'Sounds/RedSound.mp3';

let yellowSound = new Audio();//Sound effect for the yellow button.
yellowSound.src = 'Sounds/YellowSound.mp3';

let blueSound = new Audio();//Sound effect for the blue button.
blueSound.src = 'Sounds/BlueSound.mp3';

startButton.addEventListener('click', (e) =>{
	console.log('buttonWorks');
});

resetButton.addEventListener('click', (e) =>{
	console.log('buttonWorks');
})

// blueButton.addEventListener('mouseover', (e) =>{
// 	console.log('Hover works');
// })

greenButton.addEventListener('click', (e) =>{
	const green = e.target.id;//'green' is stored here
	sounds.playGreenSound();
	console.log(green);
});

redButton.addEventListener('click', (e) =>{
	const red = e.target.id;//'red' is stored here
	sounds.playRedSound();
	console.log(red);
});

yellowButton.addEventListener('click', (e) =>{
	const yellow = e.target.id;//'yellow' is stored here
	sounds.playYellowSound();
	console.log(yellow);
});

blueButton.addEventListener('click', (e) =>{
	const blue = e.target.id;//'blue' is stored here
	sounds.playBlueSound();
	console.log(blue);
});

const sounds = { //Houses the sound effect functions for the game
	playGreenSound(){ //Plays green sound effect
		greenSound.play(); 
	},

	playRedSound(){//Plays red sound effect
		redSound.play();
	},

	playYellowSound(){//Plays yellow sound effect
		yellowSound.play();
	},

	playBlueSound(){//Plays blue sound effect
		blueSound.play();
	}
}

// const glows = {
// 	greenGlow(){
// 		greenButton.style.backgroudColor = '#71e863'
// 	}
// }

// glows.greenGlow();












