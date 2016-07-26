'use strict'

import { takeEvery } from 'redux-saga'
import { call, select } from 'redux-saga/effects'
import { toastr } from 'react-redux-toastr'
import { addUser } from './queries'
import { ADD_NEW_USER } from '../actions/TYPES'

function * addNewUser (action) {
  const state = yield select()
  const user = state.user

  try {
    yield call(addUser, user)
    toastr.success('SUCCESS', `${user.first_name} has been added`)
  } catch (err) {
    console.log(err)
    toastr.error('ERROR', `Something went wrong while try to add ${user.first_name} ${user.last_name}. Check the console for error messages.`, { timeOut: 0 })
  }
}

export default function * watchAddNewUser () {
  yield * takeEvery(ADD_NEW_USER, addNewUser)
}
