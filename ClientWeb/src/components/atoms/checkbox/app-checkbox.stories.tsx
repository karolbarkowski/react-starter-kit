import React from 'react'
import { AppCheckbox, CheckboxProps } from './app-checkbox'
import { Story } from '@storybook/react'

const Template: Story<CheckboxProps> = (args) => <AppCheckbox {...args} />

export const CheckSb1 = Template.bind({})

CheckSb1.args = {
  label: 'check me',
  name: 'cb',
}
