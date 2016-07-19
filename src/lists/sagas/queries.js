'use strict'

import axios from 'axios'

export const getAllLists = (type) => {
  return axios.get(`/graphql?query={allLists(type:"${type}"){type,list_ids}}`)
}

export const getListData = (id) => {
  return axios.get(`/graphql?query={list(id:${id}){id,data{id,word,support_words,definition,building_words}}}`)
}
