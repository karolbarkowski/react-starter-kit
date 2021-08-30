import { useState } from 'react'
import { LoginForm } from '../../components/organisms/organisms-index'
import { CenteredFormTemplate } from '../../components/templates/templates-index'
import { post, urls } from '../../services/api'
import { toast } from '../../services/toast'

export const LoginPage = () => {
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)

  const onSubmit = async (values: any) => {
    setIsSubmitting(true)

    await post(urls.ACCOUNT.LOGIN, values)
      .then((e) => toast.success('Login Successffull', 'You are now redirected to landing page'))
      .catch((e) => toast.error('Invalid credentials', 'Credentials you provided were not found'))

    setIsSubmitting(false)
  }

  return (
    <CenteredFormTemplate>
      <LoginForm onSubmit={onSubmit} isSubmitting={isSubmitting}></LoginForm>
    </CenteredFormTemplate>
  )
}
