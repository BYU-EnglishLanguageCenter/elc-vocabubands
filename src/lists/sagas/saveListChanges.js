'use strict'

import { takeEvery } from 'redux-saga'
import { call, select } from 'redux-saga/effects'
import { toastr } from 'react-redux-toastr'
import { saveChange } from './queries'
import { SAVE_LIST_CHANGES } from '../actions/TYPES'

function * saveListChanges (action) {
  const state = yield select()

  try {
    const response = yield call(saveChange, state.currentList, state.listType, state.rowsDone)
    console.log(response)
    toastr.success('SUCCESS', 'Changes to this list have been saved')
  } catch (err) {
    console.log(err)
    toastr.error('ERROR', 'Something went wrong while saving changes made to this list. Check the console for error messages.', { timeOut: 0 })
  }
}

export default function * watchSaveListChanges () {
  yield * takeEvery(SAVE_LIST_CHANGES, saveListChanges)
}
