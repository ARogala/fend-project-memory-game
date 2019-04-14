import { shuffleTheDeck } from '../../src/shuffleTheDeck';
import { cards, unShuffledCards, randomDeck, randomCards, randomCardTemp } from '../../src/constants';

describe('Shuffle function', function() {
	it('shuffles default cards and places them on DOM', function() {
		cy.visit('/');
		let cardElements = [];
		//test shuffle for default card theme
		cy.get('.card').then(cardDOM => {
			cardElements = cardDOM;
			shuffleTheDeck(false, cardElements, cards, unShuffledCards, randomDeck, randomCards, randomCardTemp);
			expect(unShuffledCards).to.not.eql(cards);
		});
		//test shuffled cards are placed on DOM
		cy.get('.card').then(cardDOM => {
			let shuffledCards = [];
			cardElements = cardDOM;
			for (const cardElement of cardElements) {
				shuffledCards.push(cardElement.firstElementChild.classList[1]);
			}
			expect(shuffledCards).to.eql(cards);

			//clear unShuffledCards and cards array
			unShuffledCards.length = 0;
			cards.length = 0;
		});
	});

	it('shuffles random deck cards and places them on DOM', function() {
		let cardElements = [];

		//test shuffle for random card theme
		cy.get('.card').then(cardDOM => {
			cardElements = cardDOM;
			shuffleTheDeck(true, cardElements, cards, unShuffledCards, randomDeck, randomCards, randomCardTemp);
			expect(unShuffledCards).to.not.eql(randomCards);
		});
		//test shuffled cards are placed on DOM
		cy.get('.card').then(cardDOM => {
			let shuffledCards = [];
			cardElements = cardDOM;
			for (const cardElement of cardElements) {
				shuffledCards.push(cardElement.firstElementChild.classList[1]);
			}
			expect(shuffledCards).to.eql(randomCards);

			//clear unShuffledCards and randomCards array
			unShuffledCards.length = 0;
			randomCards.length = 0;
		});
	});
});
