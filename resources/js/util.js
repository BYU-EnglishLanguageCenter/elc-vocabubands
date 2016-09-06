'use strict'

const $ = (id) => document.getElementById(id)

const shuffle = (array) => {
  for (var n = array.length - 1; n > 0; n--) {
    var rand = Math.floor(Math.random() * (n + 1))
    var temp = array[rand]
    array[n] = array[rand]
    array[rand] = temp
  }
}

module.exports = {
  $,
  shuffle
}
