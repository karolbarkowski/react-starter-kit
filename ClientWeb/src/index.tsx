import 'primereact/resources/themes/saga-blue/theme.css'
import 'primereact/resources/primereact.min.css'
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css'
import './_theme.scss'
import './index.scss'

import '@hookstate/devtools'
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { HomePage, LoginPage, RegisterPage } from './pages/pages-index'
import { DefaultTemplate } from './components/templates/templates-index'
import ReactNotification from 'react-notifications-component'
import * as molecules from './components/molecules/molecules-index'
import * as atoms from './components/atoms/atoms-index'

const defaultLayoutHeader = (
  <molecules.MainNav>
    <atoms.MainNavItem path="/">Home</atoms.MainNavItem>
    <atoms.MainNavItem path="/login">Login</atoms.MainNavItem>
    <atoms.MainNavItem path="/register">Register</atoms.MainNavItem>
  </molecules.MainNav>
)

const defaultLayoutFooter = <atoms.MainFooter></atoms.MainFooter>

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ReactNotification />
      <DefaultTemplate header={defaultLayoutHeader} footer={defaultLayoutFooter}>
        <Switch>
          <Route path="/login" component={LoginPage} />
          <Route path="/register" component={RegisterPage} />
          <Route path="/" component={HomePage} />
        </Switch>
      </DefaultTemplate>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)
