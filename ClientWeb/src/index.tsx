import './index.scss'
import './vendor.scss'
import '@hookstate/devtools'
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { HomePage, LoginPage, RegisterPage } from './pages/pages-index'
import { MainNav } from './components/molecules/molecules-index'
import { MainFooter } from './components/atoms/atoms-index'
import { MainNavItem } from './components/atoms/atoms-index'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <div className="container">
        <div className="row">
          <div className="twelve columns">
            <MainNav>
              <MainNavItem path="/">Home</MainNavItem>
              <MainNavItem path="/login">Login</MainNavItem>
              <MainNavItem path="/register">Register</MainNavItem>
            </MainNav>
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
            <MainFooter />
          </div>
        </div>
      </div>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)
