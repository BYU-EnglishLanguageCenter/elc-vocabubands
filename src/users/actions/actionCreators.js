'use strict'

import { FETCH_EDIT_USER, FETCH_USERS, LOAD_EDIT_USER, LOAD_USERS, UPDATE_FIRST_NAME, UPDATE_LAST_NAME, UPDATE_LEVEL, UPDATE_NET_ID, UPDATE_TYPE } from './TYPES'

export const fetchEditUser = (id) => ({
  type: FETCH_EDIT_USER,
  id
})

export const fetchUsers = () => ({
  type: FETCH_USERS
})

export const loadEditUser = (user) => ({
  type: LOAD_EDIT_USER,
  user
})

export const loadUsers = (users) => ({
  type: LOAD_USERS,
  users
})

export const updateFirstName = (value) => ({
  type: UPDATE_FIRST_NAME,
  value
})

export const updateLastName = (value) => ({
  type: UPDATE_LAST_NAME,
  value
})

export const updateLevel = (value) => ({
  type: UPDATE_LEVEL,
  value
})

export const updateNetID = (value) => ({
  type: UPDATE_NET_ID,
  value
})

export const updateType = (value) => ({
  type: UPDATE_TYPE,
  value
})
