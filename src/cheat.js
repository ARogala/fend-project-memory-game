import { StopWatchController } from './stopWatchModule';
import { cardElements, moves } from './DOMelements';
import { variables } from './variables';
export function cheat() {
    //only cheat before moves are made and only allow one cheat
    //cheating will cost 2 moves
    if (variables.moveCounter === 0 && variables.startTimer === true && variables.cheatCount === 0) {
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
        variables.cheatCount = variables.cheatCount + 1;
        variables.moveCounter = 2;
        moves[0].textContent = variables.moveCounter;
        StopWatchController.startStopWatch();
        variables.startTimer = false;
        // return [variables.moveCounter, variables.startTimer, variables.cheatCount];
    }
}
