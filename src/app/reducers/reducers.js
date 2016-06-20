import { LOAD_LIST_DATA } from '../actions/actionTypes'

const initialState = {
  listData: []
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_LIST_DATA:
      return ({
        ...state,
        listData: [
          ...action.data
        ]
      })
    default:
      return state
  }
}

export default reducer
