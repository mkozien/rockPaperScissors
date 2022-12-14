import { useContext } from 'react';
import ScoreContext from '../../../context/score-context';
import styles from './Score.module.css';

const Score = () => {
	const scoreCtx = useContext(ScoreContext);

	return (
		<div className={styles.wrapper}>
			<div className={styles['score-wrapper']}>
				<p className={styles.score}>{scoreCtx.score.current}</p>
			</div>
			<div className={styles['reset-btn-wrapper']}>
				{scoreCtx.userChoice.current !== '' &&
					scoreCtx.computerChoice.current !== '' && (
						<button
							onClick={scoreCtx.resetScore}
							className={styles['reset-btn']}>
							play again
						</button>
					)}
			</div>
		</div>
	);
};

export default Score;
