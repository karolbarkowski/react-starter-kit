import { useField } from 'formik'

export type CheckboxProps = {
  label: string
  name: string
}

export const AppCheckbox = ({ label, ...props }: CheckboxProps) => {
  const [field, meta] = useField(props)

  return (
    <>
      <label htmlFor={props.name}>
        <input type="checkbox" {...field} {...props}></input>
        <span>&nbsp;{label}</span>
      </label>

      {meta.touched && meta.error ? <div className="form-error-message">{meta.error}</div> : null}
    </>
  )
}
