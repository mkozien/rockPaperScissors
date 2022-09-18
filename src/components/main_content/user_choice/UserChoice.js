import { useState } from 'react';
import styles from './UserChoice.module.css';

const UserChoice = () => {
	const [userChoice, setUserChoice] = useState('');

	const chooseFighter = e => {
		setUserChoice(e.target.id);
	};

	const choices = ['rock', 'paper', 'scissors'];
	const choiceButtons = choices.map(choice => (
		<button
			key={choice}
			id={choice}
			onClick={chooseFighter}
			className={styles['user-choice-btn']}>
			{choice}
		</button>
	));

	console.log(userChoice);

	return (
		<div className={styles.wrapper}>
			<div className={styles['user-choice-label-wrapper']}>
				<h2 className={styles['user-choice-label']}>choose your fighter</h2>
			</div>
			<div className={styles['choice-buttons-wrapper']}>{choiceButtons}</div>
			<div className={styles['user-choice-wrapper']}>
				<p className={styles['user-choice']}>{userChoice}</p>
			</div>
		</div>
	);
};

export default UserChoice;
