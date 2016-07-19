'use strict'

import React, { PropTypes } from 'react'
import Nav from './Nav'

const MainLayout = ({ children, showLogout }) => (
  <div className='mainLayout'>
    <Nav showLogout={showLogout} />
    {children || 'Welcome to Vocabubands!'}
  </div>
)

MainLayout.propTypes = {
  children: PropTypes.object,
  showLogout: PropTypes.bool
}

export default MainLayout
