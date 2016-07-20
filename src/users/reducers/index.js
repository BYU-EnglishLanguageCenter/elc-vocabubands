'use strict'

import { combineReducers } from 'redux'
import editUser from './editUser'
import users from './users'

export default combineReducers({
  editUser,
  users
})
