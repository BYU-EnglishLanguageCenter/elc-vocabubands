'use strict'

const mongoose = require('mongoose')

const listSchema = mongoose.Schema({
  id: Number,
  data: Array
})

const ListModel = mongoose.model('List', listSchema)

module.exports = ListModel
