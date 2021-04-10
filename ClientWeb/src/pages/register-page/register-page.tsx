import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import { post, urls } from '../../services/api'
import { NotificationTypes, notify } from '../../services/notification'
import { AppTextInput } from './../../components/index'

export const RegisterPage = () => {
  const onSubmit = (values: any, { setSubmitting }: any) => {
    setSubmitting(true)
    post(
      urls.ACCOUNT.REGISTER,
      values,
      () => {
        notify('Registration Succesfull', '', NotificationTypes.Success)
      },
      () => {
        notify('Registration Error', '', NotificationTypes.Error)
      },
      () => {
        setSubmitting(false)
      }
    )
  }

  return (
    <>
      <Formik
        initialValues={{
          email: '',
          password: '',
          passwordConfirm: '',
        }}
        validationSchema={Yup.object({
          email: Yup.string().email('Must be a valid email').required('This field is required'),
          password: Yup.string().required('This field is required'),
          passwordConfirm: Yup.string()
            .oneOf([Yup.ref('password')], 'Passwords do not match')
            .required('This field is required'),
        })}
        onSubmit={onSubmit}>
        {({ isSubmitting }) => (
          <Form>
            <AppTextInput label="E-mail" name="email" />
            <AppTextInput label="Passord" name="password" type="password" />
            <AppTextInput label="Repeat Passord" name="passwordConfirm" type="password" />

            <input type="submit" className="button-primary" disabled={isSubmitting} value="Submit" />
          </Form>
        )}
      </Formik>
    </>
  )
}
