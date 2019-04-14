import { shuffleTheDeck } from '../../src/shuffleTheDeck';
import { variables } from '../../src/variables';
import { cards, unShuffledCards, randomDeck, randomCards, randomCardTemp } from '../../src/constants';

describe('my first test', function() {
	it('visits my page', function() {
		let cardElements = [];
		cy.visit('/');

		cy.get('.card').then(card => {
			cardElements = card;
			shuffleTheDeck(
				variables.playRandomDeck,
				cardElements,
				cards,
				unShuffledCards,
				randomDeck,
				randomCards,
				randomCardTemp
			);
			expect(unShuffledCards).to.not.eql(cards);
		});
	});
});
