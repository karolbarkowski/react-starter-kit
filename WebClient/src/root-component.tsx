import './index.css'
import 'react-notifications-component/dist/theme.css'

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import { HomePage, LoginPage, RegisterPage } from './features/features-index'
import { RootTemplate } from './components/templates/templates-index'
import * as atoms from './components/atoms/atoms-index'
import { MainNavItem } from './components/atoms/main-nav/main-nav.types'
import { useAppSelector } from './hooks/redux-hooks'
import { selectUserName } from './state/slices/account-slice'

const footerLinks = [<Link to="#">First Link</Link>, <Link to="#">Second Link</Link>, <Link to="#">Third Link</Link>]

export const RootComponent = () => {
  const userName = useAppSelector(selectUserName)

  const header = (
    <atoms.MainNav userName={userName}>
      {[new MainNavItem('Home', '/'), new MainNavItem('Login', 'login'), new MainNavItem('Register', 'register')]}
    </atoms.MainNav>
  )

  const footer = (
    <atoms.MainFooter
      LeftColumnHeader="Left Column"
      LeftColumnLinks={footerLinks}
      MiddleColumnHeader="Middle Column"
      MiddleColumnLinks={footerLinks}
      RightColumnHeader="Right Column"
      RightColumnLinks={footerLinks}
    />
  )

  return (
    <Router>
      <RootTemplate header={header} footer={footer}>
        <Switch>
          <Route path="/login" component={LoginPage} />
          <Route path="/register" component={RegisterPage} />
          <Route path="/" component={HomePage} />
        </Switch>
      </RootTemplate>
    </Router>
  )
}
