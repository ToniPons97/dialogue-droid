import styles from './Button.module.scss'
import { MouseEventHandler } from 'react'

type ButtonProps = {
    children: string
    onClick: MouseEventHandler
}

const Button = ({children, onClick}: ButtonProps) => {
  return (
    <button className={styles.button} onClick={onClick}>{children}</button>
  )
}

export default Button