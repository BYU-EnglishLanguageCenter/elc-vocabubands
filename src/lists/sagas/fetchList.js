'use strict'

import { takeEvery } from 'redux-saga'
import { call, put, select } from 'redux-saga/effects'
import { toastr } from 'react-redux-toastr'
import { getListData } from './queries'
import { fetchListChanges, loadListData } from '../actions/actionCreators'
import { FETCH_LIST_DATA } from '../actions/TYPES'

function * fetchList (action) {
  const state = yield select()

  try {
    const response = yield call(getListData, action.id, state.listType)
    if (response.data.data.list === null) {
      toastr.error('ERROR', `List ${action.id} does not exist`, { timeOut: 0 })
    } else {
      yield put(loadListData(response.data.data.list, action.id))
      yield put(fetchListChanges())
    }
  } catch (err) {
    console.log(err)
    toastr.error('ERROR', `Something went wrong while fetching list ${action.id}`, { timeOut: 0 })
  }
}

export default function * watchFetchList () {
  yield * takeEvery(FETCH_LIST_DATA, fetchList)
}
