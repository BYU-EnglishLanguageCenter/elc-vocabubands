'use strict'

import { LOAD_LIST_DATA } from '../actions/TYPES'

const currentList = (state = 0, action) => {
  switch (action.type) {
    case LOAD_LIST_DATA:
      return action.data.id
    default:
      return state
  }
}

export default currentList
