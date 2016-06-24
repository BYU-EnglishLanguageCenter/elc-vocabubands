'use strict'

import test from 'tape'
import { call, put } from 'redux-saga/effects'
import { fetch, getData } from './sagas'
import { loadListData } from './actions/actionCreators'

test('Testing Sagas', (assert) => {
  const lists = [13, 14]

  lists.forEach(id => {
    const generator = fetch({id: id})
    let response

    assert.deepEqual(
      response = generator.next().value,
      call(getData, id),
      `fetch Saga must be able to call getData(${id})`
    )

    assert.deepEqual(
      generator.next(response).value,
      put(loadListData(response.data, id)),
      'fetch Saga must then dispatch a LOAD_LIST_DATA action'
    )

    assert.deepEqual(
      generator.next(),
      { value: undefined, done: true },
      'fetch Saga must now be done'
    )
  })

  assert.end()
})
