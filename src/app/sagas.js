'use strict'

import { graphql } from 'graphql'
import { takeEvery } from 'redux-saga'
import { call, put } from 'redux-saga/effects'
import { FETCH_LIST_DATA } from './actions/actionTypes'
import { fetchFailed, loadAVL, loadListData } from './actions/actionCreators'
import schema from './graphql/schema'

export const getData = (id) => {
  const query = `
    query {
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

const getLists = () => {
  const query = `
    query {
      allLists {
        avl
      }
    }
  `

  return graphql(schema, query)
}

function * init () {
  const response = yield call(getLists)
  yield put(loadAVL(response.data.allLists.avl))
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
    init(),
    watchFetch()
  ]
}
