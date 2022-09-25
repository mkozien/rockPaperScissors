import { useState } from 'react';
import styles from './Score.module.css';

const Score = () => {
	const [score, setScore] = useState('');

	const showScore = (userChoice, computerChoice) => {
		switch (score) {
			case userChoice === computerChoice:
				setScore("It's a draw!");
				break;
			case (userChoice === 'scissors' && computerChoice === 'paper') ||
				(userChoice === 'rock' && computerChoice === 'scissors') ||
				(userChoice === 'paper' && computerChoice === 'rock'):
				setScore('You won!');
				break;
			case (userChoice === 'paper' && computerChoice === 'scissors') ||
				(userChoice === 'scissors' && computerChoice === 'rock') ||
				(userChoice === 'rock' && computerChoice === 'paper'):
				setScore('You lost!');
				break;
			default:
				setScore('');
		}
	};

	return (
		<div className={styles['score-wrapper']}>
			<p className={styles.score}>{score}</p>
		</div>
	);
};

export default Score;
