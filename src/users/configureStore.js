'use strict'

import { compose, createStore } from 'redux'
import rootReducer from './reducers'

const configureStore = (initialState) => {
  const store = createStore(
    rootReducer,
    initialState,
    compose(
      window.devToolsExtension ? window.devToolsExtension() : f => f
    )
  )
  
  return store
}

export default configureStore
