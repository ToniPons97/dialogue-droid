import AnimatedLink from '../AnimatedLink/AnimatedLink';
import Link from '../AnimatedLink/AnimatedLink';
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
                <AnimatedLink href='#'>Solutions</AnimatedLink>
            </li>
            <li>
                <AnimatedLink href='#'>Projects</AnimatedLink>
            </li>
        </ul>
    </nav>
  )
}

export default Header