import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import * as atoms from '../../components/atoms/atoms-index'
import * as molecules from '../../components/molecules/molecules-index'
import { DefaultTemplate } from '../../components/templates/templates-index'
import { HomePage, LoginPage, RegisterPage } from './../pages-index'

export type RootTemplateProps = {
  Header: any
  Content: any
  Footer: any
}

const RouterContent = () => {
  return (
    <Switch>
      <Route path="/login">
        <LoginPage />
      </Route>
      <Route path="/register">
        <RegisterPage />
      </Route>
      <Route path="/">
        <HomePage />
      </Route>
    </Switch>
  )
}

export const RootPage = () => (
  <Router>
    <DefaultTemplate
      Header={
        <molecules.MainNav>
          <atoms.MainNavItem path="/">Home</atoms.MainNavItem>
          <atoms.MainNavItem path="/login">Login</atoms.MainNavItem>
          <atoms.MainNavItem path="/register">Register</atoms.MainNavItem>
        </molecules.MainNav>
      }
      Content={<RouterContent></RouterContent>}
      Footer={<atoms.MainFooter></atoms.MainFooter>}
    />
  </Router>
)
