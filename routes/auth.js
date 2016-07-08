'use strict'

const router = require('koa-router')()

module.exports = router

router.get('/', function * (next) {
  let ctx = this

  ctx.render('base', {
    pageTitle: 'Vocabubands',
    bundleSrc: '/js/auth-bundle.js'
  })
})
