'use strict'

import { ADD_NEW_USER, ADD_TO_USERS_LIST, CLEAR_USER, DELETE_USER, FETCH_USER, FETCH_USERS, LOAD_USER, LOAD_USER_BY_ID, LOAD_USERS,
         REMOVE_FROM_USERS_LIST, SORT_FIRST_NAME, SORT_LAST_NAME, SORT_LEVEL, SORT_TYPE, UPDATE_FIRST_NAME, UPDATE_LAST_NAME,
         UPDATE_LEVEL, UPDATE_NET_ID, UPDATE_TYPE, UPDATE_USER, UPDATE_USERS_LIST } from './TYPES'

export const addNewUser = () => ({
  type: ADD_NEW_USER
})

export const addToUsersList = (user) => ({
  type: ADD_TO_USERS_LIST,
  user
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

export const loadUserById = (id) => ({
  type: LOAD_USER_BY_ID,
  id
})

export const loadUsers = (users) => ({
  type: LOAD_USERS,
  users
})

export const removeFromUsersList = (id) => ({
  type: REMOVE_FROM_USERS_LIST,
  id
})

export const sortFirstName = () => ({
  type: SORT_FIRST_NAME
})

export const sortLastName = () => ({
  type: SORT_LAST_NAME
})

export const sortLevel = () => ({
  type: SORT_LEVEL
})

export const sortType = () => ({
  type: SORT_TYPE
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

export const updateUsersList = (user) => ({
  type: UPDATE_USERS_LIST,
  user
})
