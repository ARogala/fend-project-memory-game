import { StopWatchController } from './stopWatchModule';
import { processSettings, processSettingsInit } from './processSettings';
import { starRating } from './starRating';
import './css/app.css';
import './css/responsive.css';
//variables
const deck = document.getElementsByClassName('deck');
const cardElements = document.querySelectorAll('.card');
const cards = [];
const unShuffledCards = [];
const restart = document.getElementsByClassName('fa-sync');
//create arrays for open cards and targetIDs
let openCards = [];
let targetIDs = [];
//matchedCards array will contain all the matched cards used for error handling
let matchedCards = [];
//variables for move counter and timer
let moveCounter = 0;
let moves = document.getElementsByClassName('moves');
let startTimer = true;
//variable for match counter
let matchCounter = 0;
//variable for star rating
let stars = document.getElementsByClassName('fa-star');
let starAmount = 0;
//variables for winner function
let header = document.getElementsByClassName('header');
let cheatElement = document.getElementsByClassName('cheat');
let scorePanel = document.getElementsByClassName('score-panel');
let container = document.getElementsByClassName('container');
let winnerMsg = document.getElementsByClassName('winnerMsg');
let results = winnerMsg[0].childNodes[5].getElementsByTagName('li');
let previousResults = winnerMsg[0].childNodes[11].getElementsByTagName('li');
let minutesElement = document.getElementById('minutesElapsed');
let secondsElement = document.getElementById('secondsElapsed');
let deciSecondsElement = document.getElementById('deciSecondsElapsed');

//var for nav functions
let nav = document.getElementsByClassName('nav');
let rulesElement = document.getElementsByClassName('rules');
let settingsElement = document.getElementsByClassName('settings');
let aboutElement = document.getElementsByClassName('about');
//variable for cheat function
let cheatCount = 0;
//variables for random shuffled deck
let playRandomDeck = false;
const randomDeck = [
    'fa-crow',
    'fa-dove',
    'fa-feather',
    'fa-frog',
    'fa-kiwi-bird',
    'fa-broadcast-tower',
    'fa-church',
    'fa-hospital',
    'fa-school',
    'fa-university',
    'fa-compass',
    'fa-dollar-sign',
    'fa-gift',
    'fa-heart',
    'fa-leaf',
    'fa-parachute-box',
    'fa-piggy-bank',
    'fa-seedling',
    'fa-poo',
    'fa-smile',
    'fa-frown',
    'fa-chess',
    'fa-chess-bishop',
    'fa-chess-king',
    'fa-chess-knight',
    'fa-chess-pawn',
    'fa-chess-queen',
    'fa-chess-rook',
    'fa-bug',
    'fa-coffee',
    'fa-keyboard',
    'fa-user-secret',
    'fa-microchip',
    'fa-money-bill-alt',
    'fa-bell',
    'fa-clock',
    'fa-hourglass-half',
    'fa-stopwatch',
    'fa-paint-brush',
    'fa-paper-plane',
    'fa-wrench',
    'fa-hand-spock',
    'fa-thumbs-up',
    'fa-ambulance',
    'fa-beer',
    'fa-home',
    'fa-anchor',
    'fa-bicycle',
    'fa-fighter-jet',
    'fa-bed',
    'fa-birthday-cake',
    'fa-bomb',
    'fa-blind',
    'fa-glass-martini',
    'fa-flag-checkered',
    'fa-eye',
    'fa-car',
    'fa-helicopter',
    'fa-gamepad',
    'fa-graduation-cap',
    'fa-motorcycle',
    'fa-paw',
    'fa-rocket',
    'fa-music',
    'fa-subway',
    'fa-binoculars',
    'fa-cube',
    'fa-dice',
    'fa-moon',
    'fa-snowflake',
    'fa-quidditch',
    'fa-futbol',
    'fa-football-ball',
    'fa-user-astronaut',
    'fa-user-ninja',
    'fa-bus'
];
const randomCards = [];
const randomCardTemp = [];
//variable for secondColor
let buttonElements = document.querySelectorAll('.button');

processSettingsInit(
    playRandomDeck,
    cardElements,
    cards,
    unShuffledCards,
    randomDeck,
    randomCards,
    randomCardTemp,
    nav,
    container,
    deck,
    buttonElements
);

//set the event listener on the entire deck
deck[0].addEventListener('click', runTheGame);

//event listener and function for restart
restart[0].addEventListener('click', function() {
    window.location.reload(true);
});

//play again button
document.getElementById('playAgain').addEventListener('click', function() {
    window.location.reload(true);
});

//cheat button
document.getElementById('cheatBtn').addEventListener('click', cheat);

//nav rules
document.getElementById('rulesBtn').addEventListener('click', rules);

//nav settings
document.getElementById('settingsBtn').addEventListener('click', settings);

//nav about
document.getElementById('aboutBtn').addEventListener('click', about);

//return to game from setting and about pages
document.getElementById('return1').addEventListener('click', function() {
    window.location.reload(true);
});

document.getElementById('return2').addEventListener('click', function() {
    window.location.reload(true);
});

//setting page event listeners
document.getElementById('getSettings').addEventListener('submit', processSettings);

document.getElementById('getSettings').addEventListener('reset', function() {
    window.location.reload(true);
});

function populateArrays(e) {
    targetIDs.push(e.target.id);
    openCards.push(e.target);
}

function showOpenCard(e, array_position) {
    openCards[array_position].classList.add('show', 'open');
}

function cardNotMatch(e) {
    openCards[0].classList.add('animate');
    openCards[1].classList.add('animate');
}

function removeCardNotMatch(e) {
    openCards[0].classList.remove('animate');
    openCards[1].classList.remove('animate');
}

function removeOpenCards(e) {
    openCards[0].classList.remove('show', 'open');
    openCards[1].classList.remove('show', 'open');
}

function showMatchedCards(e) {
    openCards[0].classList.add('match');
    openCards[1].classList.add('match');
}

function incrementMoveCounter() {
    moveCounter = moveCounter + 1;
    moves[0].textContent = moveCounter;
}

function incrementMatchCounter() {
    matchCounter = matchCounter + 1;
}

/*
Remove header score panel and deck from display
add winner class to container thus displaying the winner background
set winnerMsg class display to initial bringing it into view
add total moves to results list element
get the time and add the time to results list element
call starRating function to add star rating to winner page
*/
function winner() {
    header[0].style.cssText = 'display: none';
    cheatElement[0].style.cssText = 'display: none';
    scorePanel[0].style.cssText = 'display: none';
    deck[0].style.cssText = 'display: none';
    nav[0].style.cssText = 'display: none';
    container[0].classList.add('winner');
    winnerMsg[0].style.cssText = 'display: initial';
    results[0].textContent = 'Total Moves: ' + moveCounter;
    let minutes = minutesElement.innerHTML;
    let seconds = secondsElement.innerHTML;
    let deciSeconds = deciSecondsElement.innerHTML;
    results[1].textContent = 'Total Time: ' + minutes + ' ' + seconds + ' ' + deciSeconds;
    starRating(moveCounter, starAmount, stars);
    //local storage
    //moves
    if (sessionStorage.getItem('thisMove') === null) {
        sessionStorage.setItem('thisMove', moveCounter);
    } else if (sessionStorage.getItem('thisMove') !== null) {
        sessionStorage.setItem('previousMove', sessionStorage.getItem('thisMove'));
        sessionStorage.setItem('thisMove', moveCounter);
    }
    //time
    if (sessionStorage.getItem('thisTime') === null) {
        sessionStorage.setItem('thisTime', minutes + ' ' + seconds + ' ' + deciSeconds);
    } else if (sessionStorage.getItem('thisTime') !== null) {
        sessionStorage.setItem('previousTime', sessionStorage.getItem('thisTime'));
        sessionStorage.setItem('thisTime', minutes + ' ' + seconds + ' ' + deciSeconds);
    }
    //Stars
    if (sessionStorage.getItem('thisStars') === null) {
        sessionStorage.setItem('thisStars', starAmount);
    } else if (sessionStorage.getItem('thisStars') !== null) {
        sessionStorage.setItem('previousStars', sessionStorage.getItem('thisStars'));
        sessionStorage.setItem('thisStars', starAmount);
    }
    //if any previous value not null update UI
    if (sessionStorage.getItem('previousStars') !== null) {
        previousResults[0].textContent = 'Total Moves: ' + sessionStorage.getItem('previousMove');
        previousResults[1].textContent = 'Total Time: ' + sessionStorage.getItem('previousTime');
        previousResults[2].textContent = 'Star Rating: ' + sessionStorage.getItem('previousStars');
    }
}

function cheat() {
    //only cheat before moves are made and only allow one cheat
    //cheating will cost 2 moves
    if (moveCounter === 0 && startTimer === true && cheatCount === 0) {
        //show the cards
        let count = 0;
        for (const cardElement of cardElements) {
            cardElement.classList.add('show', 'open');
            count = count + 1;
        }
        //flip cards back over after 2 second
        setTimeout(function() {
            let count = 0;
            for (const cardElement of cardElements) {
                cardElement.classList.remove('show', 'open');
                count = count + 1;
            }
        }, 2000);
        /*increment cheatCount, add and display
        cheat move penalty, start stop watch and set startTimer to false
        preventing a second call to startStopWatch()*/
        cheatCount = cheatCount + 1;
        moveCounter = 2;
        moves[0].textContent = moveCounter;
        StopWatchController.startStopWatch();
        startTimer = false;
    }
}
// Nav menu functions
//note the winner class is reused here and just adds a background gradient
//consider renaming some classes
function rules() {
    header[0].style.cssText = 'display: none';
    cheatElement[0].style.cssText = 'display: none';
    scorePanel[0].style.cssText = 'display: none';
    deck[0].style.cssText = 'display: none';
    nav[0].style.cssText = 'display: none';
    container[0].classList.add('winner');
    rulesElement[0].style.cssText = 'display: initial';
}

function settings() {
    header[0].style.cssText = 'display: none';
    cheatElement[0].style.cssText = 'display: none';
    scorePanel[0].style.cssText = 'display: none';
    deck[0].style.cssText = 'display: none';
    nav[0].style.cssText = 'display: none';
    container[0].classList.add('winner');
    settingsElement[0].style.cssText = 'display: initial';
}

function about() {
    header[0].style.cssText = 'display: none';
    cheatElement[0].style.cssText = 'display: none';
    scorePanel[0].style.cssText = 'display: none';
    deck[0].style.cssText = 'display: none';
    nav[0].style.cssText = 'display: none';
    container[0].classList.add('winner');
    aboutElement[0].style.cssText = 'display: initial';
}
// END NAV menu functions

function runTheGame(e) {
    //disable click on deck
    if (e.target.classList[0] === 'deck') {
        //do nothing
    }
    //if user clicks a card and there arent already two open cards run the game
    else if (e.target.classList[0] === 'card' && openCards.length < 2) {
        //run game logic

        //populate arrays
        populateArrays(e);

        //display the first card clicked
        showOpenCard(e, 0);
        //start the game timer
        if (startTimer === true) {
            StopWatchController.startStopWatch();
            startTimer = false;
        }

        //START ERROR HANDLING
        /*
        if targetIDs are equal user clicked the same card twice
        keep the card open and remove the duplicate card from the openCards and targetIDs arrays
        */
        if (targetIDs.length === 2) {
            //wait for two clicks before checking
            if (targetIDs[0] === targetIDs[1]) {
                //console.log('user clicked the same card twice');
                openCards.pop();
                targetIDs.pop();
            }
        }
        /*
        if user clicks on matched cards with no other card open
        targetIDs[0] will be equal to one of the matched cards
        remove the matched card from the targetIDs and openCards array
        and exit runTheGame function
        */
        for (let i = 0; i < matchedCards.length; i++) {
            if (matchedCards[i] === targetIDs[0]) {
                targetIDs.pop();
                openCards.pop();
                return;
            }
        }
        /*
        if user clicks on a matched card after another card is open
        targetIDs[1] will be equal to one of the matched cards
        remove the matched card from the targetIDs and openCards array
        and exit runTheGame function
        */
        for (let i = 0; i < matchedCards.length; i++) {
            if (matchedCards[i] === targetIDs[1]) {
                targetIDs.pop();
                openCards.pop();
                return;
            }
        }
        //END ERROR HANDLING

        /*
        if the cards are equal:
        1. show the 2nd open card
        2. increment the match counter
        2. remove the show class and open class from both cards
        3. add the match class to both cards
        4. clear the openCards array

        if the cared are not equal:
        1. show 2nd open card
        2. call cardNotMatch animation on a delay
        3. remove the show class, open class, and animate class from both cards
        4. clear the openCards array
        */

        if (openCards.length === 2) {
            //wait for two clicks before checking
            //set variables to check if card classes are equal
            let openCard1 = openCards[0].firstElementChild.classList[1];
            let openCard2 = openCards[1].firstElementChild.classList[1];

            //increment moveCounter
            incrementMoveCounter();
            //call star rating logic
            starRating(moveCounter, starAmount, stars);

            if (openCard1 === openCard2) {
                //push the matched cards into their array
                matchedCards.push(targetIDs[0]);
                matchedCards.push(targetIDs[1]);
                //clear the targetIDs array
                targetIDs.pop();
                targetIDs.pop();
                //show the 2nd open card
                showOpenCard(e, 1);
                //increment match counter
                incrementMatchCounter();
                //delay the removal of open cards and the addition of matched cards
                //this allows cardOpen animation to play on 2nd open card
                setTimeout(function() {
                    removeOpenCards(e);
                    showMatchedCards(e);
                    openCards.pop();
                    openCards.pop();
                }, 500);
            } else if (openCard1 !== openCard2) {
                //clear the targetIDs array
                targetIDs.pop();
                targetIDs.pop();
                //show the 2nd open card
                showOpenCard(e, 1);
                //delay cardNotMatch animation
                //this allows the cardOpen animation to play on 2nd open card
                setTimeout(function() {
                    cardNotMatch(e);
                }, 500);
                //delay the removal of classes allowing both animations to play first
                //also gives user a chance to remember the cards
                setTimeout(function() {
                    removeOpenCards(e);
                    removeCardNotMatch(e);
                    openCards.pop();
                    openCards.pop();
                }, 1500);
            }
        }

        //check match counter if === 8 play won the game
        //stop the timer and display win page
        //delay winner allowing user to see the last move
        if (matchCounter === 8) {
            StopWatchController.stopStopWatch();
            setTimeout(winner, 1500);
        }
    }
}
