import { FETCH_FAILED, FETCH_LIST_DATA, LOAD_LIST_DATA, ROW_DONE } from './actionTypes'

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