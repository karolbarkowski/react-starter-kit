import React from 'react'
import { useForm, SubmitHandler, FieldValues } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { Button } from '../button/button'

interface FormProps {
  title?: string
  submitLabel: string
  defaultValues?: FieldValues
  validationSchema?: any
  onSubmit: SubmitHandler<FieldValues>
  isSubmitting?: boolean
  children: JSX.Element | JSX.Element[]
}

export const Form = (props: FormProps) => {
  const { title, submitLabel = 'Submit', defaultValues, validationSchema, children, onSubmit, isSubmitting } = props

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues,
    mode: 'onBlur',
    resolver: yupResolver(validationSchema),
  })

  return (
    <div>
      {title && <h5 className="p-text-center">{title}</h5>}

      <form onSubmit={handleSubmit(onSubmit)} className="p-fluid">
        {React.Children.map(children, (child) => {
          return React.createElement(child.type, {
            ...{
              ...child.props,
              control,
              error: errors[child.props.name]?.message,
            },
          })
        })}

        <div className="p-mt-2">
          <Button type="submit" isBusy={isSubmitting} label={submitLabel}></Button>
        </div>
      </form>
    </div>
  )
}
