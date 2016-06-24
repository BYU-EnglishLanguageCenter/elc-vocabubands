'use strict'

import test from 'tape'
import { call, put } from 'redux-saga/effects'
import { fetch, getData } from './sagas'
import { loadListData } from './actions/actionCreators'

test('Testing Sagas', (assert) => {
  var listID = 13
  const generator = fetch({id: listID})
  let response

  assert.deepEqual(
    response = generator.next().value,
    call(getData, listID),
    'fetch Saga must be able to call getData(13)'
  )

  assert.deepEqual(
    generator.next(response).value,
    put(loadListData(response.data, listID)),
    'fetch Saga must then dispatch a LOAD_LIST_DATA action'
  )

  assert.deepEqual(
    generator.next(),
    { value: undefined, done: true },
    'fetch Saga must now be done'
  )

  assert.end()
})
