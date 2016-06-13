'use strict'

import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import Home from './components/Home'
import ListContainer from './containers/ListContainer'
import MainLayout from './components/MainLayout'
import listData from './reducers/reducers'

const store = createStore(listData)

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path='/' component={MainLayout}>
        <IndexRoute component={Home} />
        <Route path='list/:id' component={ListContainer} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('content')
)
