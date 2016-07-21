'use strict'

import axios from 'axios'
import { takeEvery } from 'redux-saga'
import { select } from 'redux-saga/effects'
import { UPDATE_USER } from '../actions/TYPES'

function * updateUser (action) {
  const state = yield select()
  const user = state.editUser

  try {
    yield axios.post(`/graphql?query=mutation{updateUser(user:{_id:"${user._id}",first_name:"${user.first_name}",last_name:"${user.last_name}",net_id:"${user.net_id}",level:"${user.level}",type:"${user.type}"})}`)
    window.location.assign('/users')
  } catch (err) {
    console.log(err)
  }
}

export default function * watchUpdateUser () {
  yield * takeEvery(UPDATE_USER, updateUser)
}
