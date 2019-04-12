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
