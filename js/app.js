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
const restart = document.getElementsByClassName('fa-repeat');
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

function populateArrays(e) {
    targetIDs.push(e.target.id);
    openCards.push(e.target);
}

function show1stOpenCard(e) {
    openCards[0].classList.add('show','open');
}

function show2ndOpenCard(e) {
    openCards[1].classList.add('show','open');
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
    console.log(matchCounter);
}

function starRating() {
    //3star
    if(moveCounter <= 15) {
        //console.log('3 star');
    }
    //2star
    else if(moveCounter >= 16 && moveCounter <= 20) {
        stars[2].style.cssText = 'visibility: hidden';
    }
    //1star
    else if(moveCounter >= 21) {
         stars[1].style.cssText = 'visibility: hidden';
         stars[2].style.cssText = 'visibility: hidden';
    }
}

function runTheGame(e) {

	//populate arrays
    populateArrays(e);

    //display the first card clicked
    show1stOpenCard(e);

    //start the game timer
    if(startTimer === true) {
        stopWatch();
        startTimer = false;
    }

    /*Error handling for user input
    if targetIDs are equal user clicked the same card twice
    remove that card from the display and clear both arrays
    if the second targetID is empty the user clicked the card and
    then clicked that same open cards icon thus
    remove that card from the display and clear both arrays*/
    if(targetIDs.length === 2) {    //wait for two clicks before checking
        if(targetIDs[0] === targetIDs[1]) {
            //console.log('user clicked the same card twice');
            removeOpenCards(e);
            openCards.pop();
            openCards.pop();
            targetIDs.pop();
            targetIDs.pop();
        }
        else if(targetIDs[1] === "") {
            //console.log('user clicked card then cards icon');
            removeOpenCards(e);
            openCards.pop();
            openCards.pop();
            targetIDs.pop();
            targetIDs.pop();
        }
    }

    /*
    if the cards are equal:
    1. remove the show class and open class from both cards
    2. add the match class to both cards
    3. clear the openCards array

    if the cared are not equal:
    1. remove the show class and open class from both cards
    2. clear the openCards array
    */
    if(openCards.length === 2) {    //wait for two clicks before checking
        //set variables to check if card classes are equal
        let openCard1 = openCards[0].firstElementChild.classList[1];
        let openCard2 = openCards[1].firstElementChild.classList[1];
        //clear the targetIDs array
        targetIDs.pop();
        targetIDs.pop();
        //increment moveCounter
        incrementMoveCounter();

        //call star rating logic
        starRating();

        if(openCard1 === openCard2) {
            removeOpenCards(e);
            showMatchedCards(e);

            //increment match counter
            incrementMatchCounter();

            openCards.pop();
            openCards.pop();

            //Do stuff when player wins
            if(matchCounter === 8) {
                alert('you won');
            }
        }

        else if(openCard1 !== openCard2) {
            show2ndOpenCard(e);
            //show the 2nd open card for 1 second
            setTimeout(function(){
                removeOpenCards(e);
                openCards.pop();
                openCards.pop();
            },1000);
        }
    }

    //check match counter if === 8 game win display win page
}


//add timer
/*
* 1 count = 0.01 second (10 MilliSeconds)
* 100 count = 1 second
* 6,000 count = 1 minute
* 360,000 count = 1 hour
*/
function stopWatch() {
    let intervalID = setInterval(startStopWatch, 10);
    let count       =   0;
    let minutesElement          =   document.getElementById('minutesElapsed');
    let secondsElement          =   document.getElementById('secondsElapsed');
    let deciSecondsElement      =   document.getElementById('deciSecondsElapsed');

    function startStopWatch() {
        count = count + 1;
        //deciSeconds
        if(count <= 99) {
            deciSecondsElement.innerHTML = count;
        }
        //seconds
        else if(count >= 100 && count < 6000) {
            secondsElement.innerHTML        = Math.floor(count/100) + ' :';
            deciSecondsElement.innerHTML    = Math.floor((count%100));
        }
        //minutes
        else if(count >= 6000 && count < 360000) {
            minutesElement.innerHTML        = Math.floor(count/6000) + ' :';
            secondsElement.innerHTML        = Math.floor((count%6000)/100) + ' :';
            deciSecondsElement.innerHTML    = Math.floor((count%100));
        }
    }
}






