import { Button, ButtonProps } from './button'
import { Story } from '@storybook/react'

export default {
  title: 'Atoms/Button',
  component: Button,
}

const Template: Story<ButtonProps> = (args) => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
  label: 'Button',
}

export const Info = Template.bind({})
Info.args = {
  label: 'Button',
}
