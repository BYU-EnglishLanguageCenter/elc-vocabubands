'use strict'

import React, { PropTypes } from 'react'
import Nav from './Nav'

const MainLayout = ({ children }) => (
  <div className='mainLayout'>
    <Nav />
    {children || 'Welcome to Vocabubands!'}
  </div>
)

MainLayout.propTypes = {
  children: PropTypes.object
}

export default MainLayout
