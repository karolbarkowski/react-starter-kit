import { ThemeSwitch as ThemeSwitchControl } from './theme-switch'
import { Story } from '@storybook/react'

export default {
  title: 'Atoms',
  component: ThemeSwitchControl,
}

const Template: Story = (args) => <ThemeSwitchControl {...args} />

export const ThemeSwitch = Template.bind({})
