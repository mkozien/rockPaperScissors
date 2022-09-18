import UserChoice from '../user_choice/UserChoice';
import ComputerChoice from '../computer_choice/ComputerChoice';
import styles from './Main.module.css';

const Main = () => {
	return (
		<main className={styles.content}>
			<UserChoice />
			<ComputerChoice />
		</main>
	);
};

export default Main;
