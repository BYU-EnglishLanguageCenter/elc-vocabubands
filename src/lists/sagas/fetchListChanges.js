'use strict'

import { takeEvery } from 'redux-saga'
import { call, put, select } from 'redux-saga/effects'
import { toastr } from 'react-redux-toastr'
import { getListChanges } from './queries'
import { loadListChanges, loadListDataWithChanges } from '../actions/actionCreators'
import { FETCH_LIST_CHANGES } from '../actions/TYPES'

function * fetchListChanges (action) {
  let state = yield select()

  try {
    const response = yield call(getListChanges, state.currentList, state.listType)
    yield put(loadListChanges(response.data.data.listChanges))
    state = yield select()
    yield put(loadListDataWithChanges(state.listData, state.listChanges))
  } catch (err) {
    console.log(err)
    toastr.error('ERROR', 'Something went wrong while fetching changes that have been saved for this list. Check the console for error messages.', { timeOut: 0 })
  }
}

export default function * watchFetchListChanges () {
  yield * takeEvery(FETCH_LIST_CHANGES, fetchListChanges)
}
