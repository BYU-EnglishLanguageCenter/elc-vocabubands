'use strict'

import { takeEvery } from 'redux-saga'
import { call, put } from 'redux-saga/effects'
import { FETCH_LIST_DATA } from '../actions/TYPES'
import { fetchFailed, loadAVL, loadListData } from '../actions/actionCreators'
import { getData, getLists } from './queries'

function * init () {
  const response = yield call(getLists)
  yield put(loadAVL(response.data.allLists.avl))
}

export function * fetch (action) {
  try {
    const response = yield call(getData, action.id)
    yield put(loadListData(response.data.list.data, action.id))
  } catch (err) {
    console.log(err)
    yield put(fetchFailed(err))
  }
}

export function * watchFetch () {
  yield * takeEvery(FETCH_LIST_DATA, fetch)
}

export default function * rootSaga () {
  yield [
    init(),
    watchFetch()
  ]
}
