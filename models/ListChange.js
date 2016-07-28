'use strict'

const mongoose = require('mongoose')

const listChangeSchema = mongoose.Schema({
  list_id: Number,
  list_type: String,
  net_id: String,
  rows: Array
}, {
  versionKey: false
})

const ListChangeModel = mongoose.model('List_Change', listChangeSchema)

module.exports = ListChangeModel
