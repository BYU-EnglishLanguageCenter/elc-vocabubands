'use strict'

require('colors')

const checkMark = '\u2714'
const env = process.env.NODE_ENV || 'development'
let outstream = {}

// if (env !== 'test') {
//   outstream.log = x => process.stdout.write(x)
// } else {
//   outstream.log = x => {}
// }

outstream.log = x => process.stdout.write(x)

outstream.log('Importing dependencies ... '.cyan)

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
const errorsRoute = require('./routes/errors')
const listsRouter = require('./routes/lists')
const usersRouter = require('./routes/users')
const schema = require('./graphql')

outstream.log(checkMark.green + '\n')

let app = koa()

// if (env !== 'test') {
//   outstream.log('Initializing logger ... '.cyan)
//   app.use(logger())
// }

outstream.log('Initializing logger ... '.cyan)
app.use(logger())

outstream.log(checkMark.green + '\n')
outstream.log('Initializing template engine ... '.cyan)

const pug = new Pug({
  viewPath: './views',
  noCache: true
})
pug.use(app)

outstream.log(checkMark.green + '\n')
outstream.log('Initializing database connection ... '.cyan)

const dbName = process.env.NODE_ENV !== 'test' ? 'vocabubands' : 'testv'

mongoose.connect(`mongodb://localhost/${dbName}`)
mongoose.Promise = Promise
const db = mongoose.connection
db.on('error', (err) => { console.log('\nconnection error: ' + err) })

app.context.db = db

outstream.log(checkMark.green + '\n')
outstream.log('Initializing sessions ... '.cyan)

app.keys = ['vcb']
app.use(session(app))

app.use(function * (next) {
  let ctx = this
  ctx.session.maxAge = 7200000
  yield next
})

outstream.log(checkMark.green + '\n')
outstream.log('Mounting graphql server ... '.cyan)

app.use(mount('/graphql', graphqlHTTP((request, context) => ({
  schema: schema,
  context: context.session,
  pretty: true
}))))

outstream.log(checkMark.green + '\n')
outstream.log('Registering routes ... '.cyan)

app.use(errorsRoute)

app.use(authRouter.routes())
app.use(authRouter.allowedMethods())

app.use(listsRouter.routes())
app.use(listsRouter.allowedMethods())

app.use(usersRouter.routes())
app.use(usersRouter.allowedMethods())

app.use(serve(__dirname + '/public'))

outstream.log(checkMark.green + '\n')

if (!module.parent) {
  app.listen(8080)
  outstream.log('Listening on http://localhost:8080'.grey + '\n')
}

module.exports = app
