import { RegisterForm } from '../../components/molecules/molecules-index'
import { CenteredFormTemplate } from '../../components/templates/templates-index'
import { RegisterRequest } from '../../services/api/api-types/account/account.types'
import useRegister from './register-hooks'

export const RegisterPage = () => {
  const { isBusy, initRegisterScenario } = useRegister()

  const onSubmit = async (values: RegisterRequest) => {
    await initRegisterScenario(values)
  }

  return (
    <CenteredFormTemplate>
      <RegisterForm onSubmit={onSubmit} isSubmitting={isBusy}></RegisterForm>
    </CenteredFormTemplate>
  )
}
