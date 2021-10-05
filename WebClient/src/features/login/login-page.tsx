import { LoginForm } from '../../components/molecules/molecules-index'
import { CenteredFormTemplate } from '../../components/templates/templates-index'
import { LoginRequest } from '../../services/api/api-types/account/account.types'
import useLogin from './login-hooks'

export const LoginPage = () => {
  const { isBusy, initLoginScenario } = useLogin()

  const onSubmit = async (values: LoginRequest) => {
    await initLoginScenario(values)
  }

  return (
    <CenteredFormTemplate>
      <LoginForm onSubmit={onSubmit} isSubmitting={isBusy}></LoginForm>
    </CenteredFormTemplate>
  )
}
