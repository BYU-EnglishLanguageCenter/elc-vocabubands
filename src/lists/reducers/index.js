'use strict'

import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import allLists from './allLists'
import currentList from './currentList'
import isAuthenticated from './isAuthenticated'
import listData from './listData'
import listType from './listType'
import rowsDone from './rowsDone'

export default combineReducers({
  allLists,
  currentList,
  isAuthenticated,
  listData,
  listType,
  rowsDone,
  routing: routerReducer
})
