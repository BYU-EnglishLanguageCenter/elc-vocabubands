'use strict'

import { CLEAR_ROWS_DONE, LOAD_LIST_DATA, ROW_DONE } from '../actions/TYPES'

const rowsDone = (state = [], action) => {
  switch (action.type) {
    case CLEAR_ROWS_DONE:
      return []
    case LOAD_LIST_DATA:
      return []
    case ROW_DONE:
      const index = state.indexOf(action.id)
      if (index === -1) {
        return [...state, action.id]
      } else {
        return [...state.slice(0, index), ...state.slice(index + 1)]
      }
    default:
      return state
  }
}

export default rowsDone
