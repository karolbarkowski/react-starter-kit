import { Button, ButtonProps } from './button'
import { Story } from '@storybook/react'

export default {
  title: 'Atoms',
  component: Button,
}

const Template: Story<ButtonProps> = () => {
  return (
    <>
      <h1 className="header">Basic</h1>
      <div className="row">
        <Button label="Submit" />
        <Button label="Disabled" disabled />
      </div>

      <h1 className="header">Loading</h1>
      <div className="row">
        <Button isBusy />
        <Button label="Submit" isBusy />
      </div>

      <h1 className="header">Severities</h1>
      <div className="row">
        <Button label="Primary" />
        <Button label="Secondary" severity="secondary" />
      </div>

      <h1 className="header">Icons</h1>
      <div className="row">
        <Button label="User" icon="user" />
        <Button label="Facebook" icon="facebook" />
        <Button label="Google" icon="google" />
      </div>
    </>
  )
}

export const Buttons = Template.bind({})
