'use strict'

import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import Home from './Home.js'
import ListContainer from './ListContainer'
import MainLayout from './MainLayout.js'

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path='/' component={MainLayout}>
      <IndexRoute component={Home} />
      <Route path='list/:id' component={ListContainer} />
    </Route>
  </Router>,
  document.getElementById('content')
)
