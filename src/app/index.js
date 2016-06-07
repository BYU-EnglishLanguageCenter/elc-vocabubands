import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import MainLayout from './MainLayout.js'
import ListLayout from './ListLayout'

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path='/' component={MainLayout}>
      <IndexRoute component={ListLayout} />
    </Route>
  </Router>,
  document.getElementById('content')
)
