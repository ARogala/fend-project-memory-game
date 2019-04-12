// module.exports = {
// 	deck: document.getElementsByClassName('deck'),
// 	cardElements: document.querySelectorAll('.card'),
// 	cards: [],
// 	unShuffledCards: [],
// 	restart: document.getElementsByClassName('fa-sync'),
// 	openCards: [],
// 	targetIDs: [],
// 	//matchedCards array will contain all the matched cards used for error handling
// 	matchedCards: [],
// 	//variables for move counter and timer
// 	moveCounter: 0,
// 	moves: document.getElementsByClassName('moves'),
// 	startTimer: true,
// 	//variable for match counter
// 	matchCounter: 0,
// 	//variable for star rating
// 	stars: document.getElementsByClassName('fa-star'),
// 	starAmount: 0,
// 	//variables for winner function
// 	header: document.getElementsByClassName('header'),
// 	cheatElement: document.getElementsByClassName('cheat'),
// 	scorePanel: document.getElementsByClassName('score-panel'),
// 	container: document.getElementsByClassName('container'),
// 	winnerMsg: document.getElementsByClassName('winnerMsg'),
// 	results: document.getElementsByClassName('winnerMsg')[0].childNodes[5].getElementsByTagName('li'),
// 	previousResults: document.getElementsByClassName('winnerMsg')[0].childNodes[11].getElementsByTagName('li'),
// 	minutesElement: document.getElementById('minutesElapsed'),
// 	secondsElement: document.getElementById('secondsElapsed'),
// 	deciSecondsElement: document.getElementById('deciSecondsElapsed'),

// 	//var for nav functions
// 	nav: document.getElementsByClassName('nav'),
// 	rulesElement: document.getElementsByClassName('rules'),
// 	settingsElement: document.getElementsByClassName('settings'),
// 	aboutElement: document.getElementsByClassName('about'),
// 	//variable for cheat function
// 	cheatCount: 0,
// 	//variables for random shuffled deck
// 	playRandomDeck: false,
// 	randomCards: [],
// 	randomCardTemp: [],
// 	//variable for secondColor
// 	buttonElements: document.querySelectorAll('.button')
// };


//variables
export const deck = document.getElementsByClassName('deck');
export const cardElements = document.querySelectorAll('.card');
export const cards = [];
export const unShuffledCards = [];
export const restart = document.getElementsByClassName('fa-sync');
//create arrays for open cards and targetIDs
export let openCards = [];
export let targetIDs = [];
//matchedCards array will contain all the matched cards used for error handling
export let matchedCards = [];
//variables for move counter and timer
export let moveCounter = 0;
export let moves = document.getElementsByClassName('moves');
export let startTimer = true;
//variable for match counter
export let matchCounter = 0;
//variable for star rating
export let stars = document.getElementsByClassName('fa-star');
export let starAmount = 0;
//variables for winner function
export let header = document.getElementsByClassName('header');
export let cheatElement = document.getElementsByClassName('cheat');
export let scorePanel = document.getElementsByClassName('score-panel');
export let container = document.getElementsByClassName('container');
export let winnerMsg = document.getElementsByClassName('winnerMsg');
export let results = winnerMsg[0].childNodes[5].getElementsByTagName('li');
export let previousResults = winnerMsg[0].childNodes[11].getElementsByTagName('li');
export let minutesElement = document.getElementById('minutesElapsed');
export let secondsElement = document.getElementById('secondsElapsed');
export let deciSecondsElement = document.getElementById('deciSecondsElapsed');

//var for nav functions
export let nav = document.getElementsByClassName('nav');
export let rulesElement = document.getElementsByClassName('rules');
export let settingsElement = document.getElementsByClassName('settings');
export let aboutElement = document.getElementsByClassName('about');
//variable for cheat function
export let cheatCount = 0;
//variables for random shuffled deck
export let playRandomDeck = false;

export const randomCards = [];
export const randomCardTemp = [];
//variable for secondColor
export let buttonElements = document.querySelectorAll('.button');

// import {
//     deck,
//     cardElements,
//     cards,
//     unShuffledCards,
//     restart,
//     openCards,
//     targetIDs,
//     matchedCards,
//     moveCounter,
//     moves,
//     startTimer,
//     matchCounter,
//     stars,
//     starAmount,
//     header,
//     cheatElement,
//     scorePanel,
//     container,
//     winnerMsg,
//     results,
//     previousResults,
//     minutesElement,
//     secondsElement,
//     deciSecondsElement,
//     nav,
//     rulesElement,
//     settingsElement,
//     aboutElement,
//     cheatCount,
//     playRandomDeck,
//     randomCards,
//     randomCardTemp,
//     buttonElements
// } from './variables';