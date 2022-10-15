import { createContext } from 'react';

const ScoreContext = createContext({
	userChoice: '',
	computerChoice: '',
	score: '',
	chooseFighter: () => {},
	chooseOpponent: () => {},
	checkScore: () => {},
	resetScore: () => {},
});

export default ScoreContext;
