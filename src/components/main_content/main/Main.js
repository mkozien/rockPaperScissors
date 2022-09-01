import UserChoice from '../user_choice/UserChoice';
import styles from './Main.module.css';

const Main = () => {
	return (
		<main className={styles.content}>
			<UserChoice />
		</main>
	);
};

export default Main;
