import { Button, ButtonProps } from './button'
import { Story } from '@storybook/react'

export default {
  title: 'Atoms/Button',
  component: Button,
}

const Template: Story<ButtonProps> = (args) => {
  return (
    <>
      <Button {...args} label="Button" />
      <br />
      <Button {...args} label="Button" disabled />
    </>
  )
}

export const Primary = Template.bind({})
Primary.args = {
  className: 'primary',
}

export const Secondary = Template.bind({})
Secondary.args = {
  className: 'secondary',
}
