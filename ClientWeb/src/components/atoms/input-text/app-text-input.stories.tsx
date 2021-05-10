import { AppTextInput, InputProps } from './app-text-input'
import { Story } from '@storybook/react'

export default {
  title: 'Atoms/Input',
  component: AppTextInput,
  argTypes: {
    register: {
      table: {
        disable: true,
      },
    },
    name: {
      table: {
        disable: true,
      },
    },
    rules: {
      table: {
        disable: true,
      },
    },
  },
}

const Template: Story<InputProps> = (args: InputProps) => <AppTextInput {...args} />

const commonArgs = {
  label: 'Label',
  name: 'input',
}

export const Default = Template.bind({})
Default.args = commonArgs

export const Disabled = Template.bind({})
Disabled.args = { ...commonArgs, disabled: true }

export const Numeric = Template.bind({})
Numeric.args = { ...commonArgs, type: 'number' }

export const Password = Template.bind({})
Password.args = { ...commonArgs, type: 'password' }

export const Email = Template.bind({})
Email.args = { ...commonArgs, type: 'email' }

export const Error = Template.bind({})
Error.args = { ...commonArgs, error: 'Error message' }
