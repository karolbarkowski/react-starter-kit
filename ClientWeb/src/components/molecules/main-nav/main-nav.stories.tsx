import { MainNavItem } from '../../atoms/atoms-index'
import { MainNav } from './main-nav'

export default {
  title: 'Molecules/MainNav',
  component: MainNav,
}

export const NavItem = () => {
  return (
    <MainNav>
      <MainNavItem path="#">Menu Item 1</MainNavItem>
      <MainNavItem path="#">Menu Item 2</MainNavItem>
      <MainNavItem path="#">Menu Item 3</MainNavItem>
    </MainNav>
  )
}
