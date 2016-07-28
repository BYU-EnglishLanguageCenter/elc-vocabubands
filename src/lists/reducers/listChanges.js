'use strict'

import { LOAD_LIST_CHANGES } from '../actions/TYPES'

const listChanges = (state = [], action) => {
  switch (action.type) {
    case LOAD_LIST_CHANGES:
      return action.data !== null ? [...action.data.rows] : []
    default:
      return state
  }
}

export default listChanges
