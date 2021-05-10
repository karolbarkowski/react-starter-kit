import React from 'react'
import { useForm, SubmitHandler, FieldValues } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { Button } from '../button/button'

interface FormProps {
  submitLabel: string
  defaultValues?: FieldValues
  validationSchema?: any
  onSubmit: SubmitHandler<FieldValues>
  isSubmitting?: boolean
  children: JSX.Element | JSX.Element[]
}

export const Form = (props: FormProps) => {
  const { submitLabel = 'Submit', defaultValues, validationSchema, children, onSubmit, isSubmitting } = props

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    defaultValues,
    mode: 'onBlur',
    resolver: yupResolver(validationSchema),
  })

  return (
    <>
      <form className="form" method="post" onSubmit={handleSubmit(onSubmit)}>
        {React.Children.map(children, (child) => {
          return React.createElement(child.type, {
            ...{
              ...child.props,
              register,
              error: errors[child.props.name]?.message,
            },
          })
        })}

        <Button type="submit" isSubmitting={isSubmitting} label={submitLabel} className="button-primary"></Button>
      </form>
    </>
  )
}
