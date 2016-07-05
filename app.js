'use strict'

const koa = require('koa')
const logger = require('koa-logger')
const serve = require('koa-static')
const Pug = require('koa-pug')
const listsRouter = require('./routes/lists')

const app = koa()

app.use(logger())

const pug = new Pug({
  viewPath: './views',
  noCache: true
})

pug.use(app)

app.use(listsRouter.routes())
app.use(listsRouter.allowedMethods())

app.use(serve(__dirname + '/src/public'))

app.listen(8080)
console.log('Listening on http://localhost:8080')
