'use strict'

import { compose, createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import reducer from './reducers/reducers.js'

const configureStore = (initialState) => {
  const sagaMiddleware = createSagaMiddleware()
  const store = createStore(
    reducer,
    initialState,
    compose(
      applyMiddleware(sagaMiddleware),
      window.devToolsExtension ? window.devToolsExtension() : f => f
    )
  )
  store.runSaga = sagaMiddleware.run
  return store
}

export default configureStore
