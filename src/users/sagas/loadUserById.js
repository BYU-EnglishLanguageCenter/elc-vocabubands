'use strict'

import { takeEvery } from 'redux-saga'
import { put, select } from 'redux-saga/effects'
import { loadUser } from '../actions/actionCreators'
import { LOAD_USER_BY_ID } from '../actions/TYPES'

function * loadUserById (action) {
  const state = yield select()
  let userToLoad

  state.users.map(user => {
    if (user._id === action.id) {
      userToLoad = user
    }
  })

  yield put(loadUser(userToLoad))
}

export default function * watchLoadUserById () {
  yield * takeEvery(LOAD_USER_BY_ID, loadUserById)
}
