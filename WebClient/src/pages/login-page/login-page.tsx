import { useState } from 'react'
import { useAppDispatch } from './../../hooks/redux-hooks'
import { setUser } from '../../state/slices/account-slice'

import { LoginForm } from '../../components/molecules/molecules-index'
import { CenteredFormTemplate } from '../../components/templates/templates-index'
import { api, toast, errors } from '../../services/services.index'
import { LoginResponse } from '../../services/api/api-types/account/account.types'
import { UserState } from '../../state/slices/account-slice.types'

export const LoginPage = () => {
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)
  const dispatch = useAppDispatch()

  const onSubmit = async (values: LoginResponse) => {
    setIsSubmitting(true)

    const result = await api.post<LoginResponse>(api.urls.ACCOUNT.LOGIN, values)

    if (result.isSuccess) {
      dispatch(setUser({ email: result.value?.email, name: result.value?.name } as UserState))
    } else {
      toast.error('Error', errors.getMessage(result.errorCode))
    }

    setIsSubmitting(false)
  }

  return (
    <CenteredFormTemplate>
      <LoginForm onSubmit={onSubmit} isSubmitting={isSubmitting}></LoginForm>
    </CenteredFormTemplate>
  )
}
