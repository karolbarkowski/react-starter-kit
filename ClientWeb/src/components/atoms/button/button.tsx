import styles from './button.module.scss'

export type ButtonProps = {
  label: string
  isSubmitting?: boolean
  className?: 'primary' | 'secondary'
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
}

export const Button = (props: ButtonProps) => {
  const { label, isSubmitting = false, className = 'primary', type = 'button', disabled = false } = props

  return <input className={`${styles.btn} ${styles[className]}`} value={label} disabled={disabled || isSubmitting} type={type} />
}
