'use strict'

import { takeEvery } from 'redux-saga'
import { call, put, select } from 'redux-saga/effects'
import { toastr } from 'react-redux-toastr'
import { saveChange } from './queries'
import { clearRowsDone } from '../actions/actionCreators'
import { SAVE_LIST_CHANGES } from '../actions/TYPES'

function * saveListChanges (action) {
  const state = yield select()

  try {
    yield call(saveChange, state.currentList, state.listType, state.rowsDone)
    yield put(clearRowsDone())
    toastr.success('SUCCESS', 'Changes to this list have been saved', { timeOut: 3000 })
  } catch (err) {
    console.log(err)
    toastr.error('ERROR', 'Something went wrong while saving changes made to this list. Check the console for error messages.', { timeOut: 0 })
  }
}

export default function * watchSaveListChanges () {
  yield * takeEvery(SAVE_LIST_CHANGES, saveListChanges)
}
