'use strict'

import React from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import MainLayout from '../common/components/MainLayout'
import Admin from './components/Admin'
import Home from './components/Home'
import Login from './components/Login'

const MainWithLogout = (props) => (
  <MainLayout showLogout {...props} />
)

const Root = () => (
  <Router history={browserHistory}>
    <Route path='/' component={MainLayout}>
      <IndexRoute component={Login} />
    </Route>
    <Route path='/admin' component={MainWithLogout}>
      <IndexRoute component={Admin} />
    </Route>
    <Route path='/home' component={MainWithLogout}>
      <IndexRoute component={Home} />
    </Route>
  </Router>
)

export default Root
