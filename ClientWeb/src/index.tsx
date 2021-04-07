import './index.css'
import '@hookstate/devtools'
import React from 'react'
import ReactDOM from 'react-dom'
import { LoginPage, RegisterPage } from './pages/'

ReactDOM.render(
  <React.StrictMode>
    <div className="container">
      <div className="row">
        <div className="one-half column">
          <LoginPage />
        </div>
        <div className="one-half column">
          <RegisterPage />
        </div>
      </div>
      <div className="row">
        <div className="twelve columns">
          <small>
            You are running this application in <b>{process.env.NODE_ENV}</b> mode.
          </small>
        </div>
      </div>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
)
