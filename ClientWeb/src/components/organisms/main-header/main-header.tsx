import { MainNav } from './../../molecules/molecules-index'
import * as atoms from './../../atoms/atoms-index'

export const MainHeader = () => {
  return (
    <>
      <MainNav>
        <atoms.MainNavItem path="/">Home</atoms.MainNavItem>
        <atoms.MainNavItem path="/login">Login</atoms.MainNavItem>
        <atoms.MainNavItem path="/register">Register</atoms.MainNavItem>
      </MainNav>

      <atoms.ThemeSwitch />
    </>
  )
}
