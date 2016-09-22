'use strict'

import { combineReducers } from 'redux'
import { reducer as toastrReducer } from 'react-redux-toastr'
import allLists from './allLists'
import currentList from './currentList'
import listChanges from './listChanges'
import listData from './listData'
import listDataWithChanges from './listDataWithChanges'
import listType from './listType'
import rowsDone from './rowsDone'
import showDataWithChanges from './showDataWithChanges'
import shuffledData from './shuffledData'

export default combineReducers({
  allLists,
  currentList,
  listChanges,
  listData,
  listDataWithChanges,
  listType,
  rowsDone,
  showDataWithChanges,
  shuffledData,
  toastr: toastrReducer
})
