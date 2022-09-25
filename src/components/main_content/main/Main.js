import UserChoice from '../user_choice/UserChoice';
import ComputerChoice from '../computer_choice/ComputerChoice';
import Score from '../score/Score';
import styles from './Main.module.css';

const Main = () => {
	return (
		<main className={styles.content}>
			<div className={styles['choices-wrapper']}>
				<UserChoice />
				<ComputerChoice />
			</div>
			<div className={styles['score-wrapper']}>
				<Score />
			</div>
		</main>
	);
};

export default Main;
