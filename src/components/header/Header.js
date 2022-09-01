import styles from './Header.module.css';

const Header = () => {
	return (
		<header className={styles['title-wrapper']}>
			<h1 className={styles.title}>rock | paper | scissors</h1>
		</header>
	);
}

export default Header;
