export function starRating(moveCounter, starAmount, stars) {
    //3star
    if (moveCounter <= 15) {
        //console.log('3 star');
        starAmount = 3;
    }
    //2star hide both main and winning page elements
    else if (moveCounter >= 16 && moveCounter <= 20) {
        stars[2].style.cssText = 'visibility: hidden';
        stars[5].style.cssText = 'visibility: hidden';
        starAmount = 2;
    }
    //1star hide both main and winning page elements
    else if (moveCounter >= 21) {
        stars[1].style.cssText = 'visibility: hidden';
        stars[2].style.cssText = 'visibility: hidden';
        stars[4].style.cssText = 'visibility: hidden';
        stars[5].style.cssText = 'visibility: hidden';
        starAmount = 1;
    }
}