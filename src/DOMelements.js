module.exports = {
	deck: document.getElementsByClassName('deck'),
	cardElements: document.querySelectorAll('.card'),
	restart: document.getElementsByClassName('fa-sync'),
	//DOM for move counter and timer
	moves: document.getElementsByClassName('moves'),
	//DOM for star rating
	stars: document.getElementsByClassName('fa-star'),
	//DOM for winner function
	header: document.getElementsByClassName('header'),
	cheatElement: document.getElementsByClassName('cheat'),
	scorePanel: document.getElementsByClassName('score-panel'),
	container: document.getElementsByClassName('container'),
	winnerMsg: document.getElementsByClassName('winnerMsg'),
	results: document.getElementsByClassName('winnerMsg')[0].childNodes[5].getElementsByTagName('li'),
	previousResults: document.getElementsByClassName('winnerMsg')[0].childNodes[11].getElementsByTagName('li'),
	minutesElement: document.getElementById('minutesElapsed'),
	secondsElement: document.getElementById('secondsElapsed'),
	deciSecondsElement: document.getElementById('deciSecondsElapsed'),
	//DOM for nav functions
	nav: document.getElementsByClassName('nav'),
	rulesElement: document.getElementsByClassName('rules'),
	settingsElement: document.getElementsByClassName('settings'),
	aboutElement: document.getElementsByClassName('about'),
	//DOM for secondColor
	buttonElements: document.querySelectorAll('.button')
};

