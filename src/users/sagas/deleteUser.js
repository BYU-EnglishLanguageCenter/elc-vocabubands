'use strict'

import { takeEvery } from 'redux-saga'
import { call, select } from 'redux-saga/effects'
import { toastr } from 'react-redux-toastr'
import { deleteExistingUser } from './queries'
import { DELETE_USER } from '../actions/TYPES'

function * deleteUser (action) {
  const state = yield select()
  const user = state.user

  try {
    yield call(deleteExistingUser, user._id)
    toastr.success('SUCCESS', `${user.first_name} ${user.last_name} has been deleted`)
  } catch (err) {
    console.log(err)
    toastr.error('ERROR', `Something went wrong while trying to delete ${user.first_name} ${user.last_name}. Check the console for error messages.`, { timeOut: 0 })
  }
}

export default function * watchDeleteUser () {
  yield * takeEvery(DELETE_USER, deleteUser)
}
