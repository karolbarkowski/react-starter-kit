import { Story } from '@storybook/react'
import { ButtonGoogle } from './button-google'
import { ButtonGoogleProps } from './button-google.types'

export default {
  title: 'Atoms',
  component: ButtonGoogle,
}

const Template: Story<ButtonGoogleProps> = () => {
  return (
    <div style={{ width: '300px' }}>
      <div className="row">
        <ButtonGoogle />
      </div>
      <div className="row">
        <ButtonGoogle label="Sign in with Google" />
      </div>
    </div>
  )
}

export const ButtonsGoogle = Template.bind({})
