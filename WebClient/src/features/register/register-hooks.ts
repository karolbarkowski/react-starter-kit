import { useState } from 'react'
import { LoginRequest, RegisterRequest, RegisterResponse } from '../../services/api/api-types/account/account.types'
import { api, errors, toast } from '../../services/services.index'
import useLogin from './../login/login-hooks'

const useRegister = () => {
  const [isBusy, setIsLoading] = useState<boolean>(false)
  const loginScenario = useLogin()

  async function initRegisterScenario(values: RegisterRequest) {
    setIsLoading(true)

    const result = await api.post<RegisterResponse>(api.urls.ACCOUNT.REGISTER, values)

    if (result.isSuccess) {
      loginScenario.initLoginScenario({ email: values.email, password: values.password } as LoginRequest)
    } else {
      toast.error('Error', errors.getMessage(result.errorCode))
    }

    setIsLoading(false)
  }

  return { isBusy, initRegisterScenario }
}

export default useRegister
