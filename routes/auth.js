'use strict'

const router = require('koa-router')()
const cas = require('byu-cas')

module.exports = router

router.get('/', function * (next) {
  let ctx = this

  const query = ctx.request.querystring
  const redirect = '/lists'

  if (ctx.session.isAuthenticated === 'true') {
    ctx.redirect(redirect)
  } else if (query && query.length > 7) {
    const ticket = query.substring(query.indexOf('=') + 1)
    const service = 'http://localhost:8080'

    try {
      const response = yield cas.validate(ticket, service)
      ctx.session.isAuthenticated = 'true'
      ctx.session.user = response.username
      ctx.redirect(redirect)
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
