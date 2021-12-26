'use strict'
// External imports
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import * as serviceWorker from './serviceWorker'

// Local imports
import 'normalize.css/normalize.css'
import { store } from '@store/store'
import App from '@app/App.jsx'

// Constants definition
const MOUNT_NODE = document.getElementById('root')

// Rendering the APP
render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  MOUNT_NODE
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
