'use strict'

import { delay, takeEvery } from 'redux-saga'
import { put, select } from 'redux-saga/effects'
import { shuffle } from '../../../resources/js/util'
import { loadShuffledData } from '../actions/actionCreators'
import { SHUFFLE_DATA } from '../actions/TYPES'

function * shuffleData (action) {
  let state = yield select()

  while (state.listData.length === 0) {
    yield delay(100)
    state = yield select()
  }

  let shuffledData = yield shuffle(state.listData)
  yield put(loadShuffledData(shuffledData))
}

export default function * watchShuffleData () {
  yield * takeEvery(SHUFFLE_DATA, shuffleData)
}
