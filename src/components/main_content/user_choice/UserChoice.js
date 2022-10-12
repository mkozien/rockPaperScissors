import { useContext } from 'react';
import ScoreContext from '../../../context/score-context';
import styles from './UserChoice.module.css';

const UserChoice = () => {
	const scoreCtx = useContext(ScoreContext);

	const choiceButtons = scoreCtx.choices.map(choice => (
		<button
			key={choice}
			id={choice}
			onClick={scoreCtx.chooseFighter}
			className={styles['user-choice-btn']}>
			{choice}
		</button>
	));

	console.log(scoreCtx.userChoice);

	return (
		<div className={styles.wrapper}>
			<div className={styles['user-choice-label-wrapper']}>
				<h2 className={styles['user-choice-label']}>choose your fighter</h2>
			</div>
			<div className={styles['choice-buttons-wrapper']}>{choiceButtons}</div>
			<div className={styles['user-choice-wrapper']}>
				<p className={styles['user-choice']}>{scoreCtx.userChoice.current}</p>
			</div>
		</div>
	);
};

export default UserChoice;
