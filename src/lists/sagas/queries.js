'use strict'

import axios from 'axios'
import { sortBy } from 'lodash'

export const getAllLists = (type) => {
  return axios.get(`/graphql?query={allLists(type:"${type}"){type,list_ids}}`)
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
