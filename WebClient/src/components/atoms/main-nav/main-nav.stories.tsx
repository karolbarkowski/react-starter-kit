import { Story } from '@storybook/react'
import { MemoryRouter } from 'react-router-dom'
import { MainNav } from './main-nav'
import { MainNavItem, MainNavProps } from './main-nav.types'

export default {
  title: 'Atoms',
  component: MainNav,
  decorators: [
    (Story: any) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
}

const Template: Story<MainNavProps> = () => {
  return <MainNav userName={'UserName'}>{[new MainNavItem('Link 1', '/'), new MainNavItem('Link 2', '/'), new MainNavItem('Link 3', '/')]}</MainNav>
}

export const MainNavigation = Template.bind({})
