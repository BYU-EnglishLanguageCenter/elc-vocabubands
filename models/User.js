'use strict'

const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
  first_name: String,
  last_name: String,
  net_id: String,
  level: String,
  type: String
}, {
  versionKey: false
})

const UserModel = mongoose.model('User', UserSchema)

module.exports = UserModel
