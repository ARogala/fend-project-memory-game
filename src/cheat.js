import { StopWatchController } from './stopWatchModule';
export function cheat(moveCounter, startTimer, cheatCount, cardElements, moves) {
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
