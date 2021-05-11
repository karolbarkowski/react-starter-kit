import { Header, HeaderProps } from './header'
import { Story } from '@storybook/react'

export default {
  title: 'Atoms/Headers',
  component: Header,
}

const Template: Story<HeaderProps> = (args) => {
  return (
    <>
      <Header type="big" {...args}>
        Lorem ipsum dolor sit amet
      </Header>
      <Header type="medium" {...args}>
        Lorem ipsum dolor sit amet
      </Header>
      <Header type="small" {...args}>
        Lorem ipsum dolor sit amet
      </Header>
    </>
  )
}

export const Primary = Template.bind({})
Primary.args = {}

export const Secondary = Template.bind({})
Secondary.args = {
  color: 'secondary',
}
