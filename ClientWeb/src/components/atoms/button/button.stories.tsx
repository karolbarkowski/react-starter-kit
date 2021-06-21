import { Button, ButtonProps } from './button'
import { Story } from '@storybook/react'

export default {
  title: 'Atoms/Button',
  component: Button,
}

const Template: Story<ButtonProps> = (args) => {
  return (
    <>
      <h5>Basic</h5>
      <div className="row">
        <Button label="Submit" />
        <Button label="Disabled" disabled />
      </div>

      <h5>Loading</h5>
      <div className="row">
        <Button isBusy />
        <Button label="Submit" isBusy />
      </div>

      <h5>Severities</h5>
      <div className="row">
        <Button label="Primary" />
        <Button label="Secondary" severity="secondary" />
      </div>

      <h5>Icons</h5>
      <div className="row">
        <Button label="User" icon="user" />
        <Button label="Facebook" icon="facebook" />
        <Button label="Google" icon="google" />
      </div>
    </>
  )
}

export const Buttons = Template.bind({})
