'use strict'

import { takeEvery } from 'redux-saga'
import { call, select } from 'redux-saga/effects'
import { updateExistingUser } from './queries'
import { UPDATE_USER } from '../actions/TYPES'

function * updateUser (action) {
  const state = yield select()
  const user = state.user

  try {
    yield call(updateExistingUser, user)
  } catch (err) {
    console.log(err)
  }
}

export default function * watchUpdateUser () {
  yield * takeEvery(UPDATE_USER, updateUser)
}
