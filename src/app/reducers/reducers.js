import { LOAD_LIST_DATA } from '../actions/actionTypes'

const initialState = {
  listData: []
}

const listData = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_LIST_DATA:
      return Object.assign({}, state, {
        listData: [
          ...action.data
        ]
      })
    default:
      return state
  }
}

export default listData
