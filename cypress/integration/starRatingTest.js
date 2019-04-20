import { starRating } from '../../src/starRating';
describe('Star Ratings', function() {
	it('Moves less than or equal to 15. display 3 stars retrun 3', function() {
		cy.visit('/');
		cy.get('.fa-star').then(stars => {
			let starAmount = starRating(15, 0, stars);
			expect(starAmount).to.equal(3);
			expect(stars[0].style.cssText).to.equal('');
			expect(stars[1].style.cssText).to.equal('');
			expect(stars[2].style.cssText).to.equal('');
			expect(stars[3].style.cssText).to.equal('');
			expect(stars[4].style.cssText).to.equal('');
			expect(stars[5].style.cssText).to.equal('');
		});
	});

	it('Moves greater than or equal to 16 but less than 21. display 2 stars retrun 2', function() {
		cy.visit('/');
		cy.get('.fa-star').then(stars => {
			let starAmount = starRating(16, 0, stars);
			expect(starAmount).to.equal(2);
			expect(stars[0].style.cssText).to.equal('');
			expect(stars[1].style.cssText).to.equal('');
			expect(stars[2].style.cssText).to.equal('visibility: hidden;');
			expect(stars[3].style.cssText).to.equal('');
			expect(stars[4].style.cssText).to.equal('');
			expect(stars[5].style.cssText).to.equal('visibility: hidden;');

			starAmount = starRating(20, 0, stars);
			expect(starAmount).to.equal(2);
			expect(stars[0].style.cssText).to.equal('');
			expect(stars[1].style.cssText).to.equal('');
			expect(stars[2].style.cssText).to.equal('visibility: hidden;');
			expect(stars[3].style.cssText).to.equal('');
			expect(stars[4].style.cssText).to.equal('');
			expect(stars[5].style.cssText).to.equal('visibility: hidden;');
		});
	});

	it('Moves greater than or equal to 21. display 1 stars retrun 1', function() {
		cy.visit('/');
		cy.get('.fa-star').then(stars => {
			let starAmount = starRating(21, 0, stars);
			expect(starAmount).to.equal(1);
			expect(stars[0].style.cssText).to.equal('');
			expect(stars[1].style.cssText).to.equal('visibility: hidden;');
			expect(stars[2].style.cssText).to.equal('visibility: hidden;');
			expect(stars[3].style.cssText).to.equal('');
			expect(stars[4].style.cssText).to.equal('visibility: hidden;');
			expect(stars[5].style.cssText).to.equal('visibility: hidden;');
		});
	});
});
