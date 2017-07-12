// alert('Test!');

//Global Variables
//========================================================================================
var wins = 0;

var losses = 0;

var score = 0;
console.log(score);

var audio = new Audio('sound.mp3');

// var audio = new Audio("https://p.scdn.co/mp3-preview/ed5a443bc86176135ebca8a114f66f4d814d4c90");

// Audio.prototype.stop = function() {
//     this.pause();
//     this.currentTime = 0;
// };
// Mixed(?) Global Variables and Functions
//=======================================================================================

//Random number served up; goal: to win the game, match this number//
var randomNumberGoal = Math.floor((Math.random()* 101 +1) + 19); //Math.floor(Math.random() * (max - min +1)) + min, source: https://stackoverflow.com/questions/1527803/generating-random-whole-numbers-in-javascript-in-a-specific-range
console.log(randomNumberGoal); //Testing and Debugging

//Random value assignment to crystal (need to have a way to generate four random numbers and associate them with the each of the different colored crystals, but would a for loop be more efficient here?//
var red = Math.floor((Math.random()* 11 +1) + 1);
console.log(red);
var blue = Math.floor((Math.random()* 11 +1) + 1); //So repetitive
console.log(blue);
var green = Math.floor((Math.random()* 11 +1) + 1); //So repetitive
console.log(green);
var yellow = Math.floor((Math.random()* 11 +1) + 1); //So repetitive
console.log(yellow);

var writeToDom = function(){
	$('#wins').empty(); //Cleaner to empty it first?
	$('#wins').text(wins);
	$('#losses').empty();
	$('#losses').text(losses);
	$('#score').empty();
	$('#score').text(score);
	console.log ("wins: " + wins + " | losses: " + losses + " | score: " + score);

}

var reset = function(){
	score = 0;
    randomNumberGoal = Math.floor((Math.random()* 101) + 19);

	$('#number').text(randomNumberGoal);

	red = Math.floor((Math.random()* 11) + 1);
    blue = Math.floor((Math.random()* 11) + 1);
    green = Math.floor((Math.random()* 11) + 1);
    yellow = Math.floor((Math.random()* 11) + 1);
    writeToDom();
}

var scoreCheck = function (){
	if (score === randomNumberGoal) {
		wins++;
		alert('You are good enough!');
		audio.play();
		reset();
}
	else if (score > randomNumberGoal) {
		losses++;
		alert('You bring shame on your family!');
		reset();
}
	else {
		writeToDom();
}}

function stopAudio(audio) {
    audio.pause();
    audio.currentTime = 0;
}

var scoreReset = function (){
	wins = 0;
	losses = 0;
	reset();
	writeToDom();
}

	$('#score').text(score);
	$('#number').text(randomNumberGoal);

//Main process for da game

$(document).ready(function(){
	
		$('#red').click(function(){
		score = score + red;
		// writeToDom();
		scoreCheck();
	})

		$('#blue').click(function(){
		score = score  + blue;
		// writeToDom();
		scoreCheck();
	})

		$('#green').click(function(){
		score = score  + green;
		// writeToDom();
		scoreCheck();
	})
		
		$('#yellow').click(function(){
		score = score  + yellow;
		// writeToDom();
		scoreCheck();
	})

		$('#reset').click(function(){
		scoreReset();
		stopAudio(audio);	
	})
});