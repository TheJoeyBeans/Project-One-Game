const greenButton = document.getElementById('green');
const redButton = document.getElementById('red');
const yellowButton = document.getElementById('yellow');
const blueButton = document.getElementById('blue');
const startButton = document.getElementById('start');
const resetButton = document.getElementById('reset');
const cpuInput = [];
const userInput = [];

startButton.addEventListener('click', (e) =>{
	console.log('buttonWorks');
});

resetButton.addEventListener('click', (e) =>{
	console.log('buttonWorks');
})

greenButton.addEventListener('click', (e) =>{
	const green = e.target.id;
	console.log(e.target.id);
});

redButton.addEventListener('click', (e) =>{
	const red = e.target.id;
	console.log(e.target.id);
});

yellowButton.addEventListener('click', (e) =>{
	const yellow = e.target.id;
	console.log(e.target.id);
});

blueButton.addEventListener('click', (e) =>{
	const blue = e.target.id;
	console.log(e.target.id);
});

