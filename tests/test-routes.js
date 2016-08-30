'use strict'

// testing dependencies
const request = require('supertest-as-promised')
const test = require('tape')

// app dependencies
const koa = require('koa')
const mongoose = require('mongoose')
const session = require('koa-session')
const Promise = require('bluebird')
const Pug = require('koa-pug')
const authRouter = require('../routes/auth')
const listsRouter = require('../routes/lists')

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

  app.use(listsRouter.routes())
  app.use(listsRouter.allowedMethods())

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

  app.use(listsRouter.routes())
  app.use(listsRouter.allowedMethods())

  return request(app.callback())
}

const authenticatedWithDB = () => {
  let app = koa()
  const pug = new Pug({
    viewPath: './views',
    noCache: true
  })
  pug.use(app)

  mongoose.connect('mongodb://localhost/vocabubands')
  mongoose.Promise = Promise
  app.context.db = mongoose.connection

  app.keys = ['vcb']
  app.use(session(app))

  app.use(function * (next) {
    let ctx = this
    ctx.session.isAuthenticated = 'true'
    yield next
  })

  app.use(authRouter.routes())
  app.use(authRouter.allowedMethods())

  app.use(listsRouter.routes())
  app.use(listsRouter.allowedMethods())

  return app
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

  app.use(listsRouter.routes())
  app.use(listsRouter.allowedMethods())

  return request(app.callback())
}

const adminWithDB = () => {
  let app = koa()
  const pug = new Pug({
    viewPath: './views',
    noCache: true
  })
  pug.use(app)

  mongoose.connect('mongodb://localhost/vocabubands')
  mongoose.Promise = Promise
  app.context.db = mongoose.connection

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

  app.use(listsRouter.routes())
  app.use(listsRouter.allowedMethods())

  return app
}

test('Auth Route - /', assert => {
  assert.plan(3)

  unauthenticated()
    .get('/')
    .expect(200)
    .then(res => {
      assert.pass('renders main login page for unauthenticated users')
    })
    .catch(err => {
      assert.fail(err)
    })

  authenticated()
    .get('/')
    .expect(302)
    .then(res => {
      assert.equal(res.header.location, '/home', 'redirects to /home for authenticated users')
    })
    .catch(err => {
      assert.fail(err)
    })

  admin()
    .get('/')
    .expect(302)
    .then(res => {
      assert.equal(res.header.location, '/admin', 'redirects to /admin for admin users')
    })
    .catch(err => {
      assert.fail(err)
    })
})

test('Auth Route - /admin', assert => {
  assert.plan(3)

  unauthenticated()
    .get('/admin')
    .expect(302)
    .then(res => {
      assert.equal(res.header.location, '/', 'redirects to main login page for unauthenticated users')
    })
    .catch(err => {
      assert.fail(err)
    })

  authenticated()
    .get('/admin')
    .expect(401)
    .then(res => {
      assert.pass('renders 401 unauthorized page for authenticated users')
    })
    .catch(err => {
      assert.fail(err)
    })

  admin()
    .get('/admin')
    .expect(200)
    .then(res => {
      assert.pass('renders /admin page for admin users')
    })
    .catch(err => {
      assert.fail(err)
    })
})

test('Auth Route - /home', assert => {
  assert.plan(2)

  unauthenticated()
    .get('/home')
    .expect(302)
    .then(res => {
      assert.equal(res.header.location, '/', 'redirects to main login page for unauthenticated users')
    })
    .catch(err => {
      assert.fail(err)
    })

  authenticated()
    .get('/home')
    .expect(200)
    .then(res => {
      assert.pass('renders /home page for authenticated users')
    })
    .catch(err => {
      assert.fail(err)
    })
})

test('Auth Route - /login', assert => {
  assert.plan(2)

  unauthenticated()
    .get('/login')
    .expect(302)
    .then(res => {
      assert.equal(res.header.location, 'https://cas.byu.edu/cas/login?service=http://localhost:8080/login', 'redirects to cas login service if no ticket found in url query')
    })
    .catch(err => {
      assert.fail(err)
    })

  unauthenticated()
    .get('/login?ticket=anincorrectticket')
    .expect(500)
    .then(res => {
      assert.pass('results in 500 internal server error if incorrect ticket is used')
    })
    .catch(err => {
      assert.fail(err)
    })
})

test('Auth Route - /logout', assert => {
  assert.plan(3)

  authenticated()
    .get('/logout')
    .expect(302)
    .then(res => {
      assert.true(res.header['set-cookie'][0].includes('koa:sess=;'), 'all session cookies have been deleted')
      assert.equal(res.header.location, '/', 'redirects to main login page for authenticated users')
    })
    .catch(err => {
      assert.fail(err)
    })

  authenticated()
    .get('/logout?newUser=true')
    .expect(302)
    .then(res => {
      assert.equal(res.header.location, '/login', 'redirects to /login for new users')
    })
    .catch(err => {
      assert.fail(err)
    })
})

test('Lists Route - /lists', assert => {
  assert.plan(2)

  unauthenticated()
    .get('/lists')
    .expect(302)
    .then(res => {
      assert.equal(res.header.location, '/', 'redirects to main login page for unauthenticated users')
    })
    .catch(err => {
      assert.fail(err)
    })

  const app = authenticatedWithDB()

  request(app.callback())
    .get('/lists')
    .expect(200)
    .then(res => {
      assert.pass('renders /lists page for authenticated users')
      app.context.db.close()
    })
    .catch(err => {
      assert.fail(err)
      app.context.db.close()
    })
})

test('Lists Route - /lists/edit', assert => {
  assert.plan(2)

  let app = authenticatedWithDB()

  request(app.callback())
    .get('/lists/edit')
    .expect(401)
    .then(res => {
      assert.pass('renders 401 unauthorized page for authenticated users')

      return app.context.db.close().then(() => {
        app = adminWithDB()

        return request(app.callback())
          .get('/lists/edit')
          .expect(200)
      })
    })
    .then(res => {
      assert.pass('renders /lists/edit page for admin users')
      app.context.db.close()
    })
    .catch(err => {
      assert.fail(err)
      app.context.db.close()
    })
})

test('Lists Route - /lists/[type]/[id]/bare', assert => {
  assert.plan(2)

  let app = authenticatedWithDB()

  request(app.callback())
    .get('/lists/avl/13/bare')
    .expect(401)
    .then(res => {
      assert.pass('renders 401 unauthorized page for authenticated users')

      return app.context.db.close().then(() => {
        app = adminWithDB()

        return request(app.callback())
          .get('/lists/avl/13/bare')
          .expect(200)
      })
    })
    .then(res => {
      assert.pass('renders /lists/[type]/[id]/bare page for admin users')
      app.context.db.close()
    })
    .catch(err => {
      assert.fail(err)
      app.context.db.close()
    })
})

test('Lists Route - /lists/[type]/[id]/edit', assert => {
  assert.plan(2)

  let app = authenticatedWithDB()

  request(app.callback())
    .get('/lists/avl/13/edit')
    .expect(401)
    .then(res => {
      assert.pass('renders 401 unauthorized page for authenticated users')

      return app.context.db.close().then(() => {
        app = adminWithDB()

        return request(app.callback())
          .get('/lists/avl/13/edit')
          .expect(200)
      })
    })
    .then(res => {
      assert.pass('renders /lists/[type]/[id]/edit page for admin users')
      app.context.db.close()
    })
    .catch(err => {
      assert.fail(err)
      app.context.db.close()
    })
})
