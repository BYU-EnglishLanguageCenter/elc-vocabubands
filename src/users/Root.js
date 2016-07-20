'use strict'

import React from 'react'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import 'regenerator-runtime/runtime'

import configureStore from './configureStore'
import Edit from './components/Edit'
import Home from './components/Home'
import MainLayout from '../common/components/MainLayout'
import NewUser from './components/NewUser'
import rootSaga from './sagas'
import { fetchEditUser } from './actions/actionCreators'

const store = configureStore(window.__INITIAL_STATE__)
store.runSaga(rootSaga)

const Main = (props) => (
  <MainLayout showLogout {...props} />
)

const Root = () => (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path='users' component={Main}>
        <IndexRoute component={Home} />
        <Route path='new' component={NewUser} />
        <Route path='edit/:id' component={Edit} onEnter={({params}) => { store.dispatch(fetchEditUser(params.id)) }} />
      </Route>
    </Router>
  </Provider>
)

export default Root
