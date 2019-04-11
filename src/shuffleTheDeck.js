// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
	let currentIndex = array.length,
		temporaryValue,
		randomIndex;

	while (currentIndex !== 0) {
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;
		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
	}

	return array;
}

export function shuffleTheDeck(
	playRandomDeck,
	cardElements,
	cards,
	unShuffledCards,
	randomDeck,
	randomCards,
	randomCardTemp
) {
	if (playRandomDeck === true) {
		//shuffle random deck
		shuffle(randomDeck);

		//push 8 random cards from randomDeck onto randomCards
		for (let i = 0; i < 8; i++) {
			randomCards.push(randomDeck[i]);
		}

		//double the card names by adding all 8 randomCards to a temp array
		//then add all 8 cards from the temp arry onto to 8 randomCards
		for (let i = 0; i < 8; i++) {
			randomCardTemp.push(randomCards[i]);
			randomCards.push(randomCardTemp[i]);
		}
		//shuffle the randomCards
		shuffle(randomCards);

		//get unshuffled cards from html
		for (const cardElement of cardElements) {
			unShuffledCards.push(cardElement.firstElementChild.classList[1]);
		}

		//remove unshuffled default cards and add random cards to page
		let count = 0;
		for (const cardElement of cardElements) {
			cardElement.firstElementChild.classList.remove(unShuffledCards[count]);
			cardElement.firstElementChild.classList.add(randomCards[count]);
			count = count + 1;
		}
	}

	//default cards
	else if (playRandomDeck === false) {
		/*
		 * Create a list that holds all of your cards
		 * Select all 16 card list item elements (querySelectorAll returns a NodeList object)
		 * loop through the NodeList. for each node of cardElements push the first child element's
		 * second class name into an array
		 * maintain and unshuffled deck used to remove old classes
		 */
		for (const cardElement of cardElements) {
			cards.push(cardElement.firstElementChild.classList[1]);
			unShuffledCards.push(cardElement.firstElementChild.classList[1]);
		}

		//shuffle the cards
		shuffle(cards);

		/*
		 * Display the cards on the page
		 *
		 *   - loop through the NodeList. for each node of cardElements replace the first child element's
		 *     old card class name with the new shuffled card class name
		 *   - Thus shuffling the icons on the page
		 */

		let count = 0;
		for (const cardElement of cardElements) {
			cardElement.firstElementChild.classList.remove(unShuffledCards[count]);
			cardElement.firstElementChild.classList.add(cards[count]);
			count = count + 1;
		}
	}
}
