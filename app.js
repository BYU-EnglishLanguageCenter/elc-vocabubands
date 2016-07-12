'use strict'

const koa = require('koa')
const logger = require('koa-logger')
const session = require('koa-session')
const serve = require('koa-static')
const Pug = require('koa-pug')
const authRouter = require('./routes/auth')
const listsRouter = require('./routes/lists')

const app = koa()

app.use(logger())

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

app.use(serve(__dirname + '/public'))

app.listen(8080)
console.log('Listening on http://localhost:8080')
