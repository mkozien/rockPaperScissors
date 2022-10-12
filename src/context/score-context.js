import { createContext } from 'react';

const ScoreContext = createContext({
	userChoice: '',
	computerChoice: '',
	score: '',
	chooseFighter: () => {},
	chooseOpponent: () => {},
	checkScore: () => {},
});

export default ScoreContext;
