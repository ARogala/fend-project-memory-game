import { StopWatchController } from './stopWatchModule';
import { starRating } from './starRating';
import { winner } from './winner';
import { variables } from './variables';
import { moves, stars } from './DOMelements';
export function runTheGame(e) {
    const openCards = variables.openCards;
    const targetIDs = variables.targetIDs;
    const matchedCards = variables.matchedCards;
    let matchCounter = variables.matchCounter;
    let moveCounter = variables.moveCounter;
    let starAmount = variables.starAmount;
    let startTimer = variables.startTimer;

    //disable click on deck
    if (e.target.classList[0] === 'deck') {
        //do nothing
    }
    //if user clicks a card and there arent already two open cards run the game
    else if (e.target.classList[0] === 'card' && openCards.length < 2) {
        //run game logic

        //populate arrays
        populateArrays(e, targetIDs, openCards);

        //display the first card clicked
        showOpenCard(e, 0, openCards);
        //start the game timer
        console.log(startTimer);
        if (startTimer === true) {
            StopWatchController.startStopWatch();
            variables.startTimer = false;
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
            incrementMoveCounter(moveCounter);
            //call star rating logic
            starAmount = starRating(moveCounter, starAmount, stars);

            if (openCard1 === openCard2) {
                //push the matched cards into their array
                matchedCards.push(targetIDs[0]);
                matchedCards.push(targetIDs[1]);
                //clear the targetIDs array
                targetIDs.pop();
                targetIDs.pop();
                //show the 2nd open card
                showOpenCard(e, 1, openCards);
                //increment match counter
                incrementMatchCounter(matchCounter);
                //delay the removal of open cards and the addition of matched cards
                //this allows cardOpen animation to play on 2nd open card
                setTimeout(function() {
                    removeOpenCards(e, openCards);
                    showMatchedCards(e, openCards);
                    openCards.pop();
                    openCards.pop();
                }, 500);
            } else if (openCard1 !== openCard2) {
                //clear the targetIDs array
                targetIDs.pop();
                targetIDs.pop();
                //show the 2nd open card
                showOpenCard(e, 1, openCards);
                //delay cardNotMatch animation
                //this allows the cardOpen animation to play on 2nd open card
                setTimeout(function() {
                    cardNotMatch(e, openCards);
                }, 500);
                //delay the removal of classes allowing both animations to play first
                //also gives user a chance to remember the cards
                setTimeout(function() {
                    removeOpenCards(e, openCards);
                    removeCardNotMatch(e, openCards);
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

function populateArrays(e, targetIDs, openCards) {
    targetIDs.push(e.target.id);
    openCards.push(e.target);
}

function showOpenCard(e, array_position, openCards) {
    openCards[array_position].classList.add('show', 'open');
}

function cardNotMatch(e, openCards) {
    openCards[0].classList.add('animate');
    openCards[1].classList.add('animate');
}

function removeCardNotMatch(e, openCards) {
    openCards[0].classList.remove('animate');
    openCards[1].classList.remove('animate');
}

function removeOpenCards(e, openCards) {
    openCards[0].classList.remove('show', 'open');
    openCards[1].classList.remove('show', 'open');
}

function showMatchedCards(e, openCards) {
    openCards[0].classList.add('match');
    openCards[1].classList.add('match');
}

function incrementMoveCounter(moveCounter) {
    moveCounter = moveCounter + 1;
    moves[0].textContent = moveCounter;
}

function incrementMatchCounter(matchCounter) {
    matchCounter = matchCounter + 1;
}
