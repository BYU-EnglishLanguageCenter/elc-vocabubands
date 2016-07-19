'use strict'

const mongoose = require('mongoose')

const allListsSchema = mongoose.Schema({
  type: String,
  list_ids: Array
})

const AllListsModel = mongoose.model('All_Lists', allListsSchema)

module.exports = AllListsModel
