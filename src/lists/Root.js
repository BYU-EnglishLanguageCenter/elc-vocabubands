'use strict'

import React from 'react'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import ReduxToastr from 'react-redux-toastr'
import 'regenerator-runtime/runtime'

import MainLayout from '../common/components/MainLayout'
import configureStore from './configureStore'
import Home from './components/Home'
import AllListsContainer from './containers/AllListsContainer'
import ListContainer from './containers/ListContainer'
import rootSaga from './sagas'

import { clearListDataWithChanges, fetchAllLists, fetchListData } from './actions/actionCreators'

const store = configureStore(window.__INITIAL_STATE__)
store.runSaga(rootSaga)

const Main = (props) => (
  <MainLayout showLogout {...props} />
)

const Root = () => (
  <Provider store={store}>
    <div>
      <Router history={browserHistory}>
        <Route path='lists' component={Main}>
          <IndexRoute component={Home} />
          <Route path='avl' onEnter={() => { store.dispatch(fetchAllLists('avl')) }}>
            <IndexRoute component={AllListsContainer} />
            <Route
              path=':id'
              component={ListContainer}
              onEnter={({params}) => { store.dispatch(fetchListData(params.id)) }}
              onLeave={() => { store.dispatch(clearListDataWithChanges()) }}
            />
          </Route>
          <Route path='preavl' component={AllListsContainer} onEnter={() => { store.dispatch(fetchAllLists('preavl')) }} />
        </Route>
      </Router>
      <ReduxToastr position='top-center' />
    </div>
  </Provider>
)

export default Root
