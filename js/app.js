// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    let currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

/*
 * Create a list that holds all of your cards
 * Select all 16 card list item elements (querySelectorAll returns a NodeList object)
 * loop through the NodeList. for each node of cardElements push the first child element's
 * second class name into an array
 * maintain and unshuffled deck used to remove old classes
 */
const cardElements = document.querySelectorAll('.card');
const cards = [];
const unShuffledCards = [];
for (const cardElement of cardElements) {
	cards.push(cardElement.firstElementChild.classList[1]);
    unShuffledCards.push(cardElement.firstElementChild.classList[1]);
}

//shuffle the cards
shuffle(cards);

/*
 * Display the cards on the page
 *
 *   - loop through the NodeList. for each node of cardElements replace the first child element's
 *     old card class name with the new shuffled card class name
 *   - Thus shuffling the icons on the page
 */

let count = 0;
for (cardElement of cardElements) {
	cardElement.firstElementChild.classList.remove(unShuffledCards[count]);
	cardElement.firstElementChild.classList.add(cards[count]);
	count = count + 1;
}

//set the event listener on the entire deck
const deck = document.getElementsByClassName('deck');
deck[0].addEventListener('click', runTheGame);

//event listener and function for restart
const restart = document.getElementsByClassName('fa-sync');
restart[0].addEventListener('click', function(){
    window.location.reload(true);
});

//create arrays for open cards and targetIDs used for error checking
let openCards = [];
let targetIDs = [];

//variables for move counter and timer
let moveCounter = 0;
let moves = document.getElementsByClassName('moves');
let startTimer = true;

//variable for match counter
let matchCounter = 0;

//variable for star rating
let stars = document.getElementsByClassName('fa-star');
let starAmount = 0;

function populateArrays(e) {
    targetIDs.push(e.target.id);
    openCards.push(e.target);
}

function showOpenCard(e, array_position) {
    openCards[array_position].classList.add('show','open');
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
    openCards[0].classList.remove('show','open');
    openCards[1].classList.remove('show','open');
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

function starRating() {
    //3star
    if(moveCounter <= 15) {
        //console.log('3 star');
        starAmount = 3;
    }
    //2star hide both main and winning page elements
    else if(moveCounter >= 16 && moveCounter <= 20) {
        stars[2].style.cssText = 'visibility: hidden';
        stars[5].style.cssText = 'visibility: hidden';
        starAmount = 2;
    }
    //1star hide both main and winning page elements
    else if(moveCounter >= 21) {
         stars[1].style.cssText = 'visibility: hidden';
         stars[2].style.cssText = 'visibility: hidden';
         stars[4].style.cssText = 'visibility: hidden';
         stars[5].style.cssText = 'visibility: hidden';
         starAmount = 1;
    }
}
//variables for winner
let header          = document.getElementsByClassName('header');
let scorePanel         = document.getElementsByClassName('score-panel');
let container          = document.getElementsByClassName('container');
let winnerMsg          = document.getElementsByClassName('winnerMsg');
let results            = winnerMsg[0].childNodes[5].getElementsByTagName('li');
let previousResults    = winnerMsg[0].childNodes[11].getElementsByTagName('li');
let minutesElement     = document.getElementById('minutesElapsed');
let secondsElement     = document.getElementById('secondsElapsed');
let deciSecondsElement = document.getElementById('deciSecondsElapsed');
/*
Remove header score panel and deck from display
add winner class to container thus displaying the winner background
set winnerMsg class display to initial bringing it into view
add total moves to results list element
get the time and add the time to results list element
call starRating function to add star rating to winner page
*/
function winner() {
    header[0].style.cssText     = 'display: none';
    scorePanel[0].style.cssText = 'display: none';
    deck[0].style.cssText       = 'display: none';
    container[0].classList.add('winner');
    winnerMsg[0].style.cssText  = 'display: initial';
    results[0].textContent      = 'Total Moves: ' + moveCounter;
    let minutes = minutesElement.innerHTML;
    let seconds = secondsElement.innerHTML;
    let deciSeconds = deciSecondsElement.innerHTML;
    results[1].textContent      = 'Total Time: ' + minutes + ' ' + seconds + ' ' + deciSeconds;
    starRating();
    //local storage
    //moves
    if(sessionStorage.getItem('thisMove') === null) {
        sessionStorage.setItem('thisMove', moveCounter);
    }
    else if(sessionStorage.getItem('thisMove') !== null) {
        sessionStorage.setItem('previousMove', sessionStorage.getItem('thisMove'));
        sessionStorage.setItem('thisMove', moveCounter);
    }
    //time
    if(sessionStorage.getItem('thisTime') === null) {
        sessionStorage.setItem('thisTime', minutes + ' ' + seconds + ' ' + deciSeconds);
    }
    else if(sessionStorage.getItem('thisTime') !== null) {
        sessionStorage.setItem('previousTime', sessionStorage.getItem('thisTime'));
        sessionStorage.setItem('thisTime', minutes + ' ' + seconds + ' ' + deciSeconds);
    }
    //Stars
    if(sessionStorage.getItem('thisStars') === null) {
        sessionStorage.setItem('thisStars', starAmount);
    }
    else if(sessionStorage.getItem('thisStars') !== null) {
        sessionStorage.setItem('previousStars', sessionStorage.getItem('thisStars'));
        sessionStorage.setItem('thisStars', starAmount);
    }
    //if any previous value not null update UI
    if(sessionStorage.getItem('previousStars') !== null) {
        previousResults[0].textContent      = 'Total Moves: ' + sessionStorage.getItem('previousMove');
        previousResults[1].textContent      = 'Total Time: '  + sessionStorage.getItem('previousTime');
        previousResults[2].textContent      = 'Star Rating: ' + sessionStorage.getItem('previousStars');
    }


}

//play again button
document.getElementById('playAgain').addEventListener('click', function() {
    window.location.reload(true);
});

let matchedCards = [];
function runTheGame(e) {
    //disable click on deck
    if(e.target.classList[0] === 'deck') {
        //do nothing
    }
    //if user clicks a card and there arent already two open cards run the game
    else if(e.target.classList[0] === 'card' && openCards.length < 2) {
        //run game logic

    	//populate arrays
        populateArrays(e);

        //display the first card clicked
        showOpenCard(e,0);

        //start the game timer
        if(startTimer === true) {
            Controller.startStopWatch();
            startTimer = false;
        }

        //START ERROR HANDLING
        /*
        if targetIDs are equal user clicked the same card twice
        keep the card open and remove the duplicate card from the openCards and targetIDs arrays
        */
        if(targetIDs.length === 2) {    //wait for two clicks before checking
            if(targetIDs[0] === targetIDs[1]) {
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
        for(let i = 0; i < matchedCards.length; i++) {
            if(matchedCards[i] === targetIDs[0]) {
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
        for(let i = 0; i < matchedCards.length; i++) {
            if(matchedCards[i] === targetIDs[1]) {
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

        if(openCards.length === 2) {    //wait for two clicks before checking
            //set variables to check if card classes are equal
            let openCard1 = openCards[0].firstElementChild.classList[1];
            let openCard2 = openCards[1].firstElementChild.classList[1];

            //increment moveCounter
            incrementMoveCounter();
            //call star rating logic
            starRating();

            if(openCard1 === openCard2) {
                //push the matched cards into their array
                matchedCards.push(targetIDs[0]);
                matchedCards.push(targetIDs[1]);
                //clear the targetIDs array
                targetIDs.pop();
                targetIDs.pop();
                //show the 2nd open card
                showOpenCard(e,1);
                //increment match counter
                incrementMatchCounter();
                //delay the removal of open cards and the addition of matched cards
                //this allows cardOpen animation to play on 2nd open card
                setTimeout(function() {
                    removeOpenCards(e);
                    showMatchedCards(e);
                    openCards.pop();
                    openCards.pop();
                }, 500)
            }

            else if(openCard1 !== openCard2) {
                //clear the targetIDs array
                targetIDs.pop();
                targetIDs.pop();
                //show the 2nd open card
                showOpenCard(e,1);
                //delay cardNotMatch animation
                //this allows the cardOpen animation to play on 2nd open card
                setTimeout(function() {
                    cardNotMatch(e);
                }, 500);
                //delay the removal of classes allowing both animations to play first
                //also gives user a chance to remember the cards
                setTimeout(function(){
                    removeOpenCards(e);
                    removeCardNotMatch(e);
                    openCards.pop();
                    openCards.pop();
                },1500);

            }
        }

        //check match counter if === 8 play won the game
        //stop the timer and display win page
        //delay winner allowing user to see the last move
        if(matchCounter === 8) {
            Controller.stopStopWatch();
            setTimeout(winner, 1500);
        }
    }
}







