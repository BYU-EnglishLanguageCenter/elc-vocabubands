'use strict'

const router = require('koa-router')()

module.exports = router

router.get('/lists*', function * (next) {
  let ctx = this
  const path = ctx.request.path

  if (path === '/lists/edit' && ctx.session.isAdmin || (path !== '/lists/edit' && ctx.session.isAuthenticated)) {
    ctx.render('base', {
      pageTitle: 'Vocabubands',
      bundleSrc: '/js/lists-bundle.js'
    })
  } else {
    ctx.status = 401
  }
})
