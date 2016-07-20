'use strict'

import { FETCH_EDIT_USER, FETCH_USERS, LOAD_EDIT_USER, LOAD_USERS } from './TYPES'

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
