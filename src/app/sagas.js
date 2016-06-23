'use strict'

import axios from 'axios'
import { delay, takeEvery } from 'redux-saga'
import { call } from 'redux-saga/effects'
import { FETCH_LIST_DATA } from './actions/actionTypes'

const getData = (id) => {
  axios.get('/resources/lists/list13.json')
    .then(response => (response))
    .catch(err => (err))
}

function * fetch (action) {
  const response = yield call(getData, action.id)
  yield console.log(response)
}

export function * watchFetch () {
  yield * takeEvery(FETCH_LIST_DATA, fetch)
}
