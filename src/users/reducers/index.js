'use strict'

import { combineReducers } from 'redux'
import isAdmin from './isAdmin'
import user from './user'
import users from './users'

export default combineReducers({
  isAdmin,
  user,
  users
})
