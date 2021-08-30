import { Story } from '@storybook/react'
import { Header } from './header'
import { HeaderProps, HeaderType } from './header.types'

export default {
  title: 'Atoms',
  component: Header,
}

const Template: Story<HeaderProps> = () => {
  return (
    <>
      <div className="row">
        <Header type={HeaderType.Big}>Lorem ipsum dolor sit amet</Header>
      </div>
      <div className="row">
        <Header type={HeaderType.Medium}>Lorem ipsum dolor sit amet</Header>
      </div>
      <div className="row">
        <Header type={HeaderType.Small}>Lorem ipsum dolor sit amet</Header>
      </div>
    </>
  )
}

export const Headers = Template.bind({})
