import { Form, InputText } from '../../atoms/atoms-index'
import * as Yup from 'yup'

const validationSchema = Yup.object().shape({
  email: Yup.string().email('Must be a valid email').required('This field is required'),
  password: Yup.string().required('This field is required'),
})

const defaultValues = {
  email: 'test001@example.com',
  password: 'Mkb1983!!',
}

export interface LoginFormProps {
  onSubmit?: any
  isSubmitting?: boolean
}

export const LoginForm = (props: LoginFormProps) => {
  return (
    <Form title="Login" submitLabel="Login" isSubmitting={props.isSubmitting} onSubmit={props.onSubmit} validationSchema={validationSchema} defaultValues={defaultValues}>
      <InputText label="Email" name="email" />
      <InputText label="Password" name="password" type="password" />
    </Form>
  )
}
