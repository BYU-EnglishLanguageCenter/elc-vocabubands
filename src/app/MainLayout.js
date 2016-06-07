import React from 'react'
import Home from './Home.js'
import Nav from './Nav.js'

var MainLayout = React.createClass({
  propTypes: {
    children: React.PropTypes.object // IndexRoute in index.js
  },

  render: function () {
    return (
      <div className='mainLayout'>
        <Nav />
        {this.props.children}
      </div>
    )
  }
})

export default MainLayout
