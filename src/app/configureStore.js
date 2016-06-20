import { createStore } from 'redux'
import reducer from './reducers/reducers.js'

const configureStore = (initialState) => {
  const store = createStore(reducer, initialState, window.devToolsExtension && window.devToolsExtension())
  return store
}

export default configureStore
