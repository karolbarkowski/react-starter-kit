import { Card, CardProps } from './card'
import { Story } from '@storybook/react'

export default {
  title: 'Atoms/Card',
  component: Card,
}

const Template: Story<CardProps> = (args) => {
  return (
    <>
      <Card {...args}>
        <p>card content</p>
      </Card>
      <br />

      <Card {...args} dropShadow={true}>
        <p>card content with shadow</p>
      </Card>
    </>
  )
}

export const Light = Template.bind({})
Light.args = {
  className: 'light',
}

export const Darkened = Template.bind({})
Darkened.args = {
  className: 'darkened',
}

export const Accent = Template.bind({})
Accent.args = {
  className: 'accent',
}
