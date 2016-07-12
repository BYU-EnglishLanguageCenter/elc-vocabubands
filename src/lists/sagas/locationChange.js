'use strict'

import { takeEvery } from 'redux-saga'
import { put } from 'redux-saga/effects'
import { LOCATION_CHANGE } from 'react-router-redux'
import { fetchListData } from '../actions/actionCreators'

function * locationChange (action) {
  const path = action.payload.pathname

  if (path.length > 7) {
    const sub = path.substring(7)

    if (sub.indexOf('/') !== -1 && sub.substring(sub.indexOf('/')).length !== 1) {
      const listID = sub.substring(sub.indexOf('/') + 1)
      yield put(fetchListData(listID))
    }
  }
}

export default function * watchLocationChange () {
  yield * takeEvery(LOCATION_CHANGE, locationChange)
}
