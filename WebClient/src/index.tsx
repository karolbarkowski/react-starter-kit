import './index.css'
import 'react-notifications-component/dist/theme.css'

import '@hookstate/devtools'
import ReactDOM from 'react-dom'
import ReactNotification from 'react-notifications-component'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import { HomePage, LoginPage, RegisterPage } from './pages/pages-index'
import { RootTemplate } from './components/templates/templates-index'
import * as atoms from './components/atoms/atoms-index'
import { MainNavItem } from './components/atoms/main-nav/main-nav.types'

const defaultLayoutHeader = (
  <atoms.MainNav>{[new MainNavItem('Home', '/'), new MainNavItem('Login', 'login'), new MainNavItem('Register', 'register')]}</atoms.MainNav>
)

const footerLinks = [<Link to="#">First Link</Link>, <Link to="#">Second Link</Link>, <Link to="#">Third Link</Link>]
const defaultLayoutFooter = (
  <atoms.MainFooter
    LeftColumnHeader="Left Column"
    LeftColumnLinks={footerLinks}
    MiddleColumnHeader="Middle Column"
    MiddleColumnLinks={footerLinks}
    RightColumnHeader="Right Column"
    RightColumnLinks={footerLinks}
  />
)

ReactDOM.render(
  <>
    <ReactNotification />

    <Router>
      <RootTemplate header={defaultLayoutHeader} footer={defaultLayoutFooter}>
        <Switch>
          <Route path="/login" component={LoginPage} />
          <Route path="/register" component={RegisterPage} />
          <Route path="/" component={HomePage} />
        </Switch>
      </RootTemplate>
    </Router>
  </>,
  document.getElementById('root')
)
