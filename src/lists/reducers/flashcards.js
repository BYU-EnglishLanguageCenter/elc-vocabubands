'use strict'

import { DECREMENT_INDEX, INCREMENT_INDEX, LOAD_SHUFFLED_DATA } from '../actions/TYPES'

const initialState = {
  index: 0,
  shuffledData: []
}

const flashcards = (state = initialState, action) => {
  switch (action.type) {
    case DECREMENT_INDEX:
      return {
        ...state,
        index: state.index - 1
      }

    case INCREMENT_INDEX:
      return {
        ...state,
        index: state.index + 1
      }

    case LOAD_SHUFFLED_DATA:
      return {
        ...state,
        shuffledData: action.data
      }

    default:
      return state
  }
}

export default flashcards
