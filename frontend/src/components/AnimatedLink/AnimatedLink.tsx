import styles from './AnimatedLink.module.scss';
import Link from 'next/link';

type LinkProps = {
    href: string,
    children: string
}

const AnimatedLink = ({href, children}: LinkProps) => {
  return (
    <Link className={styles.link} href={href}>{children}</Link>
  )
}

export default AnimatedLink