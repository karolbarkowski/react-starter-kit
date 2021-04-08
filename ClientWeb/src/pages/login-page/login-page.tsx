import './login-page.scss'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import { AppTextInput } from './../../components/index'
import { post, urls } from '../../services/api'
import { notify, NotificationTypes } from '../../services/notification'

export const LoginPage = () => {
  const onFinish = (values: any) => {
    console.log('Received values of form: ', values)

    post(
      urls.ACCOUNT.LOGIN,
      values,
      () => {
        notify('Login Succesfull', 'You are now logged in', NotificationTypes.Success)
      },
      () => {
        notify('Login Error', 'Unable to log in', NotificationTypes.Error)
      },
      () => {}
    )
  }

  return (
    <>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validationSchema={Yup.object({
          email: Yup.string().required('This field is required'),
          password: Yup.string().required('This field is required'),
        })}
        onSubmit={(values, { setSubmitting }) => {
          onFinish(values)
        }}>
        {({ isSubmitting }) => (
          <Form>
            <AppTextInput label="Email" name="email" />
            <AppTextInput label="Password" name="password" type="password" />

            <input type="submit" className="button-primary" disabled={isSubmitting} value="Submit" />
          </Form>
        )}
      </Formik>
    </>
  )
}
