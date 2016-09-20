'use strict'

import React from 'react'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import ReduxToastr from 'react-redux-toastr'
import 'regenerator-runtime/runtime'

import configureStore from './configureStore'
import EditContainer from './containers/EditContainer'
import FlashcardsContainer from './containers/FlashcardsContainer'
import FlashcardsPlayground from './components/FlashcardsPlayground'
import Home from './components/Home'
import ListBareContainer from './containers/ListBareContainer'
import ListContainer from './containers/ListContainer'
import ListEditContainer from './containers/ListEditContainer'
import ListLinksContainer from './containers/ListLinksContainer'
import MainLayout from '../common/components/MainLayout'
import Test from './components/Test'
import rootSaga from './sagas'

import { clearListDataWithChanges, fetchListData, setListType, toggleListData } from './actions/actionCreators'

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
          <Route path='avl' onEnter={() => { store.dispatch(setListType('avl')) }}>
            <IndexRoute component={ListLinksContainer} />
            <Route path=':id' onEnter={({params}) => { store.dispatch(fetchListData(params.id)) }} onLeave={() => { store.dispatch(clearListDataWithChanges()) }}>
              <IndexRoute component={ListContainer} />
              <Route path='bare' component={ListBareContainer} onEnter={() => { store.dispatch(toggleListData()) }} />
              <Route path='edit' component={ListEditContainer} onEnter={() => { store.dispatch(toggleListData()) }} />
              <Route path='flashcards' component={FlashcardsContainer} />
              <Route path='flashcards-playground' component={FlashcardsPlayground} />
            </Route>
          </Route>
          <Route path='preavl' component={ListLinksContainer} onEnter={() => { store.dispatch(setListType('preavl')) }} />
          <Route path='edit' component={EditContainer} />
          <Route path='test' component={Test} />
        </Route>
      </Router>
      <ReduxToastr position='top-center' />
    </div>
  </Provider>
)

export default Root
