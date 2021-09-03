import React from 'react'
import { RegisterForm } from '../../components/molecules/molecules-index'
import { CenteredFormTemplate } from '../../components/templates/templates-index'
import { api, toast, errors } from '../../services/services.index'
import { RegisterRequest, RegisterResponse } from '../../services/api/api-types/account/account.types'

export const RegisterPage = () => {
  const [isSubmitting, setIsSubmitting] = React.useState<boolean>(false)

  const onSubmit = async (values: RegisterRequest) => {
    setIsSubmitting(true)

    const result = await api.post<RegisterResponse>(api.urls.ACCOUNT.REGISTER, values)
    console.log('REGISTERED')

    if (!result.isSuccess) {
      toast.error('Error', errors.getMessage(result.errorCode))
    }

    setIsSubmitting(false)
  }

  return (
    <CenteredFormTemplate>
      <RegisterForm onSubmit={onSubmit} isSubmitting={isSubmitting}></RegisterForm>
    </CenteredFormTemplate>
  )
}
