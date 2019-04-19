describe('Test Run The Game', function() {
	it('On first win, results should be saved and displayed', function() {
		cy.visit('/');
		cy.getMatchedCards().then(matchedCards => {
			cy.clickMatchedCards(matchedCards, 8);
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

	it('On second win, results should be saved and displayed. Previous results should be displayed', function() {
		cy.visit('/');
		cy.getMatchedCards().then(matchedCards => {
			cy.clickMatchedCards(matchedCards, 8);
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
