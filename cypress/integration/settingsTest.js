describe('Test Settings Selections', function() {
	it('Saves CardTheme and ColorTheme Selections to Session Storage', function() {
		cy.visit('/');
		cy.get('.nav__button').click();
		cy.get('#settingsBtn').click();
		cy.get('#randomCardTheme').check();
		cy.get('#secondColorTheme').check();
		cy.get('.button')
			.contains('Change Settings')
			.click()
			.then(() => {
				expect(JSON.parse(sessionStorage.getItem('CardTheme'))).to.be.true;
				expect(JSON.parse(sessionStorage.getItem('ColorTheme'))).to.be.true;
			});

		cy.get('#defaultCardTheme').check();
		cy.get('#defaultColorTheme').check();
		cy.get('.button')
			.contains('Change Settings')
			.click()
			.then(() => {
				expect(JSON.parse(sessionStorage.getItem('CardTheme'))).to.be.false;
				expect(JSON.parse(sessionStorage.getItem('ColorTheme'))).to.be.false;
			});
	});
});
