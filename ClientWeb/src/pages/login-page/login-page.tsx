import React from 'react'
import { Card } from '../../components/atoms/atoms-index'
import { LoginForm } from '../../components/organisms/organisms-index'
import { post, urls } from '../../services/api'
import { NotificationTypes, notify } from '../../services/notification'

export const LoginPage = () => {
  const [isSubmitting, setIsSubmitting] = React.useState<boolean>(false)

  const onSubmit = (values: any) => {
    setIsSubmitting(true)
    post(
      urls.ACCOUNT.LOGIN,
      values,
      () => {
        notify('Login Succesfull', 'You are now logged in', NotificationTypes.Success)
      },
      () => {
        notify('Login Error', 'Unable to log in', NotificationTypes.Error)
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
          <LoginForm onSubmit={onSubmit} isSubmitting={isSubmitting}></LoginForm>
        </Card>
      </div>
    </div>
  )
}
