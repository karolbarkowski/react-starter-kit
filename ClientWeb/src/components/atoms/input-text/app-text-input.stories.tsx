import { AppTextInput, InputProps } from './app-text-input'
import { Story } from '@storybook/react'
import { withFormik } from 'formik'

export default {
  title: 'Atoms/Input Text',
  component: AppTextInput,
  decorators: [withFormik],
}

const Template: Story<InputProps> = (args) => <AppTextInput {...args} />

export const Input = Template.bind({})

Input.args = {
  label: 'Text Input',
  name: 'cb',
}
Input.parameters = {
  formik: {
    initialValues: {
      cb: 'CB TEST',
    },
    onSubmit: (v: any) => console.log('I want to log these... ', v),
  },
}
