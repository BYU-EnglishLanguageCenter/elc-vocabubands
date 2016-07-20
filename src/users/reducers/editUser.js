'use strict'

import { LOAD_EDIT_USER } from '../actions/TYPES'

const editUser = (state = {}, action) => {
  switch (action.type) {
    case LOAD_EDIT_USER:
      return action.user
    default:
      return state
  }
}

export default editUser
