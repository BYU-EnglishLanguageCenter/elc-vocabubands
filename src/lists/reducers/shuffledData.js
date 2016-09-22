'use strict'

import { LOAD_SHUFFLED_DATA } from '../actions/TYPES'

const shuffledData = (state = [], action) => {
  switch (action.type) {
    case LOAD_SHUFFLED_DATA:
      return action.data
    default:
      return state
  }
}

export default shuffledData
