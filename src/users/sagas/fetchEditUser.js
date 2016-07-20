'use strict'

import { takeEvery } from 'redux-saga'
import { call, put } from 'redux-saga/effects'
import { getEditUser } from './queries'
import { loadEditUser } from '../actions/actionCreators'
import { FETCH_EDIT_USER } from '../actions/TYPES'

function * fetchEditUser (action) {
  try {
    const response = yield call(getEditUser, action.id)
    yield put(loadEditUser(response.data.data.user))
  } catch (err) {
    console.log(err)
  }
}

export default function * watchFetchEditUser () {
  yield * takeEvery(FETCH_EDIT_USER, fetchEditUser)
}
