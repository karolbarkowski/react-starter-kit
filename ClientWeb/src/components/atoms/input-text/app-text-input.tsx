import { RegisterOptions, UseFormRegister, FieldErrors } from 'react-hook-form'

export interface InputProps<TFieldValues> {
  label: string
  name: string
  type?: 'text' | 'password' | 'email' | 'number'
  disabled?: boolean
  rules?: RegisterOptions<TFieldValues>
  register: UseFormRegister<TFieldValues>
  errors: FieldErrors<TFieldValues>
}

export function AppTextInput({ register, errors, ...props }: any) {
  return (
    <>
      <label htmlFor={props.name}>{props.label}</label>
      <input type={props.type || 'text'} {...register(props.name, props.rules)} id={props.name} name={props.name} disabled={props.disabled || false} />

      {errors[props.name] && (
        <p className="help is-danger" role="alert">
          {errors[props.name]?.message}
        </p>
      )}
    </>
  )
}
