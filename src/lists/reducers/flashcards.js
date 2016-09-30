'use strict'

import { DECREMENT_INDEX, INCREMENT_INDEX, LOAD_SHUFFLED_DATA, UPDATE_INDEX } from '../actions/TYPES'

const initialState = {
  index: 0,
  displayIndex: 1,
  shuffledData: []
}

const flashcards = (state = initialState, action) => {
  switch (action.type) {
    case DECREMENT_INDEX:
      return {
        ...state,
        displayIndex: state.displayIndex - 1,
        index: state.index - 1
      }

    case INCREMENT_INDEX:
      return {
        ...state,
        displayIndex: state.displayIndex + 1,
        index: state.index + 1
      }

    case LOAD_SHUFFLED_DATA:
      return {
        ...state,
        shuffledData: action.data
      }

    case UPDATE_INDEX:
      if (action.index > 0 && action.index <= state.shuffledData.length) {
        return {
          ...state,
          displayIndex: parseInt(action.index, 10),
          index: action.index - 1
        }
      }

      return {
        ...state,
        displayIndex: action.index
      }

    default:
      return state
  }
}

export default flashcards
