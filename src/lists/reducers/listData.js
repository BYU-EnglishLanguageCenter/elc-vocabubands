'use strict'

import { LOAD_LIST_DATA, UPDATE_BUILDING_WORDS, UPDATE_DEFINITION, UPDATE_SUPPORT_WORDS, UPDATE_WORD } from '../actions/TYPES'

const listData = (state = [], action) => {
  switch (action.type) {
    case LOAD_LIST_DATA:
      return [...action.data.data]

    case UPDATE_BUILDING_WORDS:
      return [
        ...state.slice(0, action.index),
        {
          ...state[action.index],
          building_words: action.value
        },
        ...state.slice(action.index + 1)
      ]

    case UPDATE_DEFINITION:
      return [
        ...state.slice(0, action.index),
        {
          ...state[action.index],
          definition: action.value
        },
        ...state.slice(action.index + 1)
      ]

    case UPDATE_SUPPORT_WORDS:
      return [
        ...state.slice(0, action.index),
        {
          ...state[action.index],
          support_words: action.value
        },
        ...state.slice(action.index + 1)
      ]

    case UPDATE_WORD:
      return [
        ...state.slice(0, action.index),
        {
          ...state[action.index],
          word: action.value
        },
        ...state.slice(action.index + 1)
      ]
    default:
      return state
  }
}

export default listData
