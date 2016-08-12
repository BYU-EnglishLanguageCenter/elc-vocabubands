'use strict'

import { takeEvery } from 'redux-saga'
import { put, select } from 'redux-saga/effects'
import { sortFirstName, sortLastName, sortLevel, sortType } from '../actions/actionCreators'
import { SORT } from '../actions/TYPES'

function * sort (action) {
  const state = yield select()

  switch (state.sortBy) {
    case 'firstName':
      yield put(sortFirstName())
      break
    case 'lastName':
      yield put(sortLastName())
      break
    case 'level':
      yield put(sortLevel())
      break
    case 'type':
      yield put(sortType())
      break
  }
}

export default function * watchSort () {
  yield * takeEvery(SORT, sort)
}
