import { Form, InputText, Header, ButtonGoogle, Hr } from '../../atoms/atoms-index'
import * as Yup from 'yup'
import { LoginFormProps } from './login.form.types'
import background from './../../../assets/images/bg-abstract.jpg'
import logo from './../../../assets/images/logo-dark.png'

const validationSchema = Yup.object().shape({
  email: Yup.string().email('Must be a valid email').required('This field is required'),
  password: Yup.string().required('This field is required'),
})

const defaultValues = {
  email: 'test001@example.com',
  password: 'Mkb1983!!',
}

export const LoginForm = (props: LoginFormProps) => {
  return (
    <div className="flex my-8 bg-white rounded-lg shadow-lg overflow-hidden mx-auto min-w-1/2">
      <div className="hidden lg:block lg:w-1/2 bg-cover" style={{ backgroundImage: `url(${background})` }}></div>

      <div className="w-full relative p-8 lg:w-1/2">
        <img src={logo} alt="brand logo" className="block max-h-24 mb-8 mx-auto" />

        <ButtonGoogle label="Sign in with Google" />
        <Hr>or login with email</Hr>

        <div className="mt-8">
          <Form
            submitLabel="Login"
            isSubmitting={props.isSubmitting}
            onSubmit={props.onSubmit}
            validationSchema={validationSchema}
            defaultValues={defaultValues}>
            <InputText label="Email Address" name="email" />
            <InputText label="Password" name="password" type="password" />
          </Form>
        </div>

        <div className="mt-8 flex items-center justify-between">
          <a href="/" className="text-xs text-gray-500 uppercase">
            Sign up with email
          </a>
          <a href="/" className="text-xs text-gray-500 uppercase">
            Forgot Password
          </a>
        </div>
      </div>
    </div>
  )
}
