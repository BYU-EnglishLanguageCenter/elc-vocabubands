'use strict'

const router = require('koa-router')()
const path = require('path')
const parser = require('koa-body')({ multipart: true })
const AllListsModel = require('../models/AllLists')

module.exports = router

router.get('/lists*', function * (next) {
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

router.post('/upload', parser, function * (next) {
  let ctx = this

  console.log(ctx.request.body)

  ctx.body = 'ok hi there friend'
})
