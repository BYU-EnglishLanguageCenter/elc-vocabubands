'use strict'

import React from 'react'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import 'regenerator-runtime/runtime'

import configureStore from './configureStore'
import Home from './components/Home'
import ListContainer from './containers/ListContainer'
import MainLayout from './components/MainLayout'
import rootSaga from './sagas'

const store = configureStore(window.__INITIAL_STATE__)
store.runSaga(rootSaga)

const history = syncHistoryWithStore(browserHistory, store)
// history.listen(location => store.dispatch({ type: 'ROUTE_CHANGE' }))

const enter = () => {
  store.dispatch({ type: 'ENTERED_LIST' })
  console.log(store.getState().routing.locationBeforeTransitions)
}

const Root = () => (
  <Provider store={store}>
    <Router history={history}>
      <Route path='/lists/avl' component={MainLayout} >
        <IndexRoute component={Home} />
        <Route path=':id' component={ListContainer} onEnter={enter} />
      </Route>
    </Router>
  </Provider>
)

export default Root
