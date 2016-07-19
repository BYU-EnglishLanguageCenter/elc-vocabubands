'use strict'

const router = require('koa-router')()
const UserModel = require('../models/User')

module.exports = router

router.get('/users*', function * (next) {
  let ctx = this

  const errorRedirect = '/'

  if (ctx.session.isAuthenticated) {
    const user = yield UserModel.findOne({net_id: ctx.session.user})

    if (user !== null && user.type === 'admin') {
      ctx.render('base', {
        title: 'Vocabubands',
        bundleSrc: '/js/users-bundle.js'
      })
    } else {
      ctx.redirect(errorRedirect)
    }
  } else if (ctx.session.user && ctx.request.path === '/users/new') {
    ctx.render('base', {
      title: 'Vocabubands',
      bundleSrc: '/js/users-bundle.js'
    })
  } else {
    ctx.redirect(errorRedirect)
  }
})
