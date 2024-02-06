import styles from './Link.module.scss';

type LinkProps = {
    href: string,
    children: string
}

const Link = ({href, children}: LinkProps) => {
  return (
    <a className={styles.link} href={href}>{children}</a>
  )
}

export default Link