'use strict'

import { graphql } from 'graphql'
import { takeEvery } from 'redux-saga'
import { call, put } from 'redux-saga/effects'
import { FETCH_LIST_DATA } from './actions/actionTypes'
import { fetchFailed, loadListData } from './actions/actionCreators'
import schema from './graphql/schema'

function * start () {
  const mutation = `
    mutation {
      update
    }
  `

  graphql(schema, mutation).then(result => console.log(result)).catch(err => console.log(err))
}

export const getData = (id) => {
  const query = `
    {
      list(id: ${id}) {
        data {
          ...RowData
        }
      }
    }

    fragment RowData on Row {
      id
      word
      support_words
      definition
      building_words
    }
  `

  return graphql(schema, query)
}

export function * fetch (action) {
  try {
    const response = yield call(getData, action.id)
    yield put(loadListData(response.data.list.data, action.id))
  } catch (err) {
    console.log(err)
    yield put(fetchFailed(err))
  }
}

export function * watchFetch () {
  yield * takeEvery(FETCH_LIST_DATA, fetch)
}

export default function * rootSaga () {
  yield [
    start(),
    watchFetch()
  ]
}
