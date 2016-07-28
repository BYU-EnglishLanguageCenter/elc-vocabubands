'use strict'

const mongoose = require('mongoose')

const listChangesSchema = mongoose.Schema({
  list_id: Number,
  list_type: String,
  net_id: String,
  rows: Array
}, {
  versionKey: false
})

const ListChangesModel = mongoose.model('List_Changes', listChangesSchema)

module.exports = ListChangesModel
