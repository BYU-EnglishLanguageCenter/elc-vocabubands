'use strict'

// testing dependencies
const request = require('supertest-as-promised')
const test = require('tape')

// app dependencies
const graphqlHTTP = require('koa-graphql')
const koa = require('koa')
const mongoose = require('mongoose')
const mount = require('koa-mount')
const session = require('koa-session')
const Promise = require('bluebird')
const schema = require('../graphql')

const getApp = (type) => {
  let app = koa()

  mongoose.connect('mongodb://localhost/vocabubands')
  mongoose.Promise = Promise
  app.context.db = mongoose.connection

  app.keys = ['vcb']
  app.use(session(app))

  app.use(function * (next) {
    let ctx = this

    if (type === 'authenticated') {
      ctx.session.isAuthenticated = 'true'
      ctx.session.user = 'testuser'
    }

    yield next
  })

  app.use(mount('/graphql', graphqlHTTP((request, context) => ({
    schema: schema,
    context: context.session,
    pretty: true
  }))))

  return app
}

test('GraphQL Queries - allLists', assert => {
  assert.plan(1)

  let app = getApp('authenticated')

  request(app.callback())
    .get('/graphql?query={allLists{type,list_ids}}')
    .expect(200)
    .then(res => {
      const json = JSON.parse(res.text)
      assert.true(Array.isArray(json.data.allLists), 'returns an array of list_ids and their type')
      app.context.db.close()
    })
    .catch(err => {
      assert.fail(err)
      app.context.db.close()
    })
})
