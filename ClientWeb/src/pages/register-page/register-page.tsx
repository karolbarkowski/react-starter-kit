import React from 'react'
import { Header } from '../../components/atoms/atoms-index'
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
    <>
      <Header type="medium">Register Page</Header>

      <RegisterForm onSubmit={onSubmit} isSubmitting={isSubmitting}></RegisterForm>
    </>
  )
}
