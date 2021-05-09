import React from 'react'
import { useForm, SubmitHandler, FieldValues } from 'react-hook-form'

interface FormProps {
  defaultValues?: FieldValues
  validationSchema?: FieldValues
  onSubmit: SubmitHandler<FieldValues>
  isSubmitting?: boolean
  children: JSX.Element | JSX.Element[]
}

export const Form = (props: FormProps) => {
  const { defaultValues, validationSchema, children, onSubmit, isSubmitting } = props

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    defaultValues,
    mode: 'onBlur',
  })

  return (
    <form method="post" onSubmit={handleSubmit(onSubmit)}>
      {React.Children.map(children, (child) => {
        return React.createElement(child.type, {
          ...{
            ...child.props,
            register,
            errors,
            rules: validationSchema && validationSchema[child.props.name],
          },
        })
      })}

      <button className={isSubmitting ? 'is-loading' : 'button'} type="submit">
        Send
      </button>
    </form>
  )
}
