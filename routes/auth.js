'use strict'

const cas = require('byu-cas')
const router = require('koa-router')()
const loginRequired = require('./loginRequired')
const UserModel = require('../models/User')

module.exports = router

router.get('/', function * (next) {
  let ctx = this
  let redirect = '/home'

  if (ctx.session.isAuthenticated) {
    if (ctx.session.isAdmin) {
      redirect = '/admin'
    }

    ctx.redirect(redirect)
  } else {
    ctx.render('base', {
      pageTitle: 'Vocabubands',
      bundleSrc: '/js/auth-bundle.js'
    })
  }
})

router.get('/admin', loginRequired, function * (next) {
  let ctx = this

  if (ctx.session.isAdmin) {
    ctx.render('base', {
      pageTitle: 'Vocabubands',
      bundleSrc: '/js/auth-bundle.js'
    })
  } else {
    ctx.status = 401
  }
})

router.get('/home', loginRequired, function * (next) {
  let ctx = this

  if (ctx.session.isAuthenticated) {
    ctx.render('base', {
      pageTitle: 'Vocabubands',
      bundleSrc: '/js/auth-bundle.js'
    })
  } else {
    ctx.status = 401
  }
})

router.get('/login', function * (next) {
  let ctx = this
  const query = ctx.request.query
  let redirect = '/home'

  if (query.ticket) {
    const ticket = query.ticket
    const service = 'http://localhost:8080/login'
    let user

    try {
      const response = yield cas.validate(ticket, service)
      ctx.session.user = response.username
      user = yield UserModel.findOne({net_id: response.username})
    } catch (err) {
      console.log(err)
    }

    if (user === null) {
      ctx.session.isNewUser = 'true'
      redirect = '/users/new'
    } else {
      if (user.type === 'admin') {
        ctx.session.isAdmin = 'true'
        redirect = '/admin'
      }

      ctx.session.isAuthenticated = 'true'
    }
  } else {
    redirect = 'https://cas.byu.edu/cas/login?service=http://localhost:8080/login'
  }

  ctx.redirect(redirect)
})

router.get('/logout', function * (next) {
  let ctx = this
  let redirect = '/'
  const query = ctx.request.query
  ctx.session = null

  if (query.newUser) {
    redirect = '/login'
  }

  ctx.redirect(redirect)
  // ctx.redirect('https://cas.byu.edu/cas/logout?url=http://localhost:8080')
})
