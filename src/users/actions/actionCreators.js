'use strict'

import { ADD_NEW_USER, CLEAR_USER, DELETE_USER, FETCH_USER, FETCH_USERS, LOAD_USER, LOAD_USERS, UPDATE_FIRST_NAME, UPDATE_LAST_NAME, UPDATE_LEVEL, UPDATE_NET_ID, UPDATE_TYPE, UPDATE_USER } from './TYPES'

export const addNewUser = () => ({
  type: ADD_NEW_USER
})

export const clearUser = () => ({
  type: CLEAR_USER
})

export const deleteUser = () => ({
  type: DELETE_USER
})

export const fetchUser = (id) => ({
  type: FETCH_USER,
  id
})

export const fetchUsers = () => ({
  type: FETCH_USERS
})

export const loadUser = (user) => ({
  type: LOAD_USER,
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

export const updateUser = () => ({
  type: UPDATE_USER
})
