'use strict'

const request = require('supertest-as-promised')
const test = require('tape')
// const app = require('../app')

const koa = require('koa')
const session = require('koa-session')
const Pug = require('koa-pug')
const authRouter = require('../routes/auth')

// test('Auth Routes - /', assert => {
//   request(app.callback())
//     .get('/')
//     .then(res => {
//       assert.equal(res.status, 200, 'should be reachable if not logged in')
//     })
//
//   request(app.callback())
//     .get('/')
//     .then(res => {
//       assert.equal(res.status, 302, 'should redirect to /home if authenticated')
//     })
//
//   assert.end()
// })

const unauthenticated = () => {
  const app = koa()
  const pug = new Pug({
    viewPath: './views',
    noCache: true
  })
  pug.use(app)
  app.keys = ['vcb']
  app.use(session(app))

  app.use(authRouter.routes())
  app.use(authRouter.allowedMethods())

  return request(app.callback())
}

const authenticated = () => {
  const app = koa()
  const pug = new Pug({
    viewPath: './views',
    noCache: true
  })
  pug.use(app)
  app.keys = ['vcb']
  app.use(session(app))

  app.use(function * (next) {
    let ctx = this
    ctx.session.isAuthenticated = 'true'
    yield next
  })

  app.use(authRouter.routes())
  app.use(authRouter.allowedMethods())

  return request(app.callback())
}

const admin = () => {
  const app = koa()
  const pug = new Pug({
    viewPath: './views',
    noCache: true
  })
  pug.use(app)
  app.keys = ['vcb']
  app.use(session(app))

  app.use(function * (next) {
    let ctx = this
    ctx.session.isAdmin = 'true'
    ctx.session.isAuthenticated = 'true'
    yield next
  })

  app.use(authRouter.routes())
  app.use(authRouter.allowedMethods())

  return request(app.callback())
}

test('Auth Routes - /', assert => {
  unauthenticated()
    .get('/')
    .then(res => {
      assert.equal(res.status, 200, 'renders main login page for unauthenticated users')
    })

  authenticated()
    .get('/')
    .then(res => {
      assert.equal(res.status, 302, 'redirects for authenticated users')
      assert.equal(res.header.location, '/home', 'redirects to /home for authenticated users')
    })

  admin()
    .get('/')
    .then(res => {
      assert.equal(res.header.location, '/admin', 'redirects to /admin for admin users')
    })

  assert.end()
})

// app.context.db.close()
