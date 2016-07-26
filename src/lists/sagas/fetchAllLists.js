'use strict'

import { takeEvery } from 'redux-saga'
import { call, put } from 'redux-saga/effects'
import { toastr } from 'react-redux-toastr'
import { getAllLists } from './queries'
import { loadAllLists } from '../actions/actionCreators'
import { FETCH_ALL_LISTS } from '../actions/TYPES'

function * fetchAllLists (action) {
  try {
    const response = yield call(getAllLists, action.listType)
    yield put(loadAllLists(response.data.data.allLists))
  } catch (err) {
    console.log(err)
    toastr.error('ERROR', `Something went wrong while fetching the ${action.listType} lists. Check the console for error messages.`, { timeOut: 0 })
  }
}

export default function * watchFetchAllLists () {
  yield * takeEvery(FETCH_ALL_LISTS, fetchAllLists)
}
