'use strict'

import { takeEvery } from 'redux-saga'
import { call, select } from 'redux-saga/effects'
import { toastr } from 'react-redux-toastr'
import { updateExistingList } from './queries'
import { UPDATE_LIST } from '../actions/TYPES'

function * updateList (action) {
  const state = yield select()

  try {
    const response = yield call(updateExistingList, state.currentList, state.listData)
    toastr.success('SUCCESS', `List ${state.currentList} has been updated`, { timeOut: 2000 })
  } catch (err) {
    console.log(err)
    toastr.error('ERROR', 'Something went wrong while updating this list. Check the console for error messages.', { timeOut: 0 })
  }
}

export default function * watchUpdateList () {
  yield * takeEvery(UPDATE_LIST, updateList)
}
