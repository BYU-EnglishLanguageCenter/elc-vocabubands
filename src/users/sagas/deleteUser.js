'use strict'

import axios from 'axios'
import { takeEvery } from 'redux-saga'
import { select } from 'redux-saga/effects'
import { DELETE_USER } from '../actions/TYPES'

function * deleteUser (action) {
  const state = yield select()
  const user = state.editUser

  try {
    const response = yield axios.post(`/graphql?query=mutation{removeUser(_id:"${user._id}")}`)
    console.log(response)
    window.location.assign('/users')
  } catch (err) {
    console.log(err)
  }
}

export default function * watchDeleteUser () {
  yield * takeEvery(DELETE_USER, deleteUser)
}
