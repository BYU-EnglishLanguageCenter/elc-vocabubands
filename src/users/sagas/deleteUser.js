'use strict'

import { takeEvery } from 'redux-saga'
import { call, put, select } from 'redux-saga/effects'
import { toastr } from 'react-redux-toastr'
import { deleteExistingUser } from './queries'
import { removeFromUsersList } from '../actions/actionCreators'
import { DELETE_USER } from '../actions/TYPES'

function confirm () {
  return new Promise((resolve, reject) => {
    const options = {
      onOk: () => { resolve('ok') },
      onCancel: () => { resolve('cancel') }
    }

    toastr.confirm('Are you sure you want to delete your profile? All of your data will be lost.', options)
  })
}

function * deleteUser (action) {
  const state = yield select()
  const user = state.user

  if (!state.isAdmin) {
    const result = yield confirm()
    if (result === 'cancel') {
      return
    }
  }

  try {
    const response = yield call(deleteExistingUser, user._id)
    if (response.data.data.removeUser === 'success') {
      yield put(removeFromUsersList(user._id))

      if (state.isAdmin) {
        toastr.success('SUCCESS', `${user.first_name} ${user.last_name} has been deleted`)
      } else {
        window.location.assign('/logout')
      }
    } else {
      toastr.error('ERROR', `Something went wrong while trying to delete ${user.first_name} ${user.last_name}. Check the console for error messages.`, { timeOut: 0 })
    }
  } catch (err) {
    console.log(err)
    toastr.error('ERROR', `Something went wrong while trying to delete ${user.first_name} ${user.last_name}. Check the console for error messages.`, { timeOut: 0 })
  }
}

export default function * watchDeleteUser () {
  yield * takeEvery(DELETE_USER, deleteUser)
}
