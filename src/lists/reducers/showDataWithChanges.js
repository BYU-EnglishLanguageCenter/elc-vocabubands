'use strict'

import { CLEAR_LIST_DATA_WITH_CHANGES, TOGGLE_LIST_DATA } from '../actions/TYPES'

const showDataWithChanges = (state = true, action) => {
  switch (action.type) {
    case CLEAR_LIST_DATA_WITH_CHANGES:
      return true
    case TOGGLE_LIST_DATA:
      return !state
    default:
      return state
  }
}

export default showDataWithChanges
