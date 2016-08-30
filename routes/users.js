'use strict'

const router = require('koa-router')()
const loginRequired = require('./loginRequired')
const UserModel = require('../models/User')

module.exports = router

router.get('/users', loginRequired, function * (next) {
  let ctx = this

  if (ctx.session.isAdmin) {
    const initialState = {
      isAdmin: true,
      users: yield UserModel.find({})
    }

    const html = `<script>window.__INITIAL_STATE__ = ${JSON.stringify(initialState)}</script>`

    ctx.render('base', {
      title: 'Vocabubands',
      bundleSrc: '/js/users-bundle.js',
      html: html
    })
  } else {
    ctx.status = 401
  }
})

router.get('/users/new', loginRequired, function * (next) {
  let ctx = this

  if (ctx.session.isAdmin || ctx.session.isNewUser) {
    const initialState = {
      isAdmin: ctx.session.isAdmin === 'true',
      users: ctx.session.isAdmin === 'true' ? yield UserModel.find({}) : []
    }

    const html = `<script>window.__INITIAL_STATE__ = ${JSON.stringify(initialState)}</script>`

    ctx.render('base', {
      title: 'Vocabubands',
      bundleSrc: '/js/users-bundle.js',
      html: html
    })
  } else {
    ctx.status = 401
  }
})

router.get('/users/edit', loginRequired, function * (next) {
  let ctx = this

  const initialState = {
    isAdmin: ctx.session.isAdmin === 'true',
    user: yield UserModel.findOne({net_id: ctx.session.user})
  }

  const html = `<script>window.__INITIAL_STATE__ = ${JSON.stringify(initialState)}</script>`

  ctx.render('base', {
    title: 'Vocabubands',
    bundleSrc: '/js/users-bundle.js',
    html: html
  })
})

router.get('/users/edit/:id', loginRequired, function * (next) {
  let ctx = this

  if (ctx.session.isAdmin) {
    const id = ctx.request.path.substring(12)

    const initialState = {
      isAdmin: ctx.session.isAdmin === 'true',
      user: process.env.NODE_ENV !== 'test' ? yield UserModel.findOne({_id: id}) : 'TestUser',
      users: yield UserModel.find({})
    }

    const html = `<script>window.__INITIAL_STATE__ = ${JSON.stringify(initialState)}</script>`

    ctx.render('base', {
      title: 'Vocabubands',
      bundleSrc: '/js/users-bundle.js',
      html: html
    })
  } else {
    ctx.status = 401
  }
})
