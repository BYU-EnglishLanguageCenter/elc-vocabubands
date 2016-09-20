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

  ctx.render('base', {
    pageTitle: 'Vocabubands',
    bundleSrc: '/js/auth-bundle.js'
  })
})

router.get('/login', function * (next) {
  let ctx = this
  const query = ctx.request.query
  let redirect = query.path || '/home'

  if (query.ticket) {
    const ticket = query.ticket
    const service = `http://localhost:8080/login?path=${redirect}`
    let user

    try {
      const response = yield cas.validate(ticket, service)
      ctx.session.user = response.username
      ctx.session.isAuthenticated = 'true'
      user = yield UserModel.findOne({net_id: response.username})
    } catch (err) {
      if (process.env.NODE_ENV !== 'test') {
        console.log(err)
      } else {
        err
      }
    }

    if (user === null) {
      ctx.session.isNewUser = 'true'
      redirect = '/users/new'
    } else if (user.type === 'admin') {
      ctx.session.isAdmin = 'true'
      redirect = redirect === '/home' ? '/admin' : redirect
    }
  } else {
    redirect = `https://cas.byu.edu/cas/login?service=http://localhost:8080/login?path=${redirect}`
  }

  ctx.redirect(redirect)
})

router.get('/logout', function * (next) {
  let ctx = this
  let redirect = '/'
  const query = ctx.request.query
  ctx.session = null

  if (query.newUser) {
    // redirect to /login for new users to reset session cookies
    redirect = '/login'
  }

  ctx.redirect(redirect)
  // ctx.redirect('https://cas.byu.edu/cas/logout?url=http://localhost:8080')
})
