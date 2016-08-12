'use strict'

import { SORT_FIRST_NAME, SORT_LAST_NAME, SORT_LEVEL, SORT_TYPE } from '../actions/TYPES'

const sortBy = (state = 'firstName', action) => {
  switch (action.type) {
    case SORT_FIRST_NAME:
      return 'firstName'

    case SORT_LAST_NAME:
      return 'lastName'

    case SORT_LEVEL:
      return 'level'

    case SORT_TYPE:
      return 'type'

    default:
      return state
  }
}

export default sortBy
