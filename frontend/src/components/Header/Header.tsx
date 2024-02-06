import AnimatedLink from '../AnimatedLink/AnimatedLink';
import Logo from '../Logo/Logo';
import styles from './Header.module.scss';

const Header = () => {
  return (
    <nav className={styles.header}>
        <ul>
            <li>
                <Logo width={150} height={150} />
            </li>
            <li>
                <AnimatedLink href='/'>Home</AnimatedLink>
            </li>
            <li>
                <AnimatedLink href='/'>Company</AnimatedLink>
            </li>
            <li>
                sign up (button)
            </li>
        </ul>
    </nav>
  );
}

export default Header;