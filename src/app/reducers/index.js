'use strict'

import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import allLists from './allLists'
import currentList from './currentList'
import listData from './listData'
import rowsDone from './rowsDone'

export default combineReducers({
  allLists,
  currentList,
  listData,
  rowsDone,
  routing: routerReducer
})
