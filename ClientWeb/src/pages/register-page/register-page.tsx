import React from 'react'
import { Card } from '../../components/atoms/atoms-index'
import { RegisterForm } from '../../components/organisms/organisms-index'
import { post, urls } from '../../services/api'
import { NotificationTypes, notify } from '../../services/notification'

export const RegisterPage = () => {
  const [isSubmitting, setIsSubmitting] = React.useState<boolean>(false)

  const onSubmit = (values: any) => {
    setIsSubmitting(true)
    post(
      urls.ACCOUNT.REGISTER,
      values,
      () => {
        notify('Registration Succesfull', '', NotificationTypes.Success)
      },
      () => {
        notify('Registration Error', '', NotificationTypes.Error)
      },
      () => {
        setIsSubmitting(false)
      }
    )
  }

  return (
    <div className="p-grid p-justify-center">
      <div className="p-col-12 p-md-8 p-lg-6">
        <Card dropShadow={true}>
          <RegisterForm onSubmit={onSubmit} isSubmitting={isSubmitting}></RegisterForm>
        </Card>
      </div>
    </div>
  )
}
