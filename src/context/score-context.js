import React from 'react';

const ScoreContext = React.createContext({
	userChoice: '',
	computerChoice: '',
	score: '',
	chooseFighter: () => {},
	chooseOpponent: () => {},
	checkScore: () => {},
});

export default ScoreContext;
