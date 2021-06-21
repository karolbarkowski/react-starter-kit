import { Icon, IconProps } from './icon'
import { Story } from '@storybook/react'

export default {
  title: 'Atoms/Icon',
  component: Icon,
}

const Template: Story<IconProps> = (args) => {
  return (
    <div className="row">
      <Icon name="user" />
      <Icon name="facebook" />
      <Icon name="google" />
    </div>
  )
}

export const Icons = Template.bind({})
