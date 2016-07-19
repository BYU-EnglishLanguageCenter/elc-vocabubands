'use strict'

const router = require('koa-router')()

module.exports = router

router.get('/users*', function * (next) {
  let ctx = this

  ctx.render('base', {
    title: 'Vocabubands',
    bundleSrc: '/js/users-bundle.js'
  })
})
