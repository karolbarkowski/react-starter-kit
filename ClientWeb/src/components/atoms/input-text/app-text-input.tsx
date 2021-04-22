import { Field, useField } from 'formik'
import React from 'react'

export type InputProps = {
  label: string
  name: string
  type?: string
  disabled?: boolean
}

export const AppTextInput = (props: InputProps) => {
  const [field, meta] = useField(props)

  return (
    <>
      <label htmlFor={props.name}>{props.label}</label>
      {/* <input type="text" className="u-full-width" {...field} disabled={props.disabled ? props.disabled : false}></input> */}
      <Field id="firstName" placeholder="Jane" {...field} />

      {meta.touched && meta.error ? <div className="form-error-message">{meta.error}</div> : null}
    </>
  )
}
