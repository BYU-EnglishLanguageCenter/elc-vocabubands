'use strict'

const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
  first_name: String,
  last_name: String,
  net_id: String,
  type: String,
  level: String
})

const UserModel = mongoose.model('User', UserSchema)

module.exports = UserModel
