'use strict'

import { takeEvery } from 'redux-saga'
import { call, select } from 'redux-saga/effects'
import { toastr } from 'react-redux-toastr'
import { SAVE_LIST_CHANGES } from '../actions/TYPES'

function * saveListChanges (action) {
  const state = yield select()
  console.log(state.listType)
}

export default function * watchSaveListChanges () {
  yield * takeEvery(SAVE_LIST_CHANGES, saveListChanges)
}
