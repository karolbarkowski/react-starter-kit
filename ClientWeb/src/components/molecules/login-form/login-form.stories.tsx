import { LoginForm } from '../../molecules/index'
import { Story } from '@storybook/react'

export default {
  title: 'Molecules/LoginForm',
  component: LoginForm,
}

const Template: Story = () => <LoginForm></LoginForm>

export const LoginFormDefault = Template.bind({})
