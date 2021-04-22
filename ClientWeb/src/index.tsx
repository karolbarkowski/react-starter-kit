import './index.scss'
import './vendor.scss'
import '@hookstate/devtools'
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { HomePage, LoginPage, RegisterPage } from './pages'
import { MainNav, MainFooter } from './components'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <div className="container">
        <div className="row">
          <div className="twelve columns">
            <MainNav />
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
