'use strict'

const cas = require('byu-cas')
const router = require('koa-router')()
const UserModel = require('../models/User')

module.exports = router

router.get('/', function * (next) {
  let ctx = this
  const query = ctx.request.query
  const successRedirect = '/lists'

  if (ctx.session.isAuthenticated) {
    ctx.redirect(successRedirect)
  } else if (query.ticket) {
    const ticket = query.ticket
    const service = 'http://localhost:8080'

    try {
      const response = yield cas.validate(ticket, service)
      ctx.session.user = response.username
      const user = yield UserModel.findOne({net_id: response.username})

      // add new user if they don't exist
      if (user === null) {
        ctx.redirect('/users/new')
      } else {
        if (user.type === 'admin') {
          ctx.session.isAdmin = 'true'
        }
        ctx.session.isAuthenticated = 'true'
        ctx.redirect(successRedirect)
      }
    } catch (err) {
      console.log(err)
    }
  } else {
    ctx.render('base', {
      pageTitle: 'Vocabubands',
      bundleSrc: '/js/auth-bundle.js'
    })
  }
})

router.get('/logout', function * (next) {
  let ctx = this
  ctx.session = null
  ctx.redirect('/')
  // ctx.redirect('https://cas.byu.edu/cas/logout?url=localhost:8080')
})
