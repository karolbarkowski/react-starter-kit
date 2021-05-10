import { Form, AppTextInput } from '../../atoms/index'
import * as Yup from 'yup'

const validationSchema = Yup.object().shape({
  email: Yup.string().email('Must be a valid email').required('This field is required'),
  password: Yup.string().required('This field is required'),
  passwordRepeat: Yup.string()
    .oneOf([Yup.ref('password')], 'Passwords do not match')
    .required('This field is required'),
})

const defaultValues = {
  email: 'test001@example.com',
  password: 'Mkb1983!!',
  passwordRepeat: 'Mkb1983!!!',
}

export interface RegisterFormProps {
  onSubmit?: any
  isSubmitting?: boolean
}

export const RegisterForm = (props: RegisterFormProps) => {
  return (
    <Form submitLabel="Register" isSubmitting={props.isSubmitting} onSubmit={props.onSubmit} validationSchema={validationSchema} defaultValues={defaultValues}>
      <AppTextInput label="Email" name="email" />
      <AppTextInput label="Password" name="password" type="password" />
      <AppTextInput label="Repeat Password" name="passwordRepeat" type="password" />
    </Form>
  )
}
