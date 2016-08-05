'use strict'

import React from 'react'

import configureStore from './configureStore'
import ErrorPage from './components/ErrorPage'
import MainLayout from '../common/components/MainLayout'

const store = configureStore(window.__INITIAL_STATE__)

const Root = () => (
  <MainLayout showLogout={store.getState().isAuthenticated}>
    <ErrorPage status={store.getState().status} />
  </MainLayout>
)

export default Root
