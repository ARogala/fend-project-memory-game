/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _stopWatchModule__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stopWatchModule */ \"./src/stopWatchModule.js\");\n\n//variables\nconst deck = document.getElementsByClassName('deck');\nconst cardElements = document.querySelectorAll('.card');\nconst cards = [];\nconst unShuffledCards = [];\nconst restart = document.getElementsByClassName('fa-sync');\n//create arrays for open cards and targetIDs\nlet openCards = [];\nlet targetIDs = [];\n//matchedCards array will contain all the matched cards used for error handling\nlet matchedCards = [];\n//variables for move counter and timer\nlet moveCounter = 0;\nlet moves = document.getElementsByClassName('moves');\nlet startTimer = true;\n//variable for match counter\nlet matchCounter = 0;\n//variable for star rating\nlet stars = document.getElementsByClassName('fa-star');\nlet starAmount = 0;\n//variables for winner function\nlet header             = document.getElementsByClassName('header');\nlet cheatElement       = document.getElementsByClassName('cheat');\nlet scorePanel         = document.getElementsByClassName('score-panel');\nlet container          = document.getElementsByClassName('container');\nlet winnerMsg          = document.getElementsByClassName('winnerMsg');\nlet results            = winnerMsg[0].childNodes[5].getElementsByTagName('li');\nlet previousResults    = winnerMsg[0].childNodes[11].getElementsByTagName('li');\nlet minutesElement     = document.getElementById('minutesElapsed');\nlet secondsElement     = document.getElementById('secondsElapsed');\nlet deciSecondsElement = document.getElementById('deciSecondsElapsed');\n\n//var for nav functions\nlet nav                = document.getElementsByClassName('nav');\nlet rulesElement       = document.getElementsByClassName('rules');\nlet settingsElement    = document.getElementsByClassName('settings');\nlet aboutElement       = document.getElementsByClassName('about');\n//variable for cheat function\nlet cheatCount = 0;\n//variables for random shuffled deck\nlet playRandomDeck = false;\nconst randomDeck = ['fa-crow', 'fa-dove', 'fa-feather', 'fa-frog', 'fa-kiwi-bird', 'fa-broadcast-tower',\n'fa-church', 'fa-hospital', 'fa-school', 'fa-university', 'fa-compass', 'fa-dollar-sign', 'fa-gift',\n'fa-heart', 'fa-leaf', 'fa-parachute-box', 'fa-piggy-bank', 'fa-seedling', 'fa-poo', 'fa-smile', 'fa-frown',\n'fa-chess', 'fa-chess-bishop', 'fa-chess-king', 'fa-chess-knight', 'fa-chess-pawn', 'fa-chess-queen',\n'fa-chess-rook', 'fa-bug', 'fa-coffee', 'fa-keyboard', 'fa-user-secret', 'fa-microchip', 'fa-money-bill-alt',\n'fa-bell', 'fa-clock', 'fa-hourglass-half', 'fa-stopwatch', 'fa-paint-brush', 'fa-paper-plane', 'fa-wrench',\n'fa-hand-spock', 'fa-thumbs-up', 'fa-ambulance', 'fa-beer', 'fa-home', 'fa-anchor', 'fa-bicycle',\n'fa-fighter-jet', 'fa-bed', 'fa-birthday-cake', 'fa-bomb', 'fa-blind', 'fa-glass-martini', 'fa-flag-checkered',\n'fa-eye', 'fa-car', 'fa-helicopter', 'fa-gamepad', 'fa-graduation-cap', 'fa-motorcycle', 'fa-paw', 'fa-rocket',\n'fa-music', 'fa-subway', 'fa-binoculars', 'fa-cube', 'fa-dice', 'fa-moon', 'fa-snowflake', 'fa-quidditch',\n'fa-futbol', 'fa-football-ball', 'fa-user-astronaut', 'fa-user-ninja', 'fa-bus'];\nconst randomCards = [];\nconst randomCardTemp = [];\n//variable for secondColor\nlet buttonElements = document.querySelectorAll('.button');\n// Shuffle function from http://stackoverflow.com/a/2450976\nfunction shuffle(array) {\n    let currentIndex = array.length, temporaryValue, randomIndex;\n\n    while (currentIndex !== 0) {\n        randomIndex = Math.floor(Math.random() * currentIndex);\n        currentIndex -= 1;\n        temporaryValue = array[currentIndex];\n        array[currentIndex] = array[randomIndex];\n        array[randomIndex] = temporaryValue;\n    }\n\n    return array;\n}\n\nprocessSettingsInit(playRandomDeck);\n\nfunction shuffleTheDeck(playRandomDeck) {\n\n    if(playRandomDeck === true) {\n        //shuffle random deck\n        shuffle(randomDeck);\n\n        //push 8 random cards from randomDeck onto randomCards\n        for(let i = 0; i < 8; i++) {\n            randomCards.push(randomDeck[i]);\n        }\n\n        //double the card names by adding all 8 randomCards to a temp array\n        //then add all 8 cards from the temp arry onto to 8 randomCards\n        for(let i = 0; i < 8; i++) {\n            randomCardTemp.push(randomCards[i]);\n            randomCards.push(randomCardTemp[i]);\n        }\n        //shuffle the randomCards\n        shuffle(randomCards);\n\n        //get unshuffled cards from html\n        for (const cardElement of cardElements) {\n             unShuffledCards.push(cardElement.firstElementChild.classList[1]);\n        }\n\n        //remove unshuffled default cards and add random cards to page\n        let count = 0;\n        for (const cardElement of cardElements) {\n            cardElement.firstElementChild.classList.remove(unShuffledCards[count]);\n            cardElement.firstElementChild.classList.add(randomCards[count]);\n            count = count + 1;\n        }\n    }\n\n    //default cards\n    else if(playRandomDeck === false) {\n        /*\n         * Create a list that holds all of your cards\n         * Select all 16 card list item elements (querySelectorAll returns a NodeList object)\n         * loop through the NodeList. for each node of cardElements push the first child element's\n         * second class name into an array\n         * maintain and unshuffled deck used to remove old classes\n         */\n        for (const cardElement of cardElements) {\n            cards.push(cardElement.firstElementChild.classList[1]);\n            unShuffledCards.push(cardElement.firstElementChild.classList[1]);\n        }\n\n        //shuffle the cards\n        shuffle(cards);\n\n        /*\n         * Display the cards on the page\n         *\n         *   - loop through the NodeList. for each node of cardElements replace the first child element's\n         *     old card class name with the new shuffled card class name\n         *   - Thus shuffling the icons on the page\n         */\n\n        let count = 0;\n        for (const cardElement of cardElements) {\n            cardElement.firstElementChild.classList.remove(unShuffledCards[count]);\n            cardElement.firstElementChild.classList.add(cards[count]);\n            count = count + 1;\n        }\n    }\n}\n\n//set the event listener on the entire deck\ndeck[0].addEventListener('click', runTheGame);\n\n//event listener and function for restart\nrestart[0].addEventListener('click', function(){\n    window.location.reload(true);\n});\n\n//play again button\ndocument.getElementById('playAgain').addEventListener('click', function() {\n    window.location.reload(true);\n});\n\n//cheat button\ndocument.getElementById('cheatBtn').addEventListener('click', cheat);\n\n//nav rules\ndocument.getElementById('rulesBtn').addEventListener('click', rules);\n\n//nav settings\ndocument.getElementById('settingsBtn').addEventListener('click', settings);\n\n//nav about\ndocument.getElementById('aboutBtn').addEventListener('click', about);\n\n//return to game from setting and about pages\ndocument.getElementById('return1').addEventListener('click', function() {\n    window.location.reload(true);\n});\n\ndocument.getElementById('return2').addEventListener('click', function() {\n    window.location.reload(true);\n});\n\n//setting page event listeners\ndocument.getElementById('getSettings').addEventListener('submit', processSettings);\n\ndocument.getElementById('getSettings').addEventListener('reset', function() {\n    window.location.reload(true);\n});\n\nfunction populateArrays(e) {\n    targetIDs.push(e.target.id);\n    openCards.push(e.target);\n}\n\nfunction showOpenCard(e, array_position) {\n    openCards[array_position].classList.add('show','open');\n}\n\nfunction cardNotMatch(e) {\n    openCards[0].classList.add('animate');\n    openCards[1].classList.add('animate');\n}\n\nfunction removeCardNotMatch(e) {\n    openCards[0].classList.remove('animate');\n    openCards[1].classList.remove('animate');\n}\n\nfunction removeOpenCards(e) {\n    openCards[0].classList.remove('show','open');\n    openCards[1].classList.remove('show','open');\n}\n\nfunction showMatchedCards(e) {\n    openCards[0].classList.add('match');\n    openCards[1].classList.add('match');\n}\n\nfunction incrementMoveCounter() {\n    moveCounter = moveCounter + 1;\n    moves[0].textContent = moveCounter;\n}\n\nfunction incrementMatchCounter() {\n    matchCounter = matchCounter + 1;\n}\n\nfunction starRating() {\n    //3star\n    if(moveCounter <= 15) {\n        //console.log('3 star');\n        starAmount = 3;\n    }\n    //2star hide both main and winning page elements\n    else if(moveCounter >= 16 && moveCounter <= 20) {\n        stars[2].style.cssText = 'visibility: hidden';\n        stars[5].style.cssText = 'visibility: hidden';\n        starAmount = 2;\n    }\n    //1star hide both main and winning page elements\n    else if(moveCounter >= 21) {\n         stars[1].style.cssText = 'visibility: hidden';\n         stars[2].style.cssText = 'visibility: hidden';\n         stars[4].style.cssText = 'visibility: hidden';\n         stars[5].style.cssText = 'visibility: hidden';\n         starAmount = 1;\n    }\n}\n\n/*\nRemove header score panel and deck from display\nadd winner class to container thus displaying the winner background\nset winnerMsg class display to initial bringing it into view\nadd total moves to results list element\nget the time and add the time to results list element\ncall starRating function to add star rating to winner page\n*/\nfunction winner() {\n    header[0].style.cssText       = 'display: none';\n    cheatElement[0].style.cssText = 'display: none';\n    scorePanel[0].style.cssText   = 'display: none';\n    deck[0].style.cssText         = 'display: none';\n    nav[0].style.cssText          = 'display: none';\n    container[0].classList.add('winner');\n    winnerMsg[0].style.cssText    = 'display: initial';\n    results[0].textContent        = 'Total Moves: ' + moveCounter;\n    let minutes = minutesElement.innerHTML;\n    let seconds = secondsElement.innerHTML;\n    let deciSeconds = deciSecondsElement.innerHTML;\n    results[1].textContent      = 'Total Time: ' + minutes + ' ' + seconds + ' ' + deciSeconds;\n    starRating();\n    //local storage\n    //moves\n    if(sessionStorage.getItem('thisMove') === null) {\n        sessionStorage.setItem('thisMove', moveCounter);\n    }\n    else if(sessionStorage.getItem('thisMove') !== null) {\n        sessionStorage.setItem('previousMove', sessionStorage.getItem('thisMove'));\n        sessionStorage.setItem('thisMove', moveCounter);\n    }\n    //time\n    if(sessionStorage.getItem('thisTime') === null) {\n        sessionStorage.setItem('thisTime', minutes + ' ' + seconds + ' ' + deciSeconds);\n    }\n    else if(sessionStorage.getItem('thisTime') !== null) {\n        sessionStorage.setItem('previousTime', sessionStorage.getItem('thisTime'));\n        sessionStorage.setItem('thisTime', minutes + ' ' + seconds + ' ' + deciSeconds);\n    }\n    //Stars\n    if(sessionStorage.getItem('thisStars') === null) {\n        sessionStorage.setItem('thisStars', starAmount);\n    }\n    else if(sessionStorage.getItem('thisStars') !== null) {\n        sessionStorage.setItem('previousStars', sessionStorage.getItem('thisStars'));\n        sessionStorage.setItem('thisStars', starAmount);\n    }\n    //if any previous value not null update UI\n    if(sessionStorage.getItem('previousStars') !== null) {\n        previousResults[0].textContent      = 'Total Moves: ' + sessionStorage.getItem('previousMove');\n        previousResults[1].textContent      = 'Total Time: '  + sessionStorage.getItem('previousTime');\n        previousResults[2].textContent      = 'Star Rating: ' + sessionStorage.getItem('previousStars');\n    }\n}\n\nfunction cheat() {\n    //only cheat before moves are made and only allow one cheat\n    //cheating will cost 2 moves\n    if(moveCounter === 0 && startTimer === true && cheatCount === 0) {\n        //show the cards\n        let count = 0;\n        for (const cardElement of cardElements) {\n            cardElement.classList.add('show','open');\n            count = count + 1;\n        }\n        //flip cards back over after 2 second\n        setTimeout(function() {\n            let count = 0;\n            for (const cardElement of cardElements) {\n                cardElement.classList.remove('show','open');\n                count = count + 1;\n            }\n        },2000);\n        /*increment cheatCount, add and display\n        cheat move penalty, start stop watch and set startTimer to false\n        preventing a second call to startStopWatch()*/\n        cheatCount = cheatCount + 1;\n        moveCounter = 2;\n        moves[0].textContent = moveCounter;\n        _stopWatchModule__WEBPACK_IMPORTED_MODULE_0__[\"StopWatchController\"].startStopWatch();\n        startTimer = false;\n    }\n}\n// Nav menu functions\n//note the winner class is reused here and just adds a background gradient\n//consider renaming some classes\nfunction rules() {\n    header[0].style.cssText          = 'display: none';\n    cheatElement[0].style.cssText    = 'display: none';\n    scorePanel[0].style.cssText      = 'display: none';\n    deck[0].style.cssText            = 'display: none';\n    nav[0].style.cssText             = 'display: none';\n    container[0].classList.add('winner');\n    rulesElement[0].style.cssText    = 'display: initial';\n\n}\n\nfunction settings() {\n    header[0].style.cssText       = 'display: none';\n    cheatElement[0].style.cssText = 'display: none';\n    scorePanel[0].style.cssText   = 'display: none';\n    deck[0].style.cssText         = 'display: none';\n    nav[0].style.cssText          = 'display: none';\n    container[0].classList.add('winner');\n    settingsElement[0].style.cssText    = 'display: initial';\n}\n\nfunction about() {\n    header[0].style.cssText       = 'display: none';\n    cheatElement[0].style.cssText = 'display: none';\n    scorePanel[0].style.cssText   = 'display: none';\n    deck[0].style.cssText         = 'display: none';\n    nav[0].style.cssText          = 'display: none';\n    container[0].classList.add('winner');\n    aboutElement[0].style.cssText    = 'display: initial';\n}\n// END NAV menu functions\n\n//initialize the settings for the game\nfunction processSettingsInit(playRandomDeck) {\n    //shuffle the deck even when no settings were set\n    if(sessionStorage.getItem('CardTheme') === null) {\n        shuffleTheDeck(playRandomDeck);\n    }\n    //once settings have been set shuffle the deck with the right logical variable\n    else {\n        playRandomDeck = sessionStorage.getItem('CardTheme');\n        playRandomDeck = JSON.parse(playRandomDeck);\n        shuffleTheDeck(playRandomDeck);\n    }\n    //only change color when second color theme has been picked\n    if(JSON.parse(sessionStorage.getItem('ColorTheme')) === true) {\n        changeColor();\n    }\n}\n\n//process settings when change settings button is clicked\nfunction processSettings(e) {\n    e.preventDefault();\n    let defaultCardTheme, randomCardTheme, defaultColor, secondColor;\n    defaultCardTheme = document.getElementById('getSettings').elements[0].checked;\n    randomCardTheme  = document.getElementById('getSettings').elements[1].checked;\n    defaultColor     = document.getElementById('getSettings').elements[2].checked;\n    secondColor      = document.getElementById('getSettings').elements[3].checked;\n    //card theme logical storage\n    if(defaultCardTheme === false) {\n        sessionStorage.setItem('CardTheme', randomCardTheme);\n    }\n    else if(defaultCardTheme === true) {\n        sessionStorage.setItem('CardTheme', randomCardTheme);\n    }\n    //color theme logical storage\n    if(defaultColor === false) {\n        sessionStorage.setItem('ColorTheme', secondColor);\n    }\n    else if(defaultColor === true) {\n        sessionStorage.setItem('ColorTheme', secondColor);\n    }\n}\n\nfunction changeColor() {\n    nav[0].style.cssText                  = 'background: linear-gradient(160deg, #ff8300 0%, #ffff00 100%)';\n    nav[0].lastElementChild.style.cssText = 'background: linear-gradient(160deg, #ff8300 0%, #ffff00 100%)';\n    container[0].style.cssText            = 'background: linear-gradient(160deg, rgba(255,131,0,.2) 0%, rgba(255,255,0,.2) 100%)';\n    deck[0].style.cssText                 = 'background: linear-gradient(160deg, #ff8300 0%, #ffff00 100%)';\n    //change all the buttons colors\n    let count = 0;\n    for(const buttonElement of buttonElements) {\n        buttonElements[count].style.cssText = 'background: linear-gradient(160deg, #ff8300 0%, #ffff00 100%)';\n        count = count + 1;\n    }\n}\n\nfunction runTheGame(e) {\n    //disable click on deck\n    if(e.target.classList[0] === 'deck') {\n        //do nothing\n    }\n    //if user clicks a card and there arent already two open cards run the game\n    else if(e.target.classList[0] === 'card' && openCards.length < 2) {\n        //run game logic\n\n    \t//populate arrays\n        populateArrays(e);\n\n        //display the first card clicked\n        showOpenCard(e,0);\n        //start the game timer\n        if(startTimer === true) {\n            _stopWatchModule__WEBPACK_IMPORTED_MODULE_0__[\"StopWatchController\"].startStopWatch();\n            startTimer = false;\n        }\n\n        //START ERROR HANDLING\n        /*\n        if targetIDs are equal user clicked the same card twice\n        keep the card open and remove the duplicate card from the openCards and targetIDs arrays\n        */\n        if(targetIDs.length === 2) {    //wait for two clicks before checking\n            if(targetIDs[0] === targetIDs[1]) {\n                //console.log('user clicked the same card twice');\n                openCards.pop();\n                targetIDs.pop();\n            }\n        }\n        /*\n        if user clicks on matched cards with no other card open\n        targetIDs[0] will be equal to one of the matched cards\n        remove the matched card from the targetIDs and openCards array\n        and exit runTheGame function\n        */\n        for(let i = 0; i < matchedCards.length; i++) {\n            if(matchedCards[i] === targetIDs[0]) {\n                targetIDs.pop();\n                openCards.pop();\n                return;\n            }\n        }\n        /*\n        if user clicks on a matched card after another card is open\n        targetIDs[1] will be equal to one of the matched cards\n        remove the matched card from the targetIDs and openCards array\n        and exit runTheGame function\n        */\n        for(let i = 0; i < matchedCards.length; i++) {\n            if(matchedCards[i] === targetIDs[1]) {\n                targetIDs.pop();\n                openCards.pop();\n                return;\n            }\n        }\n        //END ERROR HANDLING\n\n        /*\n        if the cards are equal:\n        1. show the 2nd open card\n        2. increment the match counter\n        2. remove the show class and open class from both cards\n        3. add the match class to both cards\n        4. clear the openCards array\n\n        if the cared are not equal:\n        1. show 2nd open card\n        2. call cardNotMatch animation on a delay\n        3. remove the show class, open class, and animate class from both cards\n        4. clear the openCards array\n        */\n\n        if(openCards.length === 2) {    //wait for two clicks before checking\n            //set variables to check if card classes are equal\n            let openCard1 = openCards[0].firstElementChild.classList[1];\n            let openCard2 = openCards[1].firstElementChild.classList[1];\n\n            //increment moveCounter\n            incrementMoveCounter();\n            //call star rating logic\n            starRating();\n\n            if(openCard1 === openCard2) {\n                //push the matched cards into their array\n                matchedCards.push(targetIDs[0]);\n                matchedCards.push(targetIDs[1]);\n                //clear the targetIDs array\n                targetIDs.pop();\n                targetIDs.pop();\n                //show the 2nd open card\n                showOpenCard(e,1);\n                //increment match counter\n                incrementMatchCounter();\n                //delay the removal of open cards and the addition of matched cards\n                //this allows cardOpen animation to play on 2nd open card\n                setTimeout(function() {\n                    removeOpenCards(e);\n                    showMatchedCards(e);\n                    openCards.pop();\n                    openCards.pop();\n                }, 500)\n            }\n\n            else if(openCard1 !== openCard2) {\n                //clear the targetIDs array\n                targetIDs.pop();\n                targetIDs.pop();\n                //show the 2nd open card\n                showOpenCard(e,1);\n                //delay cardNotMatch animation\n                //this allows the cardOpen animation to play on 2nd open card\n                setTimeout(function() {\n                    cardNotMatch(e);\n                }, 500);\n                //delay the removal of classes allowing both animations to play first\n                //also gives user a chance to remember the cards\n                setTimeout(function(){\n                    removeOpenCards(e);\n                    removeCardNotMatch(e);\n                    openCards.pop();\n                    openCards.pop();\n                },1500);\n\n            }\n        }\n\n        //check match counter if === 8 play won the game\n        //stop the timer and display win page\n        //delay winner allowing user to see the last move\n        if(matchCounter === 8) {\n            _stopWatchModule__WEBPACK_IMPORTED_MODULE_0__[\"StopWatchController\"].stopStopWatch();\n            setTimeout(winner, 1500);\n        }\n    }\n}\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ }),

/***/ "./src/stopWatchModule.js":
/*!********************************!*\
  !*** ./src/stopWatchModule.js ***!
  \********************************/
/*! exports provided: StopWatchController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"StopWatchController\", function() { return StopWatchController; });\n/**\n * fully featured stop watch ready for integration into projects\n * @authors a rogala\n * @date    5/15/18\n * @version 1.0\n */\n\n//UI controller\n//get user input and update UI\nconst UIController = (function() {\n\tlet hours,minutes,seconds,deciSeconds;\n\tlet lapHours, lapMinutes, lapSeconds, lapDeciSeconds;\n\t//store html classes and IDs in an object so we can call them elsewhere\n\t//then if html changes we only need to update here\n\tconst DOMstrings = {\n\t\thoursElapsed:   \t'hoursElapsed',\n\t\tminutesElapsed: \t'minutesElapsed',\n\t\tsecondsElapsed: \t'secondsElapsed',\n\t\tdeciSecondsElapsed: 'deciSecondsElapsed',\n\t\tstartBtn: \t\t\t'startBtn',\n\t\tresetBtn: \t\t\t'resetBtn',\n\t\tstopBtn:  \t\t\t'stopBtn',\n\t\tlapBtn:   \t\t\t'lapBtn',\n\t\tlaps:  \t\t\t\t'laps'\n\t};\n\n\t//return public methods to get html elements, and updateUI on the times and lap display\n\treturn {\n\n\t\t//this public method returns an objcet containing html elements\n\t\tgetInput: function() {\n\t\t\treturn {\n\t\t\t\thoursElement:   \tdocument.getElementById(DOMstrings.hoursElapsed),\n\t\t\t\tminutesElement: \tdocument.getElementById(DOMstrings.minutesElapsed),\n\t\t\t\tsecondsElement: \tdocument.getElementById(DOMstrings.secondsElapsed),\n\t\t\t\tdeciSecondsElement: document.getElementById(DOMstrings.deciSecondsElapsed),\n\t\t\t\tstartButtonElement: document.getElementById(DOMstrings.startBtn),\n\t\t\t\tresetButtonElement: document.getElementById(DOMstrings.resetBtn),\n\t\t\t\tstopButtonElement: \tdocument.getElementById(DOMstrings.stopBtn),\n\t\t\t\tlapButtonElement: \tdocument.getElementById(DOMstrings.lapBtn),\n\t\t\t\tlapsListElement: \tdocument.getElementById(DOMstrings.laps)\n\t\t\t};\n\t\t},\n\n\t\t// timeArray[hours, minutes, seconds, deciSeconds, count]\n\t\tupdateStopWatchUI: function(timeArray) {\n\n\t\t\t//display leading zero and : for hours\n\t\t\tif(timeArray[0] <= 9) {\n\t\t\t\thours \t\t\t\t\t\t\t\t\t\t\t\t = '0' + timeArray[0] + ':';\n\t\t\t\tUIController.getInput().hoursElement.innerHTML \t\t = hours;\n\t\t\t}\n\t\t\telse if(timeArray[0] > 9) {\n\t\t\t\thours \t\t\t\t\t\t\t\t\t\t\t\t = timeArray[0] + ':';\n\t\t\t\tUIController.getInput().hoursElement.innerHTML \t\t = hours;\n\t\t\t}\n\t\t\t//display leading zero and : for minutes\n\t\t\tif(timeArray[1] <= 9) {\n\t\t\t\tminutes  \t\t\t\t\t\t\t\t\t\t\t = '0' + timeArray[1] + ':';\n\t\t\t\tUIController.getInput().minutesElement.innerHTML\t = minutes;\n\t\t\t}\n\t\t\telse if(timeArray[1] > 9) {\n\t\t\t\tminutes                                              = timeArray[1] + ':';\n\t\t\t\tUIController.getInput().minutesElement.innerHTML\t = minutes;\n\t\t\t}\n\t\t\t//display leading zero and . for seconds\n\t\t\tif(timeArray[2] <= 9) {\n\t\t\t\tseconds \t\t\t\t\t\t\t\t\t\t\t = '0' + timeArray[2] + '.';\n\t\t\t\tUIController.getInput().secondsElement.innerHTML \t = seconds;\n\t\t\t}\n\t\t\telse if(timeArray[2] > 9) {\n\t\t\t\tseconds \t\t\t\t\t\t\t\t\t\t\t = timeArray[2] + '.';\n\t\t\t\tUIController.getInput().secondsElement.innerHTML \t = seconds;\n\t\t\t}\n\t\t\t//display leading zero for deciSeconds\n\t\t\tif(timeArray[3] <= 9) {\n\t\t\t\tdeciSeconds \t\t\t\t\t\t\t\t\t\t = '0' + timeArray[3];\n\t\t\t\tUIController.getInput().deciSecondsElement.innerHTML = deciSeconds;\n\t\t\t}\n\t\t\telse if(timeArray[3] > 9) {\n\t\t\t\tdeciSeconds   \t\t\t\t\t\t\t\t\t\t = timeArray[3];\n\t\t\t\tUIController.getInput().deciSecondsElement.innerHTML = deciSeconds;\n\t\t\t}\n\t\t},\n\n\t\tupdateLapUI: function(lapTimeArray, lapCount) {\n\t\t\t//display leading zero and : for lapHours\n\t\t\tif(lapTimeArray[0] <= 9) {\n\t\t\t\tlapHours = '0' + lapTimeArray[0] + ':';\n\t\t\t}\n\t\t\telse if(lapTimeArray[0] > 9) {\n\t\t\t\tlapHours = lapTimeArray[0] + ':';\n\t\t\t}\n\t\t\t//display leading zero and : for minutes\n\t\t\tif(lapTimeArray[1] <= 9) {\n\t\t\t\tlapMinutes = '0' + lapTimeArray[1] + ':';\n\t\t\t}\n\t\t\telse if(lapTimeArray[1] > 9) {\n\t\t\t\tlapMinutes = lapTimeArray[1] + ':';\n\t\t\t}\n\t\t\t//display leading zero and . for seconds\n\t\t\tif(lapTimeArray[2] <= 9) {\n\t\t\t\tlapSeconds = '0' + lapTimeArray[2] + '.';\n\t\t\t}\n\t\t\telse if(lapTimeArray[2] > 9) {\n\t\t\t\tlapSeconds = lapTimeArray[2] + '.';\n\t\t\t}\n\t\t\t//display leading zero for deciSeconds\n\t\t\tif(lapTimeArray[3] <= 9) {\n\t\t\t\tlapDeciSeconds = '0' + lapTimeArray[3];\n\t\t\t}\n\t\t\telse if(lapTimeArray[3] > 9) {\n\t\t\t\tlapDeciSeconds = lapTimeArray[3];\n\t\t\t}\n\n\t\t\tUIController.getInput().lapsListElement.innerHTML += '<li class=\"lapOutput\">' + 'Lap: ' + lapCount + ' '\n\t\t\t+ hours + minutes + seconds + deciSeconds + ' LAP TIME: ' + lapHours + lapMinutes + lapSeconds + lapDeciSeconds + '</li>';\n\t\t},\n\n\t\t//the initial UI display will hide the reset stop and lap buttons\n\t\tinitialDisplay: function() {\n\t\t\tUIController.getInput().resetButtonElement.style.cssText = 'display: none';\n\t\t\tUIController.getInput().stopButtonElement.style.cssText  = 'display: none';\n\t\t\tUIController.getInput().lapButtonElement.style.cssText   = 'display: none';\n\t\t},\n\t\t//the display while stop watch is running (only show stop and lap)\n\t\trunningDisplay: function() {\n\t\t\tUIController.getInput().startButtonElement.style.cssText = 'display: none';\n\t\t\tUIController.getInput().resetButtonElement.style.cssText = 'display: none';\n\n\t\t\tUIController.getInput().stopButtonElement.style.cssText  = 'display: initial';\n\t\t\tUIController.getInput().lapButtonElement.style.cssText   = 'display: initial';\n\t\t},\n\t\t//the display while stop watch is stopped (only show start and reset)\n\t\tstoppedDisplay: function() {\n\t\t\tUIController.getInput().startButtonElement.style.cssText = 'display: initial';\n\t\t\tUIController.getInput().resetButtonElement.style.cssText = 'display: initial';\n\n\t\t\tUIController.getInput().stopButtonElement.style.cssText = 'display: none';\n\t\t\tUIController.getInput().lapButtonElement.style.cssText  = 'display: none';\n\t\t}\n\n\n\t};\n\n})();\n\n//stop watch calculation and lap time calculation methods\nconst StopWatchCalc = (function() {\n\tlet count = 0;\n\tlet hours, minutes, seconds, deciSeconds;\n\tlet lapHours, lapMinutes, lapSeconds, lapDeciSeconds;\n\tlet lapTimeArray = [];\n\tlet timeArray = [];\n\t//public stop watch and lap time methods\n\treturn {\n\t\t/*\n\t\t* stop watch is calculated for 10 millisecond intervals\n\t\t* stop watch returns a timeArray[hours, minutes, seconds, deciSeconds]\n\t\t* 1 count = 0.01 second (10 MilliSeconds)\n\t\t* 100 count = 1 second\n\t\t* 6,000 count = 1 minute\n\t\t* 360,000 count = 1 hour\n\t\t*/\n\t\tStopWatch : function() {\n\t\t\t//deciSeconds\n\t\t\tif(count <= 99) {\n\t\t\t\tdeciSeconds = count;\n\t\t\t\tcount \t\t= count + 1;\n\t\t\t}\n\t\t\t//seconds\n\t\t\telse if(count >= 100 && count < 6000) {\n\t\t\t\tseconds \t= Math.floor(count/100);\n\t\t\t\tdeciSeconds\t= Math.floor((count%100));\n\t\t\t\tcount \t\t= count + 1;\n\t\t\t}\n\t\t\t//minutes\n\t\t\telse if(count >= 6000 && count < 360000) {\n\t\t\t\tminutes \t= Math.floor(count/6000);\n\t\t\t\tseconds \t= Math.floor((count%6000)/100);\n\t\t\t\tdeciSeconds\t= Math.floor((count%100));\n\t\t\t\tcount \t\t= count + 1;\n\t\t\t}\n\t\t\t//hours\n\t\t\telse if(count >= 360000) {\n\t\t\t\thours \t\t= Math.floor(count/360000);\n\t\t\t\tminutes \t= Math.floor((count%360000)/6000);\n\t\t\t\tseconds\t\t= Math.floor(((count%360000)%6000)/100);\n\t\t\t\tdeciSeconds\t= Math.floor((count%100));\n\t\t\t\tcount \t\t= count + 1;\n\t\t\t}\n\t\t\t//populate and return timeArray\n\t\t\t//count - 1 is used to calculate lap time\n\t\t\tif(seconds === undefined) {\n\t\t\t\ttimeArray = [0,0,0,deciSeconds,count -1];\n\t\t\t}\n\t\t\telse if(minutes === undefined) {\n\t\t\t\ttimeArray = [0,0,seconds,deciSeconds,count -1];\n\t\t\t}\n\t\t\telse if(hours === undefined) {\n\t\t\t\ttimeArray = [0,minutes,seconds,deciSeconds,count -1];\n\t\t\t}\n\t\t\telse {\n\t\t\t\ttimeArray = [hours,minutes,seconds,deciSeconds,count -1];\n\t\t\t}\n\t\t\treturn timeArray;\n\t\t},\n\t\t//the difference between lap x and lap y count will give us the lap time as a count\n\t\t//convert that count to lap time\n\t\tLapCalc: function(timeArray, lapCount) {\n\t\t\tlet lapTimeCount, countOddTemp, countEvenTemp;\n\t\t\t//clear previous lap time\n\t\t\tlapHours \t   = 0;\n\t\t\tlapMinutes \t   = 0;\n\t\t\tlapSeconds \t   = 0;\n\t\t\tlapDeciSeconds = 0;\n\n\t\t\tif(lapCount === 1) {\n\t\t\t\tlapTimeCount = timeArray[4];\n\t\t\t\tsessionStorage.setItem('countOddTemp', timeArray[4]);\n\t\t\t}\n\t\t\t//if even\n\t\t\telse if(lapCount%2 === 0) {\n\t\t\t\tsessionStorage.setItem('countEvenTemp', timeArray[4]);\n\t\t\t\tcountEvenTemp = sessionStorage.getItem('countEvenTemp');\n\t\t\t\tcountOddTemp = sessionStorage.getItem('countOddTemp');\n\n\t\t\t\tlapTimeCount = countEvenTemp - countOddTemp;\n\t\t\t}\n\t\t\t//if odd and not 1\n\t\t\telse if(lapCount%2 === 1 && lapCount !== 1) {\n\t\t\t\tsessionStorage.setItem('countOddTemp', timeArray[4]);\n\t\t\t\tcountEvenTemp = sessionStorage.getItem('countEvenTemp');\n\t\t\t\tcountOddTemp = sessionStorage.getItem('countOddTemp');\n\n\t\t\t\tlapTimeCount = countOddTemp - countEvenTemp;\n\t\t\t}\n\t\t\t//convert lapTimeCount to time format\n\t\t\t//deciSeconds\n\t\t\tif(lapTimeCount <= 99) {\n\t\t\t\tlapDeciSeconds = lapTimeCount;\n\t\t\t}\n\t\t\t//seconds\n\t\t\telse if(lapTimeCount >= 100 && lapTimeCount < 6000) {\n\t\t\t\tlapSeconds \t\t= Math.floor(lapTimeCount/100);\n\t\t\t\tlapDeciSeconds\t= Math.floor((lapTimeCount%100));\n\t\t\t}\n\t\t\t//minutes\n\t\t\telse if(lapTimeCount >= 6000 && lapTimeCount < 360000) {\n\t\t\t\tlapMinutes \t\t= Math.floor(lapTimeCount/6000);\n\t\t\t\tlapSeconds \t\t= Math.floor((lapTimeCount%6000)/100);\n\t\t\t\tlapDeciSeconds\t= Math.floor((lapTimeCount%100));\n\t\t\t}\n\t\t\t//hours\n\t\t\telse if(lapTimeCount >= 360000) {\n\t\t\t\tlapHours \t\t= Math.floor(lapTimeCount/360000);\n\t\t\t\tlapMinutes \t\t= Math.floor((lapTimeCount%360000)/6000);\n\t\t\t\tlapSeconds\t\t= Math.floor(((lapTimeCount%360000)%6000)/100);\n\t\t\t\tlapDeciSeconds\t= Math.floor((lapTimeCount%100));\n\t\t\t}\n\t\t\t//populate and return lapTimeArray\n\t\t\tif(lapSeconds === undefined) {\n\t\t\t\tlapTimeArray = [0,0,0,lapDeciSeconds];\n\t\t\t}\n\t\t\telse if(lapMinutes === undefined) {\n\t\t\t\tlapTimeArray = [0,0,lapSeconds,lapDeciSeconds];\n\t\t\t}\n\t\t\telse if(lapHours === undefined) {\n\t\t\t\tlapTimeArray = [0,lapMinutes,lapSeconds,lapDeciSeconds];\n\t\t\t}\n\t\t\telse {\n\t\t\t\tlapTimeArray = [lapHours,lapMinutes,lapSeconds,lapDeciSeconds];\n\t\t\t}\n\t\t\treturn lapTimeArray;\n\t\t}\n\t};\n\n})();\n\n//the interface that controls stop watch, lap time, and UI\nconst StopWatchController = (function(UICtrl, StopWatchCtrl) {\n\tlet intervalID;\n\tlet timeArray;\n\tlet lapTimeArray;\n\tlet lapCount = 0;\n\tconst setUpEventListeners = function () {\n\t\t//set up listener on start button start stop watch when clicked\n\t\tUICtrl.getInput().startButtonElement.addEventListener('click', function() {\n\t\t\tstartStopWatchUpdateUI();\n\t\t});\n\n\t\t//set up listener on reset button reload page when clicked\n\t\tUICtrl.getInput().resetButtonElement.addEventListener('click', function() {\n\t\t\twindow.location.reload(true);\n\t\t});\n\n\t\t//set up listener on stop button stop the stop watch when clicked\n\t\tUICtrl.getInput().stopButtonElement.addEventListener('click', function() {\n\t\t\tclearInterval(intervalID);\n\t\t\tstoppedStopWatch();\n\t\t});\n\n\t\t//set up listener on lap button call the lap function when clicked\n\t\tUICtrl.getInput().lapButtonElement.addEventListener('click', function() {\n\t\t\tlap();\n\t\t});\n\t};\n\n\t//calculate lap time and update UI\n\tconst lap = function() {\n\t\tlapCount += 1;\n\t\tlapTimeArray = StopWatchCtrl.LapCalc(timeArray, lapCount);\n\t\tUICtrl.updateLapUI(lapTimeArray, lapCount);\n\t};\n\n\t//start stop watch and update UI\n\tconst startStopWatchUpdateUI = function () {\n\t\t//UICtrl.runningDisplay();\n\n\t\tintervalID = setInterval(function() {\n\t\t\ttimeArray = StopWatchCtrl.StopWatch();\n\t\t\tUICtrl.updateStopWatchUI(timeArray);\n\t\t},10);\n\t};\n\n\t//update UI display for stopped stop watch\n\tconst stoppedStopWatch = function() {\n\t\tUICtrl.stoppedDisplay();\n\t};\n\n\t//return an initialization object\n\treturn {\n\t\tinit: function() {\n\t\t\tsetUpEventListeners();\n\t\t},\n\n\t\tinitDisplay: function() {\n\t\t\tUICtrl.initialDisplay();\n\t\t},\n\n\t\tstartStopWatch: function() {\n\t\t\tstartStopWatchUpdateUI();\n\t\t},\n\n\t\tstopStopWatch: function() {\n\t\t\tclearInterval(intervalID);\n\t\t}\n\t};\n\n})(UIController,StopWatchCalc);\n\n//call the initialization object to set up event listeners\n//StopWatchController.init();\n//StopWatchController.initDisplay();\n\n//StopWatchController.startStopWatch();\n\n\n\n\n\n\n\n\n//# sourceURL=webpack:///./src/stopWatchModule.js?");

/***/ })

/******/ });