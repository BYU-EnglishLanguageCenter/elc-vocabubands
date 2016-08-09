'use strict'

import { SET_LIST_TYPE } from '../actions/TYPES'

const listType = (state = '', action) => {
  switch (action.type) {
    case SET_LIST_TYPE:
      return action.listType
    default:
      return state
  }
}

export default listType
