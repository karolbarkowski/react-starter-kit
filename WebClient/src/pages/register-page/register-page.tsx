import React from 'react'
import { RegisterForm } from '../../components/organisms/organisms-index'
import { CenteredFormTemplate } from '../../components/templates/templates-index'
import { post } from '../../services/api'
import { urls } from '../../services/api-urls'
import { GetMessage } from '../../services/error-messages'
import { toast } from '../../services/toast'
import { RegisterRequest, RegisterResponse } from '../../services/types/account/account.types'

export const RegisterPage = () => {
  const [isSubmitting, setIsSubmitting] = React.useState<boolean>(false)

  const onSubmit = async (values: RegisterRequest) => {
    setIsSubmitting(true)

    const result = await post<RegisterResponse>(urls.ACCOUNT.REGISTER, values)
    console.log('REGISTERED')

    if (!result.isSuccess) {
      toast.error('Error', GetMessage(result.errorCode))
    }

    setIsSubmitting(false)
  }

  return (
    <CenteredFormTemplate>
      <RegisterForm onSubmit={onSubmit} isSubmitting={isSubmitting}></RegisterForm>
    </CenteredFormTemplate>
  )
}
