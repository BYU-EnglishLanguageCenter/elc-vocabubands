'use strict'

const mongoose = require('mongoose')

const changesSchema = mongoose.Schema({
  list_id: Number,
  list_type: String,
  net_id: String,
  rows: Array,
  modified: Date
})

const ChangesModel = mongoose.model('Changes', changesSchema)

module.exports = ChangesModel
