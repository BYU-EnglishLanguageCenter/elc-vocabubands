'use strict'

import { takeEvery } from 'redux-saga'
import { call, select } from 'redux-saga/effects'
import { toastr } from 'react-redux-toastr'
import { updateExistingUser } from './queries'
import { UPDATE_USER } from '../actions/TYPES'

function * updateUser (action) {
  const state = yield select()
  const user = state.user

  try {
    yield call(updateExistingUser, user)
    if (state.isAdmin) {
      toastr.success('SUCCESS', `${user.first_name} has been updated`)
    }
  } catch (err) {
    console.log(err)
    toastr.error('ERROR', `Something went wrong while updating ${user.first_name} ${user.last_name}. Check the console for error messages.`, { timeOut: 0 })
  }
}

export default function * watchUpdateUser () {
  yield * takeEvery(UPDATE_USER, updateUser)
}
