import './login-page.scss'
import { Form, AppTextInput, Header } from '../../components/atoms/index'

const validationSchema = {
  password: {
    required: 'Password is required',
    maxLength: {
      value: 8,
      message: 'Password is too long',
    },
  },
  passwordRepeat: {
    validate: {
      matchesPreviousPassword: (value: any) => {
        return 'Passwords should match!'
      },
    },
  },
  agree: {
    required: 'Agreement required',
  },
}

const defaultValues = {
  password: '',
  passwordRepeat: '',
  agree: false,
}

export const LoginPage = () => {
  const onSubmit = (data: any) => console.log(data)

  return (
    <>
      <Header type="medium">Login Page</Header>

      <Form onSubmit={onSubmit} defaultValues={defaultValues} validationSchema={validationSchema}>
        <AppTextInput label="Password" name="password" />
        <AppTextInput label="Repat Password" name="passwordRepeat" />
        <AppTextInput label="Agree to something" name="agree" type="checkbox" />
      </Form>
    </>
  )
}
