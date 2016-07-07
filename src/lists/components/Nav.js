'use strict'

import React from 'react'
import { Link } from 'react-router'

const Nav = () => (
  <nav className='navbar navbar-default' role='navigation'>
    <div className='container-fluid'>
      <div className='navbar-header pull-left'>
        <Link to='/' className='navbar-brand' id='nav-title'>ELC | Vocabubands</Link>
      </div>
      <div className='navbar-header pull-right'>
        <ul className='nav pull-left'>
          <button className='btn btn-default navbar-btn' id='login-btn' role='button' onClick={() => { window.location.assign('/logout') }}>Login</button>
        </ul>
      </div>
    </div>
  </nav>
)

export default Nav
