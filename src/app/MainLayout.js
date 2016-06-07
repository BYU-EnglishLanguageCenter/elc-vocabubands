import React from 'react'
import Home from './Home.js'
import Nav from './Nav.js'

var MainLayout = React.createClass({
  render: function () {
    return (
      <div className='mainLayout'>
        <Nav />
        <Home />
      </div>
    )
  }
})

export default MainLayout
