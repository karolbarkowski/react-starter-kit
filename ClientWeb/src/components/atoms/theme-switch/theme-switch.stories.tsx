import { ThemeSwitch } from './theme-switch'
import { Story } from '@storybook/react'

export default {
  title: 'Atoms/Theme Switch',
  component: ThemeSwitch,
}

const Template: Story = (args) => <ThemeSwitch {...args} />

export const Switch = Template.bind({})
