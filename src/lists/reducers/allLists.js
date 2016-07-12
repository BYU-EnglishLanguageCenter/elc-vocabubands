'use strict'

import { LOAD_ALL_LISTS } from '../actions/TYPES'

const allLists = (state = [], action) => {
  switch (action.type) {
    case LOAD_ALL_LISTS:
      switch (action.listType) {
        case 'avl':
          return [...action.data.avl]
        case 'preavl':
          return [...action.data.preavl]
        default:
          return state
      }
    default:
      return state
  }
}

export default allLists
