'use strict'

const mongoose = require('mongoose')
const router = require('koa-router')()
const UserModel = require('../models/User')

module.exports = router

router.get('/users', function * (next) {
  let ctx = this
  const errorRedirect = '/'

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
    ctx.redirect(errorRedirect)
  }
})

router.get('/users/new', function * (next) {
  let ctx = this
  const errorRedirect = '/'

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
  } else if (ctx.session.isAuthenticated) {
    ctx.redirect(errorRedirect)
  } else if (ctx.session.user) {
    ctx.render('base', {
      title: 'Vocabubands',
      bundleSrc: '/js/users-bundle.js'
    })
  } else {
    ctx.redirect(errorRedirect)
  }
})

router.get('/users/edit', function * (next) {
  let ctx = this
  const errorRedirect = '/'

  if (ctx.session.isAuthenticated) {
    const user = yield UserModel.findOne({net_id: ctx.session.user})
    ctx.redirect(`/users/edit/${user._id}`)
  } else {
    ctx.redirect(errorRedirect)
  }
})

router.get('/users/edit/:id', function * (next) {
  let ctx = this
  const errorRedirect = '/'

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
      ctx.redirect(errorRedirect)
    }
  } else {
    ctx.redirect(errorRedirect)
  }
})
