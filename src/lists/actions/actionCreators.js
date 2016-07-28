import { CLEAR_ROWS_DONE, FETCH_ALL_LISTS, FETCH_LIST_CHANGES, FETCH_LIST_DATA, LOAD_ALL_LISTS, LOAD_LIST_CHANGES, LOAD_LIST_DATA, ROW_DONE, SAVE_LIST_CHANGES } from './TYPES'

export const clearRowsDone = () => ({
  type: CLEAR_ROWS_DONE
})

export const fetchAllLists = (listType) => ({
  type: FETCH_ALL_LISTS,
  listType
})

export const fetchListChanges = () => ({
  type: FETCH_LIST_CHANGES
})

export const fetchListData = (id) => ({
  type: FETCH_LIST_DATA,
  id
})

export const loadAllLists = (data) => ({
  type: LOAD_ALL_LISTS,
  data
})

export const loadListChanges = (data) => ({
  type: LOAD_LIST_CHANGES,
  data
})

export const loadListData = (data) => ({
  type: LOAD_LIST_DATA,
  data
})

export const rowDone = (id) => ({
  type: ROW_DONE,
  id
})

export const saveListChanges = () => ({
  type: SAVE_LIST_CHANGES
})
