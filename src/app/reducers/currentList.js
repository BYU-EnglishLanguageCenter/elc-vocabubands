'use strict'

import { LOCATION_CHANGE } from 'react-router-redux'
import { FETCH_FAILED, LOAD_LIST_DATA } from '../actions/TYPES'

const currentList = (state = 0, action) => {
  switch (action.type) {
    case FETCH_FAILED:
      return 0
    case LOAD_LIST_DATA:
      return action.id
    case LOCATION_CHANGE:
      return 22
    default:
      return state
  }
}

export default currentList
