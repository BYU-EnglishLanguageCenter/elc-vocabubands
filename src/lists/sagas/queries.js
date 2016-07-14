'use strict'

import axios from 'axios'

export const getAllLists = (type) => {
  return axios.get(`/graphql?query={allLists{${type}}}`)
}

export const getListData = (id) => {
  return axios.get(`/graphql?query={list(id:${id}){data{id,word,support_words,definition,building_words}}}`)
}
