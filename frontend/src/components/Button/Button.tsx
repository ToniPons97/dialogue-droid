import styles from './Button.module.scss'
import { MouseEventHandler } from 'react'

type ButtonProps = {
  children: string
  onClick: MouseEventHandler
  width?: string
  height?: string
  fontSize?: string
}

const Button = ({ children, onClick, width, height, fontSize }: ButtonProps) => {
  return (
    <button
      style={{ width, height, fontSize }}
      className={styles.button}
      onClick={onClick}>
      {children}
    </button>
  )
}

export default Button