import { LoginForm } from './login-form'
import { Story } from '@storybook/react'

export default {
  title: 'Organisms',
  component: LoginForm,
}

const Template: Story = () => <LoginForm></LoginForm>

export const LoginFormDefault = Template.bind({})
