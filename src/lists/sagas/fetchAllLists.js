'use strict'

import { takeEvery } from 'redux-saga'
import { call, put } from 'redux-saga/effects'
import { getAllLists } from './queries'
import { loadAllLists } from '../actions/actionCreators'
import { FETCH_ALL_LISTS } from '../actions/TYPES'

function * fetchAllLists (action) {
  try {
    const response = yield call(getAllLists, action.listType)
    yield put(loadAllLists(response.data.allLists, action.listType))
  } catch (err) {
    console.log(err)
  }
}

export default function * watchFetchAllLists () {
  yield * takeEvery(FETCH_ALL_LISTS, fetchAllLists)
}
