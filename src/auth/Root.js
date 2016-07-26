'use strict'

import React from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import MainLayout from '../common/components/MainLayout'
import Admin from './components/Admin'
import Home from './components/Home'

const Main = (props) => (
  <MainLayout showLogout={false} {...props} />
)

const Root = () => (
  <Router history={browserHistory}>
    <Route path='/' component={Main}>
      <IndexRoute component={Home} />
      <Route path='/admin' component={Admin} />
    </Route>
  </Router>
)

export default Root
