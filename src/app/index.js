'use strict'

import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import configureStore from './configureStore'
import Home from './components/Home'
import ListContainer from './containers/ListContainer'
import MainLayout from './components/MainLayout'
import { test } from './sagas'

const initialState = {
  listID: 0,
  listData: [],
  rowsDone: []
}

const store = configureStore(initialState)
store.runSaga(test)

render(
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
