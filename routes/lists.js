'use strict'

const router = require('koa-router')()
const loginRequired = require('./loginRequired')
const AllListsModel = require('../models/AllLists')
// const path = require('path')
// const parser = require('koa-body')({ multipart: true })

module.exports = router

router.get('/lists*', loginRequired, function * (next) {
  let ctx = this
  const path = ctx.request.path

  if (ctx.session.isAdmin || (!path.includes('edit') && !path.includes('bare'))) {
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
