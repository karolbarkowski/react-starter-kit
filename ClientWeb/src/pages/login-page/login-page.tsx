import React from 'react'
import { Header } from '../../components/atoms/atoms-index'
import { LoginForm } from '../../components/molecules/molecules-index'
import { post, urls } from '../../services/api'
import { NotificationTypes, notify } from '../../services/notification'

export const LoginPage = () => {
  const [isSubmitting, setIsSubmitting] = React.useState<boolean>(false)

  const onSubmit = (values: any) => {
    console.log('LOGGIN IN')
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
    <>
      <Header type="medium">Login Page</Header>

      <LoginForm onSubmit={onSubmit} isSubmitting={isSubmitting}></LoginForm>
    </>
  )
}
