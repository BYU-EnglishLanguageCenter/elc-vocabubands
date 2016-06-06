import React from 'react'
import { Link } from 'react-router'
import Nav from './Nav.js'

var MainLayout = React.createClass({
  render: function () {
    return (
      <div>
        <Nav />
        <Link to='list'>
          List 1
        </Link>
      </div>
    )
  }
})

export default MainLayout
