import { Header, HeaderProps } from './header'
import { Story } from '@storybook/react'

export default {
  title: 'Atoms/Headers',
  component: Header,
}

const Template: Story<HeaderProps> = () => {
  return (
    <>
      <h1 className="header">Sizes</h1>
      <div className="row">
        <Header type="big">Lorem ipsum dolor sit amet</Header>
        <Header type="medium">Lorem ipsum dolor sit amet</Header>
        <Header type="small">Lorem ipsum dolor sit amet</Header>
      </div>

      <h1 className="header">Colors</h1>
      <div className="row">
        <Header color="primary">Primary Header</Header>
        <Header color="secondary">Secondary Header</Header>
      </div>
    </>
  )
}

export const Headers = Template.bind({})
