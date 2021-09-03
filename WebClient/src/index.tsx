import './index.css'
import 'react-notifications-component/dist/theme.css'

import ReactDOM from 'react-dom'
import ReactNotification from 'react-notifications-component'
import { Provider } from 'react-redux'
import store from './state/store'
import { RootComponent } from './root-component'

ReactDOM.render(
  <>
    <ReactNotification />

    <Provider store={store}>
      <RootComponent />
    </Provider>
  </>,
  document.getElementById('root')
)
