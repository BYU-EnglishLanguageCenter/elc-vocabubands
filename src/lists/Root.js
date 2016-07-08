'use strict'

import React from 'react'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import 'regenerator-runtime/runtime'

import MainLayout from '../common/components/MainLayout'
import configureStore from './configureStore'
import Home from './components/Home'
import AllListsContainer from './containers/AllListsContainer'
import ListContainer from './containers/ListContainer'
import rootSaga from './sagas'

import { fetchAllLists } from './actions/actionCreators'

const store = configureStore(window.__INITIAL_STATE__)
store.runSaga(rootSaga)

const history = syncHistoryWithStore(browserHistory, store)

const Root = () => (
  <Provider store={store}>
    <Router history={history}>
      <Route path='lists' component={MainLayout}>
        <IndexRoute component={Home} />
        <Route path='avl' onEnter={() => { store.dispatch(fetchAllLists('avl')) }}>
          <IndexRoute component={AllListsContainer} />
          <Route path=':id' component={ListContainer} />
        </Route>
        <Route path='preavl' component={AllListsContainer} onEnter={() => { store.dispatch(fetchAllLists('preavl')) }} />
      </Route>
    </Router>
  </Provider>
)

export default Root
