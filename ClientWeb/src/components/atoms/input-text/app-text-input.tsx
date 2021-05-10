import { FieldValues, RegisterOptions, UseFormRegister } from 'react-hook-form'

export interface InputProps {
  label: string
  name: string
  type?: 'text' | 'password' | 'email' | 'number' | 'checkbox'
  disabled?: boolean
  error?: string
  register?: UseFormRegister<FieldValues>
  rules?: RegisterOptions
}

export function AppTextInput(props: InputProps) {
  const { register, rules, name, label, type = 'text', error, disabled = false } = props
  const inputProps = { name, type, disabled, className: 'input' }

  return (
    <div className="form-line">
      <label className="label" htmlFor={name}>
        {label}
      </label>

      {register && <input {...register(name, rules)} {...inputProps} />}
      {!register && <input {...inputProps} />}

      {error && <p className="error">{error}</p>}
    </div>
  )
}
