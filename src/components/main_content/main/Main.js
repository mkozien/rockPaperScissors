import { useState } from 'react';
import UserChoice from '../user_choice/UserChoice';
import ComputerChoice from '../computer_choice/ComputerChoice';
import Score from '../score/Score';
import styles from './Main.module.css';
import ScoreContext from '../../../context/score-context';

const Main = () => {
	const [userChoice, setUserChoice] = useState('');
	const [computerChoice, setComputerChoice] = useState('');
	const [score, setScore] = useState('');

	const choices = ['rock', 'paper', 'scissors'];

	const chooseFighter = e => {
		setUserChoice(e.target.id);
	};

	const chooseOpponent = () => {
		const opponent = choices[Math.floor(Math.random() * choices.length)];
		setComputerChoice(opponent);
	};

	const checkScore = () => {
		if (userChoice !== '' && computerChoice !== '') {
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
		}
	};

	return (
		<main className={styles.content}>
			<ScoreContext.Provider
				value={{
					userChoice: userChoice,
					computerChoice: computerChoice,
					score: score,
					choices: choices,
					chooseFighter: chooseFighter,
					chooseOpponent: chooseOpponent,
					checkScore: checkScore,
				}}>
				<div className={styles['choices-wrapper']}>
					<UserChoice />
					<ComputerChoice />
				</div>
				<div className={styles['score-wrapper']}>
					<Score />
				</div>
			</ScoreContext.Provider>
		</main>
	);
};

export default Main;
