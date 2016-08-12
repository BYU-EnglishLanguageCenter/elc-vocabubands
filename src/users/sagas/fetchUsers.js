'use strict'

import { takeEvery } from 'redux-saga'
import { call, put } from 'redux-saga/effects'
import { toastr } from 'react-redux-toastr'
import { getUsers } from './queries'
import { loadUsers } from '../actions/actionCreators'
import { FETCH_USERS } from '../actions/TYPES'

function * fetchUsers (action) {
  try {
    const response = yield call(getUsers)
    yield put(loadUsers(response.data.data.users))
  } catch (err) {
    console.log(err)
    toastr.error('ERROR', 'Something went wrong while fetching the users. Check the console for error messages.', { timeOut: 0 })
  }
}

export default function * watchFetchUsers () {
  yield * takeEvery(FETCH_USERS, fetchUsers)
}
