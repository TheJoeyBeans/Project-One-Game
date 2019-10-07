const greenButton = document.getElementById('green');
const redButton = document.getElementById('red');
const yellowButton = document.getElementById('yellow');
const blueButton = document.getElementById('blue');
const startButton = document.getElementById('start');
const resetButton = document.getElementById('reset');
const cpuInput = [];//Going to store the input of the game
const userInput = [];//Going to store the input of the user

//SOUNDS
let greenSound = new Audio();//The sound effect for the green button
greenSound.src = 'Sounds/GreenSound.mp3';

let redSound = new Audio();//Sound effect for the red button
redSound.src = 'Sounds/RedSound.mp3';

let yellowSound = new Audio();//Sound effect for the yellow button.
yellowSound.src = 'Sounds/YellowSound.mp3';

let blueSound = new Audio();//Sound effect for the blue button.
blueSound.src = 'Sounds/BlueSound.mp3';


//BUTTONS
startButton.addEventListener('click', (e) =>{
	game.startRound();
});

resetButton.addEventListener('click', (e) =>{
	console.log('buttonWorks');
});

greenButton.addEventListener('click', (e) =>{
	const green = e.target.id;//'green' is stored here
	sounds.playGreenSound();
	userInput.push(1);
	console.log(green);
	console.log(userInput);
});

redButton.addEventListener('click', (e) =>{
	const red = e.target.id;//'red' is stored here
	sounds.playRedSound();
	userInput.push(2);
	console.log(red);
});

yellowButton.addEventListener('click', (e) =>{
	const yellow = e.target.id;//'yellow' is stored here
	sounds.playYellowSound();
	userInput.push(3);
	console.log(yellow);
});

blueButton.addEventListener('click', (e) =>{
	const blue = e.target.id;//'blue' is stored here
	sounds.playBlueSound();
	userInput.push(4);
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

const colors = {//Houses all color related methods.
	setGreenGlow(){//Causes the green button to glow
		greenButton.style.boxShadow = '0px -15px 90px rgba(128, 237, 133, .6)';
	},
	clearGreenGlow(){//Takes the glow away from the green button
		greenButton.style.boxShadow ='';
	},
	setRedGlow(){//Cause the red button to glow
		redButton.style.boxShadow = '0px -15px 90px rgba(237, 56, 51, .6)';
	},
	clearRedGlow(){//Takes away the glow from the red button
		redButton.style.boxShadow = '';
	},
	setYellowGlow(){//Causes yellow button to glow
		yellowButton.style.boxShadow = '0px -15px 90px rgba(249, 242, 80, .6)';		
	},
	clearYellowGlow(){//Takes away the glow from the yellow button
		yellowButton.style.boxShadow = '';
	},
	setBlueGlow(){//Causes blue button to glow
		blueButton.style.boxShadow = '0px -15px 90px rgba(101, 147, 234, .6)';
	},
	clearBlueGlow(){//Takes away the glow from the blue button
		blueButton.style.boxShadow = '';
	},
	randomColor(){ //Picks a random color and plays its sound and makes its space glow.
	const colorValue = Math.ceil(Math.random() * 4);
	if (colorValue === 1){ // green
		sounds.playGreenSound();
		this.setGreenGlow();
		setTimeout(this.clearGreenGlow,1500);
		cpuInput.push(colorValue);
		console.log(colorValue);
		console.log(cpuInput);
	} else if(colorValue === 2){ //red
		sounds.playRedSound();
		this.setRedGlow();
		setTimeout(this.clearRedGlow,1500);
		cpuInput.push(colorValue);	
		console.log(colorValue);
		console.log(cpuInput);
	} else if(colorValue === 3){ //yellow
		sounds.playYellowSound();
		this.setYellowGlow();
		setTimeout(this.clearYellowGlow,1500);
		cpuInput.push(colorValue);
		console.log(colorValue);
		console.log(cpuInput);
	} else if(colorValue === 4){ //blue
		sounds.playBlueSound();
		this.setBlueGlow();
		setTimeout(this.clearBlueGlow,1500);
		cpuInput.push(colorValue);
		console.log(colorValue);
		console.log(cpuInput);
	} return cpuInput;
	} 
}

const game = {
	startRound(){
		// if(cpuInput.length < 1){ //so long as the cpu input array is empty, the startRound function will run
			colors.randomColor();//a random color should be selected. 
		// }
	}
}










