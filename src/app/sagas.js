'use strict'

import axios from 'axios'
import { takeEvery } from 'redux-saga'
import { call, put } from 'redux-saga/effects'
import { FETCH_LIST_DATA } from './actions/actionTypes'
import { fetchFailed, loadListData } from './actions/actionCreators'

import { graphql, GraphQLSchema, GraphQLObjectType, GraphQLString } from 'graphql'

var schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    fields: {
      hello: {
        type: GraphQLString,
        resolve () {
          return 'hello'
        }
      }
    }
  })
})

export function * start () {
  var query = '{ hello }'
  graphql(schema, query).then(result => {
    console.log(result)
  })
}

export const getData = (id) => {
  return axios.get(`/resources/lists/list${id}.json`)
}

export function * fetch (action) {
  try {
    const response = yield call(getData, action.id)
    yield put(loadListData(response.data, action.id))
  } catch (err) {
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
