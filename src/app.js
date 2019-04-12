import { processSettingsInit } from './processSettings';
import { cheat } from './cheat';
import { runTheGame } from './runTheGame';
import { rules, settings, about } from './nav';
import { deck, restart } from './DOMelements';
import './css/app.css';
import './css/responsive.css';

processSettingsInit();

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
