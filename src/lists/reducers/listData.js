'use strict'

import { LOAD_LIST_DATA } from '../actions/TYPES'

const listData = (state = [], action) => {
  switch (action.type) {
    case LOAD_LIST_DATA:
      return [...action.data.data]
    default:
      return state
  }
}

export default listData
