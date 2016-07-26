'use strict'

import collection from 'lodash'
import { LOAD_USERS, SORT_FIRST_NAME, SORT_LAST_NAME, SORT_LEVEL, SORT_TYPE } from '../actions/TYPES'

const users = (state = [], action) => {
  switch (action.type) {
    case LOAD_USERS:
      return action.users
    case SORT_FIRST_NAME:
      return collection.sortBy(state, ['first_name', 'last_name'])
    case SORT_LAST_NAME:
      return collection.sortBy(state, ['last_name', 'first_name'])
    case SORT_LEVEL:
      return collection.sortBy(state, ['level', 'first_name', 'last_name'])
    case SORT_TYPE:
      return collection.sortBy(state, ['type', 'first_name', 'last_name'])
    default:
      return state
  }
}

export default users
