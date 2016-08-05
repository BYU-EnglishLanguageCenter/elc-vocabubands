'use strict'

import { combineReducers } from 'redux'
import isAuthenticated from './isAuthenticated'
import status from './status'

export default combineReducers({
  isAuthenticated,
  status
})
