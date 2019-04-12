import { processSettings } from './processSettings';
import {
    header,
    cheatElement,
    scorePanel,
    deck,
    nav,
    container,
    rulesElement,
    settingsElement,
    aboutElement
} from './DOMelements';

//Nav menu functions
//note the winner class is reused here and just adds a background gradient
//consider renaming some classes
export function rules() {
    header[0].style.cssText = 'display: none';
    cheatElement[0].style.cssText = 'display: none';
    scorePanel[0].style.cssText = 'display: none';
    deck[0].style.cssText = 'display: none';
    nav[0].style.cssText = 'display: none';
    container[0].classList.add('winner');
    rulesElement[0].style.cssText = 'display: initial';
}

export function settings() {
    header[0].style.cssText = 'display: none';
    cheatElement[0].style.cssText = 'display: none';
    scorePanel[0].style.cssText = 'display: none';
    deck[0].style.cssText = 'display: none';
    nav[0].style.cssText = 'display: none';
    container[0].classList.add('winner');
    settingsElement[0].style.cssText = 'display: initial';
}

export function about() {
    header[0].style.cssText = 'display: none';
    cheatElement[0].style.cssText = 'display: none';
    scorePanel[0].style.cssText = 'display: none';
    deck[0].style.cssText = 'display: none';
    nav[0].style.cssText = 'display: none';
    container[0].classList.add('winner');
    aboutElement[0].style.cssText = 'display: initial';
}

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