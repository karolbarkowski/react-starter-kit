import './login-page.scss'
import { Form, AppTextInput } from '../../components/atoms/index'

const validationSchema = {
  password: {
    required: 'Password is required',
    minLength: {
      value: 2,
      message: 'Password is too short',
    },
    maxLength: {
      value: 8,
      message: 'Password is too long',
    },
  },
}

const defaultValues = {
  password: '123',
}

export const LoginPage = () => {
  const onSubmit = (data: any) => console.log(data)

  return (
    <>
      <h1> LOGIN PAGE</h1>

      <Form onSubmit={onSubmit} defaultValues={defaultValues}>
        <AppTextInput label="Password" name="password" rules={validationSchema.password} />
      </Form>
    </>
  )
}
