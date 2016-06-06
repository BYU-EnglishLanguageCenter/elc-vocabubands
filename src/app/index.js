import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import MainLayout from './MainLayout.js'
import ListLayout from './ListLayout'

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path='/' component={MainLayout} />
    <Route path='list' component={ListLayout} />
  </Router>,
  document.getElementById('content')
)
