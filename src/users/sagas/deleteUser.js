'use strict'

import { takeEvery } from 'redux-saga'
import { call, select } from 'redux-saga/effects'
import { deleteExistingUser } from './queries'
import { DELETE_USER } from '../actions/TYPES'

function * deleteUser (action) {
  const state = yield select()
  const user = state.user

  try {
    yield call(deleteExistingUser, user._id)
  } catch (err) {
    console.log(err)
  }
}

export default function * watchDeleteUser () {
  yield * takeEvery(DELETE_USER, deleteUser)
}
