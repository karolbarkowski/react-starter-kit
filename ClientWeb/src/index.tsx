import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import '@hookstate/devtools'
import { LoginPage } from './pages/login-page/login-page'
import { Layout, Menu } from 'antd'

const { Header, Content, Footer } = Layout

ReactDOM.render(
  <React.StrictMode>
    <Layout>
      <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
          <Menu.Item key="1">nav 1</Menu.Item>
          <Menu.Item key="2">nav 2</Menu.Item>
          <Menu.Item key="3">nav 3</Menu.Item>
        </Menu>
      </Header>
      <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
        <div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>
          <LoginPage />
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        <small>
          You are running this application in <b>{process.env.NODE_ENV}</b> mode.
        </small>
      </Footer>
    </Layout>
  </React.StrictMode>,
  document.getElementById('root')
)
