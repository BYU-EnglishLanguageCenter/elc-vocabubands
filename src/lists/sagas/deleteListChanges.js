'use strict'

import { takeEvery } from 'redux-saga'
import { call, put, select } from 'redux-saga/effects'
import { toastr } from 'react-redux-toastr'
import { deleteChanges } from './queries'
import { fetchListChanges } from '../actions/actionCreators'
import { DELETE_LIST_CHANGES } from '../actions/TYPES'

function * deleteListChanges (action) {
  const state = yield select()

  try {
    const response = yield call(deleteChanges, state.currentList, state.listType)

    if (response.data.data.removeListChanges === 'success') {
      yield put(fetchListChanges())
    } else {
      toastr.error('ERROR', 'Something went wrong while undoing changes made to this list. Check the console for error messages.', { timeOut: 0 })
    }
  } catch (err) {
    console.log(err)
    toastr.error('ERROR', 'Something went wrong while undoing changes made to this list. Check the console for error messages.', { timeOut: 0 })
  }
}

export default function * watchDeleteListChanges () {
  yield * takeEvery(DELETE_LIST_CHANGES, deleteListChanges)
}
