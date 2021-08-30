import { Controller } from 'react-hook-form'

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

  const inputClasses = 'bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none'

  return (
    <div className="mt-4">
      <label htmlFor={name} className="block text-gray-700 text-sm font-bold mb-2">
        {label}
      </label>

      <Controller
        name={name}
        control={control}
        render={({ field, fieldState }) => {
          return <input type={type} disabled={disabled} id={field.name} {...field} className={inputClasses} />
        }}
      />

      {error && <small>{error}</small>}
    </div>
  )
}
