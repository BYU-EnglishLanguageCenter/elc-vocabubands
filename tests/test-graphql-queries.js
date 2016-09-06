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

  mongoose.connect('mongodb://localhost/testv')
  mongoose.Promise = Promise
  app.context.db = mongoose.connection

  app.keys = ['vcb']
  app.use(session(app))

  app.use(function * (next) {
    let ctx = this

    if (type === 'authenticated') {
      ctx.session.isAuthenticated = 'true'
    } else if (type === 'admin') {
      ctx.session.isAdmin = 'true'
    }

    ctx.session.user = 'testuser'

    yield next
  })

  app.use(mount('/graphql', graphqlHTTP((request, context) => ({
    schema: schema,
    context: context.session,
    pretty: true
  }))))

  return app
}

test('GraphQL Query - allLists', assert => {
  assert.plan(3)

  let app = getApp('authenticated')

  request(app.callback())
    .get('/graphql?query={allLists{type,list_ids}}')
    .expect(200)
    .expect('Content-Type', /json/)
    .then(res => {
      const json = JSON.parse(res.text)
      assert.true(Array.isArray(json.data.allLists), 'returns an array of objects')
      assert.true(json.data.allLists[0].hasOwnProperty('type'), 'returns objects that contain type')
      assert.true(Array.isArray(json.data.allLists[0].list_ids), 'returns objects that contain array list_ids')
      app.context.db.close()
    })
    .catch(err => {
      assert.fail(err)
      app.context.db.close()
    })
})

test('GraphQL Query - list', assert => {
  assert.plan(4)

  let app = getApp('authenticated')

  request(app.callback())
    .get('/graphql?query={list(id:0,type:"avl"){id,type,data{word}}}')
    .expect(200)
    .expect('Content-Type', /json/)
    .then(res => {
      const json = JSON.parse(res.text)
      assert.equal(json.data.list, null, 'returns null if the list queried does not exist')
    })
    .catch(err => {
      assert.fail(err)
    })

  request(app.callback())
    .get('/graphql?query={list(id:13,type:"avl"){id,type,data{id}}}')
    .expect(200)
    .expect('Content-Type', /json/)
    .then(res => {
      const json = JSON.parse(res.text)
      assert.true(json.data.list.hasOwnProperty('id'), 'returns an object that contains id')
      assert.true(json.data.list.hasOwnProperty('type'), 'returns an object that contains type')
      assert.true(Array.isArray(json.data.list.data), 'returns an object that contains array data')
      app.context.db.close()
    })
    .catch(err => {
      assert.fail(err)
      app.context.db.close()
    })
})

test('GraphQL Query - listChanges', assert => {
  assert.plan(4)

  let app = getApp('authenticated')

  request(app.callback())
    .get('/graphql?query={listChanges(list_id:13,list_type:"avl"){list_id,list_type,rows}}')
    .expect(200)
    .expect('Content-Type', /json/)
    .then(res => {
      const json = JSON.parse(res.text)
      assert.equal(json.data.listChanges, null, 'returns null if the user has no changes for the list queried')
    })
    .catch(err => {
      assert.fail(err)
    })

  request(app.callback())
    .get('/graphql?query={listChanges(list_id:14,list_type:"avl"){list_id,list_type,rows}}')
    .expect(200)
    .expect('Content-Type', /json/)
    .then(res => {
      const json = JSON.parse(res.text)
      assert.true(json.data.listChanges.hasOwnProperty('list_id'), 'returns an object that contains list_id')
      assert.true(json.data.listChanges.hasOwnProperty('list_type'), 'returns an object that contains list_type')
      assert.true(Array.isArray(json.data.listChanges.rows), 'returns an object that contains array rows')
      app.context.db.close()
    })
    .catch(err => {
      assert.fail(err)
      app.context.db.close()
    })
})

test('GraphQL Query - user', assert => {
  assert.plan(9)

  let app = getApp('authenticated')

  request(app.callback())
    .get('/graphql?query={user(id:"57c5c9d93997e22065963ad4"){first_name}}')
    .expect(200)
    .expect('Content-Type', /json/)
    .then(res => {
      const json = JSON.parse(res.text)
      assert.equal(json.data.user, null, 'returns null if the user queried does not exist')
    })
    .catch(err => {
      assert.fail(err)
    })

  request(app.callback())
    .get('/graphql?query={user(id:"57c9adfcb32761da606b9fd5"){first_name}}')
    .expect(200)
    .expect('Content-Type', /json/)
    .then(res => {
      const json = JSON.parse(res.text)
      assert.equal(json.data.user, null, 'returns null if an authenticated user queries a different user')
    })
    .catch(err => {
      assert.fail(err)
    })

  request(app.callback())
    .get('/graphql?query={user(id:"57c5c9d93997e22065963ad5"){_id,first_name,last_name,net_id,level,type}}')
    .expect(200)
    .expect('Content-Type', /json/)
    .then(res => {
      const json = JSON.parse(res.text)
      assert.true(json.data.user.hasOwnProperty('_id'), 'returns an object that contains _id')
      assert.true(json.data.user.hasOwnProperty('first_name'), 'returns an object that contains first_name')
      assert.true(json.data.user.hasOwnProperty('last_name'), 'returns an object that contains last_name')
      assert.true(json.data.user.hasOwnProperty('net_id'), 'returns an object that contains net_id')
      assert.true(json.data.user.hasOwnProperty('level'), 'returns an object that contains level')
      assert.true(json.data.user.hasOwnProperty('type'), 'returns an object that contains type')

      return app.context.db.close().then(() => {
        app = getApp('admin')

        return request(app.callback())
          .get('/graphql?query={user(id:"57c9adfcb32761da606b9fd5"){first_name}}')
          .expect(200)
          .expect('Content-Type', /json/)
      })
    })
    .then(res => {
      const json = JSON.parse(res.text)
      assert.notEqual(json.data.user, null, 'allows admin users to query other users')
      app.context.db.close()
    })
    .catch(err => {
      assert.fail(err)
      app.context.db.close()
    })
})

test('GraphQL Query - users', assert => {
  assert.plan(2)

  let app = getApp('authenticated')

  request(app.callback())
    .get('/graphql?query={users{first_name}}')
    .expect(200)
    .expect('Content-Type', /json/)
    .then(res => {
      const json = JSON.parse(res.text)
      assert.equal(json.data.users, null, 'returns null for authenticated users')

      return app.context.db.close().then(() => {
        app = getApp('admin')

        return request(app.callback())
          .get('/graphql?query={users{first_name}}')
          .expect(200)
          .expect('Content-Type', /json/)
      })
    })
    .then(res => {
      const json = JSON.parse(res.text)
      assert.true(Array.isArray(json.data.users), 'returns an array of users for admin users')
      app.context.db.close()
    })
    .catch(err => {
      assert.fail(err)
      app.context.db.close()
    })
})
