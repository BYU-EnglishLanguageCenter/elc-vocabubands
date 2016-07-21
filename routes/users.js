'use strict'

const router = require('koa-router')()

module.exports = router

router.get('/users', function * (next) {
  let ctx = this
  const errorRedirect = '/'

  if (ctx.session.isAdmin) {
    ctx.render('base', {
      title: 'Vocabubands',
      bundleSrc: '/js/users-bundle.js'
    })
  } else {
    ctx.redirect(errorRedirect)
  }
})

router.get('/users/new', function * (next) {
  let ctx = this
  const errorRedirect = '/'

  if (ctx.session.isAdmin) {
    ctx.render('base', {
      title: 'Vocabubands',
      bundleSrc: '/js/users-bundle.js'
    })
  } else if (ctx.session.isAuthenticated) {
    ctx.redirect(errorRedirect)
  } else if (ctx.session.user) {
    ctx.render('base', {
      title: 'Vocabubands',
      bundleSrc: '/js/users-bundle.js'
    })
  } else {
    ctx.redirect(errorRedirect)
  }
})

router.get('/users/edit/:id', function * (next) {
  let ctx = this

  ctx.render('base', {
    title: 'Vocabubands',
    bundleSrc: '/js/users-bundle.js'
  })
})
