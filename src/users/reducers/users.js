'use strict'

import { sortBy } from 'lodash'
import { ADD_TO_USERS_LIST, LOAD_USERS, REMOVE_FROM_USERS_LIST, SORT_FIRST_NAME, SORT_LAST_NAME, SORT_LEVEL, SORT_TYPE, UPDATE_USERS_LIST } from '../actions/TYPES'

const users = (state = [], action) => {
  let index, n

  switch (action.type) {
    case ADD_TO_USERS_LIST:
      return [
        ...state,
        {
          ...action.user
        }
      ]

    case LOAD_USERS:
      return action.users

    case REMOVE_FROM_USERS_LIST:
      index = -1

      for (n = 0; n < state.length; n++) {
        if (state[n]._id === action.id) {
          index = n
        }
      }

      return [
        ...state.slice(0, index),
        ...state.slice(index + 1)
      ]

    case SORT_FIRST_NAME:
      return sortBy(state, ['first_name', 'last_name'])

    case SORT_LAST_NAME:
      return sortBy(state, ['last_name', 'first_name'])

    case SORT_LEVEL:
      return sortBy(state, ['level', 'first_name', 'last_name'])

    case SORT_TYPE:
      return sortBy(state, ['type', 'first_name', 'last_name'])

    case UPDATE_USERS_LIST:
      index = -1

      for (n = 0; n < state.length; n++) {
        if (state[n]._id === action.user._id) {
          index = n
        }
      }

      return [
        ...state.slice(0, index),
        {
          ...action.user
        },
        ...state.slice(index + 1)
      ]

    default:
      return state
  }
}

export default users
