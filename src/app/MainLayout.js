import React from 'react'
import Nav from './Nav.js'

var MainLayout = React.createClass({
  propTypes: {
    children: React.PropTypes.object // IndexRoute in index.js
  },

  render: function () {
    return (
      <div>
        <Nav />
        {this.props.children}
      </div>
    )
  }
})

export default MainLayout
