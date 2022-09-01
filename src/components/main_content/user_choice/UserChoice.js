import { useState } from 'react';
import styles from './UserChoice.module.css';

const UserChoice = () => {
	const [userChoice, setUserChoice] = useState('');

	console.log(userChoice);

	const chooseFighter = e => {
		setUserChoice(e.target.id);
	};

	return (
		<div className={styles.wrapper}>
			<div className={styles['user-choice-label-wrapper']}>
				<h2 className={styles['user-choice-label']}>choose your fighter</h2>
			</div>
			<div className={styles['user-choice-wrapper']}>
				<button
					id='rock'
					onClick={chooseFighter}
					className={styles['user-choice-btn']}>
					rock
				</button>
				<button
					id='paper'
					onClick={chooseFighter}
					className={styles['user-choice-btn']}>
					paper
				</button>
				<button
					id='scissors'
					onClick={chooseFighter}
					className={styles['user-choice-btn']}>
					scissors
				</button>
			</div>
		</div>
	);
};

export default UserChoice;
