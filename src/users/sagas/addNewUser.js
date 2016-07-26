'use strict'

import { takeEvery } from 'redux-saga'
import { call, select } from 'redux-saga/effects'
import { addUser } from './queries'
import { ADD_NEW_USER } from '../actions/TYPES'

function * addNewUser (action) {
  const state = yield select()
  const user = state.user
  const isAdmin = state.isAdmin

  try {
    yield call(addUser, user, isAdmin)
  } catch (err) {
    console.log(err)
  }
}

export default function * watchAddNewUser () {
  yield * takeEvery(ADD_NEW_USER, addNewUser)
}
