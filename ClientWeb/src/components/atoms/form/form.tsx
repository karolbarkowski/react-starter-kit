import React from 'react'
import { useForm, SubmitHandler, FieldValues } from 'react-hook-form'

interface FormProps {
  defaultValues?: FieldValues
  onSubmit: SubmitHandler<FieldValues>
  isSubmitting?: boolean
  children: JSX.Element | JSX.Element[]
}

export const Form = (props: FormProps) => {
  const { defaultValues, children, onSubmit, isSubmitting } = props

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
          },
        })
      })}

      <button className={isSubmitting ? 'is-loading' : 'button'} type="submit">
        Send
      </button>
    </form>
  )
}
