import './login-page.css'
import { useState } from 'react'
import { Input, Button, Form, Checkbox } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import { post, urls } from '../../services/api'
import { notify, NotificationTypes } from '../../services/notification'

export const LoginPage = () => {
  const [isBusy, setIsBusy] = useState(false)

  const onFinish = (values: any) => {
    setIsBusy(true)
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
      () => {
        setIsBusy(false)
      }
    )
  }

  return (
    <Form
      name="login_form"
      initialValues={{
        email: 'test001@example.com',
        password: 'Mkb1983!!',
        remember: true,
      }}
      onFinish={onFinish}>
      <Form.Item name="email" rules={[{ required: true, message: 'Please input your Username' }]}>
        <Input prefix={<UserOutlined />} placeholder="Username" />
      </Form.Item>

      <Form.Item name="password" rules={[{ required: true, message: 'Please input your Password' }]}>
        <Input prefix={<LockOutlined />} type="password" placeholder="Password" />
      </Form.Item>

      <Form.Item name="remember" valuePropName="checked">
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" loading={isBusy}>
          Log in
        </Button>
      </Form.Item>
    </Form>
  )
}
