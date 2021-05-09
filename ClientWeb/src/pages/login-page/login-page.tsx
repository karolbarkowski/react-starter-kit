import './login-page.scss'
import { Form, AppTextInput } from '../../components/atoms/index'

const validationSchema = {
  password: {
    required: 'Password is required',
    maxLength: {
      value: 8,
      message: 'Password is too long',
    },
  },
  passwordRepeat: {
    required: 'Password is required',
    maxLength: {
      value: 8,
      message: 'Password is too long',
    },
  },
}

const defaultValues = {
  password: '',
  passwordRepeat: '',
}

export const LoginPage = () => {
  const onSubmit = (data: any) => console.log(data)

  return (
    <>
      <h1>LOGIN PAGE</h1>

      <Form onSubmit={onSubmit} defaultValues={defaultValues} validationSchema={validationSchema}>
        <AppTextInput label="Password" name="password" />
        <AppTextInput label="Repat Password" name="passwordRepeat" />
      </Form>
    </>
  )
}
