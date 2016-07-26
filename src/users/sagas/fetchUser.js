'use strict'

import { takeEvery } from 'redux-saga'
import { call, put } from 'redux-saga/effects'
import { toastr } from 'react-redux-toastr'
import { getUser } from './queries'
import { loadUser } from '../actions/actionCreators'
import { FETCH_USER } from '../actions/TYPES'

function * fetchUser (action) {
  try {
    const response = yield call(getUser, action.id)
    yield put(loadUser(response.data.data.user))
  } catch (err) {
    console.log(err)
    toastr.error('ERROR', 'Something went wrong while fetching this user. Check the console for error messages.', { timeOut: 0 })
  }
}

export default function * watchFetchEditUser () {
  yield * takeEvery(FETCH_USER, fetchUser)
}
