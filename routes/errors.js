'use strict'

module.exports = function * (next) {
  let ctx = this

  yield next

  if (ctx.status >= 400) {
    const initialState = {
      isAuthenticated: ctx.session.isAuthenticated === 'true',
      status: ctx.status
    }

    const html = `<script>window.__INITIAL_STATE__ = ${JSON.stringify(initialState)}</script>`

    ctx.render('base', {
      pageTitle: `Error - ${ctx.status}`,
      bundleSrc: '/js/erros-bundle.js',
      html: html
    })
  }
}
