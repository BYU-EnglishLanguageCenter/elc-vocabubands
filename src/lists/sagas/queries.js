'use strict'

import axios from 'axios'
import { sortBy } from 'lodash'

export const deleteChanges = (id, type) => {
  return axios.post(`/graphql?query=mutation{removeListChanges(list_id:${id},list_type:"${type}")}`)
}

export const getAllLists = (type) => {
  return axios.get(`/graphql?query={allLists{type,list_ids}}`)
}

export const getListChanges = (id, type) => {
  return axios.get(`/graphql?query={listChanges(list_id:${id},list_type:"${type}"){rows}}`)
}

export const getListData = (id) => {
  return axios.get(`/graphql?query={list(id:${id}){id,data{id,word,support_words,definition,building_words}}}`)
}

export const saveChange = (list_id, list_type, rows) => {
  rows = sortBy(rows)
  return axios.post(`/graphql?query=mutation{addListChange(changes:{list_id:${list_id},list_type:"${list_type}",rows:[${rows}]})}`)
}

export const updateExistingList = (id, data) => {
  // convert data from array of objects to stringified json
  // then get rid of quotes around keys otherwise graphql will complain, e.g. {"key": "value"} => {key: "value"}
  data = JSON.stringify(data)
  data = data.replace(/\"([^(\")"]+)\":/g, '$1:')

  return axios.post(`/graphql?query=mutation{updateList(list:{id:${id},data:${data}})}`)
}
