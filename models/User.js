'use strict'

const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
  name: String,
  net_id: String,
  type: String
})

const UserModel = mongoose.model('User', UserSchema)

module.exports = UserModel
