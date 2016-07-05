import { FETCH_FAILED, FETCH_LIST_DATA, LOAD_AVL, LOAD_LIST_DATA, ROW_DONE } from './TYPES'

export const fetchFailed = (err) => {
  return {
    type: FETCH_FAILED,
    err
  }
}

export const fetchListData = (id) => {
  return {
    type: FETCH_LIST_DATA,
    id
  }
}

export const loadAVL = (data) => {
  return {
    type: LOAD_AVL,
    data
  }
}

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
