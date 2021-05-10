export type ButtonProps = {
  label: string
  className?: 'button' | 'button-primary'
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
}

export const Button = (props: ButtonProps) => {
  const { label, className = 'button', type = 'button', disabled = false } = props
  return <input className={className} value={label} disabled={disabled} type={type} />
}
