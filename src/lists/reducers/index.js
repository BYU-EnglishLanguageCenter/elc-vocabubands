'use strict'

import { combineReducers } from 'redux'
import { reducer as toastrReducer } from 'react-redux-toastr'
import allLists from './allLists'
import currentList from './currentList'
import isAuthenticated from './isAuthenticated'
import listChanges from './listChanges'
import listData from './listData'
import listDataWithChanges from './listDataWithChanges'
import listType from './listType'
import rowsDone from './rowsDone'
import showDataWithChanges from './showDataWithChanges'

export default combineReducers({
  allLists,
  currentList,
  isAuthenticated,
  listChanges,
  listData,
  listDataWithChanges,
  listType,
  rowsDone,
  showDataWithChanges,
  toastr: toastrReducer
})
