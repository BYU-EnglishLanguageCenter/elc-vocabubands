'use strict'

module.exports = function * (next) {
  let ctx = this

  if (ctx.session.isAuthenticated) {
    yield next
  } else {
    ctx.redirect('/')
  }
}
