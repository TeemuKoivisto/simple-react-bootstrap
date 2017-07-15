import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import configureStore from './store'
import Routes from './routes'
import registerServiceWorker from './registerServiceWorker';

// import 'bootstrap/dist/css/bootstrap.css'
// import 'font-awesome/css/font-awesome.css'
import './index.css'

const store = configureStore()

ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById('root')
)

registerServiceWorker()
