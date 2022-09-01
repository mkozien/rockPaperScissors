import styles from './Footer.module.css';

const Footer = () => {
  return (
		<footer className={styles['footer-text-wrapper']}>
			<p className={styles['footer-text']}>Game created by Marek for React practising purposes.</p>
		</footer>
  );
}

export default Footer;
