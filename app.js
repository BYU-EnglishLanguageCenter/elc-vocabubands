'use strict'

require('colors')
const checkMark = '\u2714'

process.stdout.write('Importing dependencies ... '.cyan)

const koa = require('koa')
const graphqlHTTP = require('koa-graphql')
const logger = require('koa-logger')
const mongoose = require('mongoose')
const mount = require('koa-mount')
const Promise = require('bluebird')
const Pug = require('koa-pug')
const session = require('koa-session')
const serve = require('koa-static')
const authRouter = require('./routes/auth')
const listsRouter = require('./routes/lists')
const schema = require('./graphql')

console.log(checkMark.green)

const app = koa()

process.stdout.write('Initializing logger ... '.cyan)

app.use(logger())

console.log(checkMark.green)
process.stdout.write('Initializing template engine ... '.cyan)

const pug = new Pug({
  viewPath: './views',
  noCache: true
})
pug.use(app)

console.log(checkMark.green)
process.stdout.write('Initializing database connection ... '.cyan)

mongoose.connect('mongodb://localhost/vocabubands')
mongoose.Promise = Promise
const db = mongoose.connection
db.on('error', (err) => { console.log('\nconnection error: ' + err) })

console.log(checkMark.green)
process.stdout.write('Mounting graphql server ... '.cyan)

app.use(mount('/graphql', graphqlHTTP({
  schema: schema,
  pretty: true
})))

console.log(checkMark.green)

app.keys = ['vcb']
app.use(session(app))

process.stdout.write('Registering routes ... '.cyan)

app.use(authRouter.routes())
app.use(authRouter.allowedMethods())

app.use(listsRouter.routes())
app.use(listsRouter.allowedMethods())

app.use(serve(__dirname + '/public'))

console.log(checkMark.green)

app.listen(8080)
console.log('Listening on http://localhost:8080'.grey)
