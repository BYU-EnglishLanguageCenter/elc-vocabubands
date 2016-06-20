import { LOAD_LIST_DATA, ROW_DONE, ROW_UNDO } from './actionTypes'

export const loadListData = (data, id) => {
  return {
    type: LOAD_LIST_DATA,
    data,
    id
  }
}

export const rowDone = (id) => {
  return {
    type: ROW_DONE,
    id
  }
}

export const rowUndo = (id) => {
  return {
    type: ROW_UNDO,
    id
  }
}
