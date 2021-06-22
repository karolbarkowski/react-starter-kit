import { MemoryRouter } from 'react-router-dom'
import { MainNavItem } from './main-nav-item'

export default {
  title: 'Atoms',
  component: MainNavItem,
  decorators: [
    (Story: any) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
}

export const RootNavigationItem = () => <MainNavItem path="#">Navigation Item</MainNavItem>
