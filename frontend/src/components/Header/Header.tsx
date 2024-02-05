import Logo from '../Logo/Logo';
import styles from './Header.module.scss';

const Header = () => {
  return (
    <nav className={styles.header}>
        <ul>
            <li>
                <Logo />
            </li>
        </ul>
    </nav>
  )
}

export default Header