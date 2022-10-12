import { useContext } from 'react';
import ScoreContext from '../../../context/score-context';
import styles from './ComputerChoice.module.css';

const ComputerChoice = () => {
	const scoreCtx = useContext(ScoreContext);

	return (
		<div className={styles.wrapper}>
			<div className={styles['choice-button-wrapper']}>
				<button
					onClick={scoreCtx.chooseOpponent}
					className={styles['computer-choice-btn']}
					disabled={scoreCtx.userChoice.current === '' || scoreCtx.score.current !== ''}>
					check the opponent
				</button>
			</div>
			<div className={styles['computer-choice-wrapper']}>
				<p className={styles['computer-choice']}>
					{scoreCtx.computerChoice.current}
				</p>
			</div>
		</div>
	);
};

export default ComputerChoice;
