'use strict'

const router = require('koa-router')()
const loginRequired = require('./loginRequired')
const UserModel = require('../models/User')

module.exports = router

router.get('/users', loginRequired, function * (next) {
  let ctx = this

  if (ctx.session.isAdmin) {
    const initialState = {
      isAdmin: true
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

router.get('/users/new', function * (next) {
  let ctx = this

  if (ctx.session.isAdmin) {
    const initialState = {
      isAdmin: true
    }

    const html = `<script>window.__INITIAL_STATE__ = ${JSON.stringify(initialState)}</script>`

    ctx.render('base', {
      title: 'Vocabubands',
      bundleSrc: '/js/users-bundle.js',
      html: html
    })
  } else if (ctx.session.isNewUser) {
    ctx.render('base', {
      title: 'Vocabubands',
      bundleSrc: '/js/users-bundle.js'
    })
  } else {
    ctx.status = 401
  }
})

router.get('/users/edit', loginRequired, function * (next) {
  let ctx = this

  if (ctx.session.isAuthenticated) {
    const user = yield UserModel.findOne({net_id: ctx.session.user})
    ctx.redirect(`/users/edit/${user._id}`)
  } else {
    ctx.status = 401
  }
})

router.get('/users/edit/:id', loginRequired, function * (next) {
  let ctx = this

  if (ctx.session.isAuthenticated) {
    const id = ctx.request.path.substring(12)
    const user = yield UserModel.findOne({net_id: ctx.session.user})

    if (ctx.session.isAdmin) {
      const initialState = {
        isAdmin: true
      }

      const html = `<script>window.__INITIAL_STATE__ = ${JSON.stringify(initialState)}</script>`

      ctx.render('base', {
        title: 'Vocabubands',
        bundleSrc: '/js/users-bundle.js',
        html: html
      })
    } else if (id === user._id.toString()) {
      ctx.render('base', {
        title: 'Vocabubands',
        bundleSrc: '/js/users-bundle.js'
      })
    } else {
      ctx.status = 401
    }
  } else {
    ctx.status = 401
  }
})
