import { shuffleTheDeck } from './shuffleTheDeck';
//initialize the settings for the game
export function processSettingsInit(
    playRandomDeck,
    cardElements,
    cards,
    unShuffledCards,
    randomDeck,
    randomCards,
    randomCardTemp,
    nav,
    container,
    deck,
    buttonElements
) {
    //shuffle the deck even when no settings were set
    if (sessionStorage.getItem('CardTheme') === null) {
        shuffleTheDeck(playRandomDeck, cardElements, cards, unShuffledCards, randomDeck, randomCards, randomCardTemp);
    }
    //once settings have been set shuffle the deck with the right logical variable
    else {
        playRandomDeck = sessionStorage.getItem('CardTheme');
        playRandomDeck = JSON.parse(playRandomDeck);
        shuffleTheDeck(playRandomDeck, cardElements, cards, unShuffledCards, randomDeck, randomCards, randomCardTemp);
    }
    //only change color when second color theme has been picked
    if (JSON.parse(sessionStorage.getItem('ColorTheme')) === true) {
        changeColor(nav, container, deck, buttonElements);
    }
}

//process settings when change settings button is clicked
export function processSettings(e) {
    e.preventDefault();
    let defaultCardTheme, randomCardTheme, defaultColor, secondColor;
    defaultCardTheme = document.getElementById('getSettings').elements[0].checked;
    randomCardTheme = document.getElementById('getSettings').elements[1].checked;
    defaultColor = document.getElementById('getSettings').elements[2].checked;
    secondColor = document.getElementById('getSettings').elements[3].checked;
    //card theme logical storage
    if (defaultCardTheme === false) {
        sessionStorage.setItem('CardTheme', randomCardTheme);
    } else if (defaultCardTheme === true) {
        sessionStorage.setItem('CardTheme', randomCardTheme);
    }
    //color theme logical storage
    if (defaultColor === false) {
        sessionStorage.setItem('ColorTheme', secondColor);
    } else if (defaultColor === true) {
        sessionStorage.setItem('ColorTheme', secondColor);
    }
}

function changeColor(nav, container, deck, buttonElements) {
    nav[0].style.cssText = 'background: linear-gradient(160deg, #ff8300 0%, #ffff00 100%)';
    nav[0].lastElementChild.style.cssText = 'background: linear-gradient(160deg, #ff8300 0%, #ffff00 100%)';
    container[0].style.cssText = 'background: linear-gradient(160deg, rgba(255,131,0,.2) 0%, rgba(255,255,0,.2) 100%)';
    deck[0].style.cssText = 'background: linear-gradient(160deg, #ff8300 0%, #ffff00 100%)';
    //change all the buttons colors
    let count = 0;
    for (const buttonElement of buttonElements) {
        buttonElements[count].style.cssText = 'background: linear-gradient(160deg, #ff8300 0%, #ffff00 100%)';
        count = count + 1;
    }
}