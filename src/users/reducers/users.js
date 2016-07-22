'use strict'

import { LOAD_USERS } from '../actions/TYPES'

const compareLastName = (a, b) => {
  if (a.last_name < b.last_name) {
    return -1
  } else if (a.last_name > b.last_name) {
    return 1
  } else {
    return 0
  }
}

const users = (state = [], action) => {
  switch (action.type) {
    case LOAD_USERS:
      action.users.sort(compareLastName)
      return action.users
    default:
      return state
  }
}

export default users
