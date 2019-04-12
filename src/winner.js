import { starRating } from './starRating';
import {
    header,
    cheatElement,
    scorePanel,
    deck,
    nav,
    container,
    winnerMsg,
    results,
    minutesElement,
    secondsElement,
    deciSecondsElement,
    stars,
    previousResults
} from './DOMelements';
import { variables } from './variables';

/*
Remove header score panel and deck from display
add winner class to container thus displaying the winner background
set winnerMsg class display to initial bringing it into view
add total moves to results list element
get the time and add the time to results list element
call starRating function to add star rating to winner page
*/
export function winner() {
    header[0].style.cssText = 'display: none';
    cheatElement[0].style.cssText = 'display: none';
    scorePanel[0].style.cssText = 'display: none';
    deck[0].style.cssText = 'display: none';
    nav[0].style.cssText = 'display: none';
    container[0].classList.add('winner');
    winnerMsg[0].style.cssText = 'display: initial';
    results[0].textContent = 'Total Moves: ' + variables.moveCounter;
    let minutes = minutesElement.innerHTML;
    let seconds = secondsElement.innerHTML;
    let deciSeconds = deciSecondsElement.innerHTML;
    results[1].textContent = 'Total Time: ' + minutes + ' ' + seconds + ' ' + deciSeconds;
    variables.starAmount = starRating(variables.moveCounter, variables.starAmount, stars);
    //local storage
    //moves
    if (sessionStorage.getItem('thisMove') === null) {
        sessionStorage.setItem('thisMove', variables.moveCounter);
    } else if (sessionStorage.getItem('thisMove') !== null) {
        sessionStorage.setItem('previousMove', sessionStorage.getItem('thisMove'));
        sessionStorage.setItem('thisMove', variables.moveCounter);
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
        sessionStorage.setItem('thisStars', variables.starAmount);
    } else if (sessionStorage.getItem('thisStars') !== null) {
        sessionStorage.setItem('previousStars', sessionStorage.getItem('thisStars'));
        sessionStorage.setItem('thisStars', variables.starAmount);
    }
    //if any previous value not null update UI
    if (sessionStorage.getItem('previousStars') !== null) {
        previousResults[0].textContent = 'Total Moves: ' + sessionStorage.getItem('previousMove');
        previousResults[1].textContent = 'Total Time: ' + sessionStorage.getItem('previousTime');
        previousResults[2].textContent = 'Star Rating: ' + sessionStorage.getItem('previousStars');
    }
}
