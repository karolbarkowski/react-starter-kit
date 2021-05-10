import { Button, ButtonProps } from './button'
import { Story } from '@storybook/react'

export default {
  title: 'Atoms/Button',
  component: Button,
}

const Template: Story<ButtonProps> = (args) => <Button {...args} />

export const Default = Template.bind({})
Default.args = {
  label: 'Button',
}

export const Primary = Template.bind({})
Primary.args = {
  label: 'Button',
  className: 'button-primary',
}

export const Disabled = Template.bind({})
Disabled.args = {
  label: 'Button',
  disabled: true,
}

export const DisabledPrimary = Template.bind({})
DisabledPrimary.args = {
  label: 'Button',
  disabled: true,
  className: 'button-primary',
}
