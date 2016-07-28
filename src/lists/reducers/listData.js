'use strict'

import { LOAD_LIST_DATA, UPDATE_LIST_DATA } from '../actions/TYPES'

const listData = (state = [], action) => {
  switch (action.type) {
    case LOAD_LIST_DATA:
      return [...action.data.data]
    // case UPDATE_LIST_DATA:
    //   let rowsDone = action.rowsDone
    //   const updatedListData = state.map(row => {
    //     if (rowsDone[0] === row.id) {
    //       return row
    //     } else {
    //       rowsDone.shift()
    //     }
    //   })
    //
    //   console.log(updatedListData)
    //   return state
    default:
      return state
  }
}

export default listData
