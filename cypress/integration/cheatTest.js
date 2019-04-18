describe('Cheat function', function() {
	it('Shows all cards for 2 sec. Second Btn click does not show cards.', function() {
		cy.visit('/');
		cy.clock();
		cy.get('#cheatBtn')
			.click()
			.then(() => {
				cy.get('.card').then(cardElements => {
					for (const cardElement of cardElements) {
						expect(cardElement.classList.value).to.equal('card show open');
					}
				});
			});
		cy.tick(2500);

		cy.get('#cheatBtn')
			.click()
			.then(() => {
				cy.get('.card').then(cardElements => {
					for (const cardElement of cardElements) {
						expect(cardElement.classList.value).to.equal('card');
					}
				});
			});
	});

	it('Increments Moves by 2', function() {
		cy.get('.moves').then(movesElement => {
			let moves = parseInt(movesElement[0].innerHTML);
			expect(moves).to.equal(2);
		});
	});
});
