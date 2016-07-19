'use strict'

import React from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import MainLayout from '../common/components/MainLayout'
import Home from './components/Home'

const Main = (props) => (
  <MainLayout showLogout={false} {...props} />
)

const Root = () => (
  <Router history={browserHistory}>
    <Route path='/' component={Main}>
      <IndexRoute component={Home} />
    </Route>
  </Router>
)

export default Root
