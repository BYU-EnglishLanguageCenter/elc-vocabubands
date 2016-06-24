'use strict'

import axios from 'axios'
import { takeEvery } from 'redux-saga'
import { call, put } from 'redux-saga/effects'
import { FETCH_LIST_DATA } from './actions/actionTypes'
import { fetchFailed, loadListData } from './actions/actionCreators'

export const getData = (id) => {
  return axios.get(`/resources/lists/list${id}.json`)
}

export function * fetch (action) {
  try {
    const response = yield call(getData, action.id)
    yield put(loadListData(response.data, action.id))
  } catch (err) {
    yield put(fetchFailed(err))
  }
}

export function * watchFetch () {
  yield * takeEvery(FETCH_LIST_DATA, fetch)
}
