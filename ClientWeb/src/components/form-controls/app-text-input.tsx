import { useField } from 'formik'

type InputProps = {
  label: string
  name: string
  type?: string
}

export const AppTextInput = ({ label, ...props }: InputProps) => {
  const [field, meta] = useField(props)

  return (
    <>
      <label htmlFor={props.name}>{label}</label>
      <input type="text" className="u-full-width" {...field} {...props}></input>

      {meta.touched && meta.error ? <div className="form-error-message">{meta.error}</div> : null}
    </>
  )
}
