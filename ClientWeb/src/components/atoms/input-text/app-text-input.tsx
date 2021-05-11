import styles from './app-text-input.module.scss'
import { FieldValues, UseFormRegister } from 'react-hook-form'

export interface InputProps {
  label: string
  name: string
  type?: 'text' | 'password' | 'email' | 'number' | 'checkbox'
  disabled?: boolean
  error?: string
  register?: UseFormRegister<FieldValues>
}

export function AppTextInput(props: InputProps) {
  const { register, name, label, type = 'text', error, disabled = false } = props
  const inputProps = { name, type, disabled, className: 'input' }

  return (
    <div className={styles['form-line']}>
      <label className={styles['label']} htmlFor={name}>
        {label}
      </label>

      {register && <input {...register(name)} {...inputProps} />}
      {!register && <input {...inputProps} />}

      {error && <p className={styles['error']}>{error}</p>}
    </div>
  )
}
