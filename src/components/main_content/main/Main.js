import { useState, useRef } from 'react';
import UserChoice from '../user_choice/UserChoice';
import ComputerChoice from '../computer_choice/ComputerChoice';
import Score from '../score/Score';
import styles from './Main.module.css';
import ScoreContext from '../../../context/score-context';

const Main = () => {
	const [userChoice, setUserChoice] = useState('');
	const [computerChoice, setComputerChoice] = useState('');
	const [score, setScore] = useState('');

	const userChoiceRef = useRef(userChoice);
	const computerChoiceRef = useRef(computerChoice);
	const scoreRef = useRef(score);

	const choices = ['rock', 'paper', 'scissors'];

	const checkScore = () => {
		if (userChoiceRef.current === computerChoiceRef.current) {
			scoreRef.current = "It's a draw!";
			setScore(scoreRef.current);
		} else if (
			userChoiceRef.current === 'scissors' &&
			computerChoiceRef.current === 'paper'
		) {
			scoreRef.current = 'You won!';
			setScore(scoreRef.current);
		} else if (
			userChoiceRef.current === 'rock' &&
			computerChoiceRef.current === 'scissors'
		) {
			scoreRef.current = 'You won!';
			setScore(scoreRef.current);
		} else if (
			userChoiceRef.current === 'paper' &&
			computerChoiceRef.current === 'rock'
		) {
			scoreRef.current = 'You won!';
			setScore(scoreRef.current);
		} else if (
			userChoiceRef.current === 'paper' &&
			computerChoiceRef.current === 'scissors'
		) {
			scoreRef.current = 'You lost!';
			setScore(scoreRef.current);
		} else if (
			userChoiceRef.current === 'scissors' &&
			computerChoiceRef.current === 'rock'
		) {
			scoreRef.current = 'You lost!';
			setScore(scoreRef.current);
		} else if (
			userChoiceRef.current === 'rock' &&
			computerChoiceRef.current === 'paper'
		) {
			scoreRef.current = 'You lost!';
			setScore(scoreRef.current);
		} else if (
			userChoiceRef.current === '' &&
			computerChoiceRef.current === ''
		) {
			scoreRef.current = '';
			setScore(scoreRef.current);
		}
	};

	const chooseFighter = e => {
		userChoiceRef.current = e.target.id;
		setUserChoice(userChoiceRef.current);
	};

	const chooseOpponent = () => {
		const opponent = choices[Math.floor(Math.random() * choices.length)];
		computerChoiceRef.current = opponent;
		setComputerChoice(computerChoiceRef.current);
		if (userChoiceRef.current !== '') {
			checkScore();
		}
	};

	const resetScore = () => {
		userChoiceRef.current = '';
		setUserChoice('');
		computerChoiceRef.current = '';
		setComputerChoice('');
		scoreRef.current = '';
		setScore('');
	};

	return (
		<main className={styles.content}>
			<ScoreContext.Provider
				value={{
					userChoice: userChoiceRef,
					computerChoice: computerChoiceRef,
					score: scoreRef,
					choices: choices,
					chooseFighter: chooseFighter,
					chooseOpponent: chooseOpponent,
					checkScore: checkScore,
					resetScore: resetScore,
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
