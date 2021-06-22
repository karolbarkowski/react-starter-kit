import { Card, CardProps } from './card'
import { Story } from '@storybook/react'

export default {
  title: 'Atoms',
  component: Card,
}

const Template: Story<CardProps> = (args) => {
  return (
    <>
      <h1 className="header">Light</h1>
      <div className="row">
        <Card {...args} className="light">
          <span>card content</span>
        </Card>

        <Card {...args} className="light" dropShadow={true}>
          <span>card content with shadow</span>
        </Card>
      </div>

      <h1 className="header">Darkened</h1>
      <div className="row">
        <Card {...args} className="darkened">
          <span>card content</span>
        </Card>

        <Card {...args} className="darkened" dropShadow={true}>
          <span>card content with shadow</span>
        </Card>
      </div>

      <h1 className="header">Accent</h1>
      <div className="row">
        <Card {...args} className="accent">
          <span>card content</span>
        </Card>

        <Card {...args} className="accent" dropShadow={true}>
          <span>card content with shadow</span>
        </Card>
      </div>
    </>
  )
}

export const Cards = Template.bind({})
