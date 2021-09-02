import { useState } from 'react'
import { LoginForm } from '../../components/organisms/organisms-index'
import { CenteredFormTemplate } from '../../components/templates/templates-index'
import { LoginResponse } from '../../services/types/account/account.types'
import { post } from '../../services/api'
import { urls } from '../../services/api-urls'
import { toast } from '../../services/toast'
import { GetMessage } from '../../services/error-messages'

export const LoginPage = () => {
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)

  const onSubmit = async (values: LoginResponse) => {
    setIsSubmitting(true)

    const result = await post<LoginResponse>(urls.ACCOUNT.LOGIN, values)
    console.log(result)

    if (result.isSuccess) {
      //todo: update state here...
    } else {
      toast.error('Error', GetMessage(result.errorCode))
    }

    setIsSubmitting(false)
  }

  return (
    <CenteredFormTemplate>
      <LoginForm onSubmit={onSubmit} isSubmitting={isSubmitting}></LoginForm>
    </CenteredFormTemplate>
  )
}
