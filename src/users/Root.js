'use strict'

import React from 'react'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import ReduxToastr from 'react-redux-toastr'
import 'regenerator-runtime/runtime'

import configureStore from './configureStore'
import EditContainer from './containers/EditContainer'
import MainLayout from '../common/components/MainLayout'
import NewUserContainer from './containers/NewUserContainer'
import UsersContainer from './containers/UsersContainer'
import rootSaga from './sagas'
import { clearUser } from './actions/actionCreators'

const store = configureStore(window.__INITIAL_STATE__)
store.runSaga(rootSaga)

const Main = (props) => (
  <MainLayout showLogout {...props} />
)

const Root = () => (
  <Provider store={store}>
    <div>
      <Router history={browserHistory}>
        <Route path='users' component={Main}>
          <IndexRoute component={UsersContainer} />
          <Route path='new' component={NewUserContainer} onEnter={() => { store.dispatch(clearUser()) }} />
          <Route path='edit/:id' component={EditContainer} />
        </Route>
      </Router>
      <ReduxToastr position='top-center' confirmOptions={{okText: 'Yes', cancelText: 'Cancel'}} />
    </div>
  </Provider>
)

export default Root
