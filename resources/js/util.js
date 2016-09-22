'use strict'

const clone = require('lodash').clone

const $ = (id) => document.getElementById(id)

// Fisher-Yates shuffle
const shuffle = (array) => {
  return new Promise((resolve, reject) => {
    let newArray = clone(array)

    for (var n = newArray.length - 1; n > 0; n--) {
      var rand = Math.floor(Math.random() * (n + 1))
      var temp = newArray[rand]
      newArray[rand] = newArray[n]
      newArray[n] = temp
    }

    resolve(newArray)
  })
}

module.exports = {
  $,
  shuffle
}
