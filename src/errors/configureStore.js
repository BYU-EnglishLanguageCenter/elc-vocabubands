'use strict'

import { createStore } from 'redux'
import rootReducer from './reducers'

const configureStore = (initialState) => {
  const store = createStore(
    rootReducer,
    initialState,
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )

  return store
}

export default configureStore
