'use strict'

import { LOAD_ALL_LISTS } from '../actions/TYPES'

const allLists = (state = [], action) => {
  switch (action.type) {
    case LOAD_ALL_LISTS:
      return action.data
    default:
      return state
  }
}

export default allLists
