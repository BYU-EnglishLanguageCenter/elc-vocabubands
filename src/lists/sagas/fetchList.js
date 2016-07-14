'use strict'

import { takeEvery } from 'redux-saga'
import { call, put } from 'redux-saga/effects'
import { getListData } from './queries'
import { fetchFailed, loadListData } from '../actions/actionCreators'
import { FETCH_LIST_DATA } from '../actions/TYPES'

function * fetchList (action) {
  try {
    const response = yield call(getListData, action.id)
    yield put(loadListData(response.data.data.list.data, action.id))
  } catch (err) {
    console.log(err)
    yield put(fetchFailed(err))
  }
}

export default function * watchFetchList () {
  yield * takeEvery(FETCH_LIST_DATA, fetchList)
}
