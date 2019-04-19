// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

//matchedCards will be an array with matched cards in order 
//matchedCards[0] will match matchedCards[1] ect.
Cypress.Commands.add('getMatchedCards', () => {
	let cardElements = [];
	cy.get('.card').then(cardDOM => {
		cardElements = cardDOM;
		let cards = [];
		for (const cardElement of cardElements) {
			cards.push(cardElement.firstElementChild.classList[1]);
		}

		let matchedCards = [];
		for (let i = 0; i < cardElements.length; i++) {
			for (let j = i + 1; j < cards.length; j++) {
				if (cardElements[i].firstElementChild.classList[1] === cards[j]) {
					matchedCards.push(cardElements[i]);
					matchedCards.push(cardElements[j]);
				}
			}
		}
		return matchedCards;
	});
});

//8 is the max num of matches
Cypress.Commands.add('clickMatchedCards', (matchedCards, numMatches) => {
	//must time matched Cards click
	function timeMatchCards() {
		setTimeout(matchCards, 500);
	}
	let matchedIndex = 0;
	function matchCards() {
		matchedCards[matchedIndex].click();
		matchedIndex++;
		if (matchedIndex < numMatches*2) {
			timeMatchCards();
		}
	}
	timeMatchCards();
});
