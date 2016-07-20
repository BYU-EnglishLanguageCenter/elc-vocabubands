'use strict'

import axios from 'axios'

export const getEditUser = (id) => {
  return axios.get(`/graphql?query={user(id:"${id}"){first_name, last_name, net_id, level, type}}`)
}
