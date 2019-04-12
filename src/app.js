import { processSettingsInit, processSettings } from './processSettings';
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