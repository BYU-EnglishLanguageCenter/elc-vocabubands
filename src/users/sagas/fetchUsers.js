'use strict'

import { takeEvery } from 'redux-saga'
import { call, put } from 'redux-saga/effects'
import { getUsers } from './queries'
import { loadUsers } from '../actions/actionCreators'
import { FETCH_USERS } from '../actions/TYPES'

function * fetchUsers (action) {
  try {
    const response = yield call(getUsers)
    yield put(loadUsers(response.data.data.users))
  } catch (err) {
    console.log(err)
  }
}

export default function * watchFetchUsers () {
  yield * takeEvery(FETCH_USERS, fetchUsers)
}
