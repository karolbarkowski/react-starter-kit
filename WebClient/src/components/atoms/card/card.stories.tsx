import { Story } from '@storybook/react'
import { Card } from './card'
import { CardProps, CardType } from './card.types'

export default {
  title: 'Atoms',
  component: Card,
}

const Template: Story<CardProps> = (args) => {
  return (
    <>
      <div className="row">
        <Card>
          <span>Light Card</span>
        </Card>
      </div>
      <div className="row">
        <Card dropShadow>
          <span>Light Card With Shadow</span>
        </Card>
      </div>
      <div className="row">
        <Card type={CardType.Dark}>
          <span>Dark Card</span>
        </Card>
      </div>
      <div className="row">
        <Card type={CardType.Dark} dropShadow>
          <span>Dark Card With Shadow</span>
        </Card>
      </div>
    </>
  )
}

export const Cards = Template.bind({})
