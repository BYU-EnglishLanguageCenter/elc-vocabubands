'use strict'

import React from 'react'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import configureStore from './configureStore'
import MainLayout from '../common/components/MainLayout'
import Home from './components/Home'
import NewUser from './components/NewUser'

const store = configureStore(window.__INITIAL_STATE__)

const Main = (props) => (
  <MainLayout showLogout {...props} />
)

const Root = () => (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path='users' component={Main}>
        <IndexRoute component={Home} />
        <Route path='new' component={NewUser} />
      </Route>
    </Router>
  </Provider>
)

export default Root
