'use strict'

import { CLEAR_USER, LOAD_USER, UPDATE_FIRST_NAME, UPDATE_LAST_NAME, UPDATE_LEVEL, UPDATE_NET_ID, UPDATE_TYPE } from '../actions/TYPES'

const user = (state = {}, action) => {
  switch (action.type) {
    case CLEAR_USER:
      return {}
    case LOAD_USER:
      return action.user
    case UPDATE_FIRST_NAME:
      return {
        ...state,
        first_name: action.value
      }
    case UPDATE_LAST_NAME:
      return {
        ...state,
        last_name: action.value
      }
    case UPDATE_LEVEL:
      return {
        ...state,
        level: action.value
      }
    case UPDATE_NET_ID:
      return {
        ...state,
        net_id: action.value
      }
    case UPDATE_TYPE:
      return {
        ...state,
        type: action.value
      }
    default:
      return state
  }
}

export default user
