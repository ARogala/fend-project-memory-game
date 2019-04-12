let variables = {
	cards: [],
	unShuffledCards: [],
	//create arrays for open cards and targetIDs
	openCards: [],
	targetIDs: [],
	//matchedCards array will contain all the matched cards used for error handling
	matchedCards: [],
	//variables for move counter and timer
	moveCounter: 0,
	startTimer: true,
	//variable for match counter
	matchCounter: 0,
	//variable for star rating
	starAmount: 0,
	//variable for cheat function
	cheatCount: 0,
	//variables for random shuffled deck
	playRandomDeck: false,
	randomCards: [],
	randomCardTemp: []
};

export { variables };
