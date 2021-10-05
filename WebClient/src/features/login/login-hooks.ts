import { useState } from 'react'
import { useAppDispatch } from '../../hooks/redux-hooks'
import { LoginRequest } from '../../services/api/api-types/account/account.types'
import { api, errors, toast } from '../../services/services.index'
import { setUser } from '../../state/slices/account-slice'
import { UserState } from '../../state/slices/account-slice.types'

const useLogin = () => {
  const dispatch = useAppDispatch()
  const [isBusy, setIsLoading] = useState<boolean>(false)

  async function initLoginScenario(values: LoginRequest) {
    setIsLoading(true)

    const result = await api.post<LoginRequest>(api.urls.ACCOUNT.LOGIN, values)

    if (result.isSuccess) {
      dispatch(setUser({ email: result.value?.email, name: result.value?.email } as UserState))
    } else {
      toast.error('Error', errors.getMessage(result.errorCode))
    }

    setIsLoading(false)
  }

  return { isBusy, initLoginScenario }
}

export default useLogin
