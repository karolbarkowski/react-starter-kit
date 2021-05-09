import { RegisterOptions, UseFormRegister, FieldErrors } from 'react-hook-form'

export type InputProps<TFieldValues> = {
  label: string
  name: string
  type?: 'text' | 'password' | 'email' | 'number'
  disabled?: boolean
  register: UseFormRegister<TFieldValues>
  errors: FieldErrors<TFieldValues>
  rules?: RegisterOptions<TFieldValues>
}

export function AppTextInput(props: any) {
  return (
    <>
      <label htmlFor={props.name}>{props.label}</label>
      <input type={props.type || 'text'} {...props.register(props.name, props.rules)} id={props.name} name={props.name} disabled={props.disabled || false} />

      {props.errors[props.name] && (
        <p className="help is-danger" role="alert">
          {props.errors[props.name].message}
        </p>
      )}
    </>
  )
}
