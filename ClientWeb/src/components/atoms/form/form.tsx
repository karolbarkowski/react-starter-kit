import React from 'react'
import { useForm, SubmitHandler, FieldValues } from 'react-hook-form'
import { Button } from '../button/button'

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
    <form className="form" method="post" onSubmit={handleSubmit(onSubmit)}>
      {React.Children.map(children, (child) => {
        return React.createElement(child.type, {
          ...{
            ...child.props,
            register,
            error: errors[child.props.name]?.message,
            rules: validationSchema && validationSchema[child.props.name],
          },
        })
      })}

      <Button type="submit" label="Send" className="button-primary"></Button>
    </form>
  )
}
