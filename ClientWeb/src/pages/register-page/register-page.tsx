import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import { AppTextInput, AppCheckbox } from './../../components/index'

const RegisterPage = () => {
  return (
    <>
      <Formik
        initialValues={{
          email: '',
          password: '',
          passwordConfirm: '',
          firstName: '',
          lastName: '',
          mobileNumber: '',
          agreeSavingData: false,
          agreeUpdates: false,
        }}
        validationSchema={Yup.object({
          email: Yup.string().email('Must be a valid email').required('This field is required'),
          password: Yup.string().required('This field is required'),
          passwordConfirm: Yup.string()
            .oneOf([Yup.ref('password')], 'Passwords do not match')
            .required('This field is required'),
          mobileNumber: Yup.string().required('This field is required'),
          agreeSavingData: Yup.bool().oneOf([true], 'Field must be checked'),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2))
            setSubmitting(false)
          }, 1400)
        }}>
        {({ isSubmitting }) => (
          <Form>
            <AppTextInput label="E-mail" name="email" />
            <AppTextInput label="Passord" name="password" type="password" />
            <AppTextInput label="Repeat Passord" name="passwordConfirm" type="password" />
            <AppTextInput label="First Name" name="firstName" />
            <AppTextInput label="Last Name" name="lastName" />
            <AppTextInput label="Mobile Number" name="mobileNumber" />
            <AppCheckbox label="* I agree to something mandatory" name="agreeSavingData" />
            <AppCheckbox label="I agree to something optional" name="agreeUpdates" />

            <input type="submit" className="button-primary" disabled={isSubmitting} value="Submit" />
          </Form>
        )}
      </Formik>
    </>
  )
}

export default RegisterPage
