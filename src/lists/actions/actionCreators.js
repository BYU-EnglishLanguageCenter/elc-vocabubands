import { FETCH_ALL_LISTS, FETCH_FAILED, FETCH_LIST_DATA, LOAD_ALL_LISTS, LOAD_LIST_DATA, ROW_DONE } from './TYPES'

export const fetchAllLists = (listType) => {
  return {
    type: FETCH_ALL_LISTS,
    listType
  }
}

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

export const loadAllLists = (data) => {
  return {
    type: LOAD_ALL_LISTS,
    data
  }
}

export const loadListData = (data) => {
  return {
    type: LOAD_LIST_DATA,
    data
  }
}

export const rowDone = (id) => {
  return {
    type: ROW_DONE,
    id
  }
}
