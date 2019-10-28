const greenButton = document.getElementById('green');
const redButton = document.getElementById('red');
const yellowButton = document.getElementById('yellow');
const blueButton = document.getElementById('blue');
const startButton = document.getElementById('start');
const resetButton = document.getElementById('reset');
const nextRoundButton = document.getElementById('nextRound');
const pointTotal = document.getElementById('points');
const currentRound = document.getElementById('rounds');
let cpuInput = [];//Going to store the input of the game
let userInput = [];//Going to store the input of the user

// SOUNDS
let greenSound = new Audio();//The sound effect for the green button
greenSound.src = 'Sounds/GreenSound.mp3';

let redSound = new Audio();//Sound effect for the red button
redSound.src = 'Sounds/RedSound.mp3';

let yellowSound = new Audio();//Sound effect for the yellow button.
yellowSound.src = 'Sounds/YellowSound.mp3';

let blueSound = new Audio();//Sound effect for the blue button.
blueSound.src = 'Sounds/BlueSound.mp3';

let incorrectSound = new Audio();//Sound effect for wrong answers
incorrectSound.src = 'Sounds/incorrect.mp3';

// BUTTONS
startButton.addEventListener('click', (e) =>{//Used to initally start the game.
	if(cpuInput.length === 0){
		game.gamePlay();
	}else{
		alert(`You've already started the game. Press restart if you'd like to reset`);
	}
});

resetButton.addEventListener('click', (e) =>{//Resets all aspects of the game just as the user found the page
	game.resetGame();
});

nextRoundButton.addEventListener('click', (e) =>{//Starts the next round of gameplay
	nextRoundButton.style.visibility = 'hidden';
	game.gamePlay();	
});

greenButton.addEventListener('click', (e) =>{
	const green = e.target.id;//'green' is stored here
	sounds.playGreenSound(); //green sound plays
	userInput.push(1); //green value is sent to user input
	game.inputCheck();
});

redButton.addEventListener('click', (e) =>{
	const red = e.target.id;//'red' is stored here
	sounds.playRedSound(); //red sound plays
	userInput.push(2); //red value is sent to user input
	game.inputCheck();
});

yellowButton.addEventListener('click', (e) =>{
	const yellow = e.target.id;//'yellow' is stored here
	sounds.playYellowSound(); //yellow sound plays
	userInput.push(3); //yellow value is sent to user input
	game.inputCheck();
});

blueButton.addEventListener('click', (e) =>{
	const blue = e.target.id;//'blue' is stored here
	sounds.playBlueSound();//blue sound plays
	userInput.push(4);//blue value is sent to user input
	game.inputCheck();
});


const sounds = { //Houses the sound effect functions for the game
	playGreenSound(){ //Plays green sound effect
		greenSound.pause();
		greenSound.currentTime = 0;
		greenSound.play(); 
	},

	playRedSound(){//Plays red sound effect
		redSound.pause();
		redSound.currentTime = 0;
		redSound.play();
	},

	playYellowSound(){//Plays yellow sound effect
		yellowSound.pause();
		yellowSound.currentTime = 0;
		yellowSound.play();
	},

	playBlueSound(){//Plays blue sound effect
		blueSound.pause();
		blueSound.currentTime = 0;
		blueSound.play();
	},

	playIncorrectSound(){
		if(cpuInput.length >= 1){
		greenSound.pause();
		redSound.pause();
		yellowSound.pause();
		blueSound.pause();	
		incorrectSound.play();
	}
	}
}

const colors = {//Houses all color related methods.
	setGreenGlow(){//Causes the green button to glow
		greenButton.style.filter = 'drop-shadow(0px -20px 90px rgba(128, 237, 133, .7))';
	},
	clearGreenGlow(){//Takes the glow away from the green button
		greenButton.style.filter ='';
	},
	setRedGlow(){//Cause the red button to glow
		redButton.style.filter = 'drop-shadow(0px -20px 90px rgba(237, 56, 51, .7)';
	},
	clearRedGlow(){//Takes away the glow from the red button
		redButton.style.filter = '';
	},
	setYellowGlow(){//Causes yellow button to glow
		yellowButton.style.filter = 'drop-shadow(0px -20px 90px rgba(249, 242, 80, .7))';		
	},
	clearYellowGlow(){//Takes away the glow from the yellow button
		yellowButton.style.filter = '';
	},
	setBlueGlow(){//Causes blue button to glow
		blueButton.style.filter = 'drop-shadow(0px -20px 90px rgba(101, 147, 234, .7))';
	},
	clearBlueGlow(){//Takes away the glow from the blue button
		blueButton.style.filter = '';
	},
	wrongSelection(){
		if(cpuInput.length >= 1){
			greenButton.src = 'Buttons/IncorrectOne.png';
			yellowButton.src = 'Buttons/IncorrectThree.png';
			blueButton.src = 'Buttons/IncorrectFour.png';
			greenButton.style.filter = 'drop-shadow(0px -20px 90px rgba(237, 56, 51, .7)';
			yellowButton.style.filter = 'drop-shadow(0px -20px 90px rgba(237, 56, 51, .7)';
			blueButton.style.filter = 'drop-shadow(0px -20px 90px rgba(237, 56, 51, .7)';
			colors.setRedGlow();
		}
	},
	backToNormal(){
		greenButton.src = 'Buttons/GreenGameButton.png';
		yellowButton.src = 'Buttons/YellowGameButton.png';
		blueButton.src = 'Buttons/BlueGameButton.png';
		colors.clearGreenGlow();
		colors.clearYellowGlow();
		colors.clearBlueGlow();
		colors.clearRedGlow();
	}
}

const game = {
	points: 0,
	round: 1,

	randomColor(){ //Picks a random color and plays its sound and makes its space glow.
	const colorValue = Math.ceil(Math.random() * 4);
	if (colorValue === 1){ // green
		sounds.playGreenSound();
		colors.setGreenGlow();
		setTimeout(colors.clearGreenGlow,400);
		cpuInput.push(colorValue);//green value is sent to cpu input
	} else if(colorValue === 2){ //red
		sounds.playRedSound();
		colors.setRedGlow();
		setTimeout(colors.clearRedGlow,400);
		cpuInput.push(colorValue);//red value is sent to cpu input	
	} else if(colorValue === 3){ //yellow
		sounds.playYellowSound();
		colors.setYellowGlow();
		setTimeout(colors.clearYellowGlow,400);
		cpuInput.push(colorValue);//yellow value is sent to cpu input
	} else if(colorValue === 4){ //blue
		sounds.playBlueSound();
		colors.setBlueGlow();
		setTimeout(colors.clearBlueGlow,400);
		cpuInput.push(colorValue);//blue input is sent to cpu input
	} return cpuInput;
	},

	showPreviousColors(){//Makes previously selected colors glow again and their sound chime in the correct sequence. 
		//setInterval
			let i = 0;
			const interval = setInterval(prevColors, 1000); //Colors will display on an interval of every second.
			function prevColors(){
			if (cpuInput[i] === 1){//For Green
				sounds.playGreenSound();
				colors.setGreenGlow();
				setTimeout(colors.clearGreenGlow,400); 
				i++;
			} else if(cpuInput[i] === 2){//For Red
				sounds.playRedSound();
				colors.setRedGlow();
				setTimeout(colors.clearRedGlow,400);
				i++;
			} else if(cpuInput[i] === 3){//For Yellow
				sounds.playYellowSound();
				colors.setYellowGlow();
				setTimeout(colors.clearYellowGlow,400);
				i++;
			} else if(cpuInput[i] === 4){//For Blue
				sounds.playBlueSound();
				colors.setBlueGlow();
				setTimeout(colors.clearBlueGlow,400);
				i++;
			} else if(cpuInput.length === i){ //A new random color should be added onto the end of the sequence. 
				game.randomColor();
				clearInterval(interval); //The interval making the previous colors display is cleared
			}
		} 
	},

	gamePlay(){ //Gets the round started when user hits start button
	 if(cpuInput.length < 1){ //If the length of the CPU input is less than one, you can start a round. 
	 this.randomColor(); //A random color will be selected.
	} else if(cpuInput.length >= 1){ //Otherwise, if CPU input.length is greater than one
	 this.showPreviousColors();
	}
	},

	inputCheck(){ //Checks to see if user and CPU input match up. 
	if (userInput.length != cpuInput.length){//If user and cpu length are not the same
		for(let i = 0; i < userInput.length; i++){//For loop uses user input array's length as measurement. 
			if(userInput[i] != cpuInput[i]){ //If the values in the array don't match up.
				sounds.playIncorrectSound();//Wrong choice sound is played
				colors.wrongSelection();
				setTimeout(colors.backToNormal,1000);
				this.resetGame();
			}
		}
	} else if(userInput.length === cpuInput.length && userInput.toString() != cpuInput.toString()){//If the user and cpu length are the same but the outputs are not the same. 
		sounds.playIncorrectSound();//Wrong choice sound is played
		colors.wrongSelection();//Color pallet of the gameboard changes to red.
		setTimeout(colors.backToNormal,1000);//Everything goes back to normal after a second.
		this.resetGame();
	} else if(userInput.toString() === cpuInput.toString()){ //If the user and cpu input are the same
		this.points++; //The total points will increase by one
		pointTotal.textContent = `Points: ${this.points}`; //DOM displays current points
		this.clearUserInput();
		this.roundTracker();
		if(cpuInput.length > 0){
			this.gamePlay();
		}
	 }
	},
	 
	roundTracker(){//Keeps track of what round the game is and the criteria for the game to advance to the next round. 
    	if(this.round === 1 && cpuInput.length === 5){//Round one consists of a 5 sequence turn. 
    		this.round++;
    		this.clearCPUInput();
    		this.roundButton();
    		currentRound.textContent = `Round: ${this.round}`;
    	} else if(this.round === 2 && cpuInput.length === 7){//Round two consists of a 7 sequence turn
    		this.round++;
    		this.clearCPUInput();
    		this.roundButton();
    		currentRound.textContent = `Round: ${this.round}`;
    	} else if(this.round === 3 && cpuInput.length === 10){//Round three consists of a 10 sequence turn
    		this.round++;
    		this.clearCPUInput();
    		this.roundButton();
    		currentRound.textContent = `Round: ${this.round}`;
    	} else if(this.round === 4 && cpuInput.length === 13){//Round four consists of a 13 sequence turn
    		this.round++;
    		this.clearCPUInput();
    		this.roundButton();
    	} else if(this.round === 5 && cpuInput.length === 15){//Round five, the final round, consists of a 15 sequence turn
    		alert(`Congratulations! You've won! Now see how far you can make it in infinite mode!`);
    		this.clearCPUInput();
    		this.round = 'Infinite Mode'; //After clearing round five, game turns into infinite mode. 
    		this.points = 0;
    		this.roundButton();
    		currentRound.textContent = `${this.round}`;
    		pointTotal.textContent = `Points: ${this.points}`;
    	}
    },

    roundButton(){//Causes the start next round button to appear at the start of each round after 1. 
    	if(this.round > 1 && cpuInput.length === 0 || this.round === 'Infinite Mode' && cpuInput.length === 0){
    		nextRoundButton.style.visibility = 'visible';
    	}
    }, 

    clearUserInput(){//Clears the current user input
    	return userInput = [];
    },

    clearCPUInput(){//Clears the current CPU input
    	return cpuInput = [];
    },

    resetGame(){//Clears everything from the game. 
    	this.clearUserInput();
    	this.clearCPUInput();
    	game.points = 0;
    	game.round = 1;
		pointTotal.textContent = `Points: ${this.points}`;
		currentRound.textContent = `Round: ${this.round}`;
    }
}










