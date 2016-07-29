'use strict'

import { CLEAR_LIST_DATA_WITH_CHANGES, LOAD_LIST_DATA_WITH_CHANGES } from '../actions/TYPES'

const listDataWithChanges = (state = [], action) => {
  switch (action.type) {
    case CLEAR_LIST_DATA_WITH_CHANGES:
      return []
    case LOAD_LIST_DATA_WITH_CHANGES:
      let index = 0
      let dataWithChanges = []

      action.data.map(row => {
        if (action.changes[index] !== row.id) {
          dataWithChanges = [...dataWithChanges, row]
        } else {
          index++
        }
      })

      return dataWithChanges

    default:
      return state
  }
}

export default listDataWithChanges
