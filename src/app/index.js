'use strict'

import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import 'regenerator-runtime/runtime'

import configureStore from './configureStore'
import Home from './components/Home'
import ListContainer from './containers/ListContainer'
import MainLayout from './components/MainLayout'
import rootSaga from './sagas'

const initialState = {
  currentList: 0,
  listData: [],
  rowsDone: [],
  allLists: []
}

const store = configureStore(initialState)
store.runSaga(rootSaga)

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
