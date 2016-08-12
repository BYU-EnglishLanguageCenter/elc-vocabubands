'use strict'

import { takeEvery } from 'redux-saga'
import { call, put, select } from 'redux-saga/effects'
import { toastr } from 'react-redux-toastr'
import { addUser } from './queries'
import { addToUsersList } from '../actions/actionCreators'
import { ADD_NEW_USER } from '../actions/TYPES'

function * addNewUser (action) {
  const state = yield select()

  try {
    const response = yield call(addUser, state.user)
    yield put(addToUsersList(response.data.data.addNewUser))
    if (state.isAdmin) {
      toastr.success('SUCCESS', `${state.user.first_name} has been added`)
    }
  } catch (err) {
    console.log(err)
    toastr.error('ERROR', `Something went wrong while try to add ${state.user.first_name} ${state.user.last_name}. Check the console for error messages.`, { timeOut: 0 })
  }
}

export default function * watchAddNewUser () {
  yield * takeEvery(ADD_NEW_USER, addNewUser)
}
