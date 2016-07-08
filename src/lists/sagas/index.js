'use strict'

import { takeEvery } from 'redux-saga'
import { call, put } from 'redux-saga/effects'
import { LOCATION_CHANGE } from 'react-router-redux'
import { FETCH_ALL_LISTS, FETCH_LIST_DATA } from '../actions/TYPES'
import { fetchFailed, fetchListData, loadAllLists, loadListData } from '../actions/actionCreators'
import { getListData, getAllLists } from './queries'

export function * fetchList (action) {
  try {
    const response = yield call(getListData, action.id)
    yield put(loadListData(response.data.list.data, action.id))
  } catch (err) {
    console.log(err)
    yield put(fetchFailed(err))
  }
}

export function * watchFetchList () {
  yield * takeEvery(FETCH_LIST_DATA, fetchList)
}

function * fetchAllLists (action) {
  try {
    const response = yield call(getAllLists, action.listType)
    yield put(loadAllLists(response.data.allLists, action.listType))
  } catch (err) {
    console.log(err)
  }
}

function * watchFetchAllLists () {
  yield * takeEvery(FETCH_ALL_LISTS, fetchAllLists)
}

function * locationChange (action) {
  const path = action.payload.pathname

  if (path.length > 7) {
    const sub = path.substring(7)

    if (sub.indexOf('/') !== -1 && sub.substring(sub.indexOf('/')).length !== 1) {
      const listID = sub.substring(sub.indexOf('/') + 1)
      yield put(fetchListData(listID))
    }
  }
}

function * watchLocationChange () {
  yield * takeEvery(LOCATION_CHANGE, locationChange)
}

export default function * rootSaga () {
  yield [
    watchFetchAllLists(),
    watchFetchList(),
    watchLocationChange()
  ]
}
