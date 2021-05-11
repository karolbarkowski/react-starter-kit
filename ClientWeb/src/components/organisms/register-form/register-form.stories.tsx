import { RegisterForm } from './register-form'
import { Story } from '@storybook/react'

export default {
  title: 'Organisms/Register Form',
  component: RegisterForm,
}

const Template: Story = () => <RegisterForm></RegisterForm>

export const RegisterFormDefault = Template.bind({})
