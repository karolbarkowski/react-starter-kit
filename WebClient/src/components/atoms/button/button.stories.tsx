import { Story } from '@storybook/react'
import { Button } from './button'
import { ButtonProps, Severity } from './button.types'

export default {
  title: 'Atoms',
  component: Button,
}

let buttonAction = () => console.log('Button Clicked')

const Template: Story<ButtonProps> = () => {
  return (
    <>
      <div className="row">
        <Button label="Primary" onClick={buttonAction} />
        <Button label="Loading" onClick={buttonAction} isBusy />
        <Button label="Disabled" onClick={buttonAction} disabled />
      </div>
      <div className="row">
        <Button label="Primary Outline" onClick={buttonAction} severity={Severity.PrimaryOutline} />
        <Button label="Loading" onClick={buttonAction} isBusy severity={Severity.PrimaryOutline} />
        <Button label="Disabled" onClick={buttonAction} disabled severity={Severity.PrimaryOutline} />
      </div>
      <div className="row">
        <Button label="Secondary" onClick={buttonAction} severity={Severity.Secondary} />
        <Button label="Loading" onClick={buttonAction} isBusy severity={Severity.Secondary} />
        <Button label="Disabled" onClick={buttonAction} disabled severity={Severity.Secondary} />
      </div>
      <div style={{ width: '400px' }}>
        <div className="row">
          <Button label="Full Width" onClick={buttonAction} fullWidth />
        </div>
        <div className="row">
          <Button label="Full Width" onClick={buttonAction} fullWidth disabled />
        </div>
        <div className="row">
          <Button label="Full Width" onClick={buttonAction} fullWidth isBusy />
        </div>
      </div>
    </>
  )
}

export const Buttons = Template.bind({})
