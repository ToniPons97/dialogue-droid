import styles from './Button.module.scss'
import { MouseEventHandler } from 'react'

type ButtonProps = {
  children: string
  onClick?: MouseEventHandler
  width?: string
  height?: string
  fontSize?: string
  disabled: boolean
}

const Button = ({
  children,
  onClick,
  width,
  height,
  fontSize,
  disabled
}: ButtonProps) => {
  return (
    <button
      style={{ width, height, fontSize }}
      className={styles.button}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  )
}

export default Button