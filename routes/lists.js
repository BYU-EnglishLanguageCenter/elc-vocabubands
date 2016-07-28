'use strict'

const router = require('koa-router')()

module.exports = router

router.get('/lists*', function * (next) {
  let ctx = this

  const initialState = {
    isAuthenticated: ctx.session.isAuthenticated === 'true'
  }

  const html = `<script>window.__INITIAL_STATE__ = ${JSON.stringify(initialState)}</script>`

  ctx.render('base', {
    pageTitle: 'Vocabubands',
    bundleSrc: '/js/lists-bundle.js',
    html: html
  })
})
