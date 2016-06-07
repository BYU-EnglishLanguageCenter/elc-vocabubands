'use strict'

import React from 'react'

var Nav = React.createClass({
  render: function () {
    return (
      <nav className='navbar navbar-default' role='navigation'>
        <div className='container-fluid'>
          <div className='navbar-header pull-left'>
            <a className='navbar-brand'>ELC | Vocabubands</a>
          </div>
          <div className='navbar-header pull-right'>
            <ul className='nav pull-left'>
              <a href='#' className='btn btn-default navbar-btn' id='login-btn' role='button'>Login</a>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
})

export default Nav
