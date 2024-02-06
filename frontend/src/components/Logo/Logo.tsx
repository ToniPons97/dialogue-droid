import Image from 'next/image';
import styles from './Logo.module.scss';

type LogoProps = {
  width: number 
  height: number
}

const Logo = ({width, height}: LogoProps) => {
  return (
    <div className={styles.logo}>
      <Image
        width={width}
        height={height}
        src='/logo.png'
        alt='DialogueDroid Logo'
        priority
      />
    </div>
  )
}

export default Logo