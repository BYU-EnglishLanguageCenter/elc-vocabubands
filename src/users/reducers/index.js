'use strict'

import { combineReducers } from 'redux'
import { reducer as toastrReducer } from 'react-redux-toastr'
import isAdmin from './isAdmin'
import user from './user'
import users from './users'

export default combineReducers({
  isAdmin,
  toastr: toastrReducer,
  user,
  users
})
