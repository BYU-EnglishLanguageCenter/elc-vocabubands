'use strict'

import { FETCH_EDIT_USER, LOAD_EDIT_USER } from './TYPES'

export const fetchEditUser = (id) => ({
  type: FETCH_EDIT_USER,
  id
})

export const loadEditUser = (user) => ({
  type: LOAD_EDIT_USER,
  user
})
