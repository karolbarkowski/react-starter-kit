export type ButtonProps = {
  label: string
  isSubmitting?: boolean
  className?: 'button' | 'button-primary'
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
}

export const Button = (props: ButtonProps) => {
  const { label, isSubmitting = false, className = 'button', type = 'button', disabled = false } = props
  return <input className={className} value={label} disabled={disabled || isSubmitting} type={type} />
}
