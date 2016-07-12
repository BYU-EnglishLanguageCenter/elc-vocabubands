'use strict'

const router = require('koa-router')()

module.exports = router

router.get('/lists*', function * (next) {
  let ctx = this

  const initialState = {
    currentList: 0,
    isAuthenticated: ctx.session.isAuthenticated === 'true',
    allLists: [],
    listData: [],
    rowsDone: []
  }

  const html = `<script>window.__INITIAL_STATE__ = ${JSON.stringify(initialState)}</script>`

  ctx.render('base', {
    pageTitle: 'Vocabubands',
    bundleSrc: '/js/lists-bundle.js',
    html: html
  })
})
