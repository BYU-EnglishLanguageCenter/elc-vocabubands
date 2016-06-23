'use strict'

import axios from 'axios'
import { takeEvery } from 'redux-saga'
import { call, put } from 'redux-saga/effects'
import { FETCH_LIST_DATA } from './actions/actionTypes'
import { loadListData } from './actions/actionCreators'

const getData = (id) => {
  return axios.get('/resources/lists/list13.json')
}

function * fetch (action) {
  const response = yield call(getData, action.id)
  yield put(loadListData(response.data, action.id))
}

export function * watchFetch () {
  yield * takeEvery(FETCH_LIST_DATA, fetch)
}
