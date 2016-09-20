'use strict'

module.exports = function * (next) {
  let ctx = this
  const path = ctx.request.path

  if (ctx.session.isAuthenticated) {
    yield next
  } else {
    ctx.redirect(`/login?path=${path}`)
  }
}
