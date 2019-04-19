describe('Test Run The Game', function() {
	it('Matches all cards, displays winner screen, and saves results to session storage.', function() {
		cy.visit('/');
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
			//must time matched Cards click
			function timeMatchCards() {
				setTimeout(matchCards, 500);
			}
			let matchedIndex = 0;
			function matchCards() {
				matchedCards[matchedIndex].click();
				matchedIndex++;
				if (matchedIndex < matchedCards.length) {
					timeMatchCards();
				}
			}
			timeMatchCards();
			//after game is won winner screen should be displayed and stats should be saved
			cy.wait(10000);
			cy.get('.winnerMsg').then(msg => {
				//expect these elements on winner screen
				expect(msg[0].children[0].innerHTML).to.equal('Congratulations');
				expect(msg[0].children[1].innerHTML).to.equal('You Won!');
				//this games stats
				expect(msg[0].children[2].innerText).to.not.equal('');
				//previous games stats
				expect(msg[0].children[5].innerText).to.equal('');
				//expect these stats to be saved to sessionStorage
				expect(JSON.parse(sessionStorage.getItem('thisMove'))).to.equal(8);
				expect(JSON.parse(sessionStorage.getItem('thisStars'))).to.equal(3);
				expect(sessionStorage.getItem('thisTime')).to.not.be.null;
			});
		});
	});

	it('On second win previous stats are displayed and saved', function() {
		cy.visit('/');
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
			//must time matched Cards click
			function timeMatchCards() {
				setTimeout(matchCards, 500);
			}
			let matchedIndex = 0;
			function matchCards() {
				matchedCards[matchedIndex].click();
				matchedIndex++;
				if (matchedIndex < matchedCards.length) {
					timeMatchCards();
				}
			}
			timeMatchCards();
			//after game is won winner screen should be displayed and stats should be saved
			cy.wait(10000);
			cy.get('.winnerMsg').then(msg => {
				//expect these elements on winner screen
				expect(msg[0].children[0].innerHTML).to.equal('Congratulations');
				expect(msg[0].children[1].innerHTML).to.equal('You Won!');
				//this games stats
				expect(msg[0].children[2].innerText).to.not.equal('');
				//previous games stats
				expect(msg[0].children[5].innerText).to.not.equal('');
				//expect these stats to be saved to sessionStorage
				expect(JSON.parse(sessionStorage.getItem('thisMove'))).to.equal(8);
				expect(JSON.parse(sessionStorage.getItem('thisStars'))).to.equal(3);
				expect(sessionStorage.getItem('thisTime')).to.not.be.null;

				expect(JSON.parse(sessionStorage.getItem('previousMove'))).to.equal(8);
				expect(JSON.parse(sessionStorage.getItem('previousStars'))).to.equal(3);
				expect(sessionStorage.getItem('previousTime')).to.not.be.null;
			});
		});
	});
});
