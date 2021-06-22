import { Controller } from 'react-hook-form'
import { InputText as PrimeReactInputText } from 'primereact/inputtext'
import { classNames } from 'primereact/utils'

export interface InputProps {
  label: string
  name: string
  type?: 'text' | 'password' | 'email' | 'number' | 'checkbox'
  disabled?: boolean
  error?: string
  control?: any
}

export function InputText(props: InputProps) {
  const { control, name, label, type = 'text', error, disabled = false } = props

  return (
    <div className="p-field">
      <span className="p-float-label">
        <Controller
          name={name}
          control={control}
          render={({ field, fieldState }) => {
            return <PrimeReactInputText type={type} disabled={disabled} id={field.name} {...field} className={classNames({ 'p-invalid': fieldState.invalid })} />
          }}
        />

        <label htmlFor={name}>{label}</label>
      </span>

      {error && <small className="p-error">{error}</small>}
    </div>
  )
}
