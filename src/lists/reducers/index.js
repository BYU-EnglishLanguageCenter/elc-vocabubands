'use strict'

import { combineReducers } from 'redux'
import { reducer as toastrReducer } from 'react-redux-toastr'
import allLists from './allLists'
import currentList from './currentList'
import isAuthenticated from './isAuthenticated'
import listChanges from './listChanges'
import listData from './listData'
import listType from './listType'
import rowsDone from './rowsDone'

export default combineReducers({
  allLists,
  currentList,
  isAuthenticated,
  listChanges,
  listData,
  listType,
  rowsDone,
  toastr: toastrReducer
})
