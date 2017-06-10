import React from 'react'
import ReactDom from 'react-dom'

import {Provider} from 'react-redux'
import store from './reducers/rootReducer'
import Twitter from './components'

ReactDom.render(
  <Provider store={store}>
    <Twitter />
  </Provider>
  , document.getElementById('app'))