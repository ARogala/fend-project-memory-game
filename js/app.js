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
