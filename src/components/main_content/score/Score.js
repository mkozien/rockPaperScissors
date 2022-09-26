import { useContext } from 'react';
import ScoreContext from '../../../context/score-context';
import styles from './Score.module.css';

const Score = () => {
	const scoreCtx = useContext(ScoreContext);

	return (
		<div className={styles['score-wrapper']}>
			<p className={styles.score}>{scoreCtx.score}</p>
		</div>
	);
};

export default Score;
