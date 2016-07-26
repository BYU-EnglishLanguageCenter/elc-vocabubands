'use strict'

import axios from 'axios'

export const addUser = (user, isAdmin) => {
  return axios.post(`/graphql?query=mutation{addNewUser(user:{first_name:"${user.first_name}",last_name:"${user.last_name}",net_id:"${user.net_id}",level:"${user.level}",type:"${user.type}"})}`)
}

export const deleteExistingUser = (_id) => {
  return axios.post(`/graphql?query=mutation{removeUser(_id:"${_id}")}`)
}

export const getUser = (id) => {
  return axios.get(`/graphql?query={user(id:"${id}"){_id, first_name, last_name, net_id, level, type}}`)
}

export const getUsers = () => {
  return axios.get(`/graphql?query={users{_id, first_name, last_name, level, type}}`)
}

export const updateExistingUser = (user) => {
  return axios.post(`/graphql?query=mutation{updateUser(user:{_id:"${user._id}",first_name:"${user.first_name}",last_name:"${user.last_name}",net_id:"${user.net_id}",level:"${user.level}",type:"${user.type}"})}`)
}
