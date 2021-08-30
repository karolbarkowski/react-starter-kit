import React from 'react'
import { RegisterForm } from '../../components/organisms/organisms-index'
import { CenteredFormTemplate } from '../../components/templates/templates-index'
import { post, urls } from '../../services/api'
import { toast } from '../../services/toast'

export const RegisterPage = () => {
  const [isSubmitting, setIsSubmitting] = React.useState<boolean>(false)

  const onSubmit = async (values: any) => {
    setIsSubmitting(true)

    await post(urls.ACCOUNT.REGISTER, values)
      .then((e) => toast.success('Registration Successffull', 'You are now redirected to landing page'))
      .catch((e) => toast.error('Error occured', 'Unknown error occured during registration'))

    setIsSubmitting(false)
  }

  return (
    <CenteredFormTemplate>
      <RegisterForm onSubmit={onSubmit} isSubmitting={isSubmitting}></RegisterForm>
    </CenteredFormTemplate>
  )
}
