import { Form, Header, InputText } from '../../atoms/atoms-index'
import * as Yup from 'yup'
import background from './../../../assets/images/bg-abstract.jpg'
import { RegisterFormProps } from './register-form.types'
import logo from './../../../assets/images/logo-dark.png'

const validationSchema = Yup.object().shape({
  email: Yup.string().email('Must be a valid email').required('This field is required'),
  password: Yup.string().required('This field is required'),
  passwordRepeat: Yup.string()
    .oneOf([Yup.ref('password')], 'Passwords do not match')
    .required('This field is required'),
})

const defaultValues = {
  email: '',
  password: '',
  passwordRepeat: '',
}

export const RegisterForm = (props: RegisterFormProps) => {
  return (
    <div className="flex my-8 bg-white rounded-lg shadow-lg overflow-hidden mx-auto min-w-1/2">
      <div className="hidden lg:block lg:w-1/2 bg-cover" style={{ backgroundImage: `url(${background})` }}></div>

      <div className="w-full p-8 lg:w-1/2">
        <img src={logo} alt="brand logo" className="block max-h-24 mb-8 mx-auto" />

        <div className="mt-8">
          <Form
            submitLabel="Sign Up"
            isSubmitting={props.isSubmitting}
            onSubmit={props.onSubmit}
            validationSchema={validationSchema}
            defaultValues={defaultValues}>
            <InputText label="Email Address" name="email" />
            <InputText label="Password" name="password" type="password" />
            <InputText label="Repeat Password" name="passwordRepeat" type="password" />
          </Form>
        </div>

        <div className="mt-8 flex items-center justify-between">
          <a href="/" className="text-xs text-gray-500 uppercase">
            Already have an account? Login here
          </a>
        </div>
      </div>
    </div>
  )
}
