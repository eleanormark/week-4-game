
$(document).ready(function(){

	var randomMatchNum;
	var redValue;
	var purpleValue;
	var blueVaklue;
	var yellowValue;
	var totalScore;
	var wins = 0;
	var losses = 0;


	function getRandomInt(min, max) {
		min = Math.ceil(min);
		max = Math.floor(max);
		return Math.floor(Math.random() * (max - min)) + min;
	}

	function startGame() {
		totalScore = 0;
		//get random match number
		randomMatchNum = getRandomInt(19,120);
		//get random crystal values
		redValue = getRandomInt(1,12);
		purpleValue = getRandomInt(1,12);
		blueValue = getRandomInt(1,12);
		yellowValue = getRandomInt(1,12);

		$('#random-match-number').text(randomMatchNum);
		$('#total-score').text(totalScore);
	}

	function checkTotal() {
		if (totalScore === randomMatchNum) {
			wins++;
			$('#wins').text(wins);
			startGame();
		} 

		if (totalScore > randomMatchNum) {
			losses++;
			$('#losses').text(losses);
			startGame();
		}
	}

	startGame();

	$('#red').click(function(){
		totalScore = totalScore + redValue;
		$('#total-score').text(totalScore);
		checkTotal();
	});

	$('#purple').click(function(){
		totalScore = totalScore + purpleValue;
		$('#total-score').text(totalScore);
		checkTotal();
	});

	$('#blue').click(function(){
		totalScore = totalScore + blueValue;
		$('#total-score').text(totalScore);
		checkTotal();
	});

	$('#yellow').click(function(){
		totalScore = totalScore + yellowValue;
		$('#total-score').text(totalScore);
		checkTotal();
	});

});