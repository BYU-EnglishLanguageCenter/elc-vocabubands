'use strict'

import React from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import MainLayout from '../common/components/MainLayout'
import Home from './components/Home'
import NewUser from './components/NewUser'

const Main = (props) => (
  <MainLayout showLogout {...props} />
)

const Root = () => (
  <Router history={browserHistory}>
    <Route path='users' component={Main}>
      <IndexRoute component={Home} />
      <Route path='new' component={NewUser} />
    </Route>
  </Router>
)

export default Root
