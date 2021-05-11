import { MemoryRouter } from 'react-router-dom'
import { MainNavItem } from './main-nav-item'

export default {
  title: 'Atoms/MainNavItem',
  component: MainNavItem,
  decorators: [
    (Story: any) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
}

export const NavItem = () => <MainNavItem path="#">Navigation Item</MainNavItem>
