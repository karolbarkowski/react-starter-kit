import { RegisterForm } from '../molecules-index'
import { Story } from '@storybook/react'

export default {
  title: 'Molecules/RegisterForm',
  component: RegisterForm,
}

const Template: Story = () => <RegisterForm></RegisterForm>

export const RegisterFormDefault = Template.bind({})
