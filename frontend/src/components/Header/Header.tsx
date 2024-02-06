import Link from '../Link/Link';
import Logo from '../Logo/Logo';
import styles from './Header.module.scss';

const Header = () => {
  return (
    <nav className={styles.header}>
        <ul>
            <li>
                <Logo />
            </li>
            <li>
                <Link href='#'>Solutions</Link>
            </li>
            <li>
                <Link href='#'>Projects</Link>
            </li>
        </ul>
    </nav>
  )
}

export default Header