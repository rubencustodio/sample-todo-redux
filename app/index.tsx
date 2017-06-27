import * as React from "react"
import * as ReactDOM from 'react-dom'

import { Provider } from 'react-redux'
import { createStore } from 'redux'
import todoApp from './src/reducers'
import App from './src/app'

let store = createStore(todoApp)


import * as Clipboard from 'clipboard';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)