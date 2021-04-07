import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import '@hookstate/devtools'
import { LoginPage } from './pages/login-page/login-page'

ReactDOM.render(
  <React.StrictMode>
    <LoginPage />

    <div style={{ textAlign: 'center', margin: '50px' }}>
      <small>
        You are running this application in <b>{process.env.NODE_ENV}</b> mode.
      </small>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
)
