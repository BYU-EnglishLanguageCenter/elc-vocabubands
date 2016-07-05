'use strict'

import { LOAD_AVL } from '../actions/TYPES'

const allLists = (state = [], action) => {
  switch (action.type) {
    case LOAD_AVL:
      return [...action.data]
    default:
      return state
  }
}

export default allLists
