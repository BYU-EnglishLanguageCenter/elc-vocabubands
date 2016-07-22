'use strict'

import React from 'react'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import 'regenerator-runtime/runtime'

import configureStore from './configureStore'
import EditContainer from './containers/EditContainer'
import MainLayout from '../common/components/MainLayout'
import NewUser from './components/NewUser'
import UsersContainer from './containers/UsersContainer'
import rootSaga from './sagas'
import { fetchEditUser, fetchUsers } from './actions/actionCreators'

const store = configureStore(window.__INITIAL_STATE__)
store.runSaga(rootSaga)

const Main = (props) => (
  <MainLayout showLogout {...props} />
)

const Root = () => (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path='users' component={Main}>
        <IndexRoute component={UsersContainer} onEnter={() => { store.dispatch(fetchUsers()) }} />
        <Route path='new' component={NewUser} />
        <Route path='edit/:id' component={EditContainer} onEnter={({params}) => { store.dispatch(fetchEditUser(params.id)) }} />
      </Route>
    </Router>
  </Provider>
)

export default Root
