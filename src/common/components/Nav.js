'use strict'

import React from 'react'

const Nav = ({ showLogout }) => {
  let logout

  if (showLogout) {
    logout =
      <div className='navbar-header pull-right'>
        <ul className='nav pull-left'>
          <a href='/logout' className='btn btn-default navbar-btn' id='login-btn' role='button'>Logout</a>
        </ul>
      </div>
  }

  return (
    <nav className='navbar navbar-default' role='navigation'>
      <div className='container-fluid'>
        <div className='navbar-header pull-left'>
          <a href='/' className='navbar-brand' id='nav-title'>ELC | Vocabubands</a>
        </div>
        {logout}
      </div>
    </nav>
  )
}

export default Nav
