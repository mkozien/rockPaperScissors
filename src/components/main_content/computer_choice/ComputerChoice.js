import { useState } from 'react';
import styles from './ComputerChoice.module.css';

const ComputerChoice = () => {
	const [computerChoice, setComputerChoice] = useState('');

	const choices = ['rock', 'paper', 'scissors'];
	const chooseOpponent = () => {
		const opponent = choices[Math.floor(Math.random() * choices.length)];
		setComputerChoice(opponent);
	};

	console.log(computerChoice);

	return (
		<div className={styles.wrapper}>
			<div className={styles['choice-button-wrapper']}>
				<button
					onClick={chooseOpponent}
					className={styles['computer-choice-btn']}>
					choose the opponent
				</button>
			</div>
			<div className={styles['computer-choice-wrapper']}>
				<p className={styles['computer-choice']}>{computerChoice}</p>
			</div>
		</div>
	);
};

export default ComputerChoice;
