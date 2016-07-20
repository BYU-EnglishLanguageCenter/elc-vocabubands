'use strict'

import { LOAD_USERS } from '../actions/TYPES'

const users = (state = [], action) => {
  switch (action.type) {
    case LOAD_USERS:
      return state
    default:
      return state
  }
}

export default users
