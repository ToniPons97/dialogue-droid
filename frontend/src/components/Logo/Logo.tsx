import styles from './Logo.module.scss';

const Logo = () => {
  return (
      <div className={styles.logo}>
        <img  src='/logo.png' />
    </div>
  )
}

export default Logo