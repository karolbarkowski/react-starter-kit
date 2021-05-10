import { Header, HeaderProps } from './header'
import { Story } from '@storybook/react'

export default {
  title: 'Atoms/Header',
  component: Header,
}

const Template: Story<HeaderProps> = (args) => <Header {...args}>Header</Header>

export const Big = Template.bind({})
Big.args = {
  type: 'big',
}

export const Medium = Template.bind({})
Medium.args = {
  type: 'medium',
}

export const Small = Template.bind({})
Small.args = {
  type: 'small',
}
