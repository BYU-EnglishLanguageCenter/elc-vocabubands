'use strict'

const router = require('koa-router')()
const path = require('path')
const parser = require('koa-body')({ multipart: true })
const loginRequired = require('./loginRequired')
const AllListsModel = require('../models/AllLists')

module.exports = router

router.get('/lists*', loginRequired, function * (next) {
  let ctx = this
  const path = ctx.request.path

  if (ctx.session.isAdmin || (!path.includes('edit') && !path.includes('bare') && ctx.session.isAuthenticated)) {
    const initialState = {
      allLists: yield AllListsModel.find({})
    }

    const html = `<script>window.__INITIAL_STATE__ = ${JSON.stringify(initialState)}</script>`

    ctx.render('base', {
      pageTitle: 'Vocabubands',
      bundleSrc: '/js/lists-bundle.js',
      html: html
    })
  } else {
    ctx.status = 401
  }
})
