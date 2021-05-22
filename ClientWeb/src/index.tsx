import './_theme.scss'
import './index.scss'
import '@hookstate/devtools'
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { HomePage, LoginPage, RegisterPage } from './pages/pages-index'
import { MainNav } from './components/molecules/molecules-index'
import * as atoms from './components/atoms/atoms-index'

ReactDOM.render(
  <div>
    <React.StrictMode>
      <Router>
        <div className="container">
          <div className="row">
            <div className="twelve columns">
              <MainNav>
                <atoms.MainNavItem path="/">Home</atoms.MainNavItem>
                <atoms.MainNavItem path="/login">Login</atoms.MainNavItem>
                <atoms.MainNavItem path="/register">Register</atoms.MainNavItem>
              </MainNav>

              <atoms.ThemeSwitch />
            </div>
          </div>

          <div className="row">
            <div className="twelve columns">
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
            </div>
          </div>

          <div className="row">
            <div className="twelve columns">
              <atoms.MainFooter />
            </div>
          </div>
        </div>
      </Router>
    </React.StrictMode>
  </div>,
  document.getElementById('root')
)
