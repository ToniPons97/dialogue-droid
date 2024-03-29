import AnimatedLink from '../AnimatedLink/AnimatedLink'
import Button from '../Button/Button'
import Logo from '../Logo/Logo'
import styles from './Header.module.scss'
import HamburgerMenu from '../HamburgerMenu/HamburgerMenu'

const Header = () => {
    return (
        <nav className={styles.header}>
            <ul>
                <li>
                    <Logo width={150} height={150} />
                </li >
                <li className={styles.desktopMenu}>
                    <AnimatedLink href='/'>Home</AnimatedLink>
                </li>
                <li className={styles.desktopMenu}>
                    <AnimatedLink href='/chat'>Chat</AnimatedLink>
                </li>
                <li className={styles.desktopMenu}>
                    <Button disabled={false}>Sign Up</Button>
                </li>
                <li className={styles.mobileMenu}>
                    <HamburgerMenu className={styles.mobileMenu} />
                </li>
            </ul>
        </nav>
    )
}

export default Header